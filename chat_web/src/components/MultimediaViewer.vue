<script setup lang="ts">
import VideoJS from './VideoJS.vue';
const vide = {
        autoplay: true,
        controls: true,
        sources: [
          {
            src:
              '/path/to/video.mp4',
              type: 'video/mp4'
          }
        ]
      }

</script>

<template>
<div>
    <VideoJS :options="vide"/>
</div>
</template>