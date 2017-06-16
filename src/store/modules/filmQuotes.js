const state = {
  filmQuotes: [],
  filmQuote: {},
  filmQuotesByFilmSpec: []
  // officesByCompany: []
};

const mutations = {
  'SET_FILM_QUOTES' (state, filmQuotes) {
    state.filmQuotes = filmQuotes;
  },
  'SET_FILM_QUOTES_BY_ID' (state, filmQuotes) {
    state.filmQuotes.sort(function(a, b){
      return a.id - b.id;
    });
  },
  // 'SET_OFFICES_BY_COMPANYID' (state, costProposals) {
  //   state.costProposals.sort(function(a, b) {
  //     return a['company-id'] - b['company-id'];
  //   });
  // },
  'SET_FILM_QUOTE' (state, filmQuote) {
    state.filmQuote = filmQuote;
  }
};

const actions = {
  // buyOffice: ({ commit}, order) => {
  //   commit('BUY_OFFICE', order);
  // },
  initFilmQuotes: ({commit}) => {
    commit('SET_FILM_QUOTES', filmQuotes);
  },
  sortFilmQuoteById: ({commit}) => {
    commit('SET_FILM_QUOTES_BY_ID');
  },
  // sortOfficeByCompanyId: ({commit}) => {
  //   commit('SET_OFFICES_BY_COMPANYID');
  // }
};

const getters = {
  filmQuotes: state => {
    return state.filmQuotes; //refers to offices array from state on line 4
  },
  filmQuote: state => {
    return state.filmQuote;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
