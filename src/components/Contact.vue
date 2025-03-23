<template>
    <div class="container">
        <h1 class="text-center">
            Users List
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
        </table>
        <a href="/"></a>

        <h2>Sign Up</h2>
        <form @submit.prevent="addUser">
            <div style="padding-bottom: 10px;">
                Username:
                <input type="text" v-model="username" required />
            </div>
            <div>
                Password:
                <input type="password" v-model="password" required />
            </div>

            <button type="submit">Add User</button>
        </form>
        <form @submit.prevent="deleteUser">
            <div style="padding-bottom: 10px;">
                UserId:
                <input type="number" v-model="userid" required />
            </div>
            <button type="submit">Delete User</button>
        </form>
        
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
