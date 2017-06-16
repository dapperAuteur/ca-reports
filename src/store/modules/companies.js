const state = {
  companies: [],
  company: {}
};

const mutations = {
  'SET_COMPANIES' (state, companies) {
    state.companies = companies;
  },
  'SET_COMPANIES_BY_ID' (state, companies){
    state.companies.sort(function(a, b) {
      return a.id - b.id;
    });
  },
  'SET_COMPANIES_BY_NAME' (state, companies){
    state.companies.sort(function(a, b) {
      var nameA = a.attributes.name.toUpperCase();
      var nameB = b.attributes.name.toUpperCase();
      if(nameA < nameB) {
        return -1;
      }
      if(nameA > nameB) {
        return 1;
      }
      return 0;
    });
  },
  'SET_COMPANY' (state, company) {
    state.company = company;
  },
  'RND_COMPANIES' (state) {
      state.companies.forEach(company => {
        company.price = Math.round(company.price * (1 + Math.random() - 0.5));
      })
  }
};

const actions = {
  buyCompany: ({commit}, order) => {
    commit('BUY_COMPANY', order);
  },
  initCompanies: ({commit}) => {
    commit('SET_COMPANIES', companies);
  },
  sortCompanyById: ({commit}) => {
    commit('SET_COMPANIES_BY_ID');
  },
  sortCompanyByName: ({commit}) => {
    commit('SET_COMPANIES_BY_NAME');
  }
};

const getters = {
  companies: state => {
    return state.companies; //refers to companies array from state on line 4
  },
  company: state => {
    return state.company;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
