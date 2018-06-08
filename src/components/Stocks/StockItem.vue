<template>
  <div class="col-md-6">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{ title }} <small>(Price: ${{ price }})</small></h3>
      </div>
      <div class="panel-body">
        <div class="input-group">
          <input v-model="quantity" type="text" placeholder="Quantity" class="form-control">
          <div class="input-group-btn">
            <button @click="buyItem" :disabled="!quantity" class="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
export default {
  props: {
    title: {
      type: String,
      requried: true,
    },
    price: {
      type: Number,
      requried: true,
    }
  },
  data() {
    return {
      quantity: ''
    };
  },
  methods: {
    // ...mapActions([
    //   'buyStock'
    // ]),
    buyItem() {
      this.$store.dispatch('buyStock', { title: this.title, price: parseInt(this.price), quantity: parseInt(this.quantity) });
      this.quantity = '';
    }
  }
}
</script>
