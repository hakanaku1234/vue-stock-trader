const state = {
  funds: 10000,
  stocks: [
    { title: 'BMW', price: 100 },
    { title: 'Google', price: 100 },
    { title: 'Apple', price: 100 },
    { title: 'Twitter', price: 100 },
  ],
  stocksInPortfolio: [],
};

const getters = {
  funds: state => state.funds,
  getStocks: state => state.stocks,
  getPortfolio: state => state.stocksInPortfolio,
};

const mutations = {
  updateStocks: state => {
    const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    state.stocks.forEach(el => {
      el.price = randomNum(10, 300);
    });
  },
  buyStock: ( state, payload ) => {
    // if ( state.stocksInPortfolio ) {
      state.stocksInPortfolio.push(payload);
    // }
    state.funds -= payload.quantity * payload.price;
  }
};

const actions = {
  updateStocks: context => {
    context.commit('updateStocks');
  },
  buyStock: (context, payload) => {
    context.commit('buyStock', payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};