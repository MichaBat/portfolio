<template>
  <div class="container mt-5">
    <div v-for="(experience, index) in workExperiences" :key="index">
      <WorkExperienceCard
        :companyName="experience.companyName"
        :position="experience.position"
        :location="experience.location"
        :startDate="experience.startDate"
        :endDate="experience.endDate"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import WorkExperienceCard from '@/components/cards/WorkExperienceCard.vue'
import workExperiences from '@/assets/workExperience.json'

export default {
  components: {
    WorkExperienceCard,
  },
  setup() {
    const workExperiencesRef = ref(workExperiences)
    return {
      workExperiences: workExperiencesRef,
    }
  },
}
</script>
