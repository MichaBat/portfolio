<template>
  <div class="contact-view container mx-auto p-6">
    <div v-if="contact" class="bg-white shadow-md rounded-lg p-6">
      <div class="flex items-center mb-6">
        <img
          :src="contact.avatar || '/default-avatar.png'"
          alt="Contact Avatar"
          class="w-24 h-24 rounded-full mr-6 object-cover"
        />
        <div>
          <h1 class="text-2xl font-bold">{{ contact.name }}</h1>
          <p class="text-gray-600">{{ contact.title }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="contact-details">
          <h2 class="text-lg font-semibold mb-4">Contact Information</h2>
          <div class="space-y-2">
            <p v-if="contact.email" class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              {{ contact.email }}
            </p>
            <p v-if="contact.phone" class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              {{ contact.phone }}
            </p>
          </div>
        </div>

        <div class="additional-details">
          <h2 class="text-lg font-semibold mb-4">Additional Details</h2>
          <div class="space-y-2">
            <p v-if="contact.company" class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
              {{ contact.company }}
            </p>
            <p v-if="contact.location" class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              {{ contact.location }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="contact.notes" class="mt-6">
        <h2 class="text-lg font-semibold mb-4">Notes</h2>
        <p class="text-gray-700">{{ contact.notes }}</p>
      </div>
    </div>
    <div v-else class="text-center text-gray-600">No contact selected</div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  props: {
    contact: {
      type: Object,
      default: null,
    },
  },
}
</script>
