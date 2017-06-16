const state = {
  costProposals: [],
  costProposal: {},
  costProposalsByFilmQuote: []
};

const mutations = {
  'SET_COST_PROPOSAL' (state, costProposal) {
    state.costProposal = costProposal;
  },
  'SET_COST_PROPOSALS' (state, costProposals) {
    state.costProposals = costProposals;
  },
  'SET_COST_PROPOSALS_BY_ID' (state, costProposals) {
    state.costProposals.sort(function(a, b){
      return a.id - b.id;
    });
  },
  'SET_COST_PROPOSALS_BY_COMPANY_ID' (state, costProposals) {
    state.costProposals.sort(function(a, b) {
      return a.attributes['company-id'] - b.attributes['company-id'];
    });
  },
  'SET_COST_PROPOSALS_BY_USER_ID' (state, costProposals) {
    state.costProposals.sort(function(a, b) {
      return a.attributes['user-id'] - b.attributes['user-id'];
    });
  },
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
  sortCostProposalByCompanyId: ({commit}) => {
    commit('SET_COST_PROPOSALS_BY_COMPANY_ID');
  },
  sortCostProposalByUserId: ({commit}) => {
    commit('SET_COST_PROPOSALS_BY_USER_ID')
  }
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
