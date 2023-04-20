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
                <a href="" class="btn-primary">Try prototype</a>
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
                <img :src="interview.image" alt="">
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
                <img :src="solution.image" alt="">
             </div>
             <div class="section-text">
                <div class="section-paragraph">
                   <h3> {{ solution.h1 }}</h3>
                   <p>{{ solution.p1 }}</p>
                </div>
             </div>
          </div>
       </section>
 
       <section>
          <h2 class="section-title">{{ conception.title }}</h2>
          <div class="design-section">
             <div v-for="section in conception.sections" :key="section" class="flex-section background design-sections">
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
             title: "LEGID",
             category: "Ideation & Design",
             context: "During a startup weekend (creating a startup in 48h), in a group of 5 people we had 48 hours to find a problematic, test it with real users, evaluate the business viability, build a roadmap and pitch the project in front of a jury.",
             role: "I had the chance to pitch the LegID project in front of the jury. My role on this project was to propose the problematic we then choose to solve. I worked on the ideation of the solution and the user research. Then I worked alone on the landing page design.",
             tools: "Figma, Google Drive, Powerpoint",
             year: "2022",
          },
 
          challenge: {
             title: "CHALLENGE",
             image: require("../../assets/images/projects/matematch/team.jpg"),
             h1: "Create the best promising and viable startup project",
             p1: "8 groups compete 18h a day (even during dinner) to bring the best startup project.",
             h2: "Helping relatives of a deceased person to manage the deceased's digital patrimony",
             p2: "X",
          },
 
          process: {
             title: "PROCESS",
             image: require("../../assets/images/projects/matematch/process.svg"),
             h1: "Design Thinking : Full scope",
             p1: "X",
             botImage: require("../../assets/images/projects/matematch/timeline.svg"),
          },
 
          research: {
             title: "RESEARCH",
             image: require("../../assets/images/projects/matematch/friends.jpg"),
             h1: "Brainstorming",
             p1: "First thing first, we must find a problem to tackle. We will share freely our ideas and write them on a big whiteboard. The aim here is to not judge and just bring ideas. This task would last from 10pm to 1am on the friday.",
             h2: "Convincing the team",
             p2: "On the saturday morning, we were late, we should had choose  already what problematic we wanted to work on. Either our problematics were to common (food delivery, clothes recycling...) or teammate were not ready to work on it because of the subject : the funeral industry.",
          },

          interview: {
             title: "INTERVIEWS",
             image: require("../../assets/images/projects/matematch/friends.jpg"),
             h1: "Phone calls & Chat",
             p1: "X",
             h2: "Problem validation",
             p2: "X",
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
             image: require("../../assets/images/projects/matematch/friends.jpg"),
             h1: "MVP Approach",
             p1: "X",
             h2: "Test and learn",
             p2: "X",
          },
 
          conception: {
             title: "CONCEPTION",
             sections: [
                {
                   subtitle: "Value Proposition",
                   description: "X",
                   image: require("../../assets/images/projects/matematch/flow.jpg"),
                },
                {
                   subtitle: "Product viability",
                   description: "X",
                   image: require("../../assets/images/projects/matematch/sketch.jpg"),
                },
                {
                   subtitle: "Landing Page",
                   description: "X",
                   image: require("../../assets/images/projects/matematch/branding.svg"),
                },
             ]
          },
 
          prototype: {
             title: "Presentation Deck",
             image: require("../../assets/images/projects/matematch/flow1.png"),
          },
 
          pitch: {
             title: "PITCH",
             // image: require("https://www.youtube.com/embed/1AYKmFTObQQ?start=2435"),
             h1: "5min to convince 5 person",
             p1: "X",
          },
 
          conclusion: {
             title: "CONCLUSION",
             p1: "X",
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