<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue'
import LinkNewTab from './LinkNewTab.vue'
import ImageViewer from './ImageViewer.vue'
defineProps<{
  source?: string
  content_type?: string
}>()

const videos_type = ['application/x-mpegURL', 'application/mp4']
const link_type = ['application/pdf']
const images_type = ['image/jpeg', 'image/png', 'image/jpg']
</script>

<template>
  <div>
    <p v-if="videos_type.includes(content_type as string, 0)">
      <VideoPlayer :source="source" :source_type="content_type" />
    </p>
    <p v-if="link_type.includes(content_type as string, 0)">
      <LinkNewTab
        :file_name="source?.split('/')[source.split('/').length - 1]"
        :file_url="source"
      />
    </p>
    <p v-if="images_type.includes(content_type as string, 0)">
      <ImageViewer
        :file_name="source?.split('/')[source.split('/').length - 1]"
        :image_url="source"
      />
    </p>
  </div>
</template>
