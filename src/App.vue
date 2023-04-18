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
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
  color: var(--black100);
}

.btn-primary {
    background-color: var(--primary);
    width: 14rem;
    height: 4rem;
    border-radius: 60px;
    font-weight: var(--bold);
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black100);
  }

  .btn-secondary {
    border: 3px solid black;
    background-color: white;
    width: 14rem;
    height: 4rem;
    border-radius: 60px;
    font-weight: 900;
    font-family: Lato, Helvetica, Arial, sans-serif;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black100);
  }

  .container {
    padding: 0 4rem
  }

  .background {
    /* background-image: url(../../assets/images/background.jpg); */
    background: linear-gradient( rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4) ), url(../src/assets/images/background.jpg);
  }



/* =========================   Headers ========================= */

h1{
  font-size: 3.2rem;
  font-weight: var(--bold);
}

h2 {
  font-size: 3rem;
  font-weight: var(--medium);
}

h3 {
  font-size: 1.5rem;
  font-weight: var(--semi-bold);
}

/* ==================== Root Variables ======================= */
  :root{
    --primary: hsl(35,48%,54%);
    --secondary: hsl(0,0%,100%);

    --black100: hsla(0, 0%, 0%, 100%);
    --black80: hsla(0, 0%, 0%, 80%);
    --black50: hsla(0, 0%, 0%, 50%);
    --black30: hsla(0, 0%, 0%, 30%);

    --bold: 900;
    --semi-bold: 700;
    --medium: 400;
    --regular: 300;
  }
  
</style>
