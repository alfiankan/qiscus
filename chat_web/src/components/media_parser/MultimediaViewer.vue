<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue'
import LinkNewTab from './LinkNewTab.vue'
import ImageViewer from './ImageViewer.vue'
import PDFViewer from './PDFViewer.vue'
import { url } from 'inspector'
defineProps<{
  source?: string
  content_type?: string
  data_url?: string
}>()

const videos_type = ['application/x-mpegURL', 'application/mp4']
const pdf_type = ['application/pdf']
const link_type = ['application/pdf']
const images_type = ['image/jpeg', 'image/png', 'image/jpg']
</script>

<template>
  <div>
    <div v-if="videos_type.includes(content_type as string, 0)">
      <VideoPlayer :source="source" :source_type="content_type" />
    </div>
    <div v-if="link_type.includes(content_type as string, 0)">
      <div v-if="pdf_type.includes(content_type as string, 0)" class="lg:block xl:block hidden">
        <PDFViewer :url="source" />
      </div>
      <LinkNewTab
        :file_name="source?.split('/')[source.split('/').length - 1]"
        :file_url="source"
      />
    </div>
    <div v-if="images_type.includes(content_type as string, 0)">
      <ImageViewer
        :file_name="source?.split('/')[source.split('/').length - 1]"
        :image_url="data_url ?? source"
      />
    </div>
  </div>
</template>
