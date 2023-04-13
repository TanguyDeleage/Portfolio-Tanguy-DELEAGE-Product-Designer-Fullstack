<template>
 <header>
      <div class="header">
        <div class="brand">
          <a href="/">
            <img id="logo" src="https://www.tanguydeleage.com/assets/img/logo.svg" alt="Logo Tanguy DELEAGE" width="35.59" height="40">
            <h1>Tanguy Deléage</h1>
          </a>
        </div>

        <nav class="navbar">
          <ul class="nav-links">
            <li> <a href="/">Home</a> </li>
            <li> <a href="about.html">About</a> </li>
            <li> <a href="contact.html">Contact</a> </li>
          </ul>
        </nav>

        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderOui',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
