<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  file_name?: string
  file_url?: string
}>()
</script>

<template>
  <div>
    <div class="max-w-sm mx-auto">
      <div class="bg-gray-50 mb-2 shadow-md rounded-lg overflow-hidden">
        <div class="p-4">
          <div class="flex items-center space-x-2">
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
            <a :href="file_url" target="_blank" class="text-sm text-blue-500 hover:text-blue-700">{{
              file_name
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
