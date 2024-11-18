<template>
  <div class="skills-container">
    <div class="row">
      <div class="col-md-4" v-for="(skill, index) in personalSkills" :key="'personal-' + index">
        <SkillCard :skill="skill" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="(skill, index) in technicalSkills" :key="'technical-' + index">
        <SkillCard :skill="skill" />
      </div>
    </div>
  </div>
</template>

<script>
import SkillCard from '@/components/cards/SkillCard.vue'
import skillsData from '@/assets/skills.json'

export default {
  components: {
    SkillCard,
  },
  data() {
    return {
      personalSkills: [],
      technicalSkills: [],
    }
  },
  created() {
    // Correctly load the data from the JSON file
    this.personalSkills = skillsData.skills_details.personal_skills
    this.technicalSkills = skillsData.skills_details.technical_skills
  },
}
</script>

<style scoped>
.skills-container {
  margin-top: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.col-md-4 {
  width: 32%;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .col-md-4 {
    width: 100%;
  }
}
</style>
