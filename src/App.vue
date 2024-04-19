<script setup>


</script>

<template>
  <div class="d-flex justify-content-around bg-primary">

    <div>
      <h1 class="text-light  m-3 "> Edutech</h1>
    </div>
    <div class="navbar navbar-expand-lg text-light m-3 text-bold">
     

        <router-link to="/" class="text-light text-decoration-none p-1 mb-3">Home</router-link> 
<router-link to="/About" class="text-light text-decoration-none mb-3  p-1">About</router-link>
<router-link to="/Courses" class="text-light text-decoration-none mb-3  p-1">Courses</router-link>
<router-link to="/Contact" class="text-light text-decoration-none mb-3  p-1">Contact</router-link>

    


</div>
  </div>
     
  <router-view/>
</template>


<style>

</style>
