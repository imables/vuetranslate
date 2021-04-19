  <template>
  <div>
    
    <h1 class="product title ">Products</h1>
    <div class="products container notification has-background-primary-light is-flex is-flex-wrap-wrap is-justify-content-space-evenly is-family-monospace">
      
      <div v-for="(prop, index) in items" :key="index">
        <div card card-content content>
        <h3 class="pl-5">{{$t('app.title1')}}</h3>
        <div class="cost pl-5">{{$n(prop.price, "currency", changeLocale($i18n.locale))}}</div>
        <button class="buttons button is-warning is-light" v-on:click="addItemToCart(prop)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "@/i18n"
console.log("Active locale: ", i18n.locale)
export default {
  
  data: () => ({
    items: [],
  }),
  created() {
    fetch("/info.json")
      .then(response => response.json())
      .then(info => (this.items = info))
  },
      items: [
        {
          id: Number,
          title: String,
          price: Number,
          imgUrl: String,
          addedOn: String,
          likes: Number
          
        }
      ]
    ,

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
      this.$emit("addItemToCart", prop);
    }
  },

  
};
</script>

<style>

/* .products {
  float: left;
  margin: 0 auto;
  font-size: 15px;
} */

.line {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
}

</style>

