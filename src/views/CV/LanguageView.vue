<template>
  <div class="skills-container">
    <div class="row">
      <div class="col-md-4" v-for="(language, index) in language" :key="'language' + index">
        <SkillCard :skill="language" />
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
      language: [],
    }
  },
  created() {
    this.language = skillsData.languages
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
