<template>
    <div id="app">
    <header>
      <div id="nav-bar">
         <app-nav></app-nav>
      </div>
      <router-view></router-view>
    </header>
    <main class="container">
      <div id="footer">
      <p>Copyright © 2021 KSRMCE. All rights Reserved</p>
      </div>
    </main>
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppNav from './components/AppNav'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    AppNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
}

#footer {
   position:fixed;
   left:0px;
   bottom:0px;
   height:30px;
   width:100%;
   background:#2c3e50;
   color: whitesmoke;
}
#nav-bar{
  background-color: #2c3e50;
  color: white;
}
</style>
