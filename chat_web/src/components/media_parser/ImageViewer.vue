<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  file_name?: string
  image_url?: string
}>()
</script>

<template>
  <div>
    <div class="max-w-sm mx-auto">
      <div class="rounded-lg overflow-hidden object-cover">
        <img class="my-2 rounded-sm" :src="image_url" />
      </div>
    </div>
  </div>
</template>
