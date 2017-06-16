const state = {
  costProposals: [],
  costProposal: {},
  costProposalsByFilmQuote: []
};

const mutations = {
  'SET_COST_PROPOSALS' (state, costProposals) {
    state.costProposals = costProposals;
  },
  'SET_COST_PROPOSALS_BY_ID' (state, costProposals) {
    state.costProposals.sort(function(a, b){
      return a.id - b.id;
    });
  },
  // 'SET_OFFICES_BY_COMPANYID' (state, costProposals) {
  //   state.costProposals.sort(function(a, b) {
  //     return a['company-id'] - b['company-id'];
  //   });
  // },
  'SET_COST_PROPOSAL' (state, costProposal) {
    state.costProposal = costProposal;
  }
};

const actions = {
  // buyOffice: ({ commit}, order) => {
  //   commit('BUY_OFFICE', order);
  // },
  initCostProposals: ({commit}) => {
    commit('SET_COST_PROPOSALS', costProposals);
  },
  sortCostProposalById: ({commit}) => {
    commit('SET_COST_PROPOSALS_BY_ID');
  },
  // sortOfficeByCompanyId: ({commit}) => {
  //   commit('SET_OFFICES_BY_COMPANYID');
  // }
};

const getters = {
  costProposals: state => {
    return state.costProposals; //refers to offices array from state on line 4
  },
  costProposal: state => {
    return state.costProposal;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
