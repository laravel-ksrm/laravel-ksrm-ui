<template>
    <div id="schemeTab" class="text-seondary">
  <div class="row">
        <div class=" text-left col-md-2 col-lg-1 text-light offset-lg-2 offset-md-1 pt-2">Specialization: </div>
        <b-form-select class="col-md-5 col-lg-5 mb-3" v-if="specializations.length>1" @change="getSpecId($event)" v-model="selectedDept" disabled-field="notEnabled" :options="specializations" value-field="id" text-field="name"><template v-slot:first><b-form-select-option :value= null disabled selected>Please select a Specialization</b-form-select-option></template></b-form-select>
        <div v-else class="text-light  pt-2">Not Found</div>
        </div>
        <div v-if="selectedDept" class="row">
        <div class="text-left col-md-2 col-lg-1 text-light offset-lg-2 offset-md-1 pt-2">Semester: </div>
        <b-form-select class="col-md-5 col-lg-5 mb-3" v-if="semesters.length>1" v-model="selectedSem" disabled-field="notEnabled" :options="semesters" value-field="semester_number" text-field="name" @change="getScheme($event)"><template v-slot:first><b-form-select-option :value= null disabled selected>Please select a Specialization</b-form-select-option></template></b-form-select>
        <div v-else class="text-light  pt-2">Not Found</div>
        </div>


  <div v-if="selectedDept && selectedSem" class="offset-md-3">
          <b-row class="text-left mr-3">
                            <b-col class="col-2">Code</b-col>
                            <b-col class="col-md-3">Title </b-col> 
                            <b-col class="col-2">Category</b-col>
                            <b-col class="col-2">L-T-P</b-col>
                            <b-col class="col-1">IM</b-col>
                            <b-col class="col-1">EM</b-col>
                            <b-col class="col-1">Cr</b-col>
                        </b-row>
            <hr class="hr_scheme"> <br>
            <div  v-for="subject in scheme" :key="subject.id">
                <div v-if="subject.specialization_id == selectedDept && subject.semester_id == selectedSem">
                    <div v-for="sub in subject.subjects" :key="sub.id">
                        <b-row class="text-left mr-3">
                            <b-col class="col-2">{{sub.code}}</b-col>
                            <b-col class="col-md-3"> {{sub.name}} </b-col> 
                            <b-col  class="col-2">{{subject.subject_category.short_name}} </b-col>
                            <b-col class="col-2">{{subject.scheme.lectures}}-{{subject.scheme.tutorials}}-{{subject.scheme.practicals}}</b-col>
                            <b-col class="col-1">{{subject.scheme.internal_marks}}</b-col>
                            <b-col class="col-1">{{subject.scheme.end_marks}}</b-col>
                            <b-col class="col-1">{{subject.scheme.credits}}</b-col>
                        </b-row>
                    </div>
                </div>
            
            </div>
      <div>

      </div>
<div class="mt-5 comment">
    <b-card-group deck>
      <b-card bg-variant="default" header="Leave your comments here" class="text-left text-dark">
      <form @submit.prevent="addComment" novalidate= "true">
              <b-row>
                  <b-col md="3 pt-2">
                      <p>Email:</p>
                  </b-col>
                  <b-col md="">
                    <b-form-input v-model="email" name="email" :state="emailValidator" trim aria-describedby="input-live-help input-live-feedback"  type="email" id="email" placeholder="example@ksrmce.ac.in" required ></b-form-input>
                  <b-form-invalid-feedback id="input-live-feedback">
      Enter Valid Email
    </b-form-invalid-feedback>
                  </b-col>
              </b-row>
                <b-row class="pt-4">
                  <b-col md="3 pt-2 pl-2">
                      <p>Comment:</p>
                  </b-col>
                  <b-col md="">
                    <b-form-textarea type="comment" id="comment" placeholder="Your Comment" required ></b-form-textarea>
                  </b-col>
              </b-row>
      <div>
        <b-button class="mt-4" type="submit">Submit</b-button>
      </div></form>
      </b-card>
    </b-card-group>
  </div>
  </div>

                <p v-if="selectedDept && selectedSem" class="text-left pl-5 text-light">Note: Code : Subject Code, Title : Name of the Subject, Category : Subject Category Short Name, L-T-P : Lecture Hours-Tutorial Hours-Practical Hours, Cr : Credits for the respective subject.</p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props:['regulation','programLevel','program_level','selectedProgram'
      ,'Program' ,'selectedRegulation','regulations'
       ,'program_id','specializations','students','semesters'],
    data() {
        return{
        email:null,
        comment: null,
        bordered: true,
        program: '',
        selectedItem: '',
        selectedDept: null,
        selectedSem: null,
        opt: true,
        scheme:{},
        $opt: true,
        }
    },
    methods:{
    addComment: function(e){
        this.error = '';
        if(!this.comment){
            this.error = "Comment Required"
        }
        if(!this.email){
            this.error = "Email Required"
        }
        else if(!this.emailValidator(this.email)){
            this.error = "Enter Valid Email";
        }
        if(!this.error ){
            axios.post()
        }
        e.preventDefault();
    },
    emailValidator(email){
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
        getScheme(event){
            this.currentSem = event,
            
            axios.get(`http://127.0.0.1:8000/api/regulations/${this.selectedRegulation}/instruction_scheme/${this.currentSem}`)
      .then(response => this.scheme = response.data)
      .catch(error => console.log(error));      
    },
    getSpecId(event){
        this.opt = false,
        this.selectedDept = event,
        this.selectedSem = null
    }
    },
    computed: {
    },
    components:[],

}
</script>
<style>
.comment{
    margin-right: 50px;
    margin-left: 50px;
    margin-bottom: 10px;
    max-width: 600px;
    min-width: 300px;
}

.hr_scheme{
    margin-top: 4px;
    margin-bottom: 4px;
    height: 0.8px;
    margin-left: 0px;
    margin-right: 2px;
    max-width: 1035px;
    min-width: 500px;
    background-color: brown;
}
</style>