<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
   <nav class="w-full flex justify-between items-center p-2 bg- bg-blue-300">
    <h1 class="font-bold text-2xl ms-3">Logo</h1>
      <div>
        <RouterLink to="/" class="text-white me-3">Home</RouterLink>
        <RouterLink to="/addvlog" class="text-white">Add Vlog</RouterLink>
      </div>
      </nav>
</template>