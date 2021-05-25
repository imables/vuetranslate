<template>
  <div class="displayedcards">
    <Items v-bind="item" v-for="item in Items" :key="item.id" />
  </div>
</template>

<script>
import Items from "./Items"

export default {
  data: () => ({
    Items: []
  }),
  created() {
    fetch("/data.json")
      .then(response => response.json())
      .then(data => (this.Items = data))
  },
  components: { Items }
}
</script>

<style scoped>
.displayedcards {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
