<script setup>
import { RouterView } from 'vue-router';
import ButtonBack from '@/components/ButtonBack.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import nlFlag from '@/assets/flags/nl.svg';
import enFlag from '@/assets/flags/gb.svg';
const { locale } = useI18n();
const flagSrc = computed(() => (locale.value === 'en' ? nlFlag : enFlag));

const toggleLocale = () => {
  locale.value = locale.value === 'en' ? 'nl' : 'en';
  console.log('Locale toggled to:', locale.value);
};
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="row">
      <div class="col text-center">
        <ButtonBack v-if="$route.path !== '/'"></ButtonBack>
        <button @click="toggleLocale"
                class="btn btn-primary my-3 bordered">
          <img :src="flagSrc"
               :alt="locale.value === 'nl' ? 'Dutch flag' : 'English flag'"
               class="flag-icon" />
          {{ $t('toggleLanguage') }}
        </button>
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
  display: flex;
  align-items: center;
  gap: 10px;
}

button:hover {
  transform: scale(1.1);
  font-size: 18px;
}

.flag-icon {
  width: 30px;
  height: 20px;
  flex-shrink: 0;
}
</style>
