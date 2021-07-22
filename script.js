const app = {
    data(){
        return{
            name: 'Alexander',
            idade: 34
        }
    }
}

Vue.createApp(app).mount("#app")