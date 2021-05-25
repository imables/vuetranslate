<template>
  <div class="home">
    <h1 class=" box is-family-monospace is-size-3 is-flex is-flex-wrap-wrap is-justify-content-center has-background-link-light" v-t="'application.title'" />
    <Itemshow />
  </div>
</template>

<script>
import Itemshow from "@/components/Itemshow.vue"

export default {
  name: "homepage",
  components: {
    Itemshow
  }
}
</script>
