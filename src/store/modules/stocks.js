const state = {
  funds: 10000,
  stocks: [
    { title: 'BMW', price: 100 },
    { title: 'Google', price: 100 },
    { title: 'Apple', price: 100 },
    { title: 'Twitter', price: 100 },
  ],
  stocksInPortfolio: [],
  savedData: null,
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
  },
  saveData: ( state, payload ) => {
    const savedData = {
      funds: state.funds,
      stocks: Array.from(state.stocks),
      stocksInPortfolio: Array.from(state.stocksInPortfolio),
    }
    localStorage.setItem('funds', JSON.stringify(savedData.funds));
    localStorage.setItem('stocks', JSON.stringify(savedData.stocks));
    localStorage.setItem('stocksInPortfolio', JSON.stringify(savedData.stocksInPortfolio));
  },
  loadData: state => {
    const funds = JSON.parse(localStorage.getItem('funds'));
    const stocks = JSON.parse(localStorage.getItem('stocks'));
    const stocksInPortfolio = JSON.parse(localStorage.getItem('stocksInPortfolio'));

    state.funds = funds;
    state.stocks = stocks;
    state.stocksInPortfolio = stocksInPortfolio;
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
  },
  saveData: context => {
    context.commit('saveData');
  },
  loadData: context => {
    context.commit('loadData');
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};