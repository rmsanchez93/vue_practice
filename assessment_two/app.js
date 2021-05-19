const app = Vue.createApp({
    data(){
       return {
           text: "",
           confirmText: "",
       }
    },
    methods: {
        alertHandle(){
            alert("the button's been clicked")
        },
        handleChange(e){
            this.text = e.target.value
        },
        handleEnter(){
            this.confirmText = this.text
        }
        
    }
}).mount('#assignment')