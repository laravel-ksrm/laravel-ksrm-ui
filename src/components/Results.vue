<template>
<div id="results">
    <div class="explor">
      <ul class="list bg-success" v-for="name in names" :key="name.id" @click.prevent="getSemResult(name.id)">
        <li> <a :href="`#${name.id}`">{{name.name}}<hr class="hr_sem"></a>  </li>
      </ul>
    </div>
      <!-- <div class="explor pt-4 text-uppercase">
        <div v-for="name in names" :key="name.id">
          <div> 
            <a :href="`/results/${name.id}`" @click.prevent = setActive(name.id) :class="{ active: isActive(name.id)}"> {{name.name}} <hr class="hrtab"></a> </div>
        </div>
      </div>
      <div :class="{ 'active show': isActive(1)}" id=1>
        <div>
          this is first sem
        </div>
        </div> -->
        <div>
          <div class="text-left mt-3">
            <div class="st_details text-left text-dark pb-5">
              <div class="row">
                <div class="offset-md-1 col-md-2 offset-lg-3 col-lg-1">Name:</div>
                <div class="col-md-4 col-lg-2">{{ name}}</div>
                <div class=" col-md-2 offset-lg-1 col-lg-1">Regd.No:</div>
                <div class="col-md-3 col-lg-3"> {{regdno}} </div>
              </div>
              <div class="row">
                <div class="offset-md-1 col-md-2 offset-lg-3 col-lg-1">Specialization:</div>
                <div class="col-md-4 col-lg-2">{{specialization }}</div>
                <div class=" col-md-2 offset-lg-1 col-lg-1">Regulation:</div>
                <div class="col-md-3 col-lg-3"> {{regulation}} </div>
              </div>

            </div>
            <div>
              <div>
                <div class="row offset-md-1">
                  <div class="offset-md-1 offset-lg-2 col-md-2 col-lg-1">Sub Code</div>
                  <div class="col-md-2 col-lg-2">Sub Name</div>
                  <div class="col-md-1">IM</div>
                  <div class="col-md-1">EM</div>
                  <div class="col-md-1">Total</div>
                  <div class="col-md-1">Result</div>
                  <div class="col-md-1">Credits</div>
                  <div class="col-md-1">Grade</div>
                </div>
                <hr class="offset-md-2 offset-lg-3 hr_res_divider col-md-9 col-lg-8">
                <div v-if="sem == 1" id="1">
                  <div class="row offset-md-1" v-for="result in res" :key="result.id">
                  <div class="offset-md-1 offset-lg-2 col-md-2 col-lg-1"> {{result.subject['code']}} </div>
                  <div class="col-md-2 col-lg-2"> {{result.subject['name']}} </div>
                  <div class="col-md-1 col-lg-1"> {{result.internal_marks}} </div>
                  <div class="col-md-1 col-lg-1"> {{result.end_exam_marks}} </div>
                  <div class="col-md-1 col-lg-1"> {{result.internal_marks+result.end_exam_marks}} </div>
                  <div class="col-md-1 col-lg-1"> {{result ? result.passed:'NaN'}} </div>
                  <div class="col-md-1 col-lg-1"> {{result.exam_id}} </div>
                  <div class="col-md-1 col-lg-1"> {{result.grade}} </div>
                </div>
                <div class="resFooter offset-lg-1 row pb-5 pt-4">
                  <div class="offset-md-1 offset-lg-2 col-md-1 col-lg-1">SGPA: {{r.sgpa}} </div>
                  <div class="col-md-1 col-lg-1"> CGPA: {{r.cgpa}} </div>
                  <div class="col-md-1 col-lg-1"> T.IM: {{r.tim}} </div>
                  <div class="col-md-1 col-lg-1">T.EM: {{r.tem}} </div>
                  <div class="col-md-1 col-lg-1">T.TM: {{r.tm}} </div>
                  <div class="col-md-1 col-lg-1">T.Res: {{r.tres}} </div>
                  <div class="col-md-1 col-lg-1">PCGPA: {{r.pcgpa}}</div>
                  <div class="col-md-1 col-lg-1">PSGPA: {{r.psgpa}} </div>
                </div>
                <p class="pb-5 pl-2">Note: <br>
                <ol>
                  <li>
                    Any discrepancy in the result noted above must be brought to the notice of CE, within two weeks from the results date</li>
                  <li>SGPA-Semester Grade Point Average, CGPA-Cumulative Grade Point Average
                  T.IM-Total Internal Marks,T.IM-Total External Marks,
                  T.TM-Total Marks,T.Res-Total Result,PCGPA:Predicted Cumulative Grade Point Average,
                  PSGPA-Predicted Semester Grade Point Average </li></ol>
                </p>
                </div>
                <div v-if="sem == 2" id="2">
          this is {{sem}} semester
        </div>
        <div v-if="sem == 3" id="3">
          this is {{sem}} semester
        </div>
        <div v-if="sem == 4" id="4">
          this is {{sem}} semester
        </div>
        <div v-if="sem == 5" id="5">
          this is {{sem}} semester
        </div>
        <div v-if="sem == 6" id="6">
          this is {{sem}} semester
        </div>
        <div v-if="sem == 7" id="7">
          this is {{sem}} semester
        </div>
        <div v-if="sem == 8" id="8">
          this is {{sem}} semester
        </div>
              </div>
