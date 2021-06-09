<template>
    <div id="app">
    <header>
      <div id="nav-bar">
         <app-nav></app-nav>
      </div>
      <router-view></router-view>
    </header>
    <main class="container">
    </main>

        <div id="footer">      
          <p>Copyright © 2021 KSRMCE. All rights Reserved</p>
        </div>
      </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppNav from './components/AppNav'
export default {
  name: 'App',

  components: {
    // HelloWorld,
    AppNav,
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
  min-height: 100vh;
  min-width: 400px;
  position: relative;
}

#footer {
  margin-top: auto;
  flex-shrink: 0;
  position:absolute;
  padding-top: 5px;
  margin-top: 50px;
  left: 0px;
  right: 0px;
  bottom:0px;
  height:40px;
  background:#2c3e50;
  color: whitesmoke;
}
#nav-bar{
  background-color: #2c3e50;
}
</style>