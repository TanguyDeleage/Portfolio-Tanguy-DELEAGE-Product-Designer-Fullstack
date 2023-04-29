<template>
    <div class="contact">
        <div class="socials background">
            <h1>Contact</h1>
            <div>
                <div v-for="contact in contacts" :key="contact" class="social-links">
                    <span class="social-title">{{ contact.title }}</span>
                    <!-- Comment arriver à display l'icon ????? -->
                    <div class="social-link"> 
                        <img class="social-icon" :src="require('../../assets/icons/' +  contact.icon)" :alt="'Logo ' + contact.title">
                        <a :href="contact.link" class="btn-tertiary"> {{ contact.label }} </a>
                    </div>
                </div>
            </div>
            <div class="contact-footer">
                <span class="signature"> <img src="https://www.tanguydeleage.com/assets/img/logo.svg" width="24" height="27" alt="Logo Tanguy DELEAGE"> <p>Tanguy Deléage</p> </span>
                <p class="contact-description">Feel free to share your thoughts and questions. I’m always open to exchange about new projects.</p>
            </div>
        </div>

        <form class="contact-form" id="contact-form" action="https://formsubmit.co/contact@tanguydeleage.com" method="POST">
            <div v-for="(input, index) in inputs" :key="input" class="form-input">
                <label :for="input.label">{{ input.label }}</label>
                <input v-if="index != 2" :type="input.type" :placeholder= "input.placeholder" :name="input.label" form="contact-form" required>
                <textarea v-else class="big-input" type="text" :placeholder= "input.placeholder" :name="input.label" form="contact-form" required></textarea>
                
            </div>
            <input type="hidden" name="_next" value="/">
            <input type="hidden" name="_subject" value="New contact request from portfolio">

            <btn type="submit" class="btn-primary">Submit</btn>
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
                icon: "mail.svg",
                label: "contact@tanguydeleage.com",
                link: "mailto:contact@tanguydeleage.com"
                },
                {
                title: "Linkedin",
                icon: "linkedin.svg",
                label: "tanguy-deleage",
                link: "https://www.linkedin.com/in/tanguy-deleage/"
                },
                // {
                // title: "Dribble",
                // icon: 'mail.svg',
                // label: "TanguyDELEAGE",
                // link: ""
                // }
            ],
            inputs: [
                {
                    label: "Name",
                    placeholder: "Archibald Haddock",
                    type: "text"
                },
                {
                    label: "Email",
                    placeholder: "capitainehaddock@gmail.com",
                    type: "email"
                },
                {
                    label: "Message",
                    placeholder: "Hello,",
                    type: "text"
                }
            ]
        }
    }
}
</script>

<style scoped>

/* =============== Small devices ================ */
@media screen and (max-width: 930px) {
    .contact {
        display: flex;
        flex-direction: column;
    }
    .socials {
        text-align: left;
        padding: 4rem 2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .contact-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 4rem 2rem;
        gap: 2rem;
        align-items: center;
    } 

    .contact-form input {
        background-color: var(--secondary);
        border: #CACACA 1px solid;
        box-shadow: 4px 4px 19px 1px #E3E3E3;
        border-radius: 0.5rem;
        width: 100%;
        padding: 1.5rem 1rem;
        font-family: 'lato';
    }
    .big-input {
        height: 12rem;
        background-color: var(--secondary);
        border: #CACACA 1px solid;
        box-shadow: 4px 4px 19px 1px #E3E3E3;
        border-radius: 0.5rem;
        width: 100%;
        padding: 1.5rem 1rem;
        resize: none;
        font-family: 'lato';
    }
    .contact-form label {
        font-weight: var(--semi-bold);
        display: flex;
        justify-content: flex-start;
        width: 100%;
    }
}

/* =============== Big devices ================ */
@media screen and (min-width: 930px) {
    .contact {
        display: flex;
        flex-direction: row;
        height: calc(100vh - 5rem);
    }

    .socials {
        text-align: left;
        padding: 4rem;
        width: 40vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .contact-form {
        width: 60vw;
        display: flex;
        flex-direction: column;
        padding: 4rem 4rem;
        gap: 2rem;
        align-items: center;
    } 
    .contact-form input {
    background-color: var(--secondary);
    border: #CACACA 1px solid;
    box-shadow: 4px 4px 19px 1px #E3E3E3;
    border-radius: 0.5rem;
    width: 80%;
    padding: 1.5rem 1rem;
    font-family: 'lato';
}
    .big-input {
        height: 12rem;
        background-color: var(--secondary);
        border: #CACACA 1px solid;
        box-shadow: 4px 4px 19px 1px #E3E3E3;
        border-radius: 0.5rem;
        width: 80%;
        padding: 1.5rem 1rem;
        resize: none;
        font-family: 'lato';
    }
    .contact-form label {
        font-weight: var(--semi-bold);
        display: flex;
        justify-content: flex-start;
        width: 80%;
    }
}

.form-input {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

::placeholder {
    color: hsla(0, 0%, 70%, 1);   
}

.social-links {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    gap: 0.5rem;
}

.social-link {
   display: flex;
   flex-direction: row; 
   font-weight: var(--semi-bold);
   gap: 0.5rem;
}

.social-icon{
    height: 1.2rem;
}

.social-title {
    font-weight: var(--medium);
    color: var(--black);
}

.signature p{
    font-weight: var(--semi-bold);
}

.signature{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
}

.contact-description {
    font-weight: var(--medium);
    color: var(--black80);
}

.contact-footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.last-input{
    background-color: blue;
}
</style>
    