<template>
   <section>
        <div>
          <h1>An Atypical Product Designer</h1>
          <div v-for="paragraph in paragraphs" :key="paragraph">
            <h3>{{ paragraph.title }}</h3>
            <p>{{ paragraph.content }}</p>
          </div>
        </div>

        <div>
          <img src="https://www.tanguydeleage.com/assets/img/hero-picture.jpeg" alt="">
        </div>

        <div>
          <img src="" alt="Frise">
        </div>
    </section>

    <div>
      <h2>Have a project in mind ?</h2>
      <h3>Let’s discuss it together !</h3>
      <button>Contact</button>
    </div>
</template>
   
   <script>
   export default {
     name: 'AboutSection',
     data() {
      return {
        paragraphs: [
          {
            title : "My job path",
            content: "Hello, I’m Tanguy, a French product designer, super interested in learning and doing new things. all products aspects. I studied at Audencia a top 10 French Business School, it gave me all the business and strategic insights of a product. I then wanted to get a better understanding of firm’s problematic so I started  a Tech/Strategy consultant job at Accenture."
          },
          {
            title: "My hobbies path",
            content: "I’ve always wanted to create project, and my business background had help me with the strategic aspect of it. Anyway I was always frustrated to not be able to create something operationnaly. I learnt web develompment through online courses first and then through a we developper bootcamp with Le Wagon. I was now able to code my project and in the way I discovered product design."
          },
          {
            title: "Until they merged",
            content: "My passion for crafting products became too heavy to keep doing my consultant job. I wanted to improve my design skill, so I decided my hobbies would now be my job. I became Product Designer at Canal +."
          }
        ]
      }
     }
   }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
   ul {
     list-style-type: none;
     padding: 0;
   }
   </style>
   