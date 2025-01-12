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
import enSkills from '@/locales/en.json'
import nlSkills from '@/locales/nl.json'

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
  computed: {
    currentLocale() {
      return this.$i18n?.locale || 'nl'
    },
    skillsData() {
      const skillsByLocale = {
        en: enSkills,
        nl: nlSkills,
      }
      return skillsByLocale[this.currentLocale] || enSkills
    },
  },
  watch: {
    currentLocale: {
      handler() {
        this.loadSkills()
      },
      immediate: true,
    },
  },
  methods: {
    loadSkills() {
      this.personalSkills = this.skillsData.skills_details.personal_skills || []
      this.technicalSkills = this.skillsData.skills_details.technical_skills || []
    },
  },
  created() {
    this.loadSkills()
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
