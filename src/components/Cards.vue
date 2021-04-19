<template>
  <div class="displayedcards">
    <Card v-bind="card" v-for="card in cards" :key="card.id" />
  </div>
</template>

<script>
import Card from "./Card"

export default {
  data: () => ({
    cards: []
  }),
  created() {
    fetch("/data.json")
      .then(response => response.json())
      .then(data => (this.cards = data))
  },
  components: { Card }
}
</script>

<style scoped>
.displayedcards {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
