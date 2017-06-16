import store from '../store';

const state = {
  filmSpecsByOpportunities: [],
  filmQuoteByFilmSpec: [],
  filmQuoteByOpportunity: [],
  costProposalByOpportunity: [],
  costProposalByFilmSpec: [],
  costProposalByFilmQuote: [],
}

const mutations = {
  'SET_OFFICES_BY_COMPANY' (state, offices, companies, officesByCompany) {
    state.offices = offices;
    state.companies = companies;
    for(var j = 0; j < state.companies.length; j++) {
      console.log(companies[j].id);
      console.log(offices[j]['company-id']);
      companies[j].offices = [];
      var companiesJ = [companies[j]];
      console.log(companiesJ);
      for(var i = 0; i < offices.length; i++) {
        if(offices[i]['company-id'] === companies[j].id) {
          companies[j].offices.push(offices[i]);
          officesByCompany.push(companies[j]);
        }
      }
    }
    return officesByCompany;
  },
  'SET_OFFICES_BY_THIS_COMPANY' (state, offices, company, officesByCompany) {
    for(var i = 0; i < offices.length; i++) {
      if(offices[i]['company-id'] === company.id) {
        officesByCompany.push(offices[i]);
      }
    }
  }
}

const actions = {
  setOfficesByCompany: ({ commit }) => {
    commit('SET_OFFICES_BY_COMPANY');
  }
}

const getters = {
  officesByCompany: state => {
    return state.officesByCompany;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
