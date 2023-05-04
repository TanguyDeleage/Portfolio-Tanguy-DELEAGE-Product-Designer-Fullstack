<template>
   <div class="project">
      <section class="hero-project">
         <div class="left-card">
            <img :src="project.image" alt="Legid app mockup" class="cover-project">
             <img src="../../assets/icons/back-arrow.svg" class="pointer arrow-back-big" @click="$router.go(-1)" alt="Icon back arrow">
         </div>

         <div class="right-card background">
            <div class="right-card-info">
               <div class="header-project">
                  <img src="../../assets/icons/back-arrow.svg" class="pointer arrow-back-small" @click="$router.go(-1)" alt="">
                  <h1>{{ project.title }}</h1>
                  <div class="header-filler"></div>
               </div>

               <div class="hero-subtitle">
                  <h4>CATEGORY</h4>
                  <p>{{ project.category }}</p>
               </div>

               <div class="project-description">
                  <p>{{ project.context }}</p>
                  <p>{{ project.role }}</p>
               </div>

               <div class="project-info">
                  <div class="hero-subtitle">
                     <h4>TOOLS</h4>
                     <p>{{ project.tools }}</p>
                  </div>

                  <div class="hero-subtitle">
                     <h4>YEAR</h4>
                     <p>{{ project.year }}</p>
                  </div>
               </div>
            </div>

            <div class="cta">
               <a href="https://www.figma.com/proto/nz1BI2XULa2F0bJYd3TDAA/Proto?node-id=2-252&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A252&hide-ui=1" class="btn-primary" target="_blank">Try prototype</a>
               <a href="https://youtu.be/1AYKmFTObQQ?t=2439" class="btn-tertiary" target="_blank">Product pitch</a>
            </div>
            
         </div>
      </section>

      <section class="project-section">
         <h2 class="section-title">{{ challenge.title }}</h2>
         <div class="flex-section">
            <div>
               <img :src="challenge.image" alt="" loading="lazy">
            </div>
            <div class="section-text">
               <div class="section-paragraph">
                  <h3> {{ challenge.h1 }}</h3>
                  <p>{{ challenge.p1 }}</p>
               </div>
               <div class="section-paragraph">
                  <h3>{{ challenge.h2 }}</h3>
                  <p>{{ challenge.p2 }}</p>
               </div>
            </div>
         </div>
      </section>

      <section class="project-section">
         <h2 class="section-title">{{ process.title }}</h2>
         <div class="flex-section">
            <div class="section-text">
               <div class="section-paragraph">
                  <h3> {{ process.h1 }}</h3>
                  <p>{{ process.p1 }}</p>
               </div>
            </div>
            <div>
               <img :src="process.image" alt="" loading="lazy">
            </div>
         </div>
         <div class="full-width">
            <img :src="process.botImage" alt="" loading="lazy">
         </div>
      </section>

      <section class="project-section">
         <h2 class="section-title">{{ research.title }}</h2>
         <div class="flex-section">
            <div class="section-text">
               <div class="section-paragraph">
                  <h3>{{ research.h1 }}</h3>
                  <p>{{ research.p1 }}</p>
               </div>
               <div class="section-paragraph">
                  <h3 >{{ research.h2 }}</h3>
                  <p>{{ research.p2 }}</p>
               </div>
            </div>
            <div>
               <img :src="research.image" alt="" loading="lazy">
            </div>
         </div>
      </section>

      <section class="project-section">
         <div class="background project-section">
            <div>
               <h2 class="section-title">{{ problems.title }}</h2>
            </div>
            <div class="problems-section">
               <div v-for="kpi in problems.kpis" :key="kpi">
                  <div class="problem">
                     <span class="number">{{ kpi.number }}</span> <span class="description">{{kpi.description}}</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section>
         <h2 class="section-title">{{ design.title }}</h2>
         <div class="design-section">
            <div v-for="section in design.sections" :key="section" class="flex-section background design-sections">
                <div class="design-image">
                  <img :src="section.image" alt="" loading="lazy">
               </div>
               <div class="section-text design-text">
                  <div class="section-paragraph">
                     <h3>{{ section.subtitle }}</h3>
                     <p>{{section.description}}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
         
      <section>
         <!-- <h2 class="section-title">{{ prototype.title }}</h2> -->
         <div class="prototype-section">
            <div class="flex-section background prototype">
               <img :src="prototype.image" alt="" loading="lazy">
               <img :src="prototype.image1" alt="" loading="lazy">
               <img :src="prototype.image2" alt="" loading="lazy">
            </div>
         </div>
      </section>

      <section class="project-section">
         <h2 class="section-title">{{ development.title }}</h2>
         <div class="flex-section">
            <div>
               <img :src="development.image" alt="" loading="lazy">
            </div>
            <div class="section-text">
               <div class="section-paragraph">
                  <h3> {{ development.h1 }}</h3>
                  <p>{{ development.p1 }}</p>
               </div>
            </div>
         </div>
      </section>

      <section class="project-section">
         <h2 class="section-title">{{ pitch.title }}</h2>
         <div class="flex-section">
            <div class="section-text">
               <div class="section-paragraph">
                  <h3> {{ pitch.h1 }}</h3>
                  <p>{{ pitch.p1 }}</p>
                  <!-- <a href=""></a> -->
               </div>
            </div>
            <div>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/1AYKmFTObQQ?start=2442" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
         </div>
      </section>

      <section class="project-section conclusion">
         <h2 class="section-title">{{ conclusion.title }}</h2>
         <p>{{ conclusion.p1 }}</p>
      </section>

      <section>
         <div class="project-section container rebond-section background">
            <div class="up-arrow" @click="goUP()">
               <img src="../../assets/icons/back-arrow.svg" alt="">
            </div>
            <div class="rebond-right">
               <div class="rebond-picture">
                  <img :src="rebond.image" alt="" loading="lazy">
               </div>
               <div class="rebond-data">
                  <div class="rebond-title">
                     <h3>{{ rebond.title }}</h3>
                     <p>{{rebond.subtitle}}</p>
                  </div>
                  <!-- <a :href="rebond.link" class="btn-primary">Discover next project</a> -->
                  <router-link class="btn-primary" :to="rebond.link">Discover next project</router-link>
               </div>
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
            image: require("../../assets/images/projects/matematch/cover.png"),
            title: "MATEMATCH",
            category: "Design & Development",
            context: "During my bootcamp at Le Wagon (leader in tech bootcamps), in a group of 3 we had 10 days to design and build an app.",
            role: "On this project I worked on the problem statement and the problem discovery. I worked alone on the product design. Then I worked mainly on front end developmentwith a bit of back.",
            tools: "Figma, Notion, Github, Slack",
            year: "2021",
         },

         challenge: {
            title: "CHALLENGE",
            image: require("../../assets/images/projects/matematch/team.jpg"),
            h1: "Build a Progressive Web App in 10 days",
            p1: "We had 10 days to design and develop our app thanks to knowledge we developed during the last 7 weeks. In a team of 3 people, this was quite a challenge.",
            h2: "Help foreigners students to connect with locals",
            p2: "During the bootcamp, every student pitched a project they would like to work on, then everybody had the vote, and teams emerged. The Matematch project is the one I pitched and I’m glad it was selected. Matematch is about connecting foreigner students with locals to help them create a deeper experience.",
         },

         process: {
            title: "PROCESS",
            image: require("../../assets/images/projects/matematch/process.svg"),
            h1: "Design Thinking: Solution focused",
            p1: "Because of the bootcamp’s limit, we were solution focused to earn time and be able to develop an app in 10 days. However I choose to work on a project I had insights on, so it would compensate the fact we didn’t do a discovery phase.",
            botImage: require("../../assets/images/projects/matematch/timeline.svg"),
         },

         research: {
            title: "RESEARCH",
            image: require("../../assets/images/projects/matematch/friends.jpg"),
            h1: "Personal involvement",
            p1: "In 2019 I went to work in Australia. I quickly discovered how hard it could be to connect with people when you arrive in a new place. Some people end up staying with people of their own nationality, their colleagues, or classmate. Being currently the boyfriend of a foreigner girl, I saw again how hard it was to integrate groups of people, your only chance is to start a hobby and hope to meet people.",
            h2: "Based on my associative experience",
            p2: "During my studies I worked in an association to help foreigner students connect with French students. Generally they stick with their class or with foreigners in general. Because most of the time French people already had their groups and it’s not so easy to bring in someone new in. So I had to give them a choice about what they want to experience.",
         },

         problems: {
            title: "PROBLEMS",
            kpis: [
               {
                  number: "50 000",
                  description: "Students come in Nantes from abroad"
               },
               {
                  number: "80%",
                  description: "Stay with internationals by convenience"
               },
               {
                  number: "70%",
                  description: "of French students would like to meet them"
               }
            ]
         },

         design: {
            title: "DESIGN",
            sections: [
               {
                  subtitle: "Userflow",
                  description: "We chose to build an app using two types of profiles: “explorer” and “guide”. Guides are locals, they are willing to share experience they know, with new people. Explorer are foreigners they want to meet new people through a cool activity. In order to do that, we imagined a matchmaking app based on the activity to share but also the hobbies, age, location, languages etc.",
                  image: require("../../assets/images/projects/matematch/flow.png"),
               },
               {
                  subtitle: "Sketching",
                  description: "During the sketching phase we all brought ideas on how we would like the app to look like. We would go component by component and each time choose the version we would prefer. In the same time, we would also realise a benchmark on dating apps, social networks, dribble, etc.",
                  image: require("../../assets/images/projects/matematch/sketch.jpg"),
               },
               {
                  subtitle: "Brand identity",
                  description: "I chose the name “Matematch” and then I personally worked on the brand identity including colors, images, typography, etc. I chose a yellow/orange primary color because it inspires adventures. For the font I chose “poppins” a round font that appears friendly to me.",
                  image: require("../../assets/images/projects/matematch/branding.svg"),
               },
               {
                  subtitle: "Mockup",
                  description: "Since my main task was to work on the design, after choosing the brand identity and after completing our sketchs and mockups, I created our mockups and a prototype. I had never designed anything before, and at this moment, I knew that I needed to continue in this way.",
                  image: require("../../assets/images/projects/matematch/mockup.jpg"),
               },
            ]
         },

         prototype: {
            title: "PROTOTYPE",
            image: require("../../assets/images/projects/matematch/flow1.png"),
            image1: require("../../assets/images/projects/matematch/flow2.png"),
            image2: require("../../assets/images/projects/matematch/flow3.png"),
         },

         development: {
            title: "DEVELOPMENT",
            image: require("../../assets/images/projects/matematch/development.jpg"),
            h1: "Matematch.fr",
            p1: "First thing first we bought the domain name “matematch.fr”. Then we started to create the back end of our app. We used Ruby on Rails, a Ruby framework very intuitive and useful to quickly develop apps. On the front end, we used HTML, SCSS and JavaScript. To sync and save our work, we used the platform Github. After 10 days, our first Progressive Web App was available on matematch.fr",
         },

         pitch: {
            title: "PITCH",
            // image: require("https://www.youtube.com/embed/1AYKmFTObQQ?start=2435"),
            h1: "5 minutes to convince 80 persons",
            p1: "This is the bootcamp’s last day, the “demoday”. Every group must pitch his project in 5 minutes and presents how it works, every feature. The real difficulty here is to stay focus on this pitch and the public while navigating on the app that may not work exactly like planned. We must adapt. Gladly for us, everything went well",
         },

         conclusion: {
            title: "CONCLUSION",
            p1: "After this experience with Le Wagon, I developed tons of skills. In development of course. But also in design. I started to give attention to details. I knew I was really passionate by design and a time would come where I would like to work in this field.",
         },

         rebond: {
            title: "LegID",
            subtitle: "48h to help families live an easier mourning",
            link: "/legid",
            image: require('../../assets/images/projects/legid/cover.png'),
         },
      }
   },
   methods: {
        goUP() {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
      }
}
</script>

<style scoped>
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
      background: linear-gradient( rgba(214, 206, 199, 0.4), rgba(214, 206, 199, 0.4) ), url(../../assets/images/background.jpg);
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
      background: linear-gradient( rgba(214, 206, 199, 0.4), rgba(214, 206, 199, 0.4) ), url(../../assets/images/background.jpg);
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
      padding: 1rem;
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