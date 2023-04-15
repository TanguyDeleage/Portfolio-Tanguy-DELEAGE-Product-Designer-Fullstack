<template>
  <section class="hero container background">
      <div class="hero-data">
        <div class="hero-text">
          <div class="hero-header">
            <h2 class="hero-title">Tanguy DELEAGE</h2>
            <h1 class="hero-subtitle">Product Designer Fullstack</h1>
          </div>
          <p>I’m a junior designer with a business background and tech skills. I design products by acknowledging business needs, designing experience and assisting devs to integrate it.</p>
        </div>
        
        <div class="cta">
          <button class="btn-primary">View Portfolio</button>
          <button class="btn-secondary">Contact</button>
        </div>
          
      </div>

      <div class="hero-picture">
      <img src="https://www.tanguydeleage.com/assets/img/hero-picture.jpeg" alt="">
      </div>
  </section>

  <section>
      <ul class="logo-container container">
        <li>Le Wagon</li>
        <li>Orange</li>
        <li>Accenture</li>
        <li>Canal+</li>
      </ul>
  </section>

  <section>
    <PortfolioItems />
  </section>

  </template>
   
   <script>
   import PortfolioItems from '../Portfolio.vue'
   export default {
     name: 'HomeSection',
     components: {PortfolioItems,
    }
   }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .container {
    padding: 0 4rem
  }

  .background {
    /* background-image: url(../../assets/images/background.jpg); */
    background: linear-gradient( rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4) ), url(../../assets/images/background.jpg);
  }

  .hero {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .hero-data {
    display: flex;
    flex-direction: column;
    text-align: left;
    height: 30vh;
    justify-content: space-between;
    gap: 100px;
  }

  .hero-text {
    gap: 40px;
    display: flex;
    flex-direction: column;
  }

  .hero-header {
    gap: 8px;
    display: flex;
    flex-direction: column;
  }

  .hero-title {
    font-size: 1.6rem;
  }

  .hero-subtitle {
    font-size: 2rem;
  }

  .cta {
    display: flex;
    flex-direction: column;
    gap: 16px
  }

  .btn-primary {
    background-color: #C29351;
    width: 320px;
    height: 77px;
    border-radius: 60px;
    border: none;
    font-weight: 800;
  }

  .btn-secondary {
    border: 5px solid black;
    background-color: white;
    width: 320px;
    height: 77px;
    border-radius: 60px;
    font-weight: 800;
  }

  .hero-picture {
    filter: grayscale(1);
  }

  .logo-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  </style>
   