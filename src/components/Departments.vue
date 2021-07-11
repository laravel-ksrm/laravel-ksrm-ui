<template>
  <div id="regulations">
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
    v-if="selectedProgram"
      v-model="selectedRegulation"
      class="mb-3 col-5 select"
      disabled-field="notEnabled"
      :options="UG"
      value-field="sname"
      text-field="name"
      @change="selectedRegulations($event)"
    ></b-form-select>
  </div>
  <div v-if="selectedProgram=='CE'">
  <div v-if="selectedRegulation=='ABTD'"> <h1>About CE Department</h1></div>
  <div v-if="selectedRegulation=='ABTHOD'"> <h1>About HOD</h1></div>
  <div v-if="selectedRegulation=='BOS'"> <h1>Board of studies</h1></div>
  <div v-if="selectedRegulation=='MtechStaff'"> <h1>M.Tech Staff details</h1></div>
  <div v-if="selectedRegulation=='staff'"> <h1>staff details</h1></div>
  <div v-if="selectedRegulation=='Pr'"> <h1>programs</h1></div>
  <div v-if="selectedRegulation=='Lb'"> <h1>laboratories</h1></div>
  </div>  
  <div v-if="selectedProgram=='CSE'">
  <div v-if="selectedRegulation=='ABTD'"> <h1>About CSE Department</h1></div>
  <div v-if="selectedRegulation=='ABTHOD'"> <h1>About HOD</h1></div>
  <div v-if="selectedRegulation=='BOS'"> <h1>Board of studies</h1></div>
  <div v-if="selectedRegulation=='MtechStaff'"> <h1>M.Tech Staff details</h1></div>
  <div v-if="selectedRegulation=='staff'"> <h1>staff details</h1></div>
  <div v-if="selectedRegulation=='Pr'"> <h1>programs</h1></div>
  <div v-if="selectedRegulation=='Lb'"> <h1>laboratories</h1></div>
  </div>  
  <div v-if="selectedProgram=='ECE'">
  <div v-if="selectedRegulation=='ABTD'"> <h1>About ECE Department</h1></div>
  <div v-if="selectedRegulation=='ABTHOD'"> <h1>About HOD</h1></div>
  <div v-if="selectedRegulation=='BOS'"> <h1>Board of studies</h1></div>
  <div v-if="selectedRegulation=='MtechStaff'"> <h1>M.Tech Staff details</h1></div>
  <div v-if="selectedRegulation=='staff'"> <h1>staff details</h1></div>
  <div v-if="selectedRegulation=='Pr'"> <h1>programs</h1></div>
  <div v-if="selectedRegulation=='Lb'"> <h1>laboratories</h1></div>
  </div>  
  <div v-if="selectedProgram=='EEE'">
  <div v-if="selectedRegulation=='ABTD'"> <h1>About EEE Department</h1></div>
  <div v-if="selectedRegulation=='ABTHOD'"> <h1>About HOD</h1></div>
  <div v-if="selectedRegulation=='BOS'"> <h1>Board of studies</h1></div>
  <div v-if="selectedRegulation=='MtechStaff'"> <h1>M.Tech Staff details</h1></div>
  <div v-if="selectedRegulation=='staff'"> <h1>staff details</h1></div>
  <div v-if="selectedRegulation=='Pr'"> <h1>programs</h1></div>
  <div v-if="selectedRegulation=='Lb'"> <h1>laboratories</h1></div>
  </div>  
  <div v-if="selectedProgram=='ME'">
  <div v-if="selectedRegulation=='ABTD'"> <h1>About Mechanical Department</h1></div>
  <div v-if="selectedRegulation=='ABTHOD'"> <h1>About HOD</h1></div>
  <div v-if="selectedRegulation=='BOS'"> <h1>Board of studies</h1></div>
  <div v-if="selectedRegulation=='MtechStaff'"> <h1>M.Tech Staff details</h1></div>
  <div v-if="selectedRegulation=='staff'"> <h1>staff details</h1></div>
  <div v-if="selectedRegulation=='Pr'"> <h1>programs</h1></div>
  <div v-if="selectedRegulation=='Lb'"> <h1>laboratories</h1></div>
  </div>  
  <div v-if="selectedProgram=='HS'">
  <div v-if="selectedRegulation=='ABTD'"> <h1>About Humanities And Sciences Department</h1></div>
  <div v-if="selectedRegulation=='ABTHOD'"> <h1>About HOD</h1></div>
  <div v-if="selectedRegulation=='BOS'"> <h1>Board of studies</h1></div>
  <div v-if="selectedRegulation=='MtechStaff'"> <h1>M.Tech Staff details</h1></div>
  <div v-if="selectedRegulation=='staff'"> <h1>staff details</h1></div>
  <div v-if="selectedRegulation=='Pr'"> <h1>programs</h1></div>
  <div v-if="selectedRegulation=='Lb'"> <h1>laboratories</h1></div>
  </div>  
  </div>
</template>

<script>
export default {
    data() {
      return {
         selectedProgram: '',
        selectedRegulationLabel: '',
        selectedRegulation: '',

        UG:[
            {sname: '-', name: ' --Select a Regulation-- ', disabled: true},
            {sname: 'ABTD', name: 'About Department'},
            {sname: 'ABTHOD', name: 'About Hod'},
            {sname: 'BOS', name: 'Board Of Studies'},
            {sname: 'MtechStaff', name: 'M.Tech Staff'},
            {sname: 'staff', name: 'Staff'},
            {sname: 'Pr', name: 'Programs'},
            {sname: 'Lb', name: 'laboratories'}
            ],
        programs: [
          { sname: '-', name: ' --Select a Program-- ', disabled: true},
          { sname: 'CE', name:'Civil engineering'},
          { sname: 'CSE',name: 'Computer science and Engineering'},
          { sname: 'ECE',name: 'Electronics and Communication Engineering'},
          { sname: 'EEE',name: 'Electrical and Electronics Engineering'},
          { sname: 'ME',name: 'Mechanical Engineering'},
          { sname: 'HS',name: 'Humanities and Sciences'}
        ],
        depart:''
    }
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