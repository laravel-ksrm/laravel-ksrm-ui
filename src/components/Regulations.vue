<template>
  <div id="regulations">
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
  <!-- <p> {{ regulation }}</p> -->
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
    <b-button class="button" variant="success" > Regulation End Year<hr class="hr"> {{ regulation.end_year }} </b-button>

    </div>
    <br>
    <div id="title"><b>
            KSRM College of Engineering (Autonomuos), Kadapa-516003, AP <br>
                                {{ regulation.name }} <br>
                            (Effective from {{regulation.start_year}}) </b>
        </div>
        <br>
        <b-form-select
      v-model="selectedItem"
      class="mb-3 col-5 select"
      disabled-field="notEnabled"
      :options="items"
      value-field="sname"
      text-field="name"
    ><template v-slot:first>
        <b-form-select-option :value= null disabled selected>Please select an Option</b-form-select-option>
      </template></b-form-select>
    <!-- <div class="mt-2">Selected: <strong>{{ items[selectedItem].name }}</strong></div> -->
    <div v-if="selectedItem == 1">
        <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p>
        <p style="text-align:left">
            <ol>
                <li> <b>Academic Year: </b> Period of academic instruction of, approximately, one year
duration that usually starts in June/July and ends in April/May next. </li>
                <li> <b>Semester:</b>  Either of two divisions of an academic year. </li>
                <li> <b>Major: </b> A specific field of study. Example: Civil Engineering. </li>
                <li> <b>Minor:</b> An area outside of, or complementary to, a Major. Example: For Civil
Engineering major, Computer Science is a minor and vice versa. </li>
                <li> <b>Subject:</b> An area of knowledge that is studied as part of a Course. </li>
                <li> <b>Core:</b> A subject that is mandatory for a Major course of study. </li>
                <li> <b>Elective:</b> A subject that is selected for study to suit one’s individual needs</li>
                <li> <b> Audit Subject:</b> A subject that is studied to meet certain requirements but has no
credits assigned to it. </li>
                <li> <b>Self-Study Subject: </b>A subject that is learnt by a student on own under the
guidance of a Faculty member. </li>
                <li> <b>Humanities:</b> Subjects that describe and interpret human achievements,
problems and historical changes at individual and societal levels covering the
disciplines of literature, history, and philosophy. </li>
                <li> <b>Social Sciences:</b> Subjects that describe the mental and behavioural activities of
individuals, groups, organizations, institutions, and nations covering the
disciplines of anthropology, economics, linguistics, political science, and
psychology. </li>
                <li> <b>Exam:</b> A test to measure one’s progress, knowledge, or ability in a subject. </li>
                <li> <b>Credit:</b> A numerical weight given to a subject. </li>
                <li> <b>Grade:</b> A numerical or alphabetic designation measuring the level of
achievement in an exam.</li>
                <li> <b>Attendance:</b> Physical presence of oneself in a classroom/laboratory for
purpose of a scheduled academic instruction. </li>
                <li> <b>Course:</b> A series of subjects that constitute a Major field of study. </li>
                <li> <b>Branch:</b>  Same as Course. </li>
                <li> <b>Program:</b> Same as Course. </li>
                <li> <b>Degree:</b> An academic title conferred to honour distinguished achievement. </li>
            </ol>
        </p>
    </div>
    <div v-if="selectedItem == 2" >
      <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p>
      <p style="text-align:left">
        <ol>
          <li>These rules and regulations may be called as {{ regulation.short_name  }} and come into force
from Academic Year {{ regulation.start_year }} and exist until superseded by new regulations.
These rules are applicable for students who join the institute from academic
year {{ regulation.start_year }} onwards. Students who have joined in earlier regulations will
continue in their respective regulations.</li>
          <li>These rules and regulations are applicable to all {{ programLevel[program_level-1].name }} courses in
engineering and technology leading to {{ regulation.program.name}} ({{ regulation.program.short_name}}).
</li>
          <li>The Major courses offered, at present, are: <b>
            <ul style="list-style-type: circle" v-for="courses in regulation.program.specializations" :key="courses.name">
              <li>{{ courses.name }}</li>
            </ul> </b>
          </li>
          <li>The Institute may offer new Majors  in future to which these rules and
