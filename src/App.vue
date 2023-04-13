<script>
// import HeaderOui from './components/Header.vue'
import HomeSection from './components/Home.vue'
import PortfolioItems from './components/Portfolio.vue'
import AboutSection from './components/About.vue'
import ContactSection from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    // HeaderOui,
    HomeSection,
    PortfolioItems,
    AboutSection,
    ContactSection,
  },
  data() {
    return {
      activePage: 'HomeSection'
    }
  },
}
</script>

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
            <button @click="activePage = 'HomeSection'"> Home </button>
            <button @click="activePage = 'AboutSection'"> About </button>
            <button @click="activePage = 'ContactSection'"> Contact </button>
          </ul>
        </nav>

        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
    </header>

  <HomeSection v-if="activePage === 'HomeSection' "/>

  <PortfolioItems v-if="activePage === 'HomeSection' " />

  <AboutSection v-if="activePage === 'AboutSection'" />

  <ContactSection v-if="activePage === 'ContactSection'" />
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
