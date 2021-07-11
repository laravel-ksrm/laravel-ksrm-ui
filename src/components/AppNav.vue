<template>
    <!--Navbar -->
    <nav class=" navbar navbar-expand-sm navbar-light ">
        <router-link
          to="/"
          class="navbar-brand nav-link"
          active-class="active"
          exact
        >KSRMCE</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555" aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarSupportedContent-555">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item">
            <router-link
          to= '/'
          class="nav-link"
          active-class="active"
          exact
        >Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-555" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Programs
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink-555">
              
              <li class="nav-item">
            <router-link
          to="academics"
          class="dropdown-item waves-effect waves-light"
          active-class="active"
          exact
        >Academics</router-link>
          </li><b-dropdown-divider></b-dropdown-divider>
          <li class="nav-item">
            <router-link
          to="departments"
          class="dropdown-item"
          active-class="active"
          exact
        >Departments</router-link>
        
          </li><b-dropdown-divider></b-dropdown-divider>
          
        <li class="nav-item">
            <router-link
          to="batchmates"
          class="dropdown-item waves-effect waves-light"
          active-class="active"
          exact
        >BatchMates</router-link>
        
          
          </li>
            </div>
          </li>
          <li class="nav-item">
            <router-link
          to="results"
          class="nav-link"
          active-class="active"
          exact
        >Results</router-link>
          </li> 
          <li class="nav-item">
            <router-link
          to="admin"
          class="nav-link"
          active-class="active"
          exact
        >Admin</router-link>
        
          </li>
        </ul>
        <ul class="navbar-nav nav-flex-icons">
          <li class="nav-item">
            <router-link
            to=""
          id="popover-target-1"
          class="nav-link "
          exact
        >
        <b-icon icon="bell-fill" class="rounded-circle border border-light p-1" style="width:28px;height:25px;" variant="info"></b-icon><sup> {{ notificationCount}} </sup>
                </router-link>
          </li>
          <li class="nav-item avatar dropdown" v-if="login">
            <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-55" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              
            <b-avatar button src="https://placekitten.com/300/300" style="width:30px;height:28px;"></b-avatar></a>
            <div class="dropdown-menu dropdown-menu-lg-right" aria-labelledby="navbarDropdownMenuLink-55">
              <li>
            <router-link
          to="profile"
          class="dropdown-item"
          exact
        >Profile</router-link>
        
          </li>
              <li>
            <router-link
          to="logout"
          class="dropdown-item"
          exact
        >Logout</router-link>
        
          </li>
            </div>
          </li>
          <li class="nav-item" v-else>
            <li class="nav-item">
            <router-link
          to="login"
          class="nav-link"
                    active-class="active"

          exact
        >Login</router-link>
        
          </li>
        </ul>
        
      </div>
      <b-popover target="popover-target-1" variant="success" triggers="hover focus" placement="top">
    <template #title>Notifications</template>
    <div  class="not_list" v-for="noti in notification" :key="noti.id">
  <p class="not_link">
    <router-link
            :to="{ path: 'notifications',query:{id:noti.id}}"
          exact
        > {{noti.id}}.{{noti.name}} <hr class="mt-0 mb-0"></router-link> 
        </p>
  </div>
  <div class="text-right not_link">
    <router-link
    
            to='notifications'
          class="text-danger"
          exact
        >To get More </router-link></div>
    
    </b-popover>
    </nav>
    <!--/.Navbar -->
    
</template>
<script>
export default {
  data(){
    return{
      login:false,
      // pop: false,
      notificationCount: 5,
      notification:[
        { id:1, name:'B.Tech. I Sem (R20) End Exams Time Table'},
        { id:2,name:'B.Tech. I Sem (R20) II Mid Exams Time Table'},
        { id:3,name:'B.Tech. II Sem. (R15&R18), IV Sem (R15&R18), VI Sem (R15&R18), II-II, III-II & IV-II (R14) Supple. Exams of July/August 2021 Notification'},
        { id:4,name:'M.Tech. I Sem (R18) Regular & Supple. Exams of July/August 2021 Notification'},
        { id:5,name:'B.Tech. VIII Sem (R15) Regular & Supple. - July-2021 Exams Time Table'}
      ]
    }
  },
  methods:{
      
  }
}
</script>
<style scoped>
.not_list{
  list-style-type:none;
}
.not_list h6{
  cursor: pointer;
}
.not_list li{
  margin-left: 0px;
  margin-right: 0px;
  /* padding-left: -50px; */
  text-align: left;
}
.not_link a{
  color: black;
}
.not_link a:hover{
  color: black;
  text-decoration: none;
}
ul li:hover div.dropdown{
  display: block;
}
.nav-link {
color: white !important;
font-weight: bolder;
backface-visibility: hidden;
}
ul li a:hover{
  text-decoration: none;
}
.dropdown{
  border-radius: 8px;
  margin-top: 0px;
  padding-top: -3px;
}

</style>