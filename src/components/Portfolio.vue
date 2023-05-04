<template>
    <div class="projects-section" >
        <div class="projects-slider" @scroll.passive="displayProject()">
            <div class="project-card background" v-for="(project, index) in projects" :key="project">
                <div class="left-card ">
                    <div class="project-image">
                        <img :src="project.image" :alt="project.alt" loading="lazy">
                    </div>
                    <div class="project-skills">

                    </div>
                </div>
                <div class="right-card">
                    <div class="project-header">
                        <div class="project-number">0{{ index +1}}.</div>
                        <h2 class="project-title">{{ project.title }}</h2>
                    </div>

                    <div class="project-data">

                        <h3 class="project-subtitle">{{ project.subtitle }}</h3>

                        <p class="project-description">{{ project.description }}</p>

                        <div class="project-kpis">
                            <div class="project-kpi" v-for="kpi in project.kpi" :key="kpi">
                                <div class="kpi-figures"> <span class="kpi-number">{{ kpi.number }}</span> <span class="kpi-data">{{ kpi.data }}</span></div>
                                <div class="kpi-info">{{ kpi.info }}</div>
                            </div>
                        </div>
                        
                        <router-link :to="project.url" class="btn-primary"> Learn more</router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="projects-nav">
            <div v-for="(project, index) in projects" :key="project">
                <div class="pointer project-number-nav" v-bind:class="activeProject === index? 'active-project': 'inactive-project'" @click="activeProject = index, scrollProject(index), displayProject()">
                    0{{ index +1}}
                </div>
            </div> 
        </div>
    </div>
</template>
   
<script>
export default {
    name: 'PortfolioItems',
    data() {
        return {
            activeProject: 0,
            projects: [
                {
                    title: "MATEMATCH",
                    subtitle: "10 days to help foreign students live a deeper exchange experience",
                    description: "Built through Le Wagon Bootcamp (leader in tech bootcamp) with 2 other people. Matematch is a Web App helping foreign students to meet locals and discover local culture.",
                    kpi: [
                        {
                        number: "9",
                        data: "Weeks",
                        info: "to learn coding",
                        },
                        {
                        number: "10",
                        data: "Days",
                        info: "to create an app",
                        },
                        {
                        number: "+1100",
                        data: "Views",
                        info: "on the product pitch",
                        },
                    ],
                    url: "/matematch",
                    image: require('../assets/images/projects/matematch/cover.png'),
                    alt: "Mockup of the Matematch project"
                },

                {
                    title: "LEGID",
                    subtitle: "48h to help families live an easier mourning",
                    description: "Built through a start-up weekend with 5 other people. LegID is a service allowing families to manage the data of deceased persons",
                    kpi: [
                        {
                        number: "44",
                        data: "Hours",
                        info: "of work",
                        },
                        {
                        number: "8",
                        data: "Teams",
                        info: "competing",
                        },
                        {
                        number: "1st",
                        data: "Place",
                        info: "winning team",
                        },
                    ],
                    url: "/legid",
                    image: require('../assets/images/projects/legid/cover.png'),
                    alt: "Mockup of the LegID project"
                },

                {
                    title: "MOKABA",
                    subtitle: "Redesign the website of a German mobile coffee shop",
                    description: "My first side project including a business owner with a real problematic. On this project I worked from interviews and framing the needs to the design.",
                    kpi: [
                        {
                        number: "1",
                        data: "Website",
                        info: "to redesign",
                        },
                        {
                        number: "2",
                        data: "Owners",
                        info: "to partner with",
                        },
                        {
                        number: "",
                        data: "",
                        info: "",
                        },
                    ],
                    url: "/mokaba",
                    image: require('../assets/images/projects/mokaba/cover.png'),
                    alt: "Mockup of the Matematch project"
                },
            ]
        }
    },
    methods: {
        scrollProject(index) {
            const slider =  document.querySelector('.projects-slider');
            var windowWidth = window.innerWidth
            var target = index * windowWidth;

            slider.scrollTo(target, 0);
        },

        displayProject() {
            // Get current readable project
            const slider =  document.querySelector('.projects-slider');
            const card = document.querySelector('.project-card');
            
            // this.activeProject = slider.scrollLeft / card.offsetWidth;
            var activeProject = slider.scrollLeft / card.offsetWidth;

            // Nav adjust to current project
            const numbers = document.querySelectorAll('.project-number-nav');

            numbers.forEach((number, index) => {
                number.classList.remove('inactive-project')
                number.classList.remove('active-project')
                if (index === activeProject) {
                    number.classList.add('active-project')
                }
                else {
                    number.classList.add('inactive-project')
                }
            });
        },
    },
    // beforeUpdate() {
    //     this.displayProject()
    // },
}
</script>
   

<style scoped>
/* =============== Small devices ================ */
@media screen and (max-width: 930px) {
    .project-card{
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 0 auto;
    }
    .projects-slider{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0 2rem;
    }

    .left-card {
        display: none;
    }

    .right-card{
        width: 100%;
        height: calc(100%);
    }

    .project-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 2px black solid;
        padding: 2rem 4rem;
        width: 100%;
        justify-content: center;
    }

    a {
        margin: 0 auto;
    }

    .projects-nav {
        display: none;
    }
    .project-number{
        font-size: 3rem;
        font-weight: var(--semi-bold);
    }
    .project-data {
        padding: 1rem 2rem;
        gap: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    .project-kpis {
        display: none;
    }
}
/* =============== Big devices ================ */
@media screen and (min-width: 930px) {
    .project-card{
        display: flex;
        flex-direction: row;
        height: calc(100vh - 4rem);
        scroll-snap-align: start;
        width: 100%;
    }
    .projects-slider{
        display: flex;
        flex-direction: row;
        overflow-y: hidden;
        height: calc(100vh - 4rem);
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
    }

    .project-subtitle, .project-description{
        text-align: left;
    }

    .left-card {
        width: 50vw;
        height: calc(100%);
    }

    .right-card{
        border-left: 2px black solid;
        width: 50vw;
        height: calc(100%);
    }

    .project-header{
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 2px black solid;
        padding: 2rem 4rem;
    }
    .projects-nav {
        height: 4rem;
        gap: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 2px solid var(--black100);
    }
    .project-number{
        font-size: 4rem;
        font-weight: var(--semi-bold);
    }
    .project-data {
        padding: 3rem 4rem;
        gap: 3rem;
        display: flex;
        flex-direction: column;
    }
    .project-kpis {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}

.active-project {
    font-size: 2rem !important;
    font-weight: var(--semi-bold) !important;
    color: var(--black100)!important; 
    transition: ease-in 0.2s;
}

.inactive-project{
    font-size: 2rem;
    font-weight: var(--semi-bold);
    color: var(--black50);
    transition: ease-in 0.2s;
}

.projects-slider::-webkit-scrollbar {
    height: 0;
    width: 0;
}

.kpi-figues {
    display: flex;
    flex-direction: row;
}
.kpi-number {
    font-weight: var(--bold);
    font-size: 2rem;
}

.kpi-data {
    font-weight: var(--bold);
}
.kpi-info {
    color: var(--black80);
    font-weight: var(--medium);
}
/* 
.project-subtitle {
    font-size: 1.5rem;
} */

.project-image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 4rem;
    height: 100%;
    overflow: hidden;
}

.project-image img{
    height: 100%;
    object-fit: contain;
}

.background:nth-child(even) {
    background: linear-gradient( rgba(214, 206, 199, 0.4), rgba(214, 206, 199, 0.4) ), url(../../src/assets/images/background.jpg)
}


.inactive-project:hover {
    color: var(--black30);
}
</style>
