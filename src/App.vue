<template>
  <div id="app">
    <nav>
        <div style="width: 80px; height: 30px; margin-left: 10vw; margin-top: 60px"></div>
        <router-link to="/" style="  margin-top: 60px;">HOME</router-link>
        <router-link to="/Catalog" style="  margin-top: 60px;">CATALOG</router-link>
        <router-link to="/Contact" style="  margin-top: 60px;">CONTACT</router-link>
        <div v-if="username" class="user-container" @click="toggleDrawer" style="margin-right: 5vw; margin-left: 10vw;">
          <span class="loginLink" style="color: #FFF1F1; letter-spacing: 2px; font-style: italic; text-decoration: underline;">Hi, {{ username }}</span>
          <div v-if="showDrawer" class="drawer">
            <span @click="cart">My Cart</span>
            <span @click="logout">Logout</span>
          </div>
        </div>

        <div v-else class="loginButton" style="margin-right: 5vw; margin-left: 10vw; margin-top: 55px;">
          <router-link class="loginLink" to="/Login" >Login</router-link>
        </div>
    </nav>
    
    <router-view></router-view>
    <div style="width: 100%; height: 30px; margin-top: 60px; text-align: center; font-size: 11px;" class="textprompt">&copy; 2025 Vanessa Wei. Full-stack project for IndoLike intern program.</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      username: sessionStorage.getItem('username') || null, 
      showDrawer: false
    };
  },
  methods: {
    toggleDrawer() {
      this.showDrawer = !this.showDrawer;
    },
    logout() {
      sessionStorage.removeItem('username'); 
      this.username = null;
      this.showDrawer = false;
      this.$router.push('/'); 
    },
    cart() {
      this.$router.push("/Cart");
    }
  }
};
</script>

<style>

body {
  background-color: #FFF1F1;
  margin: 0;
  padding: 0;

}

.textprompt{
  font-size: 12;
  letter-spacing: 2px;
  color: #5B5B5B
}

.loginLink{
  letter-spacing: 0.3dvw; 
  color: #A24F4F; 
  margin: 3px 0px 0px 2px;
}

.loginLink.router-link-active{
  font-style: normal;
  font-weight: normal;
}

.loginButton{
  width: 80px; 
  height: 30px; 
  background-color: #FFF1F1; 
  border-radius: 5px; 
  text-align: center;
  border: none;
}

.loginButton:hover {
  background-color: #f8e9e9!important;
}

.user-container {
  width: 80px; 
  height: 30px; 
  color: #A24F4F;
  margin-top: 35px;
  margin-right: 30px;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%; 
  height: 105px; 

  background-color: #A24F4F;
  text-align: left;
  box-shadow: 2px 2px 10px rgba(37, 19, 19, 0.3);
}

a {
  color: #FFF1F1; 
  text-decoration: none;
  font-size: 16px;
  font-weight: 400; 
  letter-spacing: 0.5dvw;

  display: inline-block; 
}

a:hover {
  color: #dbcbcb;
}

h1 {
  color: #FFF1F1;
  letter-spacing: 0.5dvw;
}

.router-link-active, .router-link-exact-active {
  font-weight: 1000; 
  color: #ffffff;
  font-style: oblique;
}

.textfield{
  border-radius: 5px;
  box-shadow: none;
  border: none;
  height: 40px;
  margin-bottom: 10px;
  margin-top: 10px
}



.drawer {
  position: absolute;
  top: 100px;
  right: 0;
  background: #FFF1F1;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 120px;
  margin-right: 30px;
}

.drawer span, .drawer a {
  padding: 10px;
  text-align: center;
  cursor: pointer;
  color: #A24F4F;
  border-radius: 10px;
  text-decoration: none;

}

.drawer span:hover, .drawer a:hover {
  background: #f8d7da;
}
</style>