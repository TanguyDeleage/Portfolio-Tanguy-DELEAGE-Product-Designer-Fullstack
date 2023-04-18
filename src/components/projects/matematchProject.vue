<template>
   <div class="project">
      <section class="hero-project">
         <div class="left-card">
            <img :src="project.image" alt="matematch app mockup">
         </div>

         <div class="right-card">
            <div class="header-project">
               <h1>{{ project.title }}</h1>
               <div>
                  <div class="line1"></div>
                  <div class="line2"></div>
               </div>
            </div>

            <div class="category-project">
               <p>CATEGORY</p>
               <p>{{ project.category }}</p>
            </div>

            <div>
               <p>{{ project.context }}</p>
               <p>{{ project.role }}</p>
            </div>

            <div class="project-info">
               <div class="project-tools">
                  <p>TOOLS</p>
                  <p>{{ project.tools }}</p>
               </div>

               <div>
                  <p>YEAR</p>
                  <p>{{ project.year }}</p>
               </div>
            </div>

            <div class="cta">
               <a href="" class="btn-primary">Try it yourself</a>
               <a href="">Product pitch</a>
            </div>
            
         </div>
      </section>

      <section>
         <h2>{{ challenge.title }}</h2>
         <div>
            <img :src="challenge.image" alt="">
         </div>
         <div>
            <div>
               <h3> {{ challenge.h1 }}</h3>
               <p>{{ challenge.p1 }}</p>
            </div>
            <div>
               <h3>{{ challenge.h2 }}</h3>
               <p>{{ challenge.p2 }}</p>
            </div>
         </div>
      </section>

      <section>
         <h2>{{ process.title }}</h2>
         <div>
            <img :src="process.image" alt="">
         </div>
         <div>
            <div>
               <h3> {{ process.h1 }}</h3>
               <p>{{ process.p1 }}</p>
            </div>
         </div>
      </section>

   </div>
</template>

<script>
export default {
   name: 'matematchProject',
     data() {
      return {
         project: {
            image: require("../../assets/images/projects/matematch/mockup.png"),
            title: "MATEMATCH",
            category: "Design & Development",
            context: "During my bootcamp at Le Wagon (leader in tech bootcamps), in a group of 3 we had 10 days to design and build an app.",
            role: "On this project I worked on the problem statement and the problem discovey. I worked alone on the product design. Then I worked mainly on front end developmentwith a bit of back.",
            tools: "Figma, Notion, Github, Slack",
            year: "2021",
         },

         challenge: {
            title: "CHALLENGE",
            // image: require(""),
            h1: "Build a Progressive Web App in 10 days",
            p1: "Le wagon bootcamp, lorem ipsum dolor sit amet consectur Le wagon bootcamp, lorem ipsum dolor sit amet consectur Le wagon bootcamp, lorem ipsum dolor sit amet consectur",
            h2: "Help foreigners students to connect with locals",
            p2: "En étant membre d’une association favorisant l’intégration des internationaux avec des français, je me suis rendu compte qu’ils restaient entre eux. Ils développaient un réseau d’international mais s’intégrent peu voir pas avec des français. Insister que je suis à l’initiative de ce projet parceque j’avais déjà un background là dessus",
         },

         process: {
            title: "PROCESS",
            // image: require(""),
            h1: "Design Thinking : Solution focused",
            p1: "Dans le contexte de ce bootcamp, le focus était sur l’aspect solution de la méthode design thinking. En économisant ainsi du temps sur la partie rpoblème nous avons pu en seulement 10 jours construire une application fonctionnelle. J’ai toutefois tenu a adressé un sujet qui me tenais particulièrement à coeur et sur lequel je disposais d’un minimum d’information pour combler le manque de cette partie recherche",
            // botImage: "",
         },

         research: {
            title: "RESEARCH",
            // image: require(""),
            h1: "Personal involvement",
            p1: "J’ai étais vivre à l’étranger, voilaà ce dont je me suis rendu compte. Mais aussi sur l’aspect étude, ma copine etc...",
            h2: "Based on my associative experience",
            p2: "J’ai aussi beaucoup été en contact avec les étudiants étrangers etc J’ai aussi beaucoup été en contact avec les étudiants étrangers etc J’ai aussi beaucoup été en contact avec les étudiants étrangers etc",
         },

         problems: {
            title: "",
            kpi: [
               {
                  number: "50 000",
                  description: "Students come in Nantes from abroad"
               },
               {
                  number: "50 000",
                  description: "Students come in Nantes from abroad"
               },
               {
                  number: "50 000",
                  description: "Students come in Nantes from abroad"
               }
            ]
         },

         design: [
            {
               title: "",
               description: "",
               image: "",
            },
            {
               title: "",
               description: "",
               image: "",
            },
            {
               title: "",
               description: "",
               image: "",
            },
            {
               title: "",
               description: "",
               image: "",
            },
            {
               title: "",
               image: "",
            }
         ],

         development: {
            title: "DEVELOPMENT",
            // image: require(""),
            h1: "",
            p1: "",
         },

         pitch: {
            title: "PITCH",
            // image: require(""),
            h1: "8 teams...",
            p1: "",
         },

         conclusion: {
            title: "CONCLUSION",
            p1: "",
         },
      }
     }
}
</script>

<style>

</style>