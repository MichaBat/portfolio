<script setup>
import PersonalInformation from '@/components/PersonalInformation.vue'
import WorkExperienceView from '@/views/CV/WorkExperienceView.vue'
import StudyExperienceView from '@/views/CV/StudyExperienceView.vue'
import InternshipExperienceView from '@/views/CV/InternshipExperienceView.vue'
import SkillsView from '@/views/CV/SkillsView.vue'
import LanguageView from '@/views/CV/LanguageView.vue'
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <PersonalInformation></PersonalInformation>
        <h1>{{ $t('studies') }}</h1>
        <div class="bordered">
          <StudyExperienceView></StudyExperienceView>
        </div>
        <h1>{{ $t('workExperience') }}</h1>
        <div class="bordered">
          <WorkExperienceView></WorkExperienceView>
        </div>
        <h1>{{ $t('internship') }}</h1>
        <div class="bordered">
          <InternshipExperienceView> </InternshipExperienceView>
        </div>
        <h1>{{ $t('skills') }}</h1>
        <div class="bordered">
          <SkillsView> </SkillsView>
        </div>

        <h1>{{ $t('language') }}</h1>
        <div class="bordered">
          <LanguageView> </LanguageView>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bordered {
  margin-bottom: 50px;
}
p,
h1 {
  text-align: center;
}

@media (max-width: 601px) {
  .bordered {
    border: none;
  }
}
</style>
