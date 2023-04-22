<template>
  <div class="hero">
    <section class="home container background">
        <div class="hero-data">
          <div class="hero-text">
            <div class="hero-header">
              <h2 class="hero-title">TANGUY DELEAGE</h2>
              <h1 class="hero-subtitle">Product Designer Fullstack</h1>
            </div>
            <p class="hero-description">I’m a junior designer with a business background and tech skills. I design products by acknowledging business needs, designing experience and assisting devs to integrate it.</p>
          </div>
          
          <div class="cta">
            <a class="btn-primary" href="">View Portfolio</a>
            <a class="btn-secondary" href="/contact">Contact</a>
          </div>
            
        </div>

        <div class="hero-picture">
        <img src="https://www.tanguydeleage.com/assets/img/hero-picture.jpeg" alt="">
        </div>
    </section>

    <section>
        <ul class="logo-container container">
          <li><img src="../../assets/images/entreprises/le-wagon.png" alt="Logo le wagon"></li>
          <li><img src="../../assets/images/entreprises/orange.png" style="width: 4rem;" alt="Logo Orange"></li>
          <li><img src="../../assets/images/entreprises/accenture.png" alt="Logo Accenture"></li>
          <li><img src="../../assets/images/entreprises/canal.png" alt="Logo Canal+"></li>
        </ul>
    </section>
  </div>

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
   

<style scoped>
/* =============== Big devices ================ */
@media screen and (min-width: 930px) {
  .hero {
    height: calc(100vh - 5rem);
  }

  .home {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: calc(100vh - 11rem);
    padding: 2rem 4rem;
    justify-content: space-between;
  }
  .hero-data {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    gap: 5rem;
    height: 100%;
    width: 50vw;;
  }
}

@media screen and (max-width: 930px) {
  .home {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 2rem;
    justify-content: space-between;
    gap: 1rem;
  }

  .hero-data {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    gap: 5rem;
  }

  .hero-picture{
    width: 100%;
  }

  .hero-picture img{
    width: 100%;
  }
}

  .hero-text {
    gap: 2.5rem;
    display: flex;
    flex-direction: column;
  }

  .hero-header {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .hero-title {
    color: var(--black80);
  }

  .hero-description {
    font-size: 1.2rem;
  }


  .cta {
    display: flex;
    flex-direction: column;
    gap: 16px
  }

  .hero-picture {
    filter: grayscale(1);
    height: 100%
  }

  .hero-picture img{
    height: 100%;
    object-fit: contain;
  }

  .logo-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 6rem
  }

  .logo-container li img{
    height: auto;
    width: 10rem;
  }
  </style>
   