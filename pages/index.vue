<template>
  <div>
    <p>Hello World</p>
    <AHeader />
    <BHeader />
    <nuxt-link to="/quote" tag="a">Quote</nuxt-link>
  </div>
</template>
<script>
import { AHeader, BHeader } from '../components/Header'

export default {
  components: {
    AHeader,
    BHeader
  }
}
</script>
