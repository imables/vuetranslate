//displaying the cart page with all the translated prices and add/remove buttons.
<template>
<div>
  <div class="container notification has-background-danger-light container-max-width-100px">
    <h1 class="cartTitle">{{$t('yourCart')}}</h1>
    <div class="dingus">
      <h4 class="cart text-center box">total: {{$n(total(), "currency", changeLocale($i18n.locale))}}</h4>
      <div v-for="(prop, index) in cart" :key="index">
        
        <div class="current container notification has-background-danger-light container-max-width-100px">
        <h3>{{$t('application.title1')}}</h3>
        <img :src="prop.image" />
        <div>{{$n(prop.price, "currency", changeLocale($i18n.locale))}}</div>
        <button class="buttons button is-danger " v-on:click="removeItemFromCart(prop)">{{$t('application.removeFromCart')}}</button>
        </div>
      </div>
    </div>
  </div>
  <div>
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
      } else if (this.$i18n.locale === "ar"){
        return "ar-EG"
      } else {
        return "ge-DE"
      }
    },
  
    // computed: {
      total: function(){
        return this.cart.reduce((tot, car) => tot += car.price, 0)
      }
    }
    
}

    
  

</script>

<style>
</style>