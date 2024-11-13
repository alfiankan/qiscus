<script setup lang="ts">
import RecvBuble from './components/RecvBuble.vue'
</script>

<template>
  <div class="flex flex-col fixed w-full">
    <div class="flex flex-row bg-white w-full">
      <div class="border border-gray-200 w-4/12">
        <div class="pt-3 pl-3 mb-4 pr-2">
          <h3 class="text-xs font-semibold text-gray-400 mb-1">Qiscus Omni</h3>
          <div class="overflow-y-auto h-screen">
            <div class="divide-y divide-gray-200">
              <div class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                <div class="flex items-center">
                  <img
                    class="w-8 h-8 rounded-full items-start flex-shrink-0 mr-3 object-cover"
                    src="https://picsum.photos/id/0/5000/3333"
                    width="32"
                    height="32"
                    alt="Alfi"
                  />
                  <div>
                    <h4 class="text-sm font-semibold text-gray-900">Alfi</h4>
                    <div class="text-[13px]">Mau beli · 2hrs</div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col h-screen">
        <div class="flex items-center justify-between p-4 border-b">
          <div class="flex items-center space-x-3">
            <div class="flex -space-x-4">
              <img
                src="https://picsum.photos/id/0/5000/3333"
                alt="User 1"
                class="w-10 h-10 rounded-full border-2 border-white relative z-30 object-cover"
              />
            </div>
            <div>
              <h2 class="font-semibold">Weekend Planning</h2>
              <p class="text-sm text-gray-500">8 Participants</p>
            </div>
          </div>
        </div>

        <div class="flex-1 h-screen overflow-y-auto p-4 space-y-4">
          <RecvBuble />

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
                  Don't miss out on the future of customer service, and adopt Qiscus AI today!
                  Explore more on: bit.ly/qiscusai or click the link on our bio!
                </p>
              </div>
              <span class="text-xs text-gray-500 mt-1">10:33 AM</span>
            </div>
          </div>
        </div>

        <div class="p-4 border-t">
          <div class="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Send a message..."
              class="text-gray-600 flex-1 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button class="p-2 hover:bg-gray-100 rounded-full">
              <svg
                class="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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

            <button class="p-2 bg-teal-600 hover:bg-blue-600 rounded-full text-white rotate-90">
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
