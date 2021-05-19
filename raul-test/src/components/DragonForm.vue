<template>
  <div>
    <h2>Add Your Own Dragon</h2>
    <form v-on:submit='submitForm'>
        <label>Name</label>
        <input type='text' name='name' placeholder='name'/>
        <br/>
        <label>Description</label>
        <input type='text' name='description' placeholder='description'/>
        <br/>
        <label>Image</label>
        <input type='text' name='image' placeholder='image'/>
        <br/>
        <input type='submit' value='add your dragon'/>
    </form>
  </div>
</template>

<script>
export default {
    name: 'DragonForm',
    props:{
        handleSubmit: Function,
        addDragon: Function
    },
    methods: {
        submitForm(e){
            //prevent Default
            this.handleSubmit(e)
            //configure object to get added
            let newDragon = {
                name: e.target[0].value,
                description: e.target[1].value,
                image: e.target[2].value,
                atWar: false
            }
            console.log(newDragon)

            //call method from App.js passed down here
            this.addDragon(newDragon)
        }
    }
};
// console.log('dragon form', this.handleSubmit)
</script>

<style>
</style>