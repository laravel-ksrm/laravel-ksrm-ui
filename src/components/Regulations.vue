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
      disabled-field="Enabled"
    >
    <template v-slot:first>
        <b-form-select-option :value= null disabled selected>Please select a Program</b-form-select-option>
      </template></b-form-select>
  <b-form-select
    v-if="selectedProgram == 'UG'"
      v-model="selectedRegulation"
      class="mb-3 col-5 select"
      disabled-field="notEnabled"
      :options="UG"
      value-field="sname"
      text-field="name"
      @change="selectedRegulations($event)"
    ><template v-slot:first>
        <b-form-select-option :value= null disabled selected>Please select a Regulation</b-form-select-option>
      </template></b-form-select>
    
    <b-form-select
    v-if="selectedProgram == 'PG'"
      v-model="selectedRegulation"
      class="mb-3 col-5 select"
      disabled-field="notEnabled"
      :options="PG"
      value-field="sname"
      text-field="name"
      @change="selectedRegulations($event)"
    ><template v-slot:first>
        <b-form-select-option :value= null disabled selected>Please select a Regulation</b-form-select-option>
      </template></b-form-select>
    <!-- <p v-if="selectedRegulation">
    You selected a {{ selectedDepartmentLabel }} and specifically {{ selectedProgram }}.
  </p> -->
  </div>
  <div v-if="selectedProgram && selectedRegulation">
  <!--v-if="selectedRegulation&&selectedProgram"> -->
    <!-- <h1>Regulations data will appear here</h1> -->
    <div>
    <b-button class="button" variant="success" > Program Name<hr class="hr"> {{ Program }} </b-button>
    <b-button class="button" variant="success" > Regulation Name<hr class="hr"> {{ regulation }} </b-button>
    <b-button class="button" variant="success" > Courses Offered<hr class="hr"> {{  CoursesOffered }} </b-button>
    <b-button class="button" variant="success" >No.Of Semesters<hr class="hr"> {{ NoOfSemesters }} </b-button>
    <b-button class="button" variant="success" >No.Of Credits<hr class="hr"> {{  NoOfCredits }} </b-button>
    <b-button class="button" variant="success" >No.Of Students<hr class="hr"> {{  NoOfStudents }} </b-button>
    <b-button class="button" variant="success" > Regulation Start Year<hr class="hr"> {{ RegStartYear }} </b-button>
    <b-button class="button" variant="success" > Regulation End Year<hr class="hr"> {{ RegEndYear }} </b-button>

    </div>
    <div v-if="regulation == 'R14' && Program == 'UG'">
        <p>R-14 UG</p>
        
    </div>
    <div v-if="regulation == 'R15' && Program == 'UG'">
        <p>R-15 UG</p>
    </div>
    <div v-if="regulation == 'R18' && Program == 'UG'">
        <p>R-18 UG</p>
    </div>
    <div v-if="regulation == 'R20' && Program == 'UG'">
        <p>R-20 UG</p>
    </div>
    <div v-if="regulation == 'R14' && Program == 'PG'">
        <p>R-14 PG</p>
    </div>
    <div v-if="regulation == 'R18' && Program == 'PG'">
        <p>R-18 PG</p>
    </div>
  </div>  
  </div>
</template>

<script>
export default {
  
    data() {
      return {
        regulation: '-',
        Program: '-',
        NoOfSemesters: 8,
        NoOfCredits: 180,
        RegStartYear: 2015,
        RegEndYear: 2017,
        CoursesOffered: 5,
        NoOfStudents: 2000,
        selectedProgram: null,
        selectedRegulationLabel: '',
        selectedRegulation: null,
        UG:[
            {sname: 'R14', name: 'R-14'},
            {sname: 'R15', name: 'R-15'},
            {sname: 'R18', name: 'R-18'},
            {sname: 'R20', name: 'R-20'}
            ],
        PG:[
            {sname: 'R14', name: 'R-14'},
            {sname: 'R18', name: 'R-18'}
             ],
        programs: [
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
.select{
  margin-left: 20px;
}
</style>