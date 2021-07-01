import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export default{
    data() {
      return {
        tabIndex: 0,
        bordered: true,
        regulations: [],
        program: '',
        academicYearDuration:null,
        getSemCount: null,
        curriculuLength: null,
        curriculumCategories:[],
        NoOfStudents: 2000,
        selectedRegulationLabel: '',
        selectedItem: '',
        creedits_table:[
            { key: 'Semester'},
          { key: 'Total_credits'}
        ],
        r14ug:[
            {'Semester':'First Year','Total_credits':45},
            {'Semester':'Third Semester','Total_credits':22},
            {'Semester':'Fourth Semester','Total_credits':22},
            {'Semester':'Fifth Semester','Total_credits':22},
            {'Semester':'Sixth Semester','Total_credits':22},
            {'Semester':'Seventh Semester','Total_credits':22},
            {'Semester':'Eighth Semester','Total_credits':25},
            {'Semester':'Total for entire course','Total_credits':180}
        ],
        r15ug:[
            {'Semester':'First Semester','Total_credits':22},
            {'Semester':'Second Semester','Total_credits':22},
            {'Semester':'Third Semester','Total_credits':22},
            {'Semester':'Fourth Semester','Total_credits':22},
            {'Semester':'Fifth Semester','Total_credits':22},
            {'Semester':'Sixth Semester','Total_credits':22},
            {'Semester':'Seventh Semester','Total_credits':22},
            {'Semester':'Eighth Semester','Total_credits':26},
            {'Semester':'Total for entire course','Total_credits':180}
        ],
        r14pg:[
            {'Semester':'First Semester','Total_credits':26},
            {'Semester':'Second Semester','Total_credits':26},
            {'Semester':'Third Semester','Total_credits':2},
            {'Semester':'Fourth Semester','Total_credits':16},
            {'Semester':'Total for entire course','Total_credits':70}
        ],
        r18pg:[{'Semester':'First Semester','Total_credits':18},
            {'Semester':'Second Semester','Total_credits':18},
            {'Semester':'Third Semester','Total_credits':16},
            {'Semester':'Fourth Semester','Total_credits':16},
            {'Semester':'Total for entire course','Total_credits':68}],

        items:[
               {sname: 1,name:'Nomenclature'},
               {sname: 2,name:'Short Title And Application'},
               {sname: 3,name:'Suspension And Amendment Of Rules'},
               {sname: 4,name:'Requirements For Admission'},
               {sname: 5,name:'Structure Of The B. Tech Course'},
               {sname: 6,name:'Registration And Enrolment'},
               {sname: 7,name:'Assessment Procedure – Internal Tests And End Examinations'},
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
    linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-danger', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      },
    getStudentCount(){},
    getSemesterNames(){
        for (var prop in this.regulation.semesters) {
        console.log(this.regulation.semesters[prop])
        }
        console.log(this.regulation.semester)
    },
    getRegulationEndYear(){
      if (this.regulation.end_year == null) {
        return 'InForce'
      }
      else{
        return this.regulation.end_year
      }
    },
    curriculumCount(){
      if(this.regulation.short_name == 'R15UG' || this.regulation.short_name == 'R14UG'){
        this.curriculumCategories = [
          { sname:'BS',name:'Basic Science'},
          { sname:'HS',name:'Humanities and Social Sciences'},
          { sname:'ED',name:'Basic Engineering and Design'},
          { sname:'PJ',name:'Professional Major'},
          { sname:'PN',name:'Professional Minor'}
        ]
        return (this.curriculuLength = 'five')
      }
      else{
        this.curriculumCategories = [
          { sname:'BSc',name:'Basic Science'},
          { sname:'HSMC',name:'Humanities and Social Sciences including Management Courses'},
          { sname:'ESC',name:' Engineering Science Courses'},
          { sname:'PCC',name:'Professional Core Course'},
          { sname:'PEC',name:'Professional Elective Course'},
          { sname:'OEC',name:'Open Elective Course'}
        ]
        return (this.curriculuLength = 'six')
      }
    },
    getSemesterCredits(){
      axios.get(`http://127.0.0.1:8000/api/credits/sp/${this.specialization_id}/${this.semester_id}`)
      .then(response => this.credits = response.data)
      .catch(error => console.log(error));
      
    },
    getSemCounts(){
      if(this.regulation.semesters.length == 8 || this.regulations.semesters.length == 7){
        return this.getSemCount = 'Eight'
      }
      else{
        return this.getSemCount = 'Four'
      }
    },
    academicYears(program_level){
      if(program_level == 1){
        return this.academicYearDuration = 'four'
      }
      else{
        return this.academicYearDuration ='two'
      }

    },
    
  },
  components:{
  }
}