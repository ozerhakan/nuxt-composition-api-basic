<template>
  <p>{{ title }}</p>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Quote',
  setup() {
    const title = ref('Sigortam net composition api ')

    return {
      title
    }
  }
})
</script>

<style scoped></style>
