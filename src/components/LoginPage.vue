<template>
  <div id='particles-js' class="login_page">
    <div id="title">
			<h2 class="text-uppercase">k.s.r.m college of engineering
        <br>(autonomous) <br>kadapa-516003, a.p, india

      </h2>
    </div>
      <div class="form-container sign-in-container"  v-if="show">
		<b-form  @submit="onSubmit" @reset="resetLoginForm">
			<p  class="text-dark text-uppercase signin">Sign in</p>

			<div class="social-container">
				<a href="#" class="social"><b-icon-facebook scale="2.7"></b-icon-facebook></a>
				<a href="#" class="social"><b-icon-google scale="2.7"></b-icon-google></a>
				<a href="#" class="social"><b-icon-linkedin scale="2.7"></b-icon-linkedin></a>
			</div>
			<span>Or</span>
      <b-form-group
        id="input-group-1"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="signin.username"
          class="mb-0"
          placeholder="Username or Reg No"
          required
        ></b-form-input>
      </b-form-group>      
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          class="mb-0 mt-0"
          v-model="signin.password"
          type="password"
          placeholder="Password"
          required
        ></b-form-input>
      </b-form-group>
      <div>
        <a href="#forgotPassword" @click="forgotPasswordActive">Forgot your password ?</a>
      </div>
			
			<button>Sign In</button>
      <p class="mt-2">Need an account?<a href="#signup" @click="signupActive"> Sign Up</a></p>
     
		</b-form>    
	</div>
  <div id="signup" v-if="showSignup">
    <div class="form-container sign-up-container">
<b-form  @submit="onSubmitRegister">
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
  <div id="forgotPassword" v-if="forgotPassword">
    <div class="form-container sign-up-container">
<b-form  @submit="onSubmitRegister">
			<p  class="text-dark text-uppercase signup">Forgot Password</p>
      <p class="text-light">Enter your Username or Email address to reset your password</p>

      <b-form-group
        id="input-group-1"
        label-for="input-1"
        class="text-left mt-0"
      >
        <b-form-input
          id="input-1"
          v-model="signup.name"
          type="name"
          class="mb-0"
          placeholder="Enter your Username or Email"
          required
        ></b-form-input>
      </b-form-group>
      
			<button>Reset password</button>
      <p class="mt-2 mb-0">Remember your password ?<a href="#login" @click="loginActive"> Sign In</a></p>
      <p>Need an account ?<a href="#signup" @click="signupActive"> Sign Up</a></p>
		</b-form>     
    </div>
  </div>
  <div v-if="islogin">
this is home page
  </div>
  </div>
  
</template>

<script>
// import axios from 'axios'
export default {
  
  name: 'LoginPage',
  data(){
    return{
      islogin: false,
signin: {
          username: '',
          password: '',
          
        },
        signup:{
          name: '',
          email:'',
          password: '',
          confirmPassword: ''
        },
        show: true,
        showSignup: false,
        forgotPassword: false
        
    }
  },

  mounted () {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },

  methods: {
    onSubmitRegister(event){
        event.preventDefault()
        alert(JSON.stringify(this.signup))
    },
    resetLoginForm(){
      this.username = '',
      this.password = ''
    },
    signupActive(){
      this.forgotPassword = false,
      this.show = false,
      this.showSignup = true,
      this.resetLoginForm()
    },
    loginActive(){
      this.forgotPassword = false,
      this.show = true,
      this.showSignup = false

    },
    forgotPasswordActive(){
      this.show = false,
      this.showSignup = false,
      this.forgotPassword = true
    },
    initParticlesJS () {
      /* eslint-disable */
      particlesJS('particles-js', {
        'particles': {
          'number': {
            'value': 80,
            'density': {
              'enable': true,
              'value_area': 500
            }
          },
          'color': {
            'value': '#ffffff'
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#000000'
            },
            'polygon': {
              'nb_sides': 8
            },
            'image': {
              'src': 'img/github.svg',
              'width': 100,
              'height': 100
            }
          },
          'opacity': {
            'value': 0.5,
            'random': false,
            'anim': {
              'enable': false,
              'speed': 1,
              'opacity_min': 0.1,
              'sync': false
            }
          },
          'size': {
            'value': 5,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 100,
              'size_min': 0.1,
              'sync': true
            }
          },
          'line_linked': {
            'enable': true,
            'distance': 300,
            'color': '#ffffff',
            'opacity': 0.4,
            'width': 2
          },
          'move': {
            'enable': true,
            'speed': 12,
            'direction': 'none',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'bounce': true,
            'attract': {
              'enable': false,
              'rotateX': 600,
              'rotateY': 1200
            }
          }
        },
        'interactivity': {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': true,
              'mode': 'repulse'
            },
            'onclick': {
              'enable': false,
              'mode': 'push'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 800,
              'line_linked': {
                'opacity': 1
              }
            },
            'bubble': {
              'distance': 800,
              'size': 80,
              'duration': 2,
              'opacity': 0.8,
              'speed': 3
            },
            'repulse': {
              'distance': 100,
              'duration': 0.8
            },
            'push': {
              'particles_nb': 4
            },
            'remove': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true
      })
    },
    onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.signin))
        
      }
  }

}
</script>

<style>
/* Your styles */
.signin{
  padding-top: 80px;
}
.signup{
  margin-top: 120px;
}
.login_page{
  font-family: "Times New Roman", Times, serif;

}
#title{
  position: absolute;
  width: 100%;
  margin-top: 5px;
  font-weight: bolder;
  font-family: "Times New Roman", Times, serif;
  color: yellow;
}
#particles-js {
width: 100%;
height: 90vh;
background: cornflowerblue;
}

.form-container a{
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
  margin-top: 0px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	padding: 12px 15px;
	margin: 8px 0;
	max-width: 330px;
  min-width: 350px;
}
.form-container {
	position: absolute;
  top:50%;
  left: 50%;
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  align-content: center;
	height: 100%;
}

.sign-in-container {
  
	width: 50%;
	z-index: 2;
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}

</style>