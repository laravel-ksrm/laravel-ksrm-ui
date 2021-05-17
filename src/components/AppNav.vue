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
          to="/"
          class="nav-link"
          active-class="active"
          exact
        >Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-555" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Programs
            </a>
            <div class="dropdown-menu dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-555">
              <li class="nav-item">
            <router-link
          to="syllabus"
          class="dropdown-item waves-effect waves-light"
          active-class="active"
          exact
        >Syllbus</router-link>
        </li>
              <li class="nav-item">
            <router-link
          to="regulations"
          class="dropdown-item waves-effect waves-light"
          active-class="active"
          exact
        >Regulations</router-link>
          </li> 
          <li class="nav-item">
            <router-link
          to="departments"
          class="dropdown-item waves-effect waves-light"
          active-class="active"
          exact
        >Departments</router-link>
        
          </li>
          
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
            <a href="#" class=" popover-test" title="Header" data-toggle="popover" data-placement="bottom" data-content="Content">
            <router-link
          to="notifications"
          class="nav-link"
          exact
        ><img src="../assets/images/notification.jpg" style="border-radius: 80%;
    width: 35px;
    height: 30px; "><sup>1000</sup>
                </router-link></a>
          </li>
          <li class="nav-item avatar dropdown">
            <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-55" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <img src="../assets/images/avatar.png" alt="avatar image" style="border-radius: 80%;

    width: 35px;
    height: 30px; ">
            </a>
            
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
    </nav>
    <!--/.Navbar -->
    
</template>
<script>
export default {

}
</script>
<style scoped>
.nav-link {
color: white !important;
}
ul li a:hover{
  text-decoration: none;
}
</style>