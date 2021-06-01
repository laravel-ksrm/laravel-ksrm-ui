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
    <b-button class="button" variant="success" >PROGRAM<hr class="hr"> {{ programLevel[program_level-1].short_name }} </b-button>
    <b-button class="button" variant="success" >REGULATION<hr class="hr"> {{ regulation.short_name }} </b-button>
    <b-button class="button" variant="success" >COURSES<hr class="hr"> {{  regulation.program.specializations.length }} </b-button>
    <b-button class="button" variant="success" >SEMESTERS<hr class="hr"> {{ regulation.semesters.length }} </b-button>
    <b-button class="button" variant="success" >CREDITS<hr class="hr"> {{  regulation.total_credits }} </b-button>
    <b-button class="button" variant="success" >SUBJECTS<hr class="hr"> {{ getNoOfSubjects() }} </b-button>
    <b-button class="button" variant="success" >STUDENTS<hr class="hr"> {{  getNoOfStudents() }} </b-button>
    <b-button class="button" variant="success" > LAUNCH YEAR<hr class="hr"> {{ regulation.start_year }} </b-button>
    <b-button class="button" variant="success" > STATUS<hr class="hr"> {{ getRegulationEndYear() }} </b-button>

    </div>
    <div class="explore">
      
      <b-tabs v-model="tabIndex" content-class="mt-3" fill>
    <b-tab title="REGULATIONS" :title-link-class="linkClass(0)">
      <div v-if="selectedProgram && selectedRegulation">
        <p>Regulations Tab</p><regulation :regulations="regulations" :selectedProgram="selectedProgram"
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
import RegulationTab from './RegulationTab'
export default {
    data() {
      axios.get('http://127.0.0.1:8000/api/program_levels/')
  .then(response =>this.programLevel = response.data)
  .catch(error => console.log(error));
      return {
        tabIndex: 0,
        regulations: [],
        students: null,
        program_id: null,
        Program: '-',
        regulation : null,
        program_level:null,
        programLevel:{},
        NoOfStudents: 2000,
        selectedProgram: null,
        selectedRegulationLabel: '',
        selectedRegulation: null,
        selectedItem: '',
        subjects: null
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
      getNoOfSubjects(){
axios.get(`http://127.0.0.1:8000/api/subject/`)
  .then(response =>this.subjects = response.data)
  .catch(error => console.log(error));
  return this.subjects.length
      },
    getNoOfStudents(){
      axios.get(`http://127.0.0.1:8000/api/students/${this.selectedRegulation}`)
  .then(response =>this.students = response.data)
  .catch(error => console.log(error));
  return this.students.length
    },
    
    getRegulationEndYear(){
      if (this.regulation.end_year == null) {
        return 'InForce'
      }
      else{
        return this.regulation.end_year
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
    'regulation' : RegulationTab
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