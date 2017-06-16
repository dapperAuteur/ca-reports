const state = {
  filmSpecs: [],
  filmSpec: {},
  // officesByCompany: []
};

const mutations = {
  'SET_FILM_SPECS' (state, filmSpecs) {
    state.filmSpecs = filmSpecs;
  },
  'SET_FILM_SPECS_BY_ID' (state, filmSpecs) {
    state.filmSpecs.sort(function(a, b){
      return a.id - b.id;
    });
  },
  'SET_FILM_SPECS_BY_ID_REVERSE' (state, filmSpecs) {
    state.filmSpecs.sort(function(a, b){
      return b.id - a.id;
    });
  },
  'SET_FILM_SPECS_BY_OPPORTUNITY_ID' (state, filmSpecs){
    state.filmSpecs.sort(function(a, b) {
      return a.attributes['opportunity-id'] - b.attributes['opportunity-id']
    });
  },
  'SET_FILM_SPECS_BY_OPPORTUNITY_ID_REVERSE' (state, filmSpecs){
    state.filmSpecs.sort(function(a, b) {
      return b.attributes['opportunity-id'] - a.attributes['opportunity-id']
    });
  },
  'SET_FILM_SPEC' (state, filmSpec) {
    state.filmSpec = filmSpec;
  }
};

const actions = {
  // buyOffice: ({ commit}, order) => {
  //   commit('BUY_OFFICE', order);
  // },
  initFilmSpecs: ({commit}) => {
    commit('SET_FILM_SPECS', filmSpecs);
  },
  sortFilmSpecById: ({commit}) => {
    commit('SET_FILM_SPECS_BY_ID');
  },
  sortFilmSpecByIdReverse: ({commit}) => {
    commit('SET_FILM_SPECS_BY_ID_REVERSE');
  },
  sortFilmSpecByOpportunityId: ({commit}) => {
    commit('SET_FILM_SPECS_BY_OPPORTUNITY_ID');
  },
  sortFilmSpecByOpportunityIdReverse: ({commit}) => {
    commit('SET_FILM_SPECS_BY_OPPORTUNITY_ID_REVERSE');
  }
};

const getters = {
  filmSpecs: state => {
    return state.filmSpecs; //refers to offices array from state on line 4
  },
  filmSpec: state => {
    return state.filmSpec;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
