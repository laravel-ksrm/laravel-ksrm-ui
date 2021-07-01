<template>
  
   
  <div id="container" v-if="weatherDataList">
  <div><button type="button" class="btn btn-outline-danger" v-on:click="getWeatherData">Get First sem Results</button></div>
    
      <ul class="container-sm" v-if="weatherDataList">
      <li class="list-group-item list-group-item-success" >Name:{{weatherDataList.studentName}}</li>
      <li class="list-group-item list-group-item-success">Specification:{{weatherDataList.Branch}}</li>
      <li class="list-group-item list-group-item-success">RollNumber:{{weatherDataList.stuid}}</li>
      <li class="list-group-item list-group-item-success">Regulation:{{weatherDataList.regulation}}</li>
      </ul>
      <ul v-else>  please login....</ul>
           
     <div>  
         <table class="table table-dark table-hover" v-for="weatherData in weatherDataList.total" :key="weatherData.id">
              <tr>
                  <td>CGPA:{{weatherData.cgpa}}</td>
              <td>SGPA:{{weatherData.sgpa}}</td>
              <td>TIM:{{weatherData.tim}}</td>
              <td>TEM:{{weatherData.tem}}</td>
              <td>TM:{{weatherData.tm}}</td>
              <td>R:{{weatherData.tr}}</td>
              <td>Credits:{{weatherData.tc}}</td>
              </tr>
       </table>

     <ul v-if="weatherDataList.subjects">
         
       <table class="table table-dark table-hover">
           <tr>
               <td>Subject code</td>
               <td>Subject Name</td>
               <td>Internal Marks</td>
               <td>External Marks</td>
               <td>Total</td>
               <td>Results</td>
               <td>Credits</td>
               <td>Grade</td>
           </tr>
           <tr v-for="weatherData in weatherDataList.subjects" :key="weatherData.id" >
               <td>{{weatherData.subcode}}</td>
               <td>{{weatherData.subjectname}}</td>
               <td>{{weatherData.internalmarks}}</td>
               <td>{{weatherData.externalmarks}}</td>
               <td>{{weatherData.results}}</td>
               <td>{{weatherData.credits}}</td>
               <td>{{weatherData.grade}}</td>
               <td>{{weatherData.internalmarks+weatherData.externalmarks}}</td>
           </tr>
           
          
       </table></ul>
       <ul v-else>
       please click the button if results are released........
       </ul>
     
       </div>
  </div> 
  <div v-else>
  <h2>Results are not released........</h2>
  
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "FirstSemester",
  data() {
    return {
      weatherDataList: []
    };
  },
  methods: {
    getWeatherData() {
      //fetch("details.json")
      axios.get('/student.json')
        .then(response => response.data)
        .then(data => (this.weatherDataList = data));
    }
  }
};
</script>
<style>
#container{
  background-color: darkgray;
  margin-left: 40px;
  margin-right: 40px;
  min-width: 400px;
  
}
</style>