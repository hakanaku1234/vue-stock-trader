<template>
  <div class="col-md-6">
    <div class="panel panel-danger">
      <div class="panel-heading">
        <h3 class="panel-title">{{ title }} <small>(Price: $ {{ price }} | Quantity: {{ qunatity }})</small></h3>
      </div>
      <div class="panel-body">
        <div class="input-group">
          <input v-model="stockQty" type="text" placeholder="Quantity" class="form-control">
          <div class="input-group-btn">
            <button @click="sellStock" :disabled="!stockQty" class="btn btn-danger">Sell</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      requried: true,
    },
    price: {
      type: Number,
      requried: true,
    },
    qunatity: {
      type: Number,
      requried: true,
    }
  },
  data() {
    return {
      stockQty: ''
    };
  },
  methods: {
    sellStock(payload) {
      this.$store.dispatch('sellStock', {title: this.title, price: this.price, quantity: parseInt(this.stockQty)});
      this.stockQty = '';
    }
  }
}
</script>
