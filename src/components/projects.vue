<template>
    <router-view />
</template>
  
<script>
  import matematchProject from './components/projects/matematchProject.vue'
  import legidProject from './components/projects/legidProject.vue'
  import mokabaProject from './components/projects/mokabaProject.vue'
  export default {
    name: 'Projects',
    components: {
      matematchProject, legidProject, mokabaProject
    }
  }
</script>
  
  
<style>
/* =============== Small devices ================ */
@media screen and (max-width: 930px) {
   .hero-project{
      display: flex;
      flex-direction: column-reverse;
      text-align: left;
   }
   .left-card{
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient( rgba(214, 206, 199, 0.4), rgba(214, 206, 199, 0.4) ), url(../../assets/images/background.webp);
      padding: 2.5rem
   }
   .right-card{
      height: 100%;
      width: 100%;
      padding: 1rem 2rem 1rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
   }
   .project-section {
      padding: 2rem;
   }

   .cover-project {
      max-height: 30rem;
   }
   .flex-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
   }
   .section-text {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
   }
   .project-section img{
      width: 100%;
   }
   .problems-section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 2rem;
   }
   .section-title {
      font-weight: var(--regular);
      color: var(--black80);
      padding : 0 0 2rem 0;
      font-size: 2.5rem;
   }
   .design-section {
      padding: 0 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem
   }
   .design-sections img{
      width: 100%;
   }
   .design-sections:nth-last-child(odd){
      flex-direction: column;
   }

   .prototype-section {
      padding: 2rem 2rem 0 2rem;
   }
   .prototype {
      width: 100%;
      padding: 2rem 1rem;
   }

   .prototype img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      max-height: 30rem;
   }
   .conclusion {
      width: 100%;
      margin: 0 auto;
   }

   iframe {
      width: 100%;
   }
   
   .header-filler {
      width: 2rem;
   }

   .arrow-back-big {
      display: none;
   }
   .rebond-picture {
      width: 80%;
      object-fit: contain;
      margin: 0 auto;
   }

   .rebond-picture img{
      max-height: 30rem;
      object-fit: contain;
   }

   .rebond-data {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5rem;
      height: 100%;
   }

   .rebond-title {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
   }

   .rebond-section {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      align-items: center;
      justify-content: space-between;
   }

}

/* =============== Big devices ================ */
@media screen and (min-width: 930px) {
   .hero-project{
      height: calc(100vh - 5rem);
      display: flex;
      flex-direction: row;
      text-align: left;
   }
   .left-card{
      height: 100%;
      width: 50vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient( rgba(214, 206, 199, 0.4), rgba(214, 206, 199, 0.4) ), url(../../assets/images/background.webp);
      padding: 2.5rem
   }
   .right-card{
      height: 100%;
      width: 50vw;
      padding: 1rem 4rem 4rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }
   .project-section {
      padding: 4rem;
   }
   .flex-section {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      align-items: center;
      max-height: 90vh;

      justify-content: space-between;
   }
   .section-text {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 50vw;
      padding: 0 4rem;
   }

   .project-section img{
      width: 50vw;
   }
   .problems-section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
   }
   .section-title {
      font-weight: var(--regular);
      color: var(--black80);
      padding : 0 0 4rem 0;
      font-size: 2.5rem;
   }
   .design-section {
      padding: 0 4rem;
      display: flex;
      flex-direction: column;
      gap: 2rem
   }
   .design-sections img{
      width: 50vw;
   }
   .design-sections:nth-last-child(odd){
      flex-direction: row-reverse;
   }
   .prototype-section {
      padding: 2rem 4rem 0 4rem;
   }
   .prototype {
      width: 100%;
      height: 90vh;
      padding: 2rem 1rem;
   }
   .prototype img {
      width: 30%;
      height: 100%;
      object-fit: contain;
   }
   .conclusion {
      width: 50%;
      margin: 0 auto;
   }
   .arrow-back-big {
      width: 2rem;
      height: fit-content;
      top: 7rem;
      left: 4rem;
      position: absolute;
   } 

   .arrow-back-small {
      display: none;
   }

   .header-filler {
      display: none;
   }

   
   .rebond-picture {
      width: 20rem;
      height: 100%;
   }

   .rebond-data {
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5rem;
      height: 100%;
   }

   .rebond-title {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
   }

   .rebond-section {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      align-items: center;
      max-height: 90vh;
      justify-content: space-between;
   }

   .rebond-right {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      align-items: center;
      max-height: 90vh;
      max-width: 50%;
   }
}


   .cover-project {
      height: 100%;
      object-fit: contain;
   }

   .right-card-info {
      display: flex;
      flex-direction: column;
      gap: 3rem;
   }

   .header-project {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
   }

   .header-project h1 {
      font-weight: var(--medium);
   }

   .hero-subtitle h4{
      font-weight: var(--medium);
      color: var(--black50);
   }

   .hero-subtitle p {
      font-weight: var(--semi-bold);
      color: var(--black100);
   }

   .project-description {
      display: flex;
      flex-direction: column;
      gap: 1rem;
   }

   .project-info {
      display: flex;
      justify-content: space-between;
   }

   .cta {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
   }
   .section-paragraph {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      text-align: left;
   }
   
   .full-width img{
      width: 100vw;
   }
   .problem {
      flex-direction: column;
      display: flex;
      gap: 0.5rem;
   }

   .problem .number {
      font-weight: var(--bold);
      font-size: 1.5rem;
   }

   .problem .description {
      font-weight: var(--medium);
      color: var(--black50);
   }

   .design-sections {
      padding: 2rem 1rem;
   }
   .design-image img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
   }
   .section-paragraph h3 {
      font-size: 1.2rem;
   }


   .up-arrow {
      transform: rotate(90deg);
      background-color: var(--black30);
      border-radius: 200rem;
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .up-arrow:hover {
      opacity: 0.8;
      cursor: pointer;
   }

   .up-arrow img {
      width: 2rem;
      height: 2rem;
   }

</style>
</style>
  