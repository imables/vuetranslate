<template>
<div class="is-family-monospace">
  <div class="cards card card-content content">
      <Shopping className="products"
              v-on:addItemToCart="addItemToCart"
      ></Shopping>
  </div>
  <div class="col-md-5 my-5">
    {{$n(cart.length, "number", changeLocale($i18n.locale))}} {{$t('cartItems')}}
    <br />
        <Cart class="cart1" v-on:removeItemFromCart="removeItemFromCart" :cart="cart" />
  </div>
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";
import Shopping from "./Shopping"

export default {
  data: () => ({
    cards: [],
    cart: []
  }),
  created() {
    fetch("/info.json")
      .then(response => response.json())
      .then(info => (this.cards = info))
  },
  

  methods: {
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
  
    addItemToCart(prop) {
      this.cart.push(prop);
    },
    removeItemFromCart(prop) {
      this.cart.splice(this.cart.indexOf(prop), 1);
    },
  },

  components: { Shopping, Cart },
};
</script>

<style scoped>
.products {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  float: left;
  margin: 0 auto;

}

/* .cart1{
  display: flex;
  flex-wrap: wrap;
  float: left;
  margin: 0 auto;
} */

</style>
