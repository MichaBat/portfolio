<template>
  <div class="skills-container">
    <div class="row">
      <div class="col-md-4" v-for="(language, index) in language" :key="'language-' + index">
        <SkillCard :skill="language" />
      </div>
    </div>
  </div>
</template>

<script>
import SkillCard from '@/components/cards/SkillCard.vue'

// Import locales
import enSkills from '@/locales/en.json'
import nlSkills from '@/locales/nl.json'

export default {
  components: {
    SkillCard,
  },
  data() {
    return {
      language: [],
    }
  },
  computed: {
    // Dynamically fetch the current locale
    currentLocale() {
      // Replace with your actual logic for determining locale (e.g., from a store, router, or global state)
      return this.$i18n?.locale || 'en' // Default to 'en'
    },
    skillsData() {
      // Map locale to the corresponding skills file
      const skillsByLocale = {
        en: enSkills,
        nl: nlSkills,
      }
      return skillsByLocale[this.currentLocale] || enSkills // Fallback to 'en'
    },
  },
  watch: {
    // Update language list when locale changes
    currentLocale: {
      handler() {
        this.loadLanguages()
      },
      immediate: true,
    },
  },
  methods: {
    loadLanguages() {
      this.language = this.skillsData.languages || []
    },
  },
  created() {
    this.loadLanguages()
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
