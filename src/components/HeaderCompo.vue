

<template>
  <div id="header">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/SignUp">SignUp</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderCompo",
};
</script>

<style scoped>

#header{
  background: #1862c9;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
