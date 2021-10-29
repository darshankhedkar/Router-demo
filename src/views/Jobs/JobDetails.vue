<template>
  <h2>this is jobdetails page</h2>

<h3>the job id is {{ id }}</h3>
<h2>Book title{{title}} </h2>
</template>

<script>
export default {
    props:['id'],
    // data(){
        
    //     return{
    //         id:this.$route.params.id
    //     }
    // }
}
</script>

<style>

</style>