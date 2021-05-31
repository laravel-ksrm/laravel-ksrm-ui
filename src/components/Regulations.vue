<template>
  <div id="regulations container">
      <div id="selection">
        <b-form-select
      v-model="selectedProgram"
      :options="programLevel"
      class="mb-3 col-5"
      value-field="id"
      text-field="short_name"
      @change="selectedPrograms($event)"
      disabled-field="Enabled"
    >
    <template v-slot:first>
        <b-form-select-option :value= null disabled selected>Please select a Program</b-form-select-option>
      </template></b-form-select>
      <!-- <div v-if="selectedProgram"> {{ program_level }} </div> -->
    <b-form-select
      v-if="selectedProgram"
      v-model="selectedRegulation"
      class="mb-3 col-5 selectreg"
      :options="regulations"
      value-field="id"
      text-field="short_name"
      @change="selectedRegulations($event)"
    ><template v-slot:first>
        <b-form-select-option :value= null disabled selected>Please select a Regulation</b-form-select-option>
      </template></b-form-select>
    <!-- <p v-if="selectedRegulation">
    You selected a {{ selectedDepartmentLabel }} and specifically {{ selectedProgram }}.
  </p> -->
  <!-- <p> {{ regulation.semesters[0].name }}</p> -->
  <!-- <p> {{getSemesterNames()}} </p> -->
  <!-- <p> {{programLevel[program_level-1].short_name}} </p> -->
  </div>
  <div v-if="selectedProgram && selectedRegulation">
  <!--v-if="selectedRegulation&&selectedProgram"> -->
    <!-- <h1>Regulations data will appear here</h1> -->
    <div>
    <b-button class="button" variant="success" > Program Name<hr class="hr"> {{ programLevel[program_level-1].short_name }} </b-button>
    <b-button class="button" variant="success" > Regulation Name<hr class="hr"> {{ regulation.short_name }} </b-button>
    <b-button class="button" variant="success" > Courses Offered<hr class="hr"> {{  regulation.program.specializations.length }} </b-button>
    <b-button class="button" variant="success" >No.Of Semesters<hr class="hr"> {{ regulation.semesters.length }} </b-button>
    <b-button class="button" variant="success" >No.Of Credits<hr class="hr"> {{  regulation.total_credits }} </b-button>
    <b-button class="button" variant="success" >No.Of Students<hr class="hr"> {{  NoOfStudents }} </b-button>
    <b-button class="button" variant="success" > Regulation Start Year<hr class="hr"> {{ regulation.start_year }} </b-button>
    <b-button class="button" variant="success" > Regulation End Year<hr class="hr"> {{ getRegulationEndYear() }} </b-button>

    </div>
    <div class="explore">
      
      <b-tabs v-model="tabIndex" content-class="mt-3" fill>
    <b-tab title="REGULATIONS" :title-link-class="linkClass(0)">
      <div v-if="selectedProgram && selectedRegulation">
        <p>Regulations Tab</p><regulation :selectedProgram="selectedProgram"
      :Program="Program" :selectedRegulation="selectedRegulation"
       :program_id='program_id'  :regulation="regulation" 
       :programLevel="programLevel" :program_level="program_level" />
        </div>
      <div v-else><p>No Matching Data Found.</p></div>
      
    </b-tab>
    <b-tab title="SCHEME" :title-link-class="linkClass(1)">Scheme Tab</b-tab>
    <b-tab title="SUBJECTS" :title-link-class="linkClass(2)"><p>Subject Tab</p></b-tab>
    
    <b-tab title="FEEDBACK" :title-link-class="linkClass(3)"><p>FeedBack Tab</p></b-tab>
  </b-tabs>
    </div>
    
    <br>

    </div>
    
    <!-- <p>{{ getTotalCredits($specialization_id,$semester_id)}}</p> -->
 <!-- <p> {{getSemesterNames()}} </p> -->
  </div>
