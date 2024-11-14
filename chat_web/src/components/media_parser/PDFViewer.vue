<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{
  url?: string
}>()
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const { pdf } = usePDF(props.url)
</script>

<template>
  <VuePDF :pdf="pdf" fit-parent class="mb-2" />
</template>
