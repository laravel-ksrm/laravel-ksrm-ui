<template>
  <div class="hello">
   <div v-if="isLogin">
    <login/>
    
    </div>
    <div v-else>
      This is Home Page
    </div>
</div>
</template>


<script>

import login from './LoginPage.vue'
export default {
  name: 'HelloWorld',
  components:{
    login
  },
  props: {
    msg: String
  },
  data() {
      return {
        isLogin: true
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color: white;
}
</style>
