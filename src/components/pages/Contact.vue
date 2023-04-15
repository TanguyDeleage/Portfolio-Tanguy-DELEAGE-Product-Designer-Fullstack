<template>
    <div class="contact">
        <div class="socials background">
            <h1>Contact</h1>
            <div v-for="contact in contacts" :key="contact" class="social-links">
                {{ contact.title }}
                <span class="social-link">{{ contact.icon }}{{ contact.link }}</span>
            </div>

            <div>
                <span> <img src="" alt="X">Tanguy Deléage</span>
                <p>Feel free to share your thoughts and questions. I’m always open to exchange about new projects.</p>
            </div>
        </div>

        <form class="contact-form">
            <div v-for="input in inputs" :key="input" class="form-input">
                {{ input.title }}
                <input type="text" :placeholder= "input.placeholder">
            </div>

            <a href="" class="btn-primary">Submit</a>
        </form>
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
.contact {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 5rem);
}

.socials {
    text-align: left;
    padding-left: 4rem;
    width: 40vw;
}

.contact-form {
    width: 60vw;
    display: flex;
    flex-direction: column;
    padding: 4rem 4rem;
    justify-content: center;
    align-items: center;
}

.form-input {
    width: 100%;
}

.contact-form input {
    background-color: var(--secondary);
    border: #CACACA 1px solid;
    box-shadow: 4px 4px 19px 1px #E3E3E3;
    border-radius: 0.5rem;
    width: 100%;
    padding: 2rem 1rem;
}
::placeholder {
    color: hsla(0, 0%, 70%, 1);
}

.social-links {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;;
}

.social-link {
   display: flex;
   flex-direction: row; 
}
</style>
    