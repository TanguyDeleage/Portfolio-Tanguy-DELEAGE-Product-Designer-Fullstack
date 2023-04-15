<script>
import headerItem from './components/Header.vue'
export default {
  name: 'App',
  components: {
    headerItem,
  }
}
</script>


<template>
   <headerItem />
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
