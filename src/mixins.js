export const formatCurrency = {
  filters: {
    formatCurrency(val) {
      let str = String(val);
      if ( str.length >= 4 ) {
        val = str.substr(0, str.length - 3) + ',' + str.substr(str.length - 3, str.length);
      }
      return val;
    }
  }
};