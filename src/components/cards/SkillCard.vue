<template>
  <div class="skill-card">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ skill.name }}</h5>
        <p class="card-text">{{ skill.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.skill-card {
  margin: 10px;
}
.card {
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card-body {
  padding: 20px;
}
.card-title {
  font-size: 1.2em;
  font-weight: bold;
}
.card-text {
  color: #555;
}
</style>
