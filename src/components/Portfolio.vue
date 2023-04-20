<template>
    <section class="projects-section">
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
                <a class="project-nav-link" href="">0{{ index +1}}</a>
            </div> 
        </div>
    </section>
</template>
   
<script>
export default {
    name: 'PortfolioItems',
    data() {
        return {
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
                    url: "/legid",
                    image: "https://www.tanguydeleage.com/assets/img/projects/coop/coop-mockup.png"
                },
            ]
        }
    }
}
</script>
   
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.projects-nav {
    height: 4rem;
    gap: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.project-nav-link {
    font-size: 2rem;
    font-weight: var(--semi-bold);
    color: var(--black100);
}
.projects-slider{
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    height: calc(100vh - 4rem);
}
.project-card{
    display: flex;
    flex-direction: row;
    height: calc(100vh - 4rem);
}

.right-card{
    border-left: 2px black solid;
    width: 50vw;
    height: calc(100%);
}

.left-card {
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

.project-data {
    padding: 3rem 4rem;
    gap: 3rem;
    display: flex;
    flex-direction: column;
}
.project-number{
    font-size: 4rem;
    font-weight: var(--semi-bold);
}
.project-subtitle {
    text-align: left;
}

.project-description {
    text-align: left;
}

.project-kpis {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    color: var(--black50);
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
</style>
