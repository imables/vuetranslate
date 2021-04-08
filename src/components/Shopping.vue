  <template>
  <div>
    
    <div class="products">
      <h1>Products</h1>
      <div v-for="(prop, index) in items" :key="index">
        <h3>{{$t('app.title1')}}</h3>
        <div class="cost">{{$n(prop.price, "currency", changeLocale($i18n.locale))}}</div>
        <button v-on:click="addItemToCart(prop)">Add to cart</button>
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
      } else {
        return "ar-EG"
      }
    },

    addItemToCart(prop) {
      this.$emit("addItemToCart", prop);
    }
  },

  
};
</script>

<style>

.products {
  float: left;
}
</style>
