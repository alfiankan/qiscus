<script setup lang="ts">
import type { Attachment } from '@/dto/chat.type'
import MultimediaViewer from './media_parser/MultimediaViewer.vue'
import { defineProps } from 'vue'
defineProps<{
  profile_image?: string
  message?: string
  attachment?: Attachment
  time?: string
}>()
</script>

<template>
  <div class="flex flex-row-reverse items-start space-x-reverse space-x-3">
    <img src="https://picsum.photos/id/237/200/300" alt="Me" class="w-8 h-8 rounded-full" />
    <div class="flex flex-col items-end">
      <div class="bg-teal-500 text-white p-3 rounded-lg max-w-xs lg:max-w-md break-words">
        <div v-if="attachment?.source" class="rounded-md w-64 lg:w-96">
          <MultimediaViewer :source="attachment?.source" :content_type="attachment?.content_type" />
        </div>
        <p class="text-sm">
          {{ message }}
        </p>
      </div>
      <span class="text-[10px] text-gray-500 mt-1">{{ time?.split(' ')[1] }}</span>
    </div>
  </div>
</template>
