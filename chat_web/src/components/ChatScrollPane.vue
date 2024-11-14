<script setup lang="ts">
import RecvBuble from './RecvBuble.vue'
import SenderBuble from './SenderBuble.vue'
import { onMounted, ref, nextTick, useTemplateRef, watch, onUpdated, watchEffect } from 'vue'
import type { Attachment, Comment, Room, Chats } from '@/dto/chat.type'
import BackButtonIcon from './BackButtonIcon.vue'

const bottomRoom = useTemplateRef('bottomRoom')
const newChatMessage = ref()
const newAttachment = ref<File | null>()

const props = defineProps<{
  chatRoom?: Chats
  senderEmail?: string
}>()

const chats = ref<Comment[] | null>()

const fileInput = ref<HTMLInputElement | null>(null)
const triggerFileInput = () => {
  fileInput.value?.click()
}

watchEffect(() => {
  chats.value = props.chatRoom?.comments
})

function scrollBottom() {
  bottomRoom.value?.scrollIntoView({ behavior: 'smooth' })
  console.log('scrolling')
}

function sendMessageToRoom() {
  const chat = {
    message: newChatMessage.value,
    attachment: {},
    sender: props.senderEmail,
    type: 'text',
  } as Comment

  if (newAttachment.value) {
    chat.type = 'media'
    chat.attachment = {
      source: URL.createObjectURL(newAttachment.value!),
      content_type: newAttachment.value.type,
    }
  }
  chats.value?.push(chat)
  newChatMessage.value = ''
  newAttachment.value = null

  scrollBottom()
}

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    newAttachment.value = file
  }
}

function isDifferentDay(chatsHistory: Comment[] | null | undefined, idx: number): boolean {
  // check if very begining
  if (idx == 0) {
    return true
  }
  if (idx - 1 >= 0) {
    // check if prev is different than current
    return chatsHistory![idx].time.split(' ')[0] != chatsHistory![idx - 1].time.split(' ')[0]
  }

  return false
}
const emitBlockChatListParent = defineEmits<{
  (e: 'blockChatListParent'): void
}>()

defineExpose({
  scrollBottom,
})

onUpdated(() => {
  scrollBottom()
})
</script>

<template>
  <div class="flex items-center justify-between p-4 border-b">
    <div class="flex items-center space-x-3">
      <div class="flex -space-x-4 w-10 h-10 lg:hidden xl:hidden">
        <button
          @click="emitBlockChatListParent('blockChatListParent')"
          class="p-2 hover:bg-gray-100 rounded-full"
        >
          <BackButtonIcon />
        </button>
      </div>
      <div class="flex -space-x-4">
        <img
          :src="chatRoom?.room.image_url"
          class="w-10 h-10 rounded-full border-2 border-white relative z-30 object-cover"
        />
      </div>
      <div>
        <h2 class="font-semibold">{{ chatRoom?.room.name }}</h2>
        <p class="text-sm text-gray-500">{{ chatRoom?.room.participant.length }} Participants</p>
      </div>
    </div>
  </div>
  <div class="flex-1 h-screen overflow-y-auto p-4 space-y-4">
    <div v-for="(buble, idx) in chats">
      <div v-if="isDifferentDay(chats, idx)">
        <div class="flex justify-center items-center py-5">
          <div class="px-4 py-1 bg-teal-500 text-white rounded-full text-xs">
            {{ buble.time.split(' ')[0] }}
          </div>
        </div>
      </div>

      <div v-if="buble.sender == senderEmail">
        <SenderBuble :message="buble.message" :attachment="buble.attachment" :time="buble.time" />
      </div>
      <div v-else>
        <RecvBuble
          :message="buble.message"
          :email="buble.sender"
          :attachment="buble.attachment"
          :time="buble.time"
        />
      </div>
    </div>

    <div ref="bottomRoom" class=""></div>
  </div>

  <div class="p-4 border-t">
    <div class="flex items-center space-x-3">
      <input
        v-on:keyup.enter="sendMessageToRoom"
        v-model="newChatMessage"
        type="text"
        placeholder="Send a message..."
        class="text-gray-600 flex-1 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      <input
        type="file"
        ref="fileInput"
        @change="handleFileChange"
        class="hidden"
        accept=".jpg, .jpeg, .png, .pdf"
      />

      <button @click="triggerFileInput" class="p-2 hover:bg-gray-100 rounded-full">
        <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18.18 8.95l-8.57 8.57a2 2 0 1 1-2.83-2.83l8.57-8.57"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <button
        v-on:click="sendMessageToRoom"
        class="p-2 bg-teal-600 hover:bg-blue-600 rounded-full text-white rotate-90"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
