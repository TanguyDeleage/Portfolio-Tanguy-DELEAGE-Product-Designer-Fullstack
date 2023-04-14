<template>
    <div v-for="(project, index) in projects" :key="project">

        <img :src="project.image" alt="">
        {{ index +1}}
        {{ project.title }}
        {{ project.subtitle }}
        {{ project.description }}
        <div v-for="kpi in project.kpi" :key="kpi">
            <div>{{ kpi.number }}</div>
            <div>{{ kpi.info }}</div>
        </div>
        <div v-for="kpi in project.kpi" :key="kpi"></div>
        <button><a href="{{ project.url }}">Learn more</a></button>
    </div>

    <div v-for="(project, index) in projects" :key="project">
        <button>{{ index +1}}</button>
    </div>
    
</template>
   
   <script>
   export default {
     name: 'PortfolioItems',
     data() {
        return {
            projects: [
                {
                title: "Matematch",
                subtitle: "10 days to help foreign students live a deeper exchange experience",
                description: "Built through Le Wagon Bootcamp (leader in tech bootcamp) with 2 other people. Matematch is a Web App helping foreign students to meet locals and discover local culture.",
                kpi: [
                    {
                    number: "9 weeks",
                    info: "to learn coding",
                    },
                    {
                    number: "10 Days",
                    info: "to create an app",
                    },
                    {
                    number: "+1100 Views",
                    info: "on the product pitch",
                    },
                ],

                url: "des trucs",
                image: "https://www.tanguydeleage.com/assets/img/projects/matematch/matematch-mockup.png"},
                {
                title: "LegID",
                subtitle: "10 days to help foreign students live a deeper exchange experience",
                description: "Built through Le Wagon Bootcamp (leader in tech bootcamp) with 2 other people. Matematch is a Web App helping foreign students to meet locals and discover local culture.",
                kpi: [1,2,3],
                url: "des trucs",
                image: "https://www.tanguydeleage.com/assets/img/projects/coop/coop-mockup.png"},
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
   