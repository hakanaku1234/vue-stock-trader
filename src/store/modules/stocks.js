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
      const newStockPrice = randomNum(10, 300);
      const indexOfPortfolio = state.stocksInPortfolio.findIndex(e => e.title === el.title);
      el.price = newStockPrice;
      if ( indexOfPortfolio !== -1 ) {
        state.stocksInPortfolio[indexOfPortfolio].price = newStockPrice;
      }
    });
  },
  buyStock: ( state, payload ) => {
    if (state.funds >= payload.quantity * payload.price) {
      const index = state.stocksInPortfolio.findIndex(e => e.title === payload.title);
      if ( index !== -1 ) {
        state.stocksInPortfolio[index].quantity += payload.quantity;
      } else {
        state.stocksInPortfolio.push(payload);
      }
      state.funds -= payload.quantity * payload.price;
    } else {
      alert('Not enough funds to buy!');
    }
  },
  sellStock: ( state, payload ) => {
    const index = state.stocksInPortfolio.findIndex(e => e.title === payload.title);
    if (state.stocksInPortfolio[index].quantity >= payload.quantity) {
      (state.stocksInPortfolio[index].quantity - payload.quantity) === 0 ? state.stocksInPortfolio.splice(index, 1) : state.stocksInPortfolio[index].quantity -= payload.quantity;
      state.funds += payload.quantity * payload.price;
    } else {
      alert(`Not enough stocks to sell! Maximum stocks you can sell: ${state.stocksInPortfolio[index].quantity}`);
    }
  }
};

const actions = {
  updateStocks: context => {
    context.commit('updateStocks');
  },
  buyStock: (context, payload) => {
    context.commit('buyStock', payload);
  },
  sellStock: ( context, payload ) => {
    context.commit('sellStock', payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};