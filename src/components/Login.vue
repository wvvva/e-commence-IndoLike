<template>
    <div class="container" style="height: 100%; display: flex; margin-top: 10vh; justify-content: center;">
        <div style="width:40vw; height: 50vh; background-color: #CA9191;">
            <h1 class="text-center" style="margin-top:5vh;">
            LOGIN
            </h1>
            <form @submit.prevent="verifyUser" style="margin-top:4vh; text-align: center;">
                <div style="display: flex; justify-content: center;">
                    <input type="text" v-model="username" required class="textfield" placeholder="Enter Your Username Here" style="width: 25vw; font-style: italic; padding-left: 10px; font-size: 13px;">
                </div>
                <div style="display: flex; justify-content: center;">
                    <input type="password" v-model="password" required class="textfield" placeholder="Enter Your Password Here" style="width: 25vw; font-style: italic; padding-left: 10px; font-size: 13px;"/>
                </div>
                <div style="display: flex; justify-content: center; padding-bottom: 35px; margin-top: 10px;"> 
                    <span class="textprompt" style="font-size: 13px; color: #FFF1F1;">Doesn't have an account? </span> 
                    <a class="textprompt" href="/SignUp" style="font-size: 13px; color: #FFF1F1; font-style: italic; text-decoration: underline; margin-left: 8px; margin-right: 5px;">Sign up </a> 
                    <span class="textprompt" style="font-size: 13px; color: #FFF1F1;"> now!</span> 
                </div>
                <button class="loginButton" style="width: 100px; height: 40px; " type="submit">
                    <span class="textprompt" style="color: #A24F4F; letter-spacing: 0.3dvw;">Login</span>
                </button>
            </form>
        </div>

    </div>
</template>

<script>
import UserService from '@/service/UserService';

export default {
    name: "LoginPage",
    data() {
        return {
            username: '',   
            password: '',
            userId: '',   
        };
    },
    methods: {
        verifyUser() {
            UserService.verifyUser(this.username, this.password).then((response) => {
            if (!response.data) {  
                alert("Username or password is not correct");
            } else {
                sessionStorage.setItem("username", response.data.username);
                sessionStorage.setItem("userId", response.data.userId);
                this.$root.username = response.data.username;
                this.$root.userid = response.data.userid;
                console.log(sessionStorage)
                this.$router.push("/");
            }
        })
        .catch((error) => {
            console.error("Login failed:", error);
            alert("An error was occurred. Please try again.");
        });
        },
    },

};
</script>

<style scoped>
/* Add your styling here */
</style>
