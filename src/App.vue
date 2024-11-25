<script setup>
import { RouterView } from 'vue-router'
import ButtonBack from '@/components/ButtonBack.vue'
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="row">
      <div class="col text-center">
        <ButtonBack v-if="$route.path !== '/'"></ButtonBack>
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active{
  transition: opacity 1.25s ease;
}

.fade-leave-active {
  opacity: 0;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>
