<script setup lang="ts">
import RecvBuble from './RecvBuble.vue'
import SenderBuble from './SenderBuble.vue'
import { onMounted, ref, nextTick, useTemplateRef, watch, onUpdated } from 'vue'
import { ChatsRepository } from '@/repositories/chats'
import type { Attachment, Comment, Room } from '@/dto/chat.type'

const chats = ref<Comment[] | null>(null)
const chatRoomDetail = ref<Room | null>(null)
const senderEmail = 'customer@mail.com'
const bottomRoom = useTemplateRef('bottomRoom')

function scrollBottom() {
  bottomRoom.value?.scrollIntoView({behavior:'smooth'})
  console.log('scrolling')
  }

  function sendMessageToRoom(message: string, attachment: Attachment) {
    chats.value?.push({
      message: message,
      attachment: attachment,
      sender: senderEmail,
    } as Comment)
  }

  defineExpose({
    scrollBottom,
    sendMessageToRoom
  })

onMounted(() => {
  const chatRepository = new ChatsRepository()



  chatRepository
    .getChats()
    .then((chatsResponse) => {
      chatRoomDetail.value = chatsResponse.results[0].room
      chats.value = chatsResponse.results[0].comments

      nextTick(() => {
        scrollBottom();
      })
    })
    .catch((err) => alert(err))
})



onUpdated(() => {
  scrollBottom()
});
</script>

<template>
  <div class="flex-1 h-screen overflow-y-auto p-4 space-y-4">
    <div v-for="buble in chats">
      <div v-if="buble.sender == senderEmail">
        <SenderBuble :message="buble.message" />
      </div>
      <div v-else>
        <RecvBuble :message="buble.message" :email="buble.sender" :attachment="buble.attachment" />
      </div>
    </div>

    <div ref="bottomRoom" class=""></div>
  </div>
</template>
