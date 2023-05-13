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
            <div class="btn-primary" @click="toPortfolio()" href="">View Portfolio</div>
            <router-link class="btn-secondary" to="/contact">Contact</router-link>
          </div>
            
        </div>

        <div class="hero-picture">
          <img src="../../assets/images/hero-picture.jpeg" alt="Tanguy DELEAGE">
        </div>
    </section>

    <section>
      <div class="logos-slider">
        <div class="logo-container container">
          <img src="../../assets/images/entreprises/le-wagon.png" alt="Logo Le Wagon">
          <img src="../../assets/images/entreprises/orange.png" alt="Logo Orange">
          <img src="../../assets/images/entreprises/accenture.png" alt="Logo Accenture">
          <img src="../../assets/images/entreprises/canal.png" alt="Logo Canal+">
        </div>
      </div>
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
      },
      methods: {
        toPortfolio() {

          const hero = document.querySelector('.hero')
          const header = document.querySelector('.header')

          var target = header.offsetHeight + hero.offsetHeight

          window.scrollTo({
            top: target,
            behavior: "smooth"
            
          })
        }
      }
   }
   </script>
   

<style scoped>
/* =============== Big devices ================ */
@media screen and (min-width: 982px) {
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
/* =============== Small devices ================ */
@media screen and (max-width: 982px) {
  .home {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 2rem;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2rem;
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

  .logos-slider {
    display: none;
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

  /* @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {transform: translateX(-100%);}
  } */

  .logos-slider {
    overflow: hidden;
    /* white-space: nowrap; */
    height: 6rem;
  }
  .logo-container {
    /* animation: 20s slide infinite linear; */
    /* display: inline-block; */
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
  }

  /* .logos-slider:hover .logo-container {
    animation-play-state: paused;
  } */

  .logo-container img {
    height: 60%;
    object-fit: contain;
  }

  </style>
   