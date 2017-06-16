const state = {
  opportunities: [],
  quote: {},
  opportunitiesByContact: []
}

const mutations = {
  'SET_QUOTES' (state, opportunities) {
    state.opportunities = opportunities;
  },
  'SET_QUOTES_BY_ID' (state, opportunities){
    state.opportunities.sort(function(a, b) {
      return a.id - b.id;
    });
  },
  'SET_QUOTES_BY_ID_REVERSE' (state, opportunities) {
    state.opportunities.sort(function(a, b) {
      return b.id - a.id;
    });
  },
  'SET_QUOTES_BY_CONTACT_ID' (state, opportunities) {
    state.opportunities.sort(function(a, b) {
      return a.attributes.contact_id - b.attributes.contact_id;
    });
  },
  'SET_QUOTES_BY_CONTACT_ID_REVERSE' (state, opportunities) {
    state.opportunities.sort( function(a, b) {
      return b.attributes.contact_id - a.attributes.contact_id;
    });
  },
  'SET_QUOTE' (state, quote) {
    state.quote = quote;
  }
}

const actions = {
  initOpportunities: ({commit}, order) => {
    commit('SET_QUOTES', order);
  },
  sortQuoteById: ({commit}) => {
    commit('SET_QUOTES_BY_ID');
  },
  sortQuoteByIdReverse: ({commit}) => {
    commit('SET_QUOTES_BY_ID_REVERSE');
  },
  sortQuoteByContactId: ({commit}) => {
    commit('SET_QUOTES_BY_CONTACT_ID');
  },
  sortQuoteByContactIdReverse: ({commit}) => {
    commit('SET_QUOTES_BY_CONTACT_ID_REVERSE');
  }
}

const getters = {
  opportunities: state => {
    return state.opportunities;
  },
  quote: state => {
    return state.quote;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
