<template>
  <div class="shop">
    <h1 v-t="'application.title'" />
  
    <ShowItems />
  </div>
</template>

<script>
import ShowItems from "@/components/ShowItems.vue"

export default {
  name: "shop",
  components: {
    ShowItems
  }
}
</script>
