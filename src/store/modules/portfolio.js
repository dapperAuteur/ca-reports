const state = {
  funds: 10000,
  companies: []
};

const mutations = {
  'BUY_COMPANY'(state, {companyId, quantity, companyPrice}) {
    const record = state.companies.find(element => element.id == companyId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.companies.push({
        id: companyId,
        quantity: quantity
      });
    }
    state.funds -= companyPrice * quantity;
  },
  'SELL_COMPANY' (state, {companyId, quantity, companyPrice}) {
    const record = state.companies.find(element => element.id == companyId);
    if (record.quantity > quantity){
      record.quantity -= quantity;
    } else {
      state.companies.splice(state.companies.indexOf(record), 1);
    }
    state.funds += companyPrice * quantity;
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds;
    state.companies = portfolio.companyPortfolio ? portfolio.companyPortfolio : [];
  }
}

const actions = {
  sellCompany({commit}, order) {
    commit('SELL_COMPANY', order);
  }
};

const getters = {
  companyPortfolio (state, getters) {
    return state.companies.map(company => {
      const record = getters.companies.find(element => element.id == company.id);
      return {
        id: company.id,
        quantity: company.quantity,
        name: record.name,
        price: record.price
      }
    });
  },
  funds (state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
