<script setup lang="ts">
import type { Comment } from '@/dto/chat.type'
import { defineProps } from 'vue'
defineProps<{
  chat_image?: string
  last_message?: string
  last_message_at?: string
  room_name?: string
}>()
</script>

<template>
  <div class="divide-y divide-gray-200 hover:bg-teal-50">
    <div class="w-full text-left focus:outline-none focus-visible:bg-indigo-50">
      <div class="flex items-center pl-4 border-b py-2">
        <img
          class="w-8 h-8 rounded-full items-start flex-shrink-0 mr-3 object-cover"
          :src="chat_image"
          width="32"
          height="32"
          alt="Alfi"
        />
        <div>
          <h4 class="text-sm font-semibold text-gray-900">{{ room_name }}</h4>
          <div class="text-[13px]">{{ last_message }}</div>

          <span class="text-[10px] text-gray-500 mt-1">{{ last_message_at }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
