<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <h2>Trade or View your Portfolio</h2>
      <p>You may Save &amp; Load your Data</p>
      <p>Click on 'End Day' to begin a new Day</p>
      <hr>
      <h3>Your Funds: $ {{ funds | formatCurrency }}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { formatCurrency } from '../mixins';
export default {
  computed: {
    ...mapGetters([
      'funds'
    ])
  },
  mixins: [formatCurrency],
}
</script>

