const app = new Vue({
    el: '#user-goal',
    data() {
        //a function that returns an object
        return {
            courseGoal: 'biiiiihhhhh',
            vueLink: "https://vuejs.org/",
            courseGoalA: "Learn Vue",
            courseGoalB: "Master Vue",
        }
    },
    methods: {
        //an object full of methods
        outputGoal(){
            const randomNumber = Math.random()
            if(randomNumber < 0.5){
                return this.courseGoalA
            }
            else{
                return this.courseGoalB
            }
        }
    }
});

