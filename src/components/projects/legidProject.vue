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
                  <img src="../../assets/icons/back-arrow.svg" class="pointer arrow-back-small" loading="lazy" @click="$router.go(-1)" alt="">
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
                <a href="https://www.figma.com/proto/nz1BI2XULa2F0bJYd3TDAA/Proto?node-id=2-925&scaling=scale-down&page-id=2%3A923&hide-ui=1" class="btn-primary" target="_blank">Try prototype</a>
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
            <div>
                <img :src="research.image" alt="" loading="lazy">
             </div>
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
          </div>
       </section>

       <section class="project-section">
          <h2 class="section-title">{{ interview.title }}</h2>
          <div class="flex-section">
             <div class="section-text">
                <div class="section-paragraph">
                   <h3>{{ interview.h1 }}</h3>
                   <p>{{ interview.p1 }}</p>
                </div>
                <div class="section-paragraph">
                   <h3 >{{ interview.h2 }}</h3>
                   <p>{{ interview.p2 }}</p>
                </div>
             </div>
             <div>
                <img :src="interview.image" alt="" loading="lazy">
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

       <section class="project-section">
          <h2 class="section-title">{{ solution.title }}</h2>
          <div class="flex-section">
             <div>
                <img :src="solution.image" alt="" loading="lazy">
             </div>
             <div class="section-text">
                <div class="section-paragraph">
                   <h3> {{ solution.h1 }}</h3>
                   <p>{{ solution.p1 }}</p>
                </div>
                <div class="section-paragraph">
                   <h3> {{ solution.h2 }}</h3>
                   <p>{{ solution.p2 }}</p>
                </div>
             </div>
          </div>
       </section>
 
       <section>
          <h2 class="section-title">{{ conception.title }}</h2>
          <div class="design-section">
             <div v-for="section in conception.sections" :key="section" class="flex-section background design-sections">
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
             </div>
          </div>
       </section>
 
       <section class="project-section">
          <h2 class="section-title">{{ pitch.title }}</h2>
          <div class="flex-section">
            <div>
                <img :src="pitch.image" alt="" loading="lazy">
             </div>
             <div class="section-text">
                <div class="section-paragraph">
                   <h3> {{ pitch.h1 }}</h3>
                   <p>{{ pitch.p1 }}</p>
                </div>
             </div>
          </div>
       </section>

       <section class="project-section">
          <h2 class="section-title">{{ conclusion.title }}</h2>
          <div class="flex-section">
             <div class="section-text">
                <div class="section-paragraph">
                   <h3> {{ conclusion.h1 }}</h3>
                   <p>{{ conclusion.p1 }}</p>
                </div>
             </div>
             <div>
                <img :src="conclusion.image" alt="" loading="lazy">
             </div>
          </div>
       </section>

       <section>
         <div class="project-section container rebond-section background">
            <div class="up-arrow" @click="goUP()">
               <img src="../../assets/icons/back-arrow.svg" alt="" loading="lazy">
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
    name: 'legidProject',
      data() {
       return {
          project: {
            image: require("../../assets/images/projects/legid/cover.png"),
             title: "LEGID",
             category: "Ideation & Design",
             context: "During a startup weekend (creating a startup in 48h), in a group of 5 people we had 48 hours to find a problematic, test it with real users, evaluate the business viability, build a roadmap and pitch the project in front of a jury.",
             role: "I had the chance to pitch the LegID project in front of the jury. My role on this project was to propose the problematic we then choose to solve. I worked on the ideation of the solution and the user research. Then I worked alone on the landing page design.",
             tools: "Figma, Google Drive, Powerpoint",
             year: "2022",
          },
 
          challenge: {
             title: "CHALLENGE",
             image: require("../../assets/images/projects/legid/challenge.jpg"),
             h1: "Create the best promising and viable startup project",
             p1: "8 groups, working from 8am to 1am to design the best start-up project. The aim is to solution a real problem, with an economically viable test it, and present it in front of a jury of 5 entrepreneurs or incubator directors.",
             h2: "Helping family with deceased data management and digital patrimony",
             p2: "Did you know that in 2070 on Facebook, there will be more dead users than alive. Indeed, the network is getting older and nobody deletes his account before dying. Unfortunately, this is not the only platform, since we are digital, we have multiplied the creation of accounts but have never considered their deletion. This data can make it harder for families to grieve, but it also contributes to data center CO2 emissions. We need to find a solution.",
          },
 
          process: {
             title: "PROCESS",
             image: require("../../assets/images/projects/legid/process.svg"),
             h1: "Design Thinking: Full scope",
             p1: "We only have a week end to work, so obviously we won’t achieve a fine tuned enterprise. However we will confirm the existence of a problem, explore it, imagine solution and test their potential. In terms of the design thinking approach, this will cover the whole scope from problem to solution. Even if each part will be cover quickly.",
             botImage: require("../../assets/images/projects/legid/timeline.svg"),
          },
 
          research: {
             title: "RESEARCH",
             image: require("../../assets/images/projects/legid/research.jpg"),
             h1: "Ideation",
             p1: "Friday, 10pm, we start with an empty whiteboard, we have until 1am to fill it and come up with a solution. We start our ideation workshop with a Crazy 8, an exercise where each member has 8 minutes to find 8 ideas. This allows us to build quantity over quality. However it helps everyone speaks freely and may helps create connections between ideas. At the end of the exercise the whiteboard is filled and we must organise our ideas. When we leave the place at 1am, 3 ideas are left on the board, we should have selected our problem by that time.",
             h2: "Brainstormig",
             p2: "When we arrived at 8 in the morning, we knew we had to choose quickly what problematic we wanted to work on. Our choices were about sustainable clothes, recycling glasses, or deceased data management. Deep inside me i wanted to work on the last one but everyone else was embarrassed to tackle such a problematic. I proposed a brainstorming workshop where I’d be the facilitator, not involved in the decision. It took time but at the end of the workshop everyone was ready to work one the deceased data management.",
          },

          interview: {
             title: "INTERVIEWS",
             image: require("../../assets/images/projects/legid/interview.jpg"),
             h1: "Notaries & Legal frame",
             p1: "It is already Saturday afternoon, and we have to verify that our problem is real and that bringing a solution to it makes sense. After many researches on the internet, we chose to call notaries to inform us about the legal framework and its limits. We learn that the subject is not covered in France, it is a “grey zone”, but the interest is growing. ",
             h2: "Relatives of deceased persons",
             p2: "By chatting with people, we discovered that families don’t know how to deal with their relatives digital assets and would generally prefer to erase the data especially when they acknowledge the environmental impact.",
          },
 
          problems: {
             title: "PROBLEMS",
             kpis: [
                {
                   number: "Months",
                   description: "To manage legal procedures"
                },
                {
                   number: "17M",
                   description: "Tons of CO2 released by data centers"
                },
                {
                   number: "“No legal frame”",
                   description: "Romain MAGANA - Notary in Nantes"
                }
             ]
          },

          solution: {
             title: "SOLUTION / PROBLEM FIT",
             image: require("../../assets/images/projects/legid/solution.jpg"),
             h1: "MVP Approach",
             p1: "In the second part of the afternoon, following our exchanges we have to imagine our solution to allow the 'transmission of our digital heritage'. At first, thanks to a new brainstorming we evoke the possibility of a platform of sharing passwords with the wishes of the deceased person. We could thus choose to delete our Facebook account but keep our Instagram photos. In view of the security constraints that this poses we chose to focus on the core of our topic. We therefore first thought about a solution to allow families to easily request the deletion of their loved ones' accounts.",
             h2: "Test and learn",
             p2: "To verify the interest of our solution, we contacted funeral homes. Through these exchanges they told us that according to them this service could interest families and they would even be interested to add this service in their prestations.",
          },
 
          conception: {
             title: "CONCEPTION",
             sections: [
                {
                   subtitle: "Value Proposition",
                   description: "LegID is based on a B2B2C model. Our goal is to offer our service to the families of the deceased through the intermediary of funeral directors, who thus complete their service offers. Our offer is thus sold in a package by the undertakers. We are thus put in direct contact with the families who need it. In return, the undertaker receives a commission.",
                   image: require("../../assets/images/projects/legid/flow.svg"),
                },
                {
                   subtitle: "Product viability",
                   description: "Every year, more than 600 000 people die in France. To give us an idea of the potential stagnant data that this represents, we focused on email addresses (necessary to open any other account). It is thus not less than 400 000 e-mail address holders who die each year in France. According to the interviews we have been able to conduct, we estimate that we could help 130,000 people. In terms of market this represents a potential of 6.5M € each year.",
                   image: require("../../assets/images/projects/legid/viability.svg"),
                },
                {
                   subtitle: "Landing Page",
                   description: "First of all, in order to sensitize the families but also the undertakers about the data life cycle, I chose to design a landing page. The biggest difficulty here was to find an adequate message. Death being a sensitive subject, I had to find the right tone. As we are also dealing with environmental and technological issues, I took the liberty to use brighter colors and some illustrations. It is necessary to remember that this subject must be understood early, it is thus necessary to include the youngest in its comprehension, that can pass by the aesthetics of our page which I wanted pleasant.",
                   image: require("../../assets/images/projects/legid/cover.png"),
                },
             ]
          },
 
          prototype: {
             title: "Presentation Deck",
             image: require("../../assets/images/projects/legid/slides.gif"),
          },
 
          pitch: {
             title: "PITCH",
             image: require("../../assets/images/projects/legid/pitch.jpg"),
             h1: "5min to convince 5 person",
             p1: "Being the initiator of LegID, I pitched the project alone in front of a jury of 5 people, entrepreneurs, but also directors of incubators. During this 5-minute pitch, I had to present all the steps of our project, from the research of the problem, to our financial projections and our milestones.",
          },
 
          conclusion: {
             title: "CONCLUSION",
             image: require("../../assets/images/projects/legid/conclusion.jpg"),
             p1: "The jury selected us as the winner, so we won a nice trophy but also the possibility to be incubated in the Centrale-Audencia incubator. After working long hours on a project like this one, we realized how important it is to build a team in a project. In our case, we are all students at different ages and working on a project for a weekend together is quite different from working on it for years. So we preferred to decline the offer so that everyone could work on other projects.",
          },

          rebond: {
            title: "Mokaba",
            subtitle: "Redesign the website of a German mobile coffee shop",
            link: "/mokaba",
            image: require('../../assets/images/projects/mokaba/cover.png'),
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

   .cover-project {
      max-height: 30rem;
   }
   .project-section {
      padding: 2rem;
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
   }
   .conclusion {
      width: 100%;
      margin: 0 auto;
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
      display : flex;
      justify-content: center;
   }
   .prototype img {
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