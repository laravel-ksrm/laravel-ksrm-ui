<template>
    <div id="schemeTab">
        <b-row  cols="1" cols-sm="3" cols-md="7" cols-lg="8">
    <b-col class="col-md-3 text-light flex">
                <p class="pt-1">Specialization: </p>
    </b-col>
    <b-col class="col-md-7">
        <b-form-select v-if="specializations.length>1" @change="getSpecId($event)" v-model="selectedDept" class="mb-3" disabled-field="notEnabled" :options="specializations" value-field="id" text-field="name"><template v-slot:first><b-form-select-option :value= null disabled selected>Please select a Specialization</b-form-select-option></template></b-form-select>
            <p v-else class="pt-1 text-light ">Not Found</p>
    </b-col>
  </b-row>
<b-row v-if="selectedDept" cols="1" cols-sm="3" cols-md="7" cols-lg="8">
    <b-col class="col-md-3 text-light">
                <p class="pt-1 pr-4">Semester:</p>
    </b-col>
    <b-col class="col-md-7">
                    <b-form-select v-if="semesters.length>1" v-model="selectedSem" class="mb-3" disabled-field="notEnabled" :options="semesters" value-field="semester_number" text-field="name" @change="getScheme($event)"><template v-slot:first><b-form-select-option :value= null disabled selected>Please select a Specialization</b-form-select-option></template></b-form-select>
            <p v-else class="pt-1 text-light ">Not Found</p>
    </b-col>
  </b-row>
  <b-row v-if="selectedDept && selectedSem" class="text-left">
        <div>
            <ul class="li_scheme">
                <li class="pr-5 pl-">Code</li>
                <li class="mr-5 pr-5">Title</li>
                <li class="ml-5 pl-5">Category</li>
                <li class="ml-3">L-T-P</li>
                <li class="ml-4">IM</li>
                <li class="ml-5">EM</li>
                <li class="ml-4">Cr</li>
            </ul>
            <hr class="hr_scheme">
            <div  v-for="subject in scheme" :key="subject.id">
                <div v-if="subject.specialization_id == selectedDept && subject.semester_id == selectedSem">
                    <div v-for="sub in subject.subjects" :key="sub.id">
                        <b-row>
                            <b-col md="">{{sub.code}}</b-col>
                            <b-col md="4"> {{sub.name}} </b-col> 
                            <b-col md="1" class="">{{subject.subject_category.short_name}} </b-col>
                            <b-col md="" class="ml-4">{{subject.scheme.lectures}}-{{subject.scheme.tutorials}}-{{subject.scheme.practicals}}</b-col>
                            <b-col md="">{{subject.scheme.internal_marks}}</b-col>
                            <b-col md="">{{subject.scheme.end_marks}}</b-col>
                            <b-col md="">{{subject.scheme.credits}}</b-col>
                        </b-row>
                    </div>
                </div>
            
            </div>

            
            
        </div><br>
                <p class="text-left text-light">Note: Code : Subject Code, Title : Name of the Subject, Category : Subject Category Short Name, L-T-P : Lecture Hours-Tutorial Hours-Practical Hours, Cr : Credits for the respective subject.</p>

  </b-row>
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
        bordered: true,
        program: '',
        selectedItem: '',
        selectedDept: null,
        selectedSem: null,
        opt: true,
        scheme:{},
        $opt: true
        }
    },
    methods:{
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
    components:[],

}
</script>
<style>
.li_scheme{
    list-style: none;
    padding-left: 0px;
    padding-right: 0px;
    display: flex;
}
.li_scheme li{
    padding-left: 5px;
    /* padding-right: 5px; */
}
.hr_scheme{
    height: 2px;
    width: 600px;
    background-color: brown;
}
.schemeRow{
    text-align: left;
}
#schemeTab{
    max-width: 700px;
}
#selectionTab{
    display: flex;
    position: absolute;
}
</style>