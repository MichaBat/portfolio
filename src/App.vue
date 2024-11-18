<script setup>
import { RouterView } from 'vue-router'
import ButtonBack from '@/components/ButtonBack.vue'
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="row">
      <div class="col text-center">
        <ButtonBack v-if="$route.path !== '/'"></ButtonBack>
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*.container{
  display: grid;
  justify-items: center;
}*/
</style>
