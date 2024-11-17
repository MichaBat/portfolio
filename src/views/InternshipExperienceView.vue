<template>
  <div class="container mt-5">
    <div v-for="(experience, index) in InternshipExperiences" :key="index">
      <internshipExperienceCard
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
import { ref } from 'vue';
import internshipExperienceCard from '@/components/cards/InternshipExperienceCard.vue'
import internshipExperiences from '@/assets/InternshipExperience.json'

export default {
  components: {
    internshipExperienceCard
  },
  setup() {
    const internshipExperienceCardRef = ref(internshipExperiences);
    return {
      InternshipExperiences: internshipExperienceCardRef
    };
  }
}
</script>
