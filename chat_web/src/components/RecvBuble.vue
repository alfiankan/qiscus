<script setup lang="ts">
import { defineProps } from 'vue'
import MultimediaViewer from './media_parser/MultimediaViewer.vue'
import type { Attachment } from '@/dto/chat.type'
defineProps<{
  profile_image?: string
  email?: string
  message?: string
  attachment?: Attachment
}>()
</script>

<template>
  <div class="flex items-start space-x-3">
    <img src="https://picsum.photos/id/237/200/300" alt="David" class="w-8 h-8 rounded-full mt-8" />
    <div>
      <span class="text-xs text-gray-500 mt-1">{{ email }}</span>

      <div class="bg-gray-100 p-3 rounded-lg max-w-xs lg:max-w-md break-words">
        <div class="rounded-md w-64 lg:w-96">
          <MultimediaViewer :source="attachment?.source" :content_type="attachment?.content_type" />
        </div>
        <p class="text-sm">{{ message }}</p>
      </div>
      <span class="text-xs text-gray-500 mt-1">10:32 AM</span>
    </div>
  </div>
</template>
