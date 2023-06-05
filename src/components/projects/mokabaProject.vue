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
                   <img src="../../assets/icons/back-arrow.svg" class="pointer arrow-back-small" loading="lazy" @click="$router.go(-1)" alt="Icon back arrow">
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
                <a href="https://www.figma.com/proto/nz1BI2XULa2F0bJYd3TDAA/Proto?node-id=10-506&scaling=scale-down&page-id=2%3A2&hide-ui=1" class="btn-primary" target="_blank">Try prototype</a>
             </div>
             
          </div>
       </section>
 
       <section class="project-section">
          <h2 class="section-title">{{ challenge.title }}</h2>
          <div class="flex-section">
             <div>
                <img :src="challenge.image" :alt="challenge.alt" loading="lazy">
             </div>
             <div class="section-text">
                <div class="section-paragraph">
                   <h3> {{ challenge.h1 }}</h3>
                   <p>{{ challenge.p1 }}</p>
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
                <img :src="process.image" :alt="process.alt" loading="lazy">
             </div>
          </div>
          <div class="full-width">
             <img :src="process.botImage" alt="Process" loading="lazy">
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
                <img :src="research.image" :alt="research.alt" loading="lazy">
             </div>
          </div>
       </section>
 
       <section>
          <h2 class="section-title">{{ design.title }}</h2>
          <div class="design-section">
             <div v-for="section in design.sections" :key="section" class="flex-section background design-sections">
                 <div class="design-image">
                   <img :src="section.image" :alt="section.alt">
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
                <img :src="prototype.image" :alt="prototype.alt" loading="lazy">
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
                <img src="../../assets/icons/back-arrow.svg" :alt="rebond.alt" loading="lazy">
             </div>
             <div class="rebond-right">
                <!-- <div class="rebond-picture">
                   <img :src="rebond.image" alt="" loading="lazy">
                </div> -->
                <div class="rebond-data">
                   <div class="rebond-title">
                      <h3>{{ rebond.title }}</h3>
                      <p>{{rebond.subtitle}}</p>
                   </div>
                   <!-- <a :href="rebond.link" class="btn-primary">Discover next project</a> -->
                   <router-link class="btn-primary" :to="rebond.link">Go to about page</router-link>
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
             image: require("../../assets/images/projects/mokaba/cover.png"),
             title: "MOKABA",
             category: "Research, UI, UX",
             context: "Mokaba is a mobile café in Mosbach, Germany. They have had a website for several years which they use very little.",
             role: "On this project, I conducted interviews, framed problems, created a UI Kit, presented and justified my designs.",
             tools: "Figma",
             year: "2022",
          },
 
          challenge: {
             title: "CHALLENGE",
             image: require("../../assets/images/projects/mokaba/challenge.png"),
             h1: "Redesign the website of an itinerant coffee shop",
             p1: "I chose to help them by designing their website and then I could code it for them. The main challenge for me is that I'm starting from scratch and that we will have to exchange in English.",
             alt: "Mokaba old website"
          },
 
          process: {
             title: "PROCESS",
             image: require("../../assets/images/projects/matematch/process.svg"),
             alt: "Design Thinking process",
             h1: "Design Thinking: Solution focused",
             p1: "I don't have to delete the old project completely. You have to be able to keep the identity of the site, reflect their project as well as possible and especially make it clear what needs to be improved. If we were able to spend time exchanging on the needs and expectations via interviews, I consider that this project was more access on the construction of the solution.",
             botImage: require("../../assets/images/projects/mokaba/timeline.svg"),
          },
 
          research: {
             title: "RESEARCH",
             image: require("../../assets/images/projects/mokaba/research.jpg"),
             alt: "Audit process",
             h1: "UI/UX Audit",
             p1: "During my UI/UX audit, I went through the site, the different pages, tested the different paths. I tested the animations and links. I tested on different devices. I could see that the site was not responsive, the contrast levels are not high enough, making it difficult to read in places. Some images are not displayed.",
             h2: "Technical Audit",
             p2: "In a second step, I performed a more technical audit. I first used the Google Lighthouse tool. This allowed me to analyze the performance of the site and to see that it was not very efficient. On the other hand, I noticed that many 'quick fixes' could be implemented. For example, the images do not have relevant alternative texts. So I listed these actions in a document to present them.",
          },

 
          design: {
             title: "CONCEPTION",
             sections: [
                {
                   subtitle: "Structure",
                   description: "Once the problems were discussed, we chose together what we would put in place. So I made various proposals for page structures. In view of the simplicity of the content, we chose to set up a 'Single Page Application', a site on a single page where the contents follow one another. Within the page we structured the content following the golden circle of Simon Sinek (Why, How, What).",
                   image: require("../../assets/images/projects/mokaba/structure.png"),
                   alt: "Mokaba new website structure",
                },
                {
                   subtitle: "Fonts",
                   description: "For the fonts, I chose to use two, 'Playball' for the name Mokaba and 'Nunito' for the texts. I chose to use the Playball font which has a handwritten look to reflect the 'Homemade' aspect of the café. Finally for the texts I chose a rather minimalist and rounded font. Here my idea was to show that quality can reside in simplicity without giving a too playful aspect.",
                   image: require("../../assets/images/projects/mokaba/fonts.jpg"),
                   alt: "Mokaba new website fonts",
                },
                {
                   subtitle: "Colors",
                   description: "Concerning the text colors, I stayed on white and black to keep the simple aspect, the essential. Then, for the background colors, I stayed on colors inspired by coffee and cappuccino. The colors are shades of brown and beige.",
                   image: require("../../assets/images/projects/mokaba/colors.jpg"),
                   alt: "Mokaba new website colors",
                },
                {
                   subtitle: "Components",
                   description: "If the site is very simple, I still needed to create a small UI Kit, including some components. To present the products, I was able to create a product card with its version for smaller screens. I also created a second map to present the locations where the café is located. Finally I chose to use a wave element to start and end my linear background. My idea was to reproduce a liquid look, like you would get in a cup of coffee.",
                   image: require("../../assets/images/projects/mokaba/components.jpg"),
                   alt: "Mokaba new website components",
                },
                {
                   subtitle: "Wireframe",
                   description: "Once all the elements were gathered, we started to bring our ideas to life by creating the wireframe. This is the black and white skeleton of the site. This is how we could choose our layout, especially for the hero section",
                   image: require("../../assets/images/projects/mokaba/wireframe.png"),
                   alt: "Mokaba new website wireframe",
                },
             ]
          },
 
          prototype: {
             title: "PROTOTYPE",
             image: require("../../assets/images/projects/mokaba/cover.png"),
             alt: "Mokaba mockup"
          },
 
          conclusion: {
             title: "CONCLUSION",
             p1: "This project was very interesting for me because through my studies I worked much more on the problematic aspect of a subject and less on the craft aspect. Here I could create this project from scratch. Moreover, this work is full of meaning, since I know that this work will be useful to someone. Finally it was very interesting to work with someone from another nationality.",
          },
 
          rebond: {
             title: "Get to know me",
             subtitle: "Curious about my designer / developper journey ?",
             link: "/about",
             image: require('../../assets/images/projects/matematch/cover.png'),
             alt: "Matematch mockup"
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
       height: calc(100vh - 8rem);
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
       width: 100%;
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