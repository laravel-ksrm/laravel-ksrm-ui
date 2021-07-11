<template>
<div id="Notifications">
    <div>
        {{this.length}}
    </div>
    <div v-if="nid">
        <div v-for="not in notification" :key="not.id">
         <div v-if="nid == not.id">
             <h4 class="mt-5"> {{not.name}} </h4>
             <div v-if="nid == 1" class="">
                    <b-img-lazy src="../assets/images/1/1.jpg" width="600px" height="800px"> </b-img-lazy>
<div class="pb-5">
                To download the notification <a href="" download="1.pdf">Click here</a>

             </div>
             </div>
             <div v-if="nid == 2" class="">
                    <b-img-lazy src="../assets/images/2/1.jpg" width="600px" height="800px"> </b-img-lazy>
<div class="pb-5">
                To download the notification <a href="" download="2.pdf">Click here</a>

             </div>
             </div>
             <div v-if="nid == 3" class="">
                    <b-img-lazy src="../assets/images/3/1.jpg" width="600px" height="800px"> </b-img-lazy>
<div class="pb-5">
                To download the notification <a href="" download="3.pdf">Click here</a>

             </div>
             </div>
             <div v-if="nid == 4" class="">
                    <b-img-lazy src="../assets/images/4/1.jpg" width="600px" height="800px"> </b-img-lazy>
<div class="pb-5">
                To download the notification <a href="" download="1.pdf">Click here</a>

             </div>
             </div>
             <div v-if="nid == 5" class="">
                    <b-img-lazy src="../assets/images/5/1.jpg" width="600px" height="800px"> </b-img-lazy>
<div class="pb-5">
                To download the notification <a href="" download="5.pdf">Click here</a>
</div>
             </div>
             </div>
             
             </div>
         </div>
    </div>
     

 
</template>

<script>
// const fs = require('fs');
// const length = fs.readdirSync('../assets/images/').length
export default {
    name:'notifications',
    created(){
        
            
    },
    methods:{    
    },
    data(){
        return{
            length:null,
            nid: this.$route.query.id,
            notification:[
        { id:1, name:'B.Tech. I Sem (R20) End Exams Time Table'},
        { id:2,name:'B.Tech. I Sem (R20) II Mid Exams Time Table'},
        { id:3,name:'B.Tech. II Sem. (R15&R18), IV Sem (R15&R18), VI Sem (R15&R18), II-II, III-II & IV-II (R14) Supple. Exams of July/August 2021 Notification'},
        { id:4,name:'M.Tech. I Sem (R18) Regular & Supple. Exams of July/August 2021 Notification'},
        { id:5,name:'B.Tech. VIII Sem (R15) Regular & Supple. - July-2021 Exams Time Table'}
      ]
            
        }
    },
    watch:{
        '$route' (to,from){
            if(from.query.id && to.query.id){ 
            this.$router.go()
            }
            else{
                this.nid = this.$route.query.id
            }
        }
    }
}
</script>
<style scoped>
#Notifications{
    background-color: white;
}
</style>