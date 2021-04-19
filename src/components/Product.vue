<template>
    <div class="">
        <div class="">
            <p class="">${{Number(product.price).toFixed()}}</p>
            <button class="buttons button is-primary is-light" :disabled="isInCart" @click="$emit('add-to-cart',product)" >
                {{isInCart ? '': ''}}
            </button>
        </div>
    </div>
</template>

<script>
export default{
    props: ['product','isInCart']
}
</script>