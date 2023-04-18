<script>
export default {
  name: 'headerItem',
}
</script>

<template>
   <header>
      <div class="header">
        <a class="brand" href="/">
          <img id="logo" src="https://www.tanguydeleage.com/assets/img/logo.svg" alt="Logo Tanguy DELEAGE" width="35.59" height="40">
          <h1 class="brand-name">Tanguy Deléage</h1>
        </a>

        <nav class="navbar">
          <ul class="nav-links">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/about">About</router-link>
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </ul>
        </nav>

        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
    </header>
  <router-view />
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  border-bottom: 0.1rem black solid;
  height: 5rem;
}

.header a {
  text-decoration: none;
}

.nav-links {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
}

.nav-link {
  color: var(--black100);
  font-size: 1.3rem;
  font-weight: var(--semi-bold);
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
  display: none;
}

</style>
