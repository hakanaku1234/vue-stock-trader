<template>
  <div class="row">
    <stock-item
      v-for="(stock, i) in getStocks"
      :key="i"
      :title="stock.title"
      :price="stock.price"
      />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import StockItem from './StockItem.vue';
export default {
  computed: {
    ...mapGetters([
      'getStocks'
    ])
  },
  components: {
    StockItem
  }
}
</script>