</template>
<script>
import axios from 'axios'
import Regulation from './RegulationTab'
export default {
    data() {
      axios.get('http://127.0.0.1:8000/api/program_levels/')
  .then(response =>this.programLevel = response.data)
  .catch(error => console.log(error));
      return {
        tabIndex: 0,
        bordered: true,
        regulations: [],
        program: '',
        program_id: null,
        Program: '-',
        regulation : null,
        program_level:null,
        programLevel:{},
        academicYearDuration:null,
        getSemCount: null,
        curriculuLength: null,
        curriculumCategories:[],
        NoOfStudents: 2000,
        selectedProgram: null,
        selectedRegulationLabel: '',
        selectedRegulation: null,
        fields: [
          { key: 'Semester'},
          { key: 'Total Credits'}
        ],
        explore_links: ['Exams', 'Schedules','Registrations', 'Attendance', 'Marks', 'Reports',],
            activeTab: 'Exams',
        courseList: [

        ],
        selectedItem: '',
        items:[
               {sname: 1,name:'Nomenclature'},
               {sname: 2,name:'Short Title And Application'},
               {sname: 3,name:'Suspension And Amendment Of Rules'},
               {sname: 4,name:'Requirements For Admission'},
               {sname: 5,name:'Structure Of The B. Tech Course'},
               {sname: 6,name:'Registration And Enrolment'},
               {sname: 7,name:'Assessment Procedure – Internal Tests And End Examinations'},
               {sname: 8,name:'Requirements For Completing Subjects'},
               {sname: 9,name:'Requirements For Taking End Examinations And Promotion'},
               {sname: 10,name:'Revaluation Of End Examination Scripts'},
               {sname: 11,name:'Supplementary End Examinations'},
               {sname: 12,name:'Requirements For Award Of B. Tech Degree'},
               {sname: 13,name:'Transitory Regulations'}
                
            ],
    }
  },
  methods:{
    linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-secondary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      },
    getStudentCount(){},
    getSemesterNames(){
        for (var prop in this.regulation.semesters) {
        console.log(this.regulation.semesters[prop])
        }
        console.log(this.regulation.semester)
    },
    getRegulationEndYear(){
      if (this.regulation.end_year == null) {
        return 'InForce'
      }
      else{
        return this.regulation.end_year
      }
    },
    curriculumCount(){
      if(this.regulation.short_name == 'R15UG' || this.regulation.short_name == 'R14UG'){
        this.curriculumCategories = [
          { sname:'BS',name:'Basic Science'},
          { sname:'HS',name:'Humanities and Social Sciences'},
          { sname:'ED',name:'Basic Engineering and Design'},
          { sname:'PJ',name:'Professional Major'},
          { sname:'PN',name:'Professional Minor'}
        ]
        return (this.curriculuLength = 'five')
      }
      else{
        this.curriculumCategories = [
          { sname:'BSc',name:'Basic Science'},
          { sname:'HSMC',name:'Humanities and Social Sciences including Management Courses'},
          { sname:'ESC',name:' Engineering Science Courses'},
          { sname:'PCC',name:'Professional Core Course'},
          { sname:'PEC',name:'Professional Elective Course'},
          { sname:'OEC',name:'Open Elective Course'}
        ]
        return (this.curriculuLength = 'six')
      }
    },
    getSemesterCredits(){
      axios.get(`http://127.0.0.1:8000/api/credits/sp/${this.specialization_id}/${this.semester_id}`)
      .then(response => this.credits = response.data)
      .catch(error => console.log(error));
      
    },
    getSemCounts(){
      if(this.regulation.semesters.length == 8 || this.regulations.semesters.length == 7){
        return this.getSemCount = 'Eight'
      }
      else{
        return this.getSemCount = 'Four'
      }
    },
    academicYears(program_level){
      if(program_level == 1){
        return this.academicYearDuration = 'four'
      }
      else{
        return this.academicYearDuration ='two'
      }

    },
  selectedPrograms(event){
    this.program_level = event
    if(this.program_level == 'UG'){
      this.program_id = 1
      console.log(this.program_id)
    }
    else{
      this.program_id = 2
    }
    axios.get(`http://127.0.0.1:8000/api/regulation/${this.program_level}`)
  .then(response =>this.regulations = response.data)
  .catch(error => console.log(error));
  },
  selectedRegulations(event){
    this.Program = event
    // this.regulation.short_name = '-',
    axios.get(`http://127.0.0.1:8000/api/regulations/${this.selectedRegulation}`)
  .then(response =>this.regulation = response.data)
  .catch(error => console.log(error))
    },
  },
  components:{
    'regulation' : Regulation
  }
}
</script>
<style>
#my-table{
  width: 50%;

}
.explore{
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
}

#selection{
  margin-left: 25px;
  margin-right: 25px;
  padding-top: 10px;
}
.button{
  font-size:small;
  padding-left: 2px;
  margin-right:10px;
  margin-left: 10px;
  margin-top: 10px;
  width:140px ;
}
.button :hover{
  background-color: red;
  color: white;
}
.hr {
  margin-left: 10px;
  margin-top: 0em;
  margin-bottom: 0em;
  border-style: inset;
  height: 1.5px;
  background-color: yellow;
}
.b-form-select{
  margin-right: 20px;
  margin-left: 20px;
}
.selectreg{
  margin-left: 20px;
}

</style>