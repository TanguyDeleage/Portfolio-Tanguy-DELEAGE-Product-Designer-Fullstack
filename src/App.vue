<script>
import HeaderOui from './components/Header.vue'
import PortfolioItems from './components/Portfolio.vue'

export default {
  name: 'App',
  components: {
    HeaderOui,
    PortfolioItems,
  }
}
</script>

<template>
  <HeaderOui />

  <section>
    <h2>Tanguy DELEAGE</h2>
    <h1>Product Designer Fullstack</h1>
    <p>I’m a junior designer with a business background and tech skills. I design products by acknowledging business needs, designing experience and assisting devs to integrate it.</p>
    <div>
      <button>View Portfolio</button>
      <button>Contact</button>
    </div>
  </section>

  <section>
    <ul>
      <li>Le Wagon</li>
      <li>Orange</li>
      <li>Accenture</li>
      <li>Canal+</li>
    </ul>
  </section>
  <PortfolioItems />
  
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
