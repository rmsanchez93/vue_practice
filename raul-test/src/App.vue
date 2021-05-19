<template>
  <div id="app">
    <HelloWorld msg="Dragon App built in Vue" />
    <Section :home="true" :dragons="dragons" />
    <Section :home="false" :dragons="warDragons" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Section from "./components/Section.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Section,
  },
  data() {
    return {
      dragons: [
        {
          id: 1,
          name: "Toothless",
          description: "A Night Fury",
          image:
            "https://www.wikihow.com/images/b/b2/Draw-Toothless-Step-24.jpg",
          atWar: false,
        },
        {
          id: 2,
          name: "Bozar",
          description: "An uninteresting dragon",
          image:
            "https://static.boredpanda.com/blog/wp-content/uploads/2015/05/What-are-dragons-doing-nowadays-fb3.jpg",
          atWar: false,
        },
        {
          id: 3,
          name: "Tomar",
          description: "An interesting dragon",
          image: "https://media.giphy.com/media/bU660Y0VKPvCE/giphy.gif",
          atWar: true,
        },
        {
          id: 4,
          name: "Timbsghidora",
          description: "Dead ass a kaiju my guy",
          image:
            "https://ih1.redbubble.net/image.1066291705.7116/st,small,507x507-pad,600x600,f8f8f8.u1.jpg",
          atWar: true,
        },
      ],
    };
  },
  computed: {
    warDragons: {
      //get
      get: ()=>{
        return this.dragons
      },
      //setter
      set: ()=>{
        return this.dragons.filter(d=>d.atWar)
      }
    }
  },
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
}
</style>
