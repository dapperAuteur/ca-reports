const state = {
  opportunities: [],
  opportunity: {},
  opportunitiesByContact: []
}

const mutations = {
  'SET_OPPORTUNITIES' (state, opportunities) {
    state.opportunities = opportunities;
  },
  'SET_OPPORTUNITIES_BY_ID' (state, opportunities){
    state.opportunities.sort(function(a, b) {
      return a.id - b.id;
    });
  },
  'SET_OPPORTUNITIES_BY_ID_REVERSE' (state, opportunities) {
    state.opportunities.sort(function(a, b) {
      return b.id - a.id;
    });
  },
  'SET_OPPORTUNITIES_BY_NAME' (state, opportunities) {
    state.opportunities.sort(function(a, b) {
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
  'SET_OPPORTUNITIES_BY_NAME_REVERSE' (state, opportunities) {
    state.opportunities.sort(function(a, b) {
      var nameA = a.attributes.name.toUpperCase();
      var nameB = b.attributes.name.toUpperCase();
      if(nameA > nameB) {
        return -1;
      }
      if(nameA < nameB) {
        return 1;
      }
      return 0;
    });
  },
  'SET_OPPORTUNITY' (state, opportunity) {
    state.opportunity = opportunity;
  }
}

const actions = {
  initOpportunities: ({commit}, order) => {
    commit('SET_OPPORTUNITIES', order);
  },
  sortOpportunityById: ({commit}) => {
    commit('SET_OPPORTUNITIES_BY_ID');
  },
  sortOpportunityByIdReverse: ({commit}) => {
    commit('SET_OPPORTUNITIES_BY_ID_REVERSE');
  },
  sortOpportunityByName: ({commit}) => {
    commit('SET_OPPORTUNITIES_BY_NAME');
  },
  sortOpportunityByNameReverse: ({commit}) => {
    commit('SET_OPPORTUNITIES_BY_NAME_REVERSE');
  }
}

const getters = {
  opportunities: state => {
    return state.opportunities;
  },
  opportunity: state => {
    return state.opportunity;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
