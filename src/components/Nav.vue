<template>
  <div class="navbar">
    <div class="nav__start">
      <LocalizedLink to="/">{{ $t("nav.home") }}</LocalizedLink>
      <LocalizedLink to="/about">{{ $t("nav.about") }}</LocalizedLink>
      <LocalizedLink to="/shop">{{ $t("nav.shop") }}</LocalizedLink>
    </div>

    <div class="nav__end">
      <p class="user-greeting">{{ $t("user_greeting", { name: "Jakob" }) }}</p>

      <LocaleSwitcher />
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher"
import LocalizedLink from "@/components/LocalizedLink"

export default {
  components: { LocaleSwitcher, LocalizedLink },
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 1rem;
  color: rgb(0, 0, 0);
  background-color: #aeff9e;
}

.nav__start,
.nav__end {
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: center;
}

.nav img {
  margin-right: 1rem;
}

.navbar a {
  margin-right: 1.5rem;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-decoration: none;
}

.user-greeting {
  margin-right: 1rem;
}
</style>
<style>
[dir="rtl"] .user-greeting {
  margin-right: 0;
  margin-left: 1rem;
}
</style>
