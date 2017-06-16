const state = {
  offices: [],
  office: {},
  officesByCompany: []
};

const mutations = {
  'SET_OFFICES' (state, offices) {
    state.offices = offices;
  },
  'SET_OFFICES_BY_ID' (state, offices) {
    state.offices.sort(function(a, b){
      return a.id - b.id;
    });
  },
  'SET_OFFICES_BY_ID_REVERSE' (state, offices) {
    state.offices.sort(function(a, b){
      return b.id - a.id;
    });
  },
  'SET_OFFICES_BY_COMPANYID' (state, offices) {
    state.offices.sort(function(a, b) {
      return a.attributes['company-id'] - b.attributes['company-id'];
    });
  },
  'SET_OFFICES_BY_COMPANYID_REVERSE' (state, offices) {
    state.offices.sort(function(a, b) {
      return b.attributes['company-id'] - a.attributes['company-id'];
    });
  },
  'SET_OFFICE' (state, office) {
    state.office = office;
  }
};

const actions = {
  buyOffice: ({ commit}, order) => {
    commit('BUY_OFFICE', order);
  },
  initOffices: ({commit}) => {
    commit('SET_OFFICES', offices);
  },
  sortOfficeById: ({commit}) => {
    commit('SET_OFFICES_BY_ID');
  },
  sortOfficeByIdReverse: ({commit}) => {
    commit('SET_OFFICES_BY_ID_REVERSE');
  },
  sortOfficeByCompanyId: ({commit}) => {
    commit('SET_OFFICES_BY_COMPANYID');
  },
  sortOfficeByCompanyIdReverse: ({commit}) => {
    commit('SET_OFFICES_BY_COMPANYID_REVERSE');
  }
};

const getters = {
  offices: state => {
    return state.offices; //refers to offices array from state on line 4
  },
  office: state => {
    return state.office;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
