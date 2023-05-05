<template>
  <headerItem />
</template>

<script>
import headerItem from './components/Header.vue'
export default {
  name: 'App',
  components: {
    headerItem,
  }
}
</script>


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
    font-weight: var(--bold);
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black100);
    cursor: pointer;
  }

  .btn-secondary {
    border: 3px solid black;
    background-color: white;
    width: 14rem;
    height: 4rem;
    font-weight: 900;
    font-family: Lato, Helvetica, Arial, sans-serif;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black100);
  }

  .btn-tertiary {
    color: var(--black100);
    text-decoration: underline;
    font-weight: var(--semi-bold);
  }

  .background {
    background: linear-gradient( rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4) ), url(../src/assets/images/background.jpg);
  }

  /* =============== Hover ================ */
@media screen and (min-width: 930px) {
  .btn-primary:hover, .btn-secondary:hover {
    box-shadow: 0.5rem 0.5rem var(--black100);
    transition: 0.2s ease-out ;
  }
  .btn-tertiary:hover, .brand:hover{
    filter: contrast(0.3);
    transition: 0.2s ease-out ;
  }

}


/* =========================   Headers ========================= */


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

  /* =============== Small devices ================ */
@media screen and (max-width: 930px) {
  .container {
    padding: 0 2rem;
  }

  h1{
    font-size: 2.5rem;
    font-weight: var(--bold);
  }

  h2 {
    font-size: 2rem;
    font-weight: var(--medium);
  }

  h3 {
    font-size: 1rem;
    font-weight: var(--semi-bold);
  }
}
  /* =============== Big devices ================ */
@media screen and (min-width: 930px) {
  .container {
    padding: 0 4rem;
  }

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
  
  .pointer:hover {
    cursor: pointer;
}
}



/* ========================== Scrollbar ==================== */
::-webkit-scrollbar {
  width: .8rem;
  background-color: var(--black50);
  /* border-radius: .5rem; */
}

::-webkit-scrollbar-thumb {
  background-color: var(--black30);
  border-radius: .5rem;
}
  
</style>
