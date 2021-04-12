<template>
<div>
  <div class="cards">
    
      <Shopping className="products"
      
              v-on:addItemToCart="addItemToCart"
      ></Shopping>
  </div>

    
  <div class="col-md-5 my-5">
    {{cart.length}} in cart
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
    addItemToCart(prop) {
      this.cart.push(prop);
    },
    removeItemFromCart(prop) {
      this.cart.splice(this.cart.indexOf(prop), 1);
    },
    // total() {
    //   let cart = this.cart.length;
      
    //     return cart.reduce ((acc, cart) => acc + cart)
      
    // }
  },

  components: { Shopping, Cart },
};
</script>

<style scoped>
/* .cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  float: left;
} */

.products {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  float: left;
  margin: 0 auto;

}

.cart1{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  float: left;
  margin: 0 auto;
}

</style>
