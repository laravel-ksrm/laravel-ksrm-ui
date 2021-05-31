<template>
  <div class="hello">
   <p>This is home page</p>
   <div>
    <!--
      <b-carousel
      id="carousel-1"
      class="col-sm-11 col-xs-12"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    
      <b-carousel-slide
        img-src="../assets/images/carousel/aa.jpg"
      ></b-carousel-slide>
      
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
    </b-carousel>
-->
  
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
      return {
        slide: 0,
        sliding: null
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
