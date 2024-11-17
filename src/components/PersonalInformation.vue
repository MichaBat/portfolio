<script setup>

</script>
<template>
  <h1>{{ $t('personal_information.title') }}</h1>
  <div class="flex-d bordered">
    <div class="flex-row">
      <div>
        <div class="info-row">
          <strong class="label">{{ $t('personal_information.label.name') }}:</strong>
          <span>{{ $t('personal_information.first_name') }} {{ $t('personal_information.last_name') }}</span>
        </div>
        <div class="info-row">
          <strong class="label">{{ $t('personal_information.label.birthday') }}:</strong>
          <span>{{ $t('personal_information.birthday') }}</span>
        </div>
        <div class="info-row">
          <strong class="label">{{ $t('personal_information.label.phone_number') }}:</strong>
          <span>{{ $t('personal_information.phone_number') }}</span>
        </div>
        <div class="info-row">
          <strong class="label">{{ $t('personal_information.label.email') }}:</strong>
          <span>{{ $t('personal_information.email') }}</span>
        </div>
        <div class="info-row">
          <strong class="label">{{ $t('personal_information.address.title') }}:</strong>
          <span>
            {{ $t('personal_information.address.street_name') }}
            {{ $t('personal_information.address.number') }},
            {{ $t('personal_information.address.postal_code') }}
            {{ $t('personal_information.address.city') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
p, h1{
  text-align: center;
  text-indent: -50px;
}
strong{
  font-weight: bold;
}
.bordered{
  border: 1px solid #ddd;
  padding: 20px 20px;
}


.flex-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}


.info-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.label {
  min-width: 150px;
  text-align: right;
  padding-right: 1rem;
}

span {
  flex: 1;
  text-align: left;
}

</style>
