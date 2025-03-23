<template>
  <div class="container" style="height: 100%; display: flex; margin-top: 10vh; justify-content: center;">
      <div style="width:40vw; height: 55vh; background-color: #CA9191;">
          <h1 class="text-center" style="margin-top:5vh;">
          SIGN UP
          </h1>
          <form @submit.prevent="addUser" style="margin-top:3vh; text-align: center;">
              <div style="display: flex; justify-content: center;">
                  <input type="text" v-model="username" required class="textfield" placeholder="Enter Your Username Here" style="width: 25vw; font-style: italic; padding-left: 10px; font-size: 13px;">
              </div>
              <div style="display: flex; justify-content: center;">
                  <input type="password" v-model="password" required class="textfield" placeholder="Enter Your Password Here" style="width: 25vw; font-style: italic; padding-left: 10px; font-size: 13px;"/>
              </div>
              <div style="display: flex; justify-content: center;">
                  <input type="password" v-model="password2" required class="textfield" placeholder="Re-enter Your Password to Confirm" style="width: 25vw; font-style: italic; padding-left: 10px; font-size: 13px;"/>
              </div>
              <div style="display: flex; justify-content: center; padding-bottom: 35px; margin-top: 10px;"> 
                  <span class="textprompt" style="font-size: 13px; color: #FFF1F1;">Already have an account? </span> 
                  <a class="textprompt" href="/Login" style="font-size: 13px; color: #FFF1F1; font-style: italic; text-decoration: underline; margin-left: 8px; margin-right: 5px;">Login</a> 
                  <span class="textprompt" style="font-size: 13px; color: #FFF1F1;"> here!</span> 
              </div>
              <button class="loginButton" style="width: 150px; height: 40px; " type="submit">
                  <span class="textprompt" style="color: #A24F4F; letter-spacing: 0.3dvw;">Sign Up</span>
              </button>
          </form>
      </div>

  </div>
</template>

<script>
import UserService from '@/service/UserService';

export default {
  name: "SignupPage",
  data() {
      return {
          username: '',   
          password: '',
          userId: '',
      };
  },
  methods: {
    addUser() {
            UserService.addUser(this.username, this.password).then((response) => {
              if (!response.data) {  
                alert("The username is already existed");
            } else {
                this.$router.push("/Login")
            }
            }).catch(error => {
                console.error("Login failed:", error);
                alert('An error occurred. Try again later.');
            });
        },
  },

};
</script>

<style scoped>
/* Add your styling here */
</style>
