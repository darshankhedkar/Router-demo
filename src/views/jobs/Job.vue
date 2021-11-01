<template>
  <h2>this is job page</h2>
  <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name : 'JobDetails', params:{ id: job.id }}">
          <h2>{{job.title}} </h2>
          
      </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return{
            jobs:[]
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs')
        .then(res =>res.json())
        .then( data =>this.jobs = data)
        .catch(err =>console.log(err.message))
    }
}
</script>

<style>

</style>