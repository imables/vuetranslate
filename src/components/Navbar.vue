<template>
  <div class="navbar">
    <div class="navbar2">
      <LocalizedLink to="/">{{ $t("navBar.homepage") }}</LocalizedLink>
      <LocalizedLink to="/information">{{ $t("navBar.information") }}</LocalizedLink>
      <LocalizedLink to="/shop">{{ $t("navBar.shop") }}</LocalizedLink>
      
    </div>
    

    <div class="navbar3">
      
      <p class="user-greeting">{{ $t("nameUser", { name: "Jakob" }) }}</p>
      
      <LanguageDropdown />
    </div>
    
  </div>
</template>

<script>
import LanguageDropdown from "@/components/LanguageDropdown"
import LocalizedLink from "@/components/LocalizedLink"

export default {
  components: { LanguageDropdown, LocalizedLink },
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  color: rgb(0, 0, 0);
  background-color: #e2ffdc;
}

.navbar2,
.navbar3 {
  display: flex;
  align-items: center;
}

.navbar a {
  margin-right: 1.5rem;
  font-weight: bold;
  color: rgb(0, 0, 0);
}

.user-greeting {
  margin-right: 1.5rem;
}

</style>
<style>
[dir="rtl"] .user-greeting {
  margin-right: 0;
  margin-left: 1rem;
}
</style>
