<template>
  <div id="app">
    <HelloWorld msg="Dragon App built in Vue" />
    <br/>
    <button v-on:click='toggleForm'>{{ showForm ? 'Close Form' : 'Add Dragon' }}</button>
    <div v-if='showForm'>
    <dragon-form :handleSubmit='handleSubmit' :addDragon='addDragon'/>
    </div>
    <Section :home="true" :dragons="homeDragons" />
    <Section :home="false" :dragons="warDragons" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Section from "./components/Section.vue";
import DragonForm from "./components/DragonForm.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Section,
    DragonForm
  },
  data() {
    return {
      dragons: [],
      showForm: false
    };
  },
  computed: {
   warDragons(){
     return this.dragons.filter(d=>d.atWar)
   },
   homeDragons(){
     return this.dragons.filter(d=>!d.atWar)
   }
  },
  methods: {
    toggleForm(){
      this.showForm = !this.showForm
    },
    handleSubmit(e){
      e.preventDefault()
      console.log('submitted')
    },
    addDragon(dragon){
      fetch('http://localhost:3000/dragons',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json'
        },
        body: JSON.stringify(dragon)
      })
      .then(res=>res.json())
      .then(newDragon=>{
        this.dragons = [...this.dragons, newDragon]
      })
    }
  },
  created(){
    // let vm = this
    fetch('http://localhost:3000/dragons')
    .then(res=>res.json())
    .then(data=> this.dragons = data)
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* columns: 45% 2; */
}
</style>
