<template>
<div id='particles-js' class="login_page">
    <div id="title">
			<h2 class="text-uppercase">k.s.r.m college of engineering
        <br>(autonomous) <br>kadapa-516003, a.p, india

      </h2>
    </div>
    <div class="form-container sign-up-container">
<b-form  @submit.prevent="register">
			<p  class="text-dark text-uppercase signup">Sign up</p>
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        class="text-left mt-0"
        description="Enter your full name"
      >
        <b-form-input
          id="input-1"
          v-model="signup.name"
          type="name"
          class="mb-0"
          placeholder="Enter Full name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label-for="input-2"
        class="text-left"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-2"
          v-model="signup.email"
          type="email"
          class="mb-0 mt-0"
          placeholder="Email"
          required
        ></b-form-input>
      </b-form-group>      
      <b-form-group id="input-group-3" 
      label-for="input-3"
      class="text-left "
            >
        <b-form-input
          id="input-3"
          class="mb-0 mt-0"
          v-model="signup.password"
          placeholder="Password"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label-for="input-4">
        <b-form-input
          id="input-4"
          class="mb-0 mt-0"
          v-model="signup.confirmPassword"
          placeholder="Confirm your Password"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group v-if="signup.password != signup.confirmPassword"
       id="input-group-4" label-for="input-4"
       class="text-warning"
       description="Both Password and confirm Password should match.">
      </b-form-group>

			<button>Sign In</button>
      <p class="mt-2">Already an account?<a href="#login" @click="loginActive"> Sign In</a></p>
     
		</b-form>    
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        has_error: false,
        error: '',
        errors: {},
        success: false
      }
    },
    methods: {
      register() {
        var app = this
        this.$auth.register({
          data: {
            email: app.email,
            password: app.password,
            password_confirmation: app.password_confirmation
          },
          success: function () {
            app.success = true
            this.$router.push({name: 'login', params: {successRegistrationRedirect: true}})
          },
          error: function (res) {
            console.log(res.response.data.errors)
            app.has_error = true
            app.error = res.response.data.error
            app.errors = res.response.data.errors || {}
          }
        })
      }
    }
  }
</script>