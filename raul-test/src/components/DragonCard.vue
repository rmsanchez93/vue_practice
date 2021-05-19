<template>
  <div class='card'>
    <h1>{{ dragon.name }}</h1>
    <br />
    <img v-bind:src="dragon.image" v-on:click="dragonToggle" />
    <div v-if="clicked">
      <dragon-details :dragon="dragon"> </dragon-details>
    </div>
  </div>
</template>

<script>
import DragonDetails from "./DragonDetails";
// import DragonDetails from './DragonDetails.vue'

export default {
  name: "DragonCard",
  data() {
    return {
      clicked: false,
    };
  },
  props: {
    dragon: Object,
  },
  components: {
    DragonDetails,
    // DragonDetails
  },
  methods: {
    dragonToggle() {
      console.log(this.dragon, "has been clicked");
      this.clicked = !this.clicked;
      this.dragon.atWar = !this.dragon.atWar
      // console.log(this.dragon.atWar);
    },
  },
};
</script>


<style>
img {
  width: 100px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  /* margin-top: 500px;; */
  padding: 25px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}


</style>
