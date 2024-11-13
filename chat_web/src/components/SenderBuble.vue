<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{
  profile_image?: string
  message?: string
}>()
</script>

<template>
  <div class="flex flex-row-reverse items-start space-x-reverse space-x-3">
    <img src="https://picsum.photos/id/237/200/300" alt="Me" class="w-8 h-8 rounded-full" />
    <div class="flex flex-col items-end">
      <div class="bg-blue-500 text-white p-3 rounded-lg max-w-xs lg:max-w-md break-words">
        <div class="flex items-center space-x-2 mb-2">
          <svg class="w-4 h-4" viewBox="0 0 24 24">
            <path
              d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18.18 8.95l-8.57 8.57a2 2 0 1 1-2.83-2.83l8.57-8.57"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="text-sm">file.pdf</span>
        </div>
        <p class="text-sm">
          {{ message }}
        </p>
      </div>
      <span class="text-xs text-gray-500 mt-1">10:33 AM</span>
    </div>
  </div>
</template>
