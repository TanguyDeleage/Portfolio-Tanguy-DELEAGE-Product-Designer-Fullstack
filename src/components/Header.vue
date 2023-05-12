<template>
   <header>
      <div class="header">
        <!-- <a class="brand" href="/">
          <img id="logo" src="../assets/logo.svg" alt="Logo Tanguy DELEAGE" width="35.59" height="40">
          <h1 class="brand-name">Tanguy Deléage</h1>
        </a> -->
        <router-link class="brand" to="/">
          <img id="logo" src="../assets/logo.svg" alt="Logo Tanguy DELEAGE" width="35.59" height="40">
          <h1 class="brand-name">Tanguy Deléage</h1>
        </router-link>

        <nav class="navbar">
          <div @click="openMenu()" class="nav-links">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/about">About</router-link>
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </div>
        </nav>

        <div @click="openMenu()" class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
    </header>
  <router-view />
</template>

<script>
export default {
  name: 'headerItem',
  methods: {
    openMenu() {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.nav-links');
      const body = document.querySelector('body');

  // Ouvre le dropdown menu et le ferme en cliquant sur l'icône
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        // Empêche de scroller sur le reste de la page quand la navbar est ouverte
        body.classList.toggle('no-scroll');
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

/* =============== Small devices ================ */
@media screen and (max-width: 930px) {
  .burger {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .nav-links {
    display: flex;
    position: fixed;
    right: 0px;
    top: 0px;
    height: 100vh;
    background-color: var(--secondary);
    flex-direction: column;
    align-items: center;
    width: 100%;
    z-index: 9998;
    padding: 10rem 2rem;
    transform: translateX(100%);
    transition: all 0.7s ease-in;
    gap: 5rem;
  }

  /* .nav-links li a{
    color: var(--black100);
    font-size: var(--font-h2);
  } */

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2rem;
    border-bottom: 0.1rem black solid;
    height: 5rem;
  }

  .brand {
    z-index: 9999;
  }


  .nav-active {
    transform: translateX(0%) !important;
    transition: all 0.5s ease-in;
  }

  /* =========== Animation transition menu burger / croix */

  .toggle .line1 {
    transform: rotate(-45deg) translate(-8px, 7px);
  }

  .toggle .line2 {
    opacity: 0;
  }

  .toggle .line3 {
    transform: rotate(45deg) translate(-5.5px, -5px);
  }

  .no-scroll {
    overflow: hidden;
    height: 100vh;
  }

  .nav-link {
    padding: 2rem;;
  }
}

/* =============== Big devices ================ */
@media screen and (min-width: 930px) {
  .burger {
    display: none;
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 4rem;
    border-bottom: 0.1rem black solid;
    height: 5rem;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    align-items: center;
  }

  .nav-link:after {
    content: "";
    position: absolute;
    background-color: var(--black100);
    height: 1.5px;
    width: 0;
    left: 0;
    bottom: -5px;
    transition: 0.4s;
  }

  .nav-link:hover:after {
      width: 100%;
  } 
}


.header a {
  text-decoration: none;
}

.nav-link {
  color: var(--black100);
  font-size: 1.3rem;
  font-weight: var(--semi-bold);
  position: relative;
}

.brand {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.brand-name {
  font-size: 1.3rem;
  color: var(--black100);
}

.burger {
  cursor: pointer;
  z-index: 9999;
}

.burger div {
  width: 2rem;
  height: 3px;
  background-color: var(--black100);
  transition: all 0.3s ease;
}

</style>
