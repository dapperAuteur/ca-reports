const state = {
  costProposals: [],
  costProposal: {},
  costProposalsByFilmQuote: [],
  costProposalsGroupedByUserId: []
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
  'SET_COST_PROPOSALS_BY_ID_REVERSE' (state, costProposals) {
    state.costProposals.sort(function(a, b){
      return b.id - a.id;
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
  'SET_COST_PROPOSALS_BY_USER_ID_REVERSE' (state, costProposals) {
    state.costProposals.sort(function(a, b) {
      return b.attributes['user-id'] - a.attributes['user-id'];
    })
  },
  'SET_COST_PROPOSALS_GROUPED_BY_USER_ID' (state, costProposals) {
    var cP = state.costProposals;
    var arr = [];
    for(var i = 0; i <= cP.length; i++){
      for(var j = 0; j <= cP.length; j++){
        if(cP[i].attributes['user-id'] != cP[j].attributes['user-id']){
         console.log(cP[j]);
         arr.push(cP[j]);
        }
      }
    arr.push([]);
    }
    console.log(arr);
  },
};

const actions = {
  // buyOffice: ({ commit}, order) => {
  //   commit('BUY_OFFICE', order);
  // },
  initCostProposals: ({commit}) => {
    commit('SET_COST_PROPOSALS', costProposals);
  },
  initCostProposalsGroupedByUserId: ({commit}) => {
    commit('SET_COST_PROPOSALS_GROUPED_BY_USER_ID', costProposals);
  },
  sortCostProposalById: ({commit}) => {
    commit('SET_COST_PROPOSALS_BY_ID');
  },
  sortCostProposalByCompanyId: ({commit}) => {
    commit('SET_COST_PROPOSALS_BY_COMPANY_ID');
  },
  sortCostProposalByUserId: ({commit}) => {
    commit('SET_COST_PROPOSALS_BY_USER_ID')
  },
  sortCostProposalByUserIdReverse: ({commit}) => {
    commit('SET_COST_PROPOSALS_BY_USER_ID_REVERSE')
  }
};

const getters = {
  costProposals: state => {
    return state.costProposals; //refers to offices array from state on line 4
  },
  costProposal: state => {
    return state.costProposal;
  },
  costProposalsGroupedByUserId: state => {
    return state.costProposalsGroupedByUserId;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
