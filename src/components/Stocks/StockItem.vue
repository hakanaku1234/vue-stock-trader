<template>
  <div class="col-md-6">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{ title }} <small>(Price: ${{ price }})</small></h3>
      </div>
      <div class="panel-body">
        <div class="input-group">
          <input type="text" placeholder="Quantity" class="form-control">
          <div class="input-group-btn">
            <button class="btn btn-success">Buy</button>
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
    }
  }
}
</script>
