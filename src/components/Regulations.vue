<template>
  <div id="regulations">
    <p>This is Regulations Page</p>
      <div id="selection">
    <b-form-select
      v-model="selectedProgram"
      :options="programs"
      class="mb-3 col-5"
      value-field="sname"
      text-field="name"
      @change="selectedPrograms($event)"
      disabled-field="notEnabled"
    ></b-form-select>
  <b-form-select
    v-if="selectedProgram == 'UG'"
      v-model="selectedRegulation"
      class="mb-3 col-5 select"
      disabled-field="notEnabled"
      :options="UG"
      value-field="sname"
      text-field="name"
      @change="selectedRegulations($event)"
    ></b-form-select>
    
    <b-form-select
    v-if="selectedProgram == 'PG'"
      v-model="selectedRegulation"
      class="mb-3 col-5 select"
      disabled-field="notEnabled"
      :options="PG"
      value-field="sname"
      text-field="name"
      @change="selectedRegulations($event)"
    ></b-form-select>
    <!-- <p v-if="selectedRegulation">
    You selected a {{ selectedDepartmentLabel }} and specifically {{ selectedProgram }}.
  </p> -->
  </div>
  <div v-if="selectedProgram && selectedRegulation">
  <!--v-if="selectedRegulation&&selectedProgram"> -->
    <!-- <h1>Regulations data will appear here</h1> -->
    <div>
    <b-button class="button" variant="success" @click="programDetails"> Program Name<hr class="hr"> {{ Program }} </b-button>
    <b-button class="button" variant="success" @click="reguDetails"> Regulation Name<hr class="hr"> {{ regulation }} </b-button>
    <b-button class="button" variant="success" @click="coursesOffered"> Courses Offered<hr class="hr"> {{  CoursesOffered }} </b-button>
    <b-button class="button" variant="success" @click="noOfSemesters">No.Of Semesters<hr class="hr"> {{ NoOfSemesters }} </b-button>
    <b-button class="button" variant="success" @click="noOfCredits">No.Of Credits<hr class="hr"> {{  NoOfCredits }} </b-button>
    <b-button class="button" variant="success" @click="noOfStudents">No.Of Students<hr class="hr"> {{  NoOfStudents }} </b-button>
    <b-button class="button" variant="success" @click="regStartYear"> Regulation Start Year<hr class="hr"> {{ RegStartYear }} </b-button>
    <b-button class="button" variant="success" @click="regEndYear"> Regulation End Year<hr class="hr"> {{ RegEndYear }} </b-button>
  </div>
  <div v-if=reg>
    <RegDetails/>
  </div>
  <div v-else-if=program>
    <ProgramDetails/>
  </div><div v-else-if=courses>
    <CoursesOffered/>
  </div><div v-else-if=semesters>
    <NoOfSemesters/>
  </div><div v-else-if=credits>
    <NoOfCredits/>
  </div><div v-else-if=students>
    <NoOfStudents/>
  </div><div v-else-if=startyear>
    <RegStartYear/>
  </div><div v-else-if=endyear>
    <RegEndYear/>
  </div>
  </div>  
  </div>
</template>

<script>
import RegDetails from './RegDetails'
import CoursesOffered from './CoursesOffered'
import NoOfCredits from './NoOfCredits'
import NoOfSemesters from './NoOfSemesters'
import NoOfStudents from './NoOfStudents'
import ProgramDetails from './ProgramDetails'
import RegEndYear from './RegEndYear'
import RegStartYear from './RegStartYear'
export default {
  
    data() {
      return {
        reg: false,
        program: false,
        courses: false,
        semesters: false,
        credits: false,
        students: false,
        startyear: false,
        endyear: false,
        regulation: '-',
        Program: '-',
        NoOfSemesters: 8,
        NoOfCredits: 180,
        RegStartYear: 2015,
        RegEndYear: 2017,
        CoursesOffered: 5,
        NoOfStudents: 2000,
        selectedProgram: '',
        selectedRegulationLabel: '',
        selectedRegulation: '',
        UG:[
            {sname: '-', name: ' --Select a Regulation-- ', disabled: true},
            {sname: 'R14', name: 'R-14'},
            {sname: 'R15', name: 'R-15'},
            {sname: 'R18', name: 'R-18'},
            {sname: 'R20', name: 'R-20'}
            ],
        PG:[
            {sname: '-', name: ' --Select a Regulation-- ', disabled: true},
            {sname: 'R14', name: 'R-14'},
            {sname: 'R18', name: 'R-18'}
             ],
        programs: [
          { sname: '-', name: ' --Select a Program-- ', disabled: true},
          { sname: 'UG', name:'Under Graduate'},
          { sname: 'PG',name: 'Post Graduate'}
        ],
        courseList: [

        ]
    }
  },
  methods:{
  selectedPrograms(event){
    console.log(event);
    this.Program = event
  },
  selectedRegulations(event){
    console.log(event)
    this.regulation = event
  },
  reguDetails:function(){
    this.reg = true;
    this.program = false;
    this.courses = false;
    this.startyear = false;
    this.semesters = false;
    this.credits = false;
    this.students = false;
    this.endyear = false;
    console.log('Regulation button is clicked')

  },
  programDetails:function(){
    this.program = true;
    this.reg = false;
    this.courses = false;
    this.startyear = false;
    this.semesters = false;
    this.credits = false;
    this.students = false;
    this.endyear = false;
    console.log('programs button is clicked')

  },
  coursesOffered:function(){
    this.courses = true;
    this.reg = false;
    this.program = false;
    this.startyear = false;
    this.semesters = false;
    this.credits = false;
    this.students = false;
    this.endyear = false;
    console.log('courses button is clicked')

  },
  noOfSemesters:function(){
    this.semesters = true;
    this.startyear = false;
    this.courses = false;
    this.reg = false;
    this.program = false;
    this.credits = false;
    this.students = false;
    this.endyear = false;
    console.log('semsters button is clicked')

  },
  noOfCredits:function(){
    this.credits = true;
    this.startyear = false;
    this.courses = false;
    this.reg = false;
    this.program = false;
    this.semesters = false;
    this.students = false;
    this.endyear = false;
    console.log('credits button is clicked')

  },
  noOfStudents:function(){
    this.students = true;
    this.startyear = false;
    this.courses = false;
    this.reg = false;
    this.program = false;
    this.semesters = false;
    this.credits = false;
    this.endyear = false;
    console.log('students button is clicked')

  },
  regStartYear:function(){
    this.startyear = true;
    this.courses = false;
    this.reg = false;
    this.program = false;
    this.semesters = false;
    this.credits = false;
    this.students = false;
    this.endyear = false;
    console.log('RegulationStart Year button is clicked')

  },
  regEndYear:function(){
    this.endyear = true;
    this.courses = false;
    this.reg = false;
    this.program = false;
    this.startyear = false;
    this.semesters = false;
    this.credits = false;
    this.students = false;
    console.log('Regulation EndYear button is clicked')

  },
  },
  components: {
    RegDetails,
    NoOfSemesters,
    NoOfCredits,
    NoOfStudents,
    ProgramDetails,
    RegEndYear,
    RegStartYear,
    CoursesOffered
  },
}
</script>
<style>
#regulations{
  background-color: white;
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
  background-color: rgb(6, 138, 116);
  color: white;
}
.hr {
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
.select{
  margin-left: 20px;
}
</style>