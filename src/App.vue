<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'About'}">About</router-link> |
    <router-link to="/jobs">Job</router-link>
  </div>
  <button @click="redirect" >Redirect</button>
  <button @click="back">back</button>
  <button @click="forword">Forword</button>
  <router-view/>
</template>

<script>
export default{
methods:{
  redirect(){
    this.$router.push({name:'Home'})
  },
  back(){
    this.$router.go(-1)
  },
  forword(){
    this.$router.go(1)
  }
}
}

</script>





<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
