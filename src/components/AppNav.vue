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
          to= null
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
          <!--  A simple Dropdown -->
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-555" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Dropdown
            </a>
            <div class="dropdown-menu dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-555">
              <a class="dropdown-item waves-effect waves-light" href="#">Action</a>
              <a class="dropdown-item waves-effect waves-light" href="#">Another action</a>
              <a class="dropdown-item waves-effect waves-light" href="#">Something else here</a>
            </div>
          </li> -->
        </ul>
        <ul class="navbar-nav nav-flex-icons">
          <li class="nav-item">
            <router-link
            to=""
            @click="noti_open"
          id="popover-target-1"
          class="nav-link "
          exact
        >
        <b-icon icon="bell-fill" class="rounded-circle bg-light" style="width:28px;height:25px;" variant="info"></b-icon><sup> {{ notificationCount}} </sup>
                </router-link>
          </li>
          <li class="nav-item avatar dropdown">
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
        </ul>
        
      </div>
      <b-popover target="popover-target-1" variant="success" :show.sync="pop" triggers="click" placement="top">
    <template #title>Notifications</template>
    <ul style="list-style-type:none" v-for="noti in notification" :key="noti.name">
  <li>{{noti.name}}</li>
  </ul>
  <b-button @click="onClose">Close</b-button>
  </b-popover>
    </nav>
    <!--/.Navbar -->
    
</template>
<script>
export default {
  data(){
    return{
      pop: false,
      notificationCount: 10,
      notification:[
        { name:'1 st notification'},
        { name:'2 nd notification'},
        { name:'3 rd notification'},
        { name:'4 th notification'},
        { name:'5 th notification'}
      ]
    }
  },
  methods:{
    noti_open(){
      this.pop = true
    },
    onClose() {
        this.pop = false
      }
  }
}
</script>
<style scoped>

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