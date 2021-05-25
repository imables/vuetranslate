<template>
  <div>
    <select :value="$i18n.locale" @change.prevent="localeChange">
      <option :value="locale.code" v-for="locale in locales" :key="locale.code">{{locale.name}}</option>
    </select>
  </div>
</template>

<script>
import { getAllAvailableLocales } from "@/util/i18n/supported-locales"

export default {
  data: () => ({ locales: getAllAvailableLocales() }),
  methods: {
    localeChange(e) {
      const locale = e.target.value

      this.$router.push(`/${locale}`)
    }
  }
}
</script>