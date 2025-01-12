<script setup>
import { RouterView } from 'vue-router'
import ButtonBack from '@/components/ButtonBack.vue'
import { useI18n } from 'vue-i18n'

// Access the `i18n` instance
const { locale } = useI18n()

// Method to toggle locale
const toggleLocale = () => {
  locale.value = locale.value === 'en' ? 'nl' : 'en'
}
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="row">
      <div class="col text-center">
        <!-- Back button -->
        <ButtonBack v-if="$route.path !== '/'"></ButtonBack>

        <!-- Locale toggle button -->
        <button @click="toggleLocale"
                class="
                btn
                btn-primary
                my-3
                bordered
                ">
          {{ $t('toggleLanguage') }}
        </button>

        <!-- Router view with transition -->
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
.fade-enter-active {
  transition: opacity 1.25s ease;
}

.fade-leave-active {
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button {
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 10px 20px;
  font-size: 16px;
  transition: transform 0.3s ease;
}
button:hover{
  transform: scale(1.1);
  font-size: 18px;

}
</style>
