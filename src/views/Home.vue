<template>
  <div class="home">
    <h1 class=" box is-family-monospace is-size-3 is-flex is-flex-wrap-wrap is-justify-content-center has-background-link-light" v-t="'app.title'" />
    <Cards />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue"

export default {
  name: "home",
  components: {
    Cards
  }
}
</script>
