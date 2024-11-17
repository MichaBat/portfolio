<template>
    <div class="d-flex justify-content-center">
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <h1>{{ $t('aboutMe.heading') }}</h1>
      <p>{{ $t('aboutMe.description') }}</p>
    </div>

</template>
<script>
import ButtonBack from '@/components/ButtonBack.vue'
export default {
  components: { ButtonBack }

}
</script>
<style scoped>
h1, p{
  text-align: center;
  margin: 30px;
}
</style>