<!-- <div>
  <p>
    {{res[0]}}
  </p>
</div> -->
              
            </div>
            
          </div>
        </div>
        
</div>


</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      r:
        {sgpa: 7.87,cgpa:7.87,tim:242,tem:276,tm:518,tres:'PASS',pcgpa:7.91,psgpa:7.91}
      ,
      name: 'LINGALA HANUMANTHA REDDY',
      specialization: 'Computer Science and Engineering',
      regdno:'179Y1A0572',
      regulation:'R15',
      activeItem:null,
      student_id: 1,
      sem: null,
      res : [],
      names: [
        {id:1, name:'I Sem'},
        {id:2, name:'II Sem'},
        {id:3, name:'III Sem'},
        {id:4, name:'IV Sem'},
        {id:5, name:'V Sem'},
        {id:6, name:'VI Sem'},
        {id:7, name:'VII Sem'},
        {id:8, name:'VIII Sem'}
      ],
    }
  },
  methods:{
    getSemResult(event){
      console.log(event)
      this.sem = event
      axios.get(`http://127.0.0.1:8000/api/examStataGrade/${this.student_id}`)
      .then(response=> this.res = response.data)
      .catch(error => console.log(error))
    },
    getResults(event){
      this.sem = event;

    },
  }

}
</script>
<style scoped>
.resFooter{
  font-size: 14px;
    font-weight: bolder;
    color: brown;
}
.hr_res_divider{
  margin-top: 0px;
  background-color: brown;
   /* margin-left: 70px; */
  /* margin-right: 50px; */
  /* width: 600px; */
  /* float: left; */
  height: 2px;
  align-content: flex-start;
}
.hr_sem{
  margin-top: 0;
  background-color: brown;
}
.explor{
  padding-top: 10px;
  display: flex;
  justify-content: center;
}
.list{
  font-family: "Times New Roman", Times, serif;
  list-style: none;
  font-size: 15px;
  border: 2px  solid whitesmoke;
  border-radius: 10px;
  margin-left: 5px;
  
}
.list li{
  margin-top: 10px;
  margin-right: 30px;
  margin-left: 2px;
}
.list a{
  text-decoration: none;
  color: black;
}
.list a:hover{
  text-decoration: none;
  color: black;
}
#results{
  background-color: darkgray;
  margin-left: 40px;
  margin-right: 40px;
  min-width: 400px;
  margin-top: 10px;
  padding-bottom: 10px;
font-family: "Times New Roman", Times, serif;

}

</style>
