<template>
    <div>
        <h1>Contact</h1>
        <div v-for="contact in contacts" :key="contact">
            {{ contact.title }}
            <span>{{ contact.icon }} {{ contact.link }}</span>
        </div>

        <div>
            <span> <img src="" alt="X">Tanguy Deléage</span>
            <p>Feel free to share your thoughts and questions. I’m always open to exchange about new projects.</p>
        </div>
    </div>

    <div>
        <form v-for="input in inputs" :key="input">
            {{ input.title }}
            <input type="text" :placeholder= "input.placeholder">
        </form>

        <button>Submit</button>
    </div>
 </template>
    
<script>
export default {
    name: 'ContactSection',
    data () {
        return{
            contacts: [
                {
                title: "E-mail",
                icon: "X",
                link: "contact@tanguydeleage.com"
                },
                {
                title: "Linkedin",
                icon: "X",
                link: "tanguy-deleage"
                },
                {
                title: "Dribble",
                icon: "X",
                link: "TanguyDELEAGE"
                }
            ],
            inputs: [
                {
                    label: "Name",
                    placeholder: "Archibald Haddock",
                },
                {
                    label: "Email",
                    placeholder: "capitainehaddock@gmail.com",
                },
                {
                    label: "Message",
                    placeholder: "Hello,",
                }
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
    