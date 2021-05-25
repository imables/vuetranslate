// see Vue i18n (2021) Vue I18n Documentation https://kazupon.github.io/vue-i18n/ and,
// Phrase.blog (2020) The Ultimate Guide to Vue Localization with Vue I18n https://phrase.com/blog/posts/ultimate-guide-to-vue-localization-with-vue-i18n/

//nesting the navbar and banner into the html template. 
<template>
  <div id="app">
    <div v-if="isLoading">Loading Content</div>
    <div v-else>
      <Navbar />
      <div class="container">
        <router-view />
      </div>
      <Banner />
    </div>
  </div>
</template>

//importing the pages to be used and nested in the html.
<script>
import Navbar from "@/components/Navbar"
import Banner from "@/components/Banner"
import EventBus from "@/EventBus"


export default {
  data: () => ({
    isLoading: true,
  }),
  mounted() {
    EventBus.$on("i18n-initialised", () => (this.isLoading = true))

    EventBus.$on("i18n-loaded", () => (this.isLoading = false))
  },
  components: { Navbar, Banner }
}
</script>

<style>
</style>
