<template>
    <div id="r15">
        <div id="title">
            KSRM College of Engineering (Autonomuos), Kadapa-516003, AP <br>
            Regulations for UG Programs in Engineering (R15UG) <br>
                    (Effective from 2015-16)
        </div>
        <b-form-select
      v-model="selectedItem"
      class="mb-3 col-5 select"
      disabled-field="notEnabled"
      :options="items"
      value-field="sname"
      text-field="name"
      @change="selectedOption($event)"
    ><template v-slot:first>
        <b-form-select-option :value= null disabled selected>Please select an Option</b-form-select-option>
      </template></b-form-select>
    <!-- <div class="mt-2">Selected: <strong>{{ items[selectedItem].name }}</strong></div> -->
    <div v-if="selectedItem == 1">
        <p> {{ selectedItem }}. Nomenclature</p>
        <p style="text-align:left">
            <ol>
                <li> <b>Academic Year: </b> Period of academic instruction of, approximately, one year
duration that usually starts in June/July and ends in April/May next </li>
                <li> <b>Semester:</b>  Either of two divisions of an academic year </li>
                <li> <b>Major: </b> A specific field of study. Example: Civil Engineering </li>
                <li> <b>Minor:</b> An area outside of, or complementary to, a Major. Example: For Civil
Engineering major, Computer Science is a minor and vice versa </li>
                <li> <b>Subject:</b> An area of knowledge that is studied as part of a Course </li>
                <li> <b>Core:</b> A subject that is mandatory for a Major course of study </li>
                <li> <b>Elective:</b> A subject that is selected for study to suit one’s individual needs</li>
                <li> <b> Audit Subject:</b> A subject that is studied to meet certain requirements but has no
credits assigned to it </li>
                <li> <b>Self-Study Subject: </b>A subject that is learnt by a student on own under the
guidance of a Faculty member </li>
                <li> <b>Humanities:</b> Subjects that describe and interpret human achievements,
problems and historical changes at individual and societal levels covering the
disciplines of literature, history, and philosophy </li>
                <li> <b>Social Sciences:</b> Subjects that describe the mental and behavioural activities of
individuals, groups, organizations, institutions, and nations covering the
disciplines of anthropology, economics, linguistics, political science, and
psychology </li>
                <li> <b>Exam:</b> A test to measure one’s progress, knowledge, or ability in a subject </li>
                <li> <b>Credit:</b> A numerical weight given to a subject </li>
                <li> <b>Grade:</b> A numerical or alphabetic designation measuring the level of
achievement in an exam</li>
                <li> <b>Attendance:</b> Physical presence of oneself in a classroom/laboratory for
purpose of a scheduled academic instruction </li>
                <li> <b>Course:</b> A series of subjects that constitute a Major field of study </li>
                <li> <b>Branch:</b>  Same as Course </li>
                <li> <b>Program:</b> Same as Course </li>
                <li> <b>Degree:</b> An academic title conferred to honour distinguished achievement </li>
            </ol>
        </p>
    </div>
    <div v-if="selectedItem == 2">
        <p>this is Short Title and Application</p>
    </div>
    <div v-if="selectedItem == 3">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    <div v-if="selectedItem == 4">
        <p>this is {{ items[selectedItem].name }} </p>
    </div>
    <div v-if="selectedItem == 5">
        <p>this is {{ items[selectedItem].name }}</p>
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
</template>
<script>
export default {
    data(){
        return{
            selectedItem: '',
            items:[
               {sname: 1,name:'Nomenclature'},
               {sname: 2,name:'Short Title And Application'},
               {sname: 3,name:'Suspension And Amendment Of Rules'},
               {sname: 4,name:'Requirements For Admission'},
               {sname: 5,name:'Structure Of The B. Tech Course'},
               {sname: 6,name:'Registration And Enrolment'},
               {sname: 7,name:' Assessment Procedure – Internal Tests And End Examinations'},
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
  selectedOption(event){
    console.log(event);
    this.Program = event
  },
    }
}
</script>
<style>
#title{
    text-align: center;
}
#chapters{
    text-align: left;
}
#r15{
    margin-left: 50px;
    margin-right: 40px;
    margin-top: 10px;
}
.select{
    margin-top: 10px;
}
</style>