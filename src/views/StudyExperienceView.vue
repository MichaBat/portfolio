<template>
  <div class="container mt-5">
    <div v-for="(experience, index) in studyExperiences" :key="index">
      <StudyExperienceCard
        :schoolName="experience.schoolName"
        :course="experience.course"
        :location="experience.location"
        :startDate="experience.startDate"
        :endDate="experience.endDate"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import StudyExperienceCard from '@/components/cards/StudyExperienceCard.vue'
import studyExperiences from '@/assets/StudyExperience.json'

export default {
  components: {
    StudyExperienceCard
  },
  setup() {
    const studyExperiencesRef = ref(studyExperiences);
    return {
      studyExperiences: studyExperiencesRef
    };
  }
}
</script>
