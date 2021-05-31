<template>
  <div id="regDetails">
    <p>RegDetails Page</p>
    <div v-if="Program == 'UG' && Regulation == 'R15'">
    <h4>KSRM College of Engineering (Autonomuos), Kadapa-516003, AP
<br> Regulations for UG Programs in Engineering (R15UG) <br>
(Effective from 2015-16)</h4>
  <div class="regulations">
Regulations ................................................................1 <br>
1.0 Nomenclature ...........................................................1 <br>
2.0 Short Title And Application............................................ 2 <br>
3.0 Suspension And Amendment Of Rules...................................... 2 <br>
4.0 Requirements For Admission............................................. 2 <br>
5.0 Structure Of The B. Tech Course........................................ 2 <br>
6.0 Registration And Enrolment ............................................ 3 <br>
7.0 Assessment Procedure – Internal Tests And End Examinations............. 4 <br>
8.0 Method Of Assigning Letter Grades And Grade Points..................... 5 <br> 
9.0 Requirements For Completing Subjects .................................. 7 <br>
10.0 Requirements For Taking End Examinations And Promotion ............... 7 <br> 
11.0 Revaluation Of End Examination Scripts................................ 8 <br>
12.0 Supplementary End Examinations ....................................... 8 <br> 
13.0 Requirements For Award Of B. Tech Degree.............................. 9 <br> 
14.0 Transitory Regulations................................................ 9 <br>
Curriculum and Syllabus ...................................................10 <br>
  </div>
    </div>
  </div>
  
</template>

<script>
export default {
    data(){
      return{
      Progrm: 'UG',
      Regulation: 'R15'
      }
    }
}
</script>
        
<style scoped>
#regDetails{
  background-color: white;
  color: black;
  margin-top: 25px;
}
.regulations{
  margin-left: 15%;
  margin-right: 15%;
}
</style>