<template>
<div id="Admin">
  <p>This is Admin page</p>
  <!-- <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      accept=".jpg, .png, .gif"
      
    ></b-form-file>
    <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
    <b-button
    class="mt-3"
      v-on:click="submit()">submit</b-button>
      <p>{{this.msg}}</p> -->
</div>
  
</template>

<script>
// import axios from 'axios';
export default {
  data(){
    return{
      // name: null,
      // file: null,
      // success: null,
      // msg: "Not selected"
    }
    
  },
  methods:{
    // submit(){
    //             let existingObj = this;

    //             const config = {
    //                 headers: {
    //                     'content-type': 'multipart/form-data'
    //                 }
    //             }

    //             let data = new FormData();
    //             data.append('file', this.file);

    //             axios.post('http://127.0.0.1:8000/api/upload', data, config)
    //                 .then(function (res) {
    //                     existingObj.success = res.data.success,
    //                     this.msg="Upload success",
    //                     console.log('Upload successful')
    //                 })
    //                 .catch(function (err) {
    //                     existingObj.output = err;
    //                 });
    // },
    // studentsDataUpload(){
    //   this.file = this.$refs.file.files[0];

    // }
  }
}
</script>
<style>
#Admin{
  background-color: white;
}
</style>