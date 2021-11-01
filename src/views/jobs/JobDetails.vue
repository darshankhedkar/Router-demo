<template>
  <div v-if="job">
        <h2>{{id}} </h2>
        <h1>{{job.title}} </h1>
        <h4> Details :{{ job.details}}</h4>
        

  </div>

</template>

<script>
export default {
    props:['id'],
    data(){
        return{
          job:null
        }
    },
    mounted(){
       fetch('http://localhost:3000/jobs/' + this.id)
        .then(res =>res.json())
        .then( data =>this.job=data)
        .catch(err =>console.log(err.message))
    }
}
</script>

<style>

</style>