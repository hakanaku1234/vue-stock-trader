<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button @click="toggleMobileMenu" type="button" class="navbar-toggle collapsed" :aria-expanded="isMobileMenuOpen"
          aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" :to="{name: 'home'}">Stock Trader</router-link>
      </div>
      <div :class="['navbar-collapse', 'collapse', {'in': isMobileMenuOpen}]">
        <ul class="nav navbar-nav">
          <router-link tag="li" :to="{name: 'portfolio'}" active-class="active"><a>Portfolio</a></router-link>
          <router-link tag="li" :to="{name: 'stocks'}" active-class="active"><a>Stocks</a></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#">End Day</a>
          </li>
          <li :class="['dropdown', {'open': isDropdownOpen}]">
            <a href="#" @click.prevent="toggleDropdown" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" :aria-expanded="isDropdownOpen">Save &amp; Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Save Data</a>
              </li>
              <li>
                <a href="#">Load Data</a>
              </li>
            </ul>
          </li>
          <li>
            <p class="navbar-text"><strong>Funds: $ {{ funds | formatCurrency }}</strong></p>
          </li>
        </ul>
      </div><!--/.nav-collapse -->
    </div><!--/.container-fluid -->
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import { formatCurrency } from '../mixins';
export default {
  computed: {
    ...mapGetters([
      'funds',
      'isDropdownOpen',
      'isMobileMenuOpen'
    ]),
  },
  methods: {
    ...mapActions([
      'toggleDropdown',
      'toggleMobileMenu'
    ])
  },
  mixins: [formatCurrency],
}
</script>
