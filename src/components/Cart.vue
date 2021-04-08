<template>
<div>
  <div>
    <h1>Your Cart</h1>
    <div class="dingus">
      <div v-for="(prop, index) in cart" :key="index">
        <h3>{{$t('app.title1')}}</h3>
        <img :src="prop.image" />
        <div>{{$n(prop.price, "currency", changeLocale($i18n.locale))}}</div>
        <button v-on:click="removeItemFromCart(prop)">Remove from cart</button>
      </div>
      <h4 class="text-center">total: {{$n(total(), "currency", changeLocale($i18n.locale))}}</h4>
    </div>
  </div>
  <div>
    <!-- <span>Checkout = {"total()"}</span> -->
  </div>
</div>
</template>

<script>
import i18n from "@/i18n"
console.log("Active locale: ", i18n.locale)
export default {
  props: ["cart"],
  methods: {
    removeItemFromCart(prop) {
      this.$emit("removeItemFromCart", prop);
    },

    changeLocale() {
      if (this.$i18n.locale === "en") {
        console.log(i18n.locale);
        return "en-US" 
      } else {
        return "ar-EG"
      }
    },
    // computed: {
      total: function(){
        return this.cart.reduce((tot, car) => tot += car.price, 0)
      }
    }
    
    

    
  };

</script>

<style>

.dingus {
  float: left;
}
</style>