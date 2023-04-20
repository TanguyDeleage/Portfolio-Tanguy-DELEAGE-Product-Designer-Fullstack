<template>
   <div class="project">
      <section class="hero-project">
         <div class="left-card">
            <img :src="project.image" alt="matematch app mockup">
         </div>

         <div class="right-card background">
            <div class="right-card-info">
               <div class="header-project">
                  <h1>{{ project.title }}</h1>
                  <a href="/" class="close-icon">
                     <div class="line1"></div>
                     <div class="line2"></div>
                  </a>
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
               <a href="" class="btn-primary">Try it yourself</a>
               <a href="https://youtu.be/1AYKmFTObQQ?t=2439" class="btn-tertiary">Product pitch</a>
            </div>
            
         </div>
      </section>

      <section class="project-section">
         <h2 class="section-title">{{ challenge.title }}</h2>
         <div class="flex-section">
            <div>
               <img :src="challenge.image" alt="">
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
               <img :src="process.image" alt="">
            </div>
         </div>
         <div class="full-width">
            <img :src="process.botImage" alt="">
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
               <img :src="research.image" alt="">
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
                  <img :src="section.image" alt="">
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
               <img :src="prototype.image" alt="">
               <img :src="prototype.image1" alt="">
               <img :src="prototype.image2" alt="">
            </div>
         </div>
      </section>

      <section class="project-section">
         <h2 class="section-title">{{ development.title }}</h2>
         <div class="flex-section">
            <div>
               <img :src="development.image" alt="">
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
                  <a href=""></a>
               </div>
            </div>
            <div>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/1AYKmFTObQQ?start=2435" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
         </div>
      </section>

      <section class="project-section conclusion">
         <h2 class="section-title">{{ conclusion.title }}</h2>
         <p>{{ conclusion.p1 }}</p>
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
            role: "On this project I worked on the problem statement and the problem discovey. I worked alone on the product design. Then I worked mainly on front end developmentwith a bit of back.",
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
            h1: "Design Thinking : Solution focused",
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
                  subtitle: "Wireframing",
                  description: "We chose to build an app using two types of profiles: “explorer” and “guide”. Guides are locals, they are willing to share experience they know, with new people. Explorer are foreigners they want to meet new people through a cool activity. In order to do that, we imagined a matchmaking app based on the activity to share but also the hobbies, age, location, languages etc.",
                  image: require("../../assets/images/projects/matematch/flow.jpg"),
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
      }
     }
}
</script>

<style scoped>
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

   .left-card img {
      height: 100%;
      object-fit: contain;
   }

   .right-card{
      height: 100%;
      width: 50vw;
      padding: 1rem 4rem 4rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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

   .line1, .line2 {
      width: 30px;
      height: 2px;
      background-color: var(--black100);
   }

   .line1 {
      transform: rotate(-45deg) translate(-10px, 6px);
   }

   .line2 {
      transform: rotate(45deg) translate(4.5px, 9px);
   }

   .close-icon {
      position: relative;
      width: 1.5rem;
      height: 1.5rem;
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

   .flex-section {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      align-items: center;
      max-height: 90vh;
   }
   .project-section {
      padding: 4rem;
   }

   .section-title {
      font-weight: var(--regular);
      color: var(--black80);
      padding : 0 0 4rem 0;
      font-size: 2.5rem;
   }
   .section-text {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 50vw;
   }
   .section-paragraph {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      text-align: left;
   }

   .project-section img{
      width: 50vw;
   }
   
   .full-width img{
      width: 100vw;
   }

   .problems-section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
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

   .design-sections img{
      width: 50vw;
   }

   .design-sections:nth-last-child(odd){
      flex-direction: row-reverse;
   }

   .prototype {
      width: 100%;
      height: 90vh;
      padding: 2rem 1rem;
   }

   .prototype-section {
      padding: 2rem 4rem 0 4rem;
   }

   .prototype img {
      width: 30%;
      height: 100%;
      object-fit: contain;
   }

   .design-sections {
      padding: 2rem 1rem;
   }
   .design-image img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
   }

   .design-section {
      padding: 0 4rem;
      display: flex;
      flex-direction: column;
      gap: 2rem
   }

   .conclusion {
      width: 50%;
      margin: 0 auto;
   }
</style>