<template>
    <div class="subjects">
        <div class="row">
        <div class=" text-left col-md-2 col-lg-1 text-light offset-lg-2 offset-md-1 pt-2">Subject: </div>
        <b-form-select  class="col-md-5 col-lg-5 " v-if="subjects"  @change="getSyllabus($event)"  v-model="selectedSub" disabled-field="notEnabled" :options="subjects" value-field="id" text-field="name"><template v-slot:first><b-form-select-option :value= null disabled selected>Please select a Subject</b-form-select-option></template></b-form-select>
        <div v-else class="text-light  pt-2">Not Found</div>
        </div>
        
        <div v-if="selectedSub" class="pt-3">
            <div class="text-left row">
                <div class="col-2 offset-md-3">CODE</div>
                <div class="col-2 text-uppercase text-light">{{ subjects ? subjects[selectedSub-1].code : "Not found"}}</div>

            </div>
            <div class="text-left row">
                <div class="col-2 offset-md-3">DEPARTMENT</div>
                <div class="col-5 text-uppercase text-light">{{ departments ?  departments.name : "Not found"}}</div>

            </div>
            <div class="text-left row">
                <div class="col-2 offset-md-3">OFFICE EMAIL</div>
                <div class="col-2  text-uppercase text-light" >{{ departments ? departments.office_email : "Not found"}}</div>

            </div>
            <div class="text-left row">
                <div class="col-2 offset-md-3">HOD EMAIL</div>
                <div class="col-3 text-uppercase text-light">{{ departments ? departments.hod_email: "Not found"}}</div>

            </div>
            <div class="text-left row">
                <div class="col-2 offset-md-3">INSTRUCTION</div>
                <div class="col-3 text-uppercase text-light">{{ subjects ? (subjects[selectedSub-1].is_theory ? 'Theory' : '') + '' + (subjects[selectedSub-1].is_lab ? 'Laboratory' : '') + '' + (subjects[selectedSub-1].is_project ? 'Project' : '') : "Not found"}}</div>

            </div>
            <div class="text-left row">
                <div class="col-2 offset-md-3">RATING</div>
                <b-form-rating  class="Subrating col-2 text-light" v-model="value" readonly no-border size="sm" variant="warning" color="white"></b-form-rating>
                <div><p class="pt-1 pr-4">{{ratingCount}} reviews</p> </div>
            </div>
            <div class="row offset-md-3 exploreSyllabus">
                <div> <a href="#syllabus">Syllabus</a> </div>
                <div class="pl-4"> <a href="#resources">Resources</a> </div>
                <div class="pl-4"> <a href="#performence">Performence</a> </div>
                <div class="pl-4"> <a href="#reviews">Review &amp; Rate</a> </div>
                <div class="pl-4"> <a href="#contact">Contact</a> </div>
            </div>
            <div class="explore offset-md-2">
                <div id="syllabus" class="col-10">
                    <b-card class="text-left card" text-variant="white">
                        <b-card-text>Syllabus
                            <svg @click="showSyllabus = !showSyllabus"  class="h-1 w-1 ml-1 cursor-pointer icon " fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path class="up" v-if="showSyllabus" d="M5 15l7-7 7 7"></path>
                            <path class="down" v-if="!showSyllabus" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    <transition name="slide-fade">
                        <div v-html="this.syllabus" v-show="showSyllabus" class="mt-3 text-white">
                        </div>
                    </transition>
                        </b-card-text>
                    </b-card>                    
                </div>
                
            </div>
            <div class="explore offset-md-2">
                <div id="resources" class="col-10">
                    <b-card class="text-left card" text-variant="white">
                        <b-card-text>Resources
                            <svg @click="showResources = !showResources"  class="h-1 w-1 ml-1 cursor-pointer icon " fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path class="up" v-if="showResources" d="M5 15l7-7 7 7"></path>
                            <path class="down" v-if="!showResources" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    <transition name="slide-fade">
                        <div v-show="showResources" class="mt-3 text-white">
                       <p> Resources here</p>
                        </div>
                    </transition>
                        </b-card-text>
                    </b-card>                    
                </div>
                
            </div>
            <div class="explore offset-md-2">
                <div id="performence" class="col-10">
                    <b-card class="text-left card" text-variant="white">
                        <b-card-text>Performance
                            <svg @click="showPerformance = !showPerformance"  class="h-1 w-1 ml-1 cursor-pointer icon " fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path class="up" v-if="showPerformance" d="M5 15l7-7 7 7"></path>
                            <path class="down" v-if="!showPerformance" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    <transition name="slide-fade">
                        <div v-show="showPerformance" class="mt-3 text-white">
                       <p> Performance here</p>
                        </div>
                    </transition>
                        </b-card-text>
                    </b-card>                    
                </div>
                
            </div>
            <div class="explore offset-md-2">
                <div id="reviews" class="col-10">
                    <b-card class="text-left card" text-variant="white">
                        <b-card-text>Reviews
                            <svg @click="showReviews = !showReviews"  class="h-1 w-1 ml-1 cursor-pointer icon " fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path class="up" v-if="showReviews" d="M5 15l7-7 7 7"></path>
                            <path class="down" v-if="!showReviews" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    <transition name="slide-fade">
                        <div v-show="showReviews" class="mt-3 offset-md-1 text-white">
                           <p>Ratings</p> 
                            <b-card-group deck class="col-md-12 col-lg-10">
                                <b-card bg-variant="default" header="Leave your rating here" class="text-left text-dark ">
                                    <form @submit.prevent="addRating" novalidate= "true">
                                        <b-row>
                                            <b-col class="col-4">
                                                <p>Email:</p>
                                             </b-col>
                                             <b-col class="col-10">
                                               <b-form-input v-model="email" name="email" :state="emailValidator" trim aria-describedby="input-live-help input-live-feedback"  type="email" id="email" placeholder="example@ksrmce.ac.in" required ></b-form-input>
                                             <b-form-invalid-feedback id="input-live-feedback">
                                                 Enter Valid Email
                                                </b-form-invalid-feedback>
                                                             </b-col>
                                                          </b-row>
                                                          <b-row class="pt-3">
                                                            <b-col class="col-md-4 col-lg-3 pt-2">
                                                                 <p>Select:</p>
                                                            </b-col>
                                                            <b-col class="col-md-8 col-lg-1">
                                                              <b-form-rating class="exportRating" type="rating" id="rating" no-border  required v-model="exportRating"></b-form-rating>
                                                            </b-col>
                                                        </b-row>
                                                           <b-row class="pt-4">
                                                            <b-col class="col-5">
                                                                 <p>Comment:</p>
                                                            </b-col>
                                                            <b-col class="col-10">
                                                              <b-form-textarea type="comment" id="comment" placeholder="Your Comment" required ></b-form-textarea>
                                                            </b-col>
                                                        </b-row>
                                                 <div>
                                                   <b-button class="mt-4" type="submit">Submit</b-button>
                                                 </div></form>
                                                 </b-card>
                                             </b-card-group>
                        </div>
                    </transition>
                        </b-card-text>
                    </b-card>                    
                </div>
                
            </div>
            <div class="explore offset-md-2">
                <div id="contact" class="col-10">
                    <b-card class="text-left card" text-variant="white">
                        <b-card-text>Contact
                            <svg @click="showContact = !showContact"  class="h-1 w-1 ml-1 cursor-pointer icon " fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path class="up" v-if="showContact" d="M5 15l7-7 7 7"></path>
                            <path class="down" v-if="!showContact" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    <transition name="slide-fade">
                        <div v-show="showContact" class="mt-3 text-white">
                       <p> Contact here</p>
                        </div>
                    </transition>
                        </b-card-text>
                    </b-card>                    
                </div>
                
            </div>
            <div>
</div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    created(){
        axios.get(`http://127.0.0.1:8000/api/subject`)
        .then(responce => this.subjects = responce.data)
        .catch(error => console.log(error));
    },
    methods:{
        getSyllabus(event){
            this.selectedSub = event,
            axios.get(`http://127.0.0.1:8000/api/subjects/${this.selectedSub}/syllabus`)
            .then(responce => this.syllabus = responce.data)
            .catch(error => console.log(error));
             axios.get(`http://127.0.0.1:8000/api/departments/${this.subjects[this.selectedSub].department_id}`)
            .then(responce => this.departments = responce.data)
            .catch(error => console.log(error));


        }
    },
    props:[
        'regulation','programLevel','program_level','selectedProgram'
      ,'Program' ,'selectedRegulation','regulations'
       ,'program_id','specializations','students','semesters'
    ],
    data(){
        return{
            subjects:null,
            selectedSub: null,
            syllabus:null,
            dept_name:null,
            hodEmail:null,
            officeEmail: null,
            instruction:null,
            rating: null,
            departments:null,
            value: 3,
            ratingCount: 10,
            showSyllabus: true,
            showReviews: true,
            showResources: true,
            showPerformance: true,
            showContact: true,
            visible:true,
            exportRating:null
        }
    },
    
    
}
</script>
<style>
.slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all .4s ease-in-out;
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(-20px);
        opacity: 0;
    }
.icon{
    width: 20px;
    height: 20px;
}
.card{
    background-color: #bcbcbc;
}
.Subrating{
  background-color: #45536b;

}
.exportRating{
    background-color: #bcbcbc !important ;
    border: none;
    border-block: none;

}
.exploreSyllabus{
    display: flex;
    text-decoration: none;
    list-style: none;
    align-content: center;
    align-items: center;
}
.exploreSyllabus div{
    color: whitesmoke;
}
.exploreSyllabus div a{
    color: whitesmoke; 
}

.exploreSyllabus div a:hover{
    text-decoration: none;
    color: white;
}
.subjects{
    margin-bottom: 20px;
}
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}

</style>