
<template>
  <div class="cardcontent">
    <h3 class="is-family-monospace ">{{$t ('app.title1') }}</h3>

    <img :src="imgUrl" />
    
    <div class="card__footer pr-3 pb-3">
      <div class="card__meta pt-5">
        
        <p class="is-flex is-justify-content-center is-family-monospace">{{$n(price, "currency", changeLocale($i18n.locale))}}</p>
        <!-- <p>{{ $d(new Date(addedOn), "short", changeLocale($i18n.locale))}}</p> -->
        <p class="is-flex is-justify-content-center pt-4 is-family-monospace">{{$t('app.description')}}</p>
      </div>
    </div>
  </div>
</template>



<script>
import i18n from "@/i18n"
console.log("Active locale: ", i18n.locale)
export default {
  
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
    }
  },

  props: {
    id: Number,
    title: String,
    price: Number,
    imgUrl: String,
    addedOn: String,
  }
}
</script>

<style scoped>
.cardcontent {
  width: 27%;
  margin-bottom: 2rem;
  border: 3px solid #f2f2f2;
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(255, 0, 0, 0.1);
}

h3 {
  margin: 0;
  padding: 0.5em;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

img {
  width: 100%;
}

p {
  margin: 0;
  font-size: 14px;
}

.price {
  
  font-size: 1.25rem;
  font-weight: bold;
}

</style>
