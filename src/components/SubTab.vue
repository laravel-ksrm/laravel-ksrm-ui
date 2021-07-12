<template>
    <div class="subjects">
        <div class="row">
        <div class="text-left col-md-2 col-lg-1   offset-lg-3 offset-md-1 pt-2">Subject: </div>
        <div v-if="subjects" class="col-4">
            <div>
                <b-form-input type="text" class="form-control" @input="isTyping = true" v-model="searchQuery" placeholder="Type Subject Name or Code">
            </b-form-input><div v-if="isLoading">
                <b-icon icon="three-dots" animation="cylon" font-scale="2"></b-icon>
            </div>
            <div>
                <!-- {{searchResult}} -->
                <!-- {{selectedSub}} -->
            </div>
            <b-form-select
      :options="searchResult"
      value-field="id"
      text-field="name"
      v-model="selectedSub"
       @change="getSyllabus($event)"
      disabled-field="Enabled"
    >
    <template v-slot:first>
        <b-form-select-option :value= null disabled selected>Please select a Program</b-form-select-option>
      </template></b-form-select>
            <!-- </div> -->
            
            <!-- <b-dropdown class="bd" variant="outline-none" text="Search Results are..">
<b-dropdown-item v-for="i in searchResult" :key="i" @click="select(i)"> {{i.name}} </b-dropdown-item>

    </b-dropdown> -->
            <!-- <b-button variant="outline-none" type="submit" @click.prevent="clearSearch"><b-icon class="cs" icon="x-circle"></b-icon></b-button> -->
            </div>

        </div>
        <div v-else class="  pt-2">Not Found</div>
        </div>
        
        <div v-if="selectedSub" class="pt-3">
            <div class="text-left row">
                <div class="col-2 offset-md-3">CODE</div>
                <div class="col-2 text-uppercase ">{{ subjects ? subjects[selectedSub-1].code : "Not found"}}</div>

            </div>
            <div class="text-left row">
                <div class="col-2 offset-md-3">DEPARTMENT</div>
                <div class="col-5 text-uppercase">{{ departments ?  departments.name : "Not found"}}</div>

            </div>
            <div class="text-left row">
                <div class="col-2 offset-md-3">OFFICE EMAIL</div>
                <div class="col-2  text-uppercase " >{{ departments ? departments.office_email : "Not found"}}</div>

            </div>
            <div class="text-left row">
                <div class="col-2 offset-md-3">HOD EMAIL</div>
                <div class="col-3 text-uppercase ">{{ departments ? departments.hod_email: "Not found"}}</div>

            </div>
            <div class="text-left row">
                <div class="col-2 offset-md-3">INSTRUCTION</div>
                <div class="col-3 text-uppercase ">{{ subjects ? (subjects[selectedSub-1].is_theory ? 'Theory' : '') + '' + (subjects[selectedSub-1].is_lab ? 'Laboratory' : '') + '' + (subjects[selectedSub-1].is_project ? 'Project' : '') : "Not found"}}</div>

            </div>
            <div class="text-left row">
                <div class="col-2 offset-md-3">RATING</div>
                <b-form-rating  class="Subrating col-2 " v-model="value" readonly no-border size="sm" variant="warning" color="white"></b-form-rating>
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
                        <div v-if="syllabus" v-html="this.syllabus" v-show="showSyllabus" class="mt-3 text-dark">
                        </div>
                        <div v-else v-show="showSyllabus" class="mt-3"> Not Found </div>
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
                        <div v-show="showResources" class="mt-3 text-dark">
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
                        <div v-show="showPerformance" class="mt-3 text-dark">
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
                        <div v-show="showReviews" class="mt-3 offset-md-1 text-dark">
                           <p>To give Review for <b>{{subjects[selectedSub-1].name}}</b> , Plese fill the below form</p> 
                            <b-card-group deck class="Fcard col-md-12 col-lg-11">
                                <b-card bg-variant="default" header="Leave your FeedBack here" class="text-left text-dark ">
                                    <form @submit.prevent="addFeedBack" class="text-left">
                                        <div class="row">
                                            <div class="col-lg-4 pt-3">Email:</div> 
                                            <div class="col-lg-4">
                                                <b-form-input v-model="email" name="email" trim  type="email" id="email" placeholder="example@example.com" required ></b-form-input>
                                            </div>
                                       
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-lg-4 pt-3">Rating:</div> 
                                            <div class="col-lg-4">
                                                <b-form-rating id="rating-md-no-border" class="Frating" trim type="rating" no-border  required v-model="exportRating"></b-form-rating>
                                            </div>
                                       
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-lg-4 pt-3">Comments:</div> 
                                            <div class="col-lg-4">
                                                <b-form-textarea type="comment" id="comment" class="Fcomment" placeholder="Your Comment" required ></b-form-textarea>
                                            </div>
                                       
                                        </div>
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
                        <div v-show="showContact" class="mt-3 text-dark">
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
import debounce from 'lodash/debounce';
export default {
    created(){
        axios.get(`http://127.0.0.1:8000/api/subjects`)
        .then(responce => this.subjects = responce.data)
        .catch(error => console.log(error));
    },
    methods:{
        clearSearch() {
      this.searchQuery = ''
    },
        searchUser: function(searchQuery) {this.isLoading = true;
      axios.get('http://127.0.0.1:8000/api/subjects/' + searchQuery)
        .then(response => {this.isLoading = false;
          this.searchResult = response.data.data;
        });
    },
            addRating(context) {
      return new Promise((resolve, reject) => {
        axios.post('/subjects/' + this.selectedSub + '/ratings', {
          author_email: this.email,
          stars: this.exportRating,
          comment: this.comment
        })
        .then(response => {
          context.commit('appendSubjectRating', response.data)
          resolve(response)
        })
        .catch(error => {
          if (error.response) {
            reject(error.response.data)
          } else {
            reject(error.message)
          }
        })
      }
    )},
        getSyllabus(event){
            this.selectedSub = event,
            console.log(this.selectedSub)
            axios.get(`http://127.0.0.1:8000/api/subjects/${this.selectedSub}/syllabus`)
            // .then(response => console.log(response))
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
    watch: {
    searchQuery: debounce(function() {
      this.isTyping = false;
    }, 1000),
    isTyping: function(value) {
      if (!value) {
        this.searchUser(this.searchQuery);
      }
    }
  },
    data(){
        return{
            searchQuery: "",
            isTyping: false,
            searchResult: [],
            isLoading: false,
            subjects:null,
            selectedSub: null,
            syllabus:null,
            dept_name:null,
            hodEmail:null,
            officeEmail: null,
            instruction:null,
            exportRating: null,
            departments:null,
            email: '',
            comment: '',
            value: 3,
            ratingCount: 10,
            showSyllabus: true,
            showReviews: true,
            showResources: true,
            showPerformance: true,
            showContact: true,
            visible:true,
        }
    },
    
    
}
</script>
<style>
.Frating{
    width: 450px;
}
.Fcomment{
    width: 350px;
}
.Fcard{
    align-content: center;
}
.sublist{
    list-style-type: none;
}
.sublist li{
    background-color: white;
}
.cs:focus {
    outline: none !important;
}
.csb{
    display: flex;
    width: max-content;
    outline: darkgray !important;
}

.b-dropdown-menu {
  height: 256px;
  overflow-y: scroll;
  padding-top: 0;
}
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
    background-color: lightgray;
}
.Subrating{
  background-color: darkgray !important;


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
.inputRow{
    width: 100px;
}
</style>