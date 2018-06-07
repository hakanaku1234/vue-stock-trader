const state = {
  stocks: [
    { title: 'BMW', price: 100 },
    { title: 'Google', price: 100 },
    { title: 'Apple', price: 100 },
    { title: 'Twitter', price: 100 },
  ],
  stocksInPortfolio: [],
};

const getters = {
  getStocks: state => state.stocks,
  getPortfolio: state => state.stocksInPortfolio
};

const mutations = {

};

const actions = {

};

export default {
  state,
  getters,
  mutations,
  actions
};