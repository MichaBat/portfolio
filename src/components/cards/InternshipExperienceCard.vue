<template>
  <div class="card shadow-sm mb-4">
    <div class="card-body">
      <h3 class="card-title">{{ companyName }}</h3>
      <p class="card-text">
        <strong>{{ $t('position') }}:</strong> {{ position }}
      </p>
      <p class="card-text">
        <strong>{{ $t('location') }}:</strong> {{ location }}
      </p>
      <p class="card-text">
        <strong>{{ $t('dates') }}:</strong>
        <span class="font-weight-bold">{{ startDate }}</span>
        {{ $t('to') }}
        <span class="font-weight-bold">{{ endDate }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InternshipExperienceCard',
  props: {
    companyName: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  max-width: var(--card-width);
  margin: 20px auto;
  padding: 15px;
  border: 1px solid #e1e1e1;
}
strong{
  font-weight: bold;
  margin-right: 10px;
}
</style>
