<script setup lang="ts">
import { defineProps } from 'vue'
import MultimediaViewer from './media_parser/MultimediaViewer.vue'
import type { Attachment } from '@/dto/chat.type'
defineProps<{
  profile_image?: string
  email?: string
  message?: string
  attachment?: Attachment
  time?: string
}>()
</script>

<template>
  <div class="flex items-start space-x-3">
    <div>
      <span class="text-xs text-gray-500 mt-1">{{ email }}</span>

      <div class="bg-gray-100 p-3 rounded-lg max-w-xs lg:max-w-md break-words">
        <div v-if="attachment?.source" class="rounded-md w-64 lg:w-96">
          <MultimediaViewer :source="attachment?.source" :content_type="attachment?.content_type" />
        </div>
        <p class="text-sm">{{ message }}</p>
      </div>
      <span class="text-[10px] text-gray-500 mt-1">{{ time?.split(' ')[1] }}</span>
    </div>
  </div>
</template>
