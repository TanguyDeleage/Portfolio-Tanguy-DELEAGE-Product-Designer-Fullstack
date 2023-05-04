<template>
   <section>

      <div class="about">
        <div class="about-picture">
          <img src="../../assets/images/hero-picture.jpeg" alt="">
        </div>
        <div class="about-data">
          <h1>An Atypical Product Designer</h1>
          <div class="about-content">
            <div class="content-block" v-for="paragraph in paragraphs" :key="paragraph">
              <h3>{{ paragraph.title }}</h3>
              <p>{{ paragraph.content }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="timeline background">
        <img src="../../assets/images/frise.svg" alt="Timeline">
      </div>
    </section>

    <div class="contact-subsection">
      <div class="contact-content">
        <h2 class="light-text">Have a project in mind ?</h2>
        <h3 class="dark-text">Let’s discuss it together !</h3>
      </div>

      <!-- <a href="/contact" class="btn-primary">Contact</a> -->
      <router-link class="btn-primary" to="/contact">Contact</router-link>
      
    </div>
</template>
   
   <script>
   export default {
     name: 'AboutSection',
     data() {
      return {
        paragraphs: [
          {
            title : "Business background",
            content: "Hello, I’m Tanguy, a French product designer, super interested in learning and doing new things. all products aspects. I studied at Audencia a top 10 French Business School, it gave me all the business and strategic insights of a product. I then wanted to get a better understanding of firm’s problematic so I started  a Tech/Strategy consultant job at Accenture."
          },
          {
            title: "Design and Dev hobbies",
            content: "I’ve always wanted to create project, and my business background had help me with the strategic aspect of it. Anyway I was always frustrated to not be able to create something operationnaly. I learnt web develompment through online courses first and then through a we developper bootcamp with Le Wagon. I was now able to code my project and in the way I discovered product design."
          },
          {
            title: "And they merged",
            content: "My passion for crafting products became too heavy to keep doing my consultant job. I wanted to improve my design skill, so I decided my hobbies would now be my job. I became Product Designer at Canal +."
          }
        ]
      }
     }
   }
   </script>
   
<style scoped>

/* =============== Small devices ================ */
@media screen and (max-width: 930px) {
  .about{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
  .about-picture {
    width: 100%;
    align-items: center;
    display: flex;
  }

  .about-data {
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .timeline {
    padding: 2rem 2rem;
  }
  .contact-subsection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 2rem;
    gap: 2rem;
  }
}

/* =============== Big devices ================ */
@media screen and (min-width: 930px) {
  .about{
    display: flex;
    flex-direction: row;
    gap: 4rem;
    padding: 2rem 4rem;
  }
  .about-picture {
    width: 40vw;
    align-items: center;
    display: flex;
  }
  .about-data {
    text-align: left;
    width: 60vw;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .timeline {
    padding: 2rem 4rem;
  }

  .contact-subsection {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 6rem;
  }
}

  .about-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .content-block {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .contact-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
  }

  .light-text {
    color: var(--black80);
    font-weight: var(--regular)
  }
  .dark-text {
    font-size: 3.5rem
  }
</style>
   