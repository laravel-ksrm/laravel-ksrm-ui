<template>
  <div class="hello">
   <p>This is home page</p>
    
</div>
</template>


<script>


export default {
  name: 'HelloWorld',
  components:{
    
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
