<template>
  <div>
    <video ref="videoPlayer" class="video-js mb-2"></video>
  </div>
</template>

<script>
import videojs from 'video.js'

export default {
  name: 'VideoPlayer',
  props: {
    source: {
      type: String,
    },
    source_type: {
      type: String,
    },
  },
  data() {
    return {
      player: null,
    }
  },
  mounted() {
    console.log([this.source, this.source_type])
    this.player = videojs(
      this.$refs.videoPlayer,
      {
        autoplay: true,
        controls: true,
        fluid: true,
        sources: [
          {
            src: this.source,
            type: this.source_type,
          },
        ],
      },
      () => {
        this.player.log('onPlayerReady', this)
      },
    )
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  },
}
</script>
