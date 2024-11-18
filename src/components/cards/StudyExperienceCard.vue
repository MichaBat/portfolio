<template>
  <div class="card shadow-sm mb-4">
    <div class="card-body">
      <h3 class="card-title">{{ schoolName }}</h3>
      <p class="card-text">
        <strong>{{ $t('course') }}:</strong> {{ course }}
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
  name: 'WorkExperienceCard',
  props: {
    schoolName: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
