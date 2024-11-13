<script setup lang="ts">
import { defineProps } from 'vue'
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

        <p class="text-sm">
          {{ message }}
        </p>
      </div>
      <span class="text-xs text-gray-500 mt-1">10:33 AM</span>
    </div>
  </div>
</template>