regulations will be applicable.</li>
        </ol>
      </p>
    </div>
    <div v-if="selectedItem == 3">
              <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p>
        <p style="text-align:left">
          <ol>
            <li>Academic Council has the authority to suspend a rule temporarily.</li>
            <li>Academic Council has the authority to amend a rule.</li>
            <li>For affirmative action on any suspension or amendment of a rule, an affirmative
vote of three-fifths of the members present and voting shall be required in
Academic Council.</li>
          </ol>
        </p>
    </div>
    <div v-if="selectedItem == 4">
            <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p>
            <p style="text-align:left">
              <ol>
                <li>At present, admissions into first semester of various Specializations are
governed by Government and the Affiliating University. The eligibility
criteria and procedure for admission are prescribed by Government and
Affiliating University.</li>
                <li>A student is not allowed change of Specialization after admission.</li>
                <li>A student must fulfil medical standards required for admission.</li>
                <li>The selected students are admitted into first semester after payment of the prescribed fees.</li>
              </ol>

            </p>
    </div>
    <div v-if="selectedItem == 5">
        <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p>
            <p style="text-align:left">
              <ol>
                <li> <b>Duration:</b>  The duration of {{ regulation.program.name}} degree course is {{ getSemCounts() }} semesters spread
over {{academicYears()}}  academic years. Semesters are named sequentially from {{regulation.semesters[0].name}} to {{regulation.semesters[regulation.semesters.length-1].name}}.</li>
<li> <b>Working Days:</b>  Calendar for any semester shall be announced at least four
weeks before its commencement. Minimum number of working days are 90
for a semester</li>
<li> <b>Curriculum:</b>  Each major shall have core, elective and mandatory subjects drawn
from {{ curriculumCount() }} categories of subject areas -
<ol v-for="categories in curriculumCategories" :key="categories">
  <li>{{categories}}</li>
  </ol></li>
              </ol>
            </p>
    </div>
    <div v-if="selectedItem == 6">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    <div v-if="selectedItem == 7">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    <div v-if="selectedItem == 8">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    <div v-if="selectedItem == 9">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    <div v-if="selectedItem == 10">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    <div v-if="selectedItem == 11">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    <div v-if="selectedItem == 12">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    <div v-if="selectedItem == 13">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
      axios.get('http://127.0.0.1:8000/api/program_levels/')
  .then(response =>this.programLevel = response.data)
  .catch(error => console.log(error));
      return {
        regulations: [],
        program_id: null,
        Program: '-',
        regulation : null,
        program_level:null,
        programLevel:{},
        academicYearDuration:null,
        getSemCount: null,
        curriculuLength: null,
        curriculuCategories:[],
        NoOfStudents: 2000,
        selectedProgram: null,
        selectedRegulationLabel: '',
        selectedRegulation: null,
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
    curriculumCount(){
      if(this.regulation.short_name == 'R15UG' || this.regulation.short_name == 'R14UG'){
        return this.curriculuLength = 'five'
      }
      else{
        return this.curriculuLength = 'six'
      }
    },
    getSemCounts(){
      if(this.regulation.semesters.length == 8){
        return this.getSemCount = 'Eight'

      }
      else if(this.regulation.semesters.length == 4){
        return this.getSemCount = 'Four'
      }
      else if(this.regulations.semesters.length == 7){
        return this.getSemCount = 'Eight'
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
  .then(response=>console.log(response))
  .catch(error => console.log(error));
  },
  selectedRegulations(event){
    console.log(event),
    this.regulation = event
    axios.get(`http://127.0.0.1:8000/api/regulations/${this.selectedRegulation}`)
  .then(response =>this.regulation = response.data)
  .then(response =>console.log(response))
  .catch(error => console.log(error))
    
    },
  },
  components:{
    
  }
}
</script>
<style>
#regulations{
  background-color: white;
  margin-top: 10px;
}
#selection{
  margin-left: 25px;
  margin-right: 25px;
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