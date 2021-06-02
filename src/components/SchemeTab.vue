<template>
    <div id="schemeTab">
        <div> <p>Curriculum</p>
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
        </div>
    </div>
</template>
<script>
// import axios from 'axios'
export default {
    props:['regulation','programLevel','program_level','selectedProgram'
      ,'Program' ,'selectedRegulation','regulations'
       ,'program_id'],
    data() {
        return{
        bordered: true,
        program: '',
        selectedItem: '',
        items:[
               {sname: 1,name:'Nomenclature'},
               {sname: 2,name:'Short Title And Application'},
               {sname: 3,name:'Suspension And Amendment Of Rules'},
               {sname: 4,name:'Requirements For Admission'},
               {sname: 5,name:'Structure Of The B. Tech Course'},
               {sname: 6,name:'Registration And Enrolment'},
               {sname: 7,name:'Assessment Procedure – Internal Tests And End Examinations'},
               {sname: 8,name:'Method of Assigning Letter Grades and Grade Points'},
               {sname: 9,name:'Requirements For Completing Subjects'},
               {sname: 10,name:'Requirements For Taking End Examinations And Promotion'},
               {sname: 11,name:'Revaluation Of End Examination Scripts'},
               {sname: 12,name:'Supplementary End Examinations'},
               {sname: 13,name:'Requirements For Award Of B. Tech Degree'},
               {sname: 14,name:'Transitory Regulations'},
               {sname: 15,name:'Regulations for Lateral Entry Students'}
                
            ],
        }
    },
    components:[],
}
</script>