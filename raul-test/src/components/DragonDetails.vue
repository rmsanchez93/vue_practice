<template>
  <div>
      <h3>Description: {{ dragon.description}}</h3>
      
  </div>
</template>

<script>
export default {
    name:'DragonDetails',
    props:{
        dragon: Object
    }

}
</script>

<style>

</style>