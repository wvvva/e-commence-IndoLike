<template>
    <div class="container" style="display: flex; justify-content: space-around; margin: 10vh">
        <div style="width: 30%">
            <img src="https://i0.wp.com/dirt.asla.org/wp-content/uploads/2023/01/beltline-map.jpg?ssl=1" alt="" style="width: 30vw; margin-left: 5vw;">
        </div>
        <div style="width: 70%; text-align: center;">
            <h1 class="text-center" style="font-size: 40px; color: #A24F4F; margin-bottom: 8vh; margin-top: 7vh; font-weight: 800;">
                CONTACT US
            </h1>
            <div class="textprompt">
                <span style="font-weight: 600; margin-right: 30px;">Number: </span>
                (xxx)xxx-xxxx
            </div>
            <div class="textprompt" style="margin-top: 4vh;">
                <span style="font-weight: 600; margin-right: 30px;">Email: </span>
                email@example.com
            </div>
            <div class="textprompt" style="margin-top: 4vh;">
                <span style="font-weight: 600; margin-right: 30px;">Address: </span>
                1111 xxxxx Road, xxxx, xx, 00000
            </div>
        </div>
        
        
        <a href="/"></a>

        
    </div>
</template>

<script>
import UserService from '@/service/UserService';

export default {
    name: "WebHome",
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
