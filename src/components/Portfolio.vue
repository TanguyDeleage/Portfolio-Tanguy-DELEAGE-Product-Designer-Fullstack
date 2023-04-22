<template>
    <div class="projects-section">
        <div class="projects-slider">
            <div class="project-card background" v-for="(project, index) in projects" :key="project">
                <div class="left-card ">
                    <div class="project-image">
                        <img :src="project.image" alt="">
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
                        
                        <!-- <router-link class="btn-primary" :href=" project.url" to="/matematch">Learn more</router-link> -->
                        <a :href=" project.url" class="btn-primary"> Learn more</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="projects-nav">
            <div v-for="(project, index) in projects" :key="project">
                <div class="pointer" v-bind:class="activeProject === index? 'active-project': 'inactive-project'" @click="activeProject = index, scrollProject(activeProject)">
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
                        data: "weeks",
                        info: "to learn coding",
                        },
                        {
                        number: "10",
                        data: "Days",
                        info: "to create an app",
                        },
                        {
                        number: "+1100",
                        data: "View",
                        info: "on the product pitch",
                        },
                    ],
                    url: "/matematch",
                    image: require('../assets/images/projects/matematch/cover.png')
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
                    image: require('../assets/images/projects/legid/cover.png')
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

        // activateProject(index) {
            // ('.projects-slider').scrollWidth   => total scrollable
            // somme des index => nombre de projet
            // total scrollable / nrb de projet => largeur d'un projet

            // for X project
            //      if ('.projects-slider') scroll left <= X*largeur d'un projet
            //      active project = X
        // }
    }
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

    .project-subtitle .project-description{
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
    font-size: 2rem;
    font-weight: var(--semi-bold);
    color: var(--black100);
}

.inactive-project{
    font-size: 2rem;
    font-weight: var(--semi-bold);
    color: var(--black50);
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

.pointer:hover {
    cursor: pointer;
}

.inactive-project:hover {
    color: var(--black30);
}
</style>
