<template>
  <div v-bind:class="home ? 'home container': 'war container'">
  <h1>{{ home ? "Home" : "War" }}</h1>
  <!-- <hr/> -->
  <div v-for="dragon in dragons" :key="dragon.id">
      <dragon-card :dragon="dragon">

      </dragon-card>

  </div>

  </div>
</template>

<script>

import DragonCard from './DragonCard'
// import DragonCard from './DragonCard.vue'
// import DragonCard from './DragonCard.vue'
export default {
    name:'Section',
    props: {
        home: Boolean,
        dragons: Array
    },
    components:{
        DragonCard
        // DragonCard
        // DragonCard
    }
}
</script>

<style>

h1{
    padding-top: 50px;
}

.home{
    background-color: aquamarine;
    /* float: left; */
    width:45%;
    height: 100%;
    float: left;
}
.war{
    background-color: deeppink;
    width:45%;
    /* float: left; */
    height:100%;
    /* float:left; */

}
.container {
    margin:auto;
    align-content: center;
  padding: 20px;
  display: inline-block;
}

</style>