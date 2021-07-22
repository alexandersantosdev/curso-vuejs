const app = {
    data() {
        return {
            name: '',
            idade: '',
            input_name: '',
            input_idade: ''
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault()
            this.name = this.input_name
            this.input_name = ''
            this.idade = this.input_idade
            this.input_idade = ''
        }
    },
}

Vue.createApp(app).mount("#app")