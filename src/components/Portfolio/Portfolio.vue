<template>
  <div class="row">
    <portfolio-item
      v-for="(item, i) in getPortfolio"
      :key="i"
      :title="item.title"
      :price="item.price"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PortfolioItem from './PortfolioItem.vue';
export default {
  computed: {
    ...mapGetters([
      'getPortfolio'
    ])
  },
  components: {
    PortfolioItem
  }
}
</script>