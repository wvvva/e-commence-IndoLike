<template>
    <div class="container">
        <div style="background-color: #a36161; width: 90vw; height: 70vh; margin-top: 30px; box-shadow: inset 2px 2px 10px rgba(37, 19, 19, 0.3); text-align: center; padding-top: 15vh;">
            <h1 style="font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-weight: 300; text-shadow: 3px 3px rgba(37, 19, 19, 0.3); font-size: 80px; letter-spacing: 2vw; ">E-COMMERCE</h1>
            <div class="textprompt" style="font-size: 18px; letter-spacing: 2px; font-style: italic; letter-spacing: 3px; color: #FFF1F1; font-weight: 200; margin-top: 5vh;">Join us now to enjoy your online shopping journey today!</div>
            
            <button class="loginButton" style="width: 150px; height: 40px; margin-top: 10vh;" @click="$router.push('/SignUp')">
                <span class="textprompt" style="color: #A24F4F; letter-spacing: 0.3dvw;">Sign Up</span>
            </button>
            <div style="display: flex; justify-content: center; padding-bottom: 35px; margin-top: 10px;"> 
                <span class="textprompt" style="font-size: 13px; color: #FFF1F1;">Already have an account? </span> 
                <a class="textprompt" href="/Login" style="font-size: 13px; color: #FFF1F1; font-style: italic; text-decoration: underline; margin-left: 8px; margin-right: 5px;">Login</a> 
                <span class="textprompt" style="font-size: 13px; color: #FFF1F1;"> here!</span> 
            </div>
        </div>
    </div>
</template>

<script>
import UserService from '@/service/UserService';

export default {
    name: "HomePage",
    data() {
        return {
            users: [],
            username: '',   
        };
    },
    methods: {
        getUsers() {
            UserService.getUsers().then((response) => {
                this.users = response.data;
            });
        },
        
        addUser() {
            UserService.addUser(this.username, this.password).then((response) => {
                console.log('User added:', response.data);
                this.users.push(response.data); 
                this.username = '';
            }).catch(error => {
                console.error('Error adding user:', error);
            });
        },

        deleteUser() {
            UserService.deleteUser(this.userid);
        }
    },
    create(){
        this.getUsers()
    }
};
</script>

<style scoped>
/* Add your styling here */
</style>
