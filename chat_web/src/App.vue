<script setup lang="ts">
import ChatScrollPane from './components/ChatScrollPane.vue'
import { onMounted, ref, nextTick, useTemplateRef } from 'vue'
import ChatHistory from './components/ChatHistory.vue'
import { ChatsRepository } from './repositories/chats'
import type { Chats, ChatsResponseDTO } from './dto/chat.type'

const chatScrollPane = useTemplateRef('chatScrollPane')
const blockChatListPage = ref(false)
const chats = ref<Chats[] | null>(null)
const senderEmail = 'customer@mail.com'
const chatRoom = ref<Chats | null>(null)

function loadChatInRoom(chat: Chats) {
  chatRoom.value = chat
  blockChatListPage.value = false
}

function openChatListHistory() {
  blockChatListPage.value = true
}

onMounted(() => {
  const chatRepository = new ChatsRepository()

  chatRepository
    .getChats()
    .then((chatsResponse) => {
      chats.value = chatsResponse.results
      chatRoom.value = chatsResponse.results[0]
    })
    .catch((err) => alert(err))
})
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-row bg-white w-full">
      <div
        :class="[
          'border',
          'border-gray-200',
          blockChatListPage ? 'w-full' : 'w-0',
          'lg:w-4/12',
          'xl:w-4/12',
          'h-screen',
          'overflow-y-auto',
        ]"
      >
        <div class="pt-3 pl-3 mb-4 pr-2 flex flex-col">
          <div class="">
            <div v-for="chat in chats">
              <ChatHistory
                class="cursor-default"
                @click="loadChatInRoom(chat)"
                :chat_image="chat.room.image_url"
                :room_name="chat.room.name"
                :last_message="chat.comments[chat.comments.length - 1].message"
                :last_message_at="chat.comments[chat.comments.length - 1].time.split(' ')[1]"
              />
            </div>
          </div>
        </div>
      </div>
      <div :class="[!blockChatListPage ? 'w-full' : 'w-0', , 'flex', 'flex-col', 'h-screen']">
        <ChatScrollPane
          @blockChatListParent="openChatListHistory"
          ref="chatScrollPane"
          :chat-room="chatRoom"
          :sender-email="senderEmail"
        />
      </div>
    </div>
  </div>
</template>
