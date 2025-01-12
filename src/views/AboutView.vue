<template>
  <div class="container">
    <div class="d-flex justify-content-center align-items-center">
      <h1>{{ $t('aboutMe.heading') }}</h1>
      <div class="text" v-html="$t('aboutMe.description')">
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
h1,
p {
  text-align: center;
  margin: 30px;
}
.text {
  text-align: center;
}
</style>
