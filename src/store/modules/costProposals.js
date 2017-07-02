import * as d3 from 'd3';
const state = {
  costProposal: {},
  costProposals: [],
  costProposalsByFilmQuote: [],
  costProposalsGroupedByUserId: []
};

const mutations = {
  'SET_COST_PROPOSAL' (state, costProposal) {
    state.costProposal = costProposal;
  },
  'SET_COST_PROPOSALS' (state, costProposals) {
    state.costProposals = costProposals;
    // console.log(costProposals);
    var groupByPM = d3.nest().key(function(d) {
      return d.attributes['user-id'];
    }).entries(costProposals);
    state.costProposalsGroupedByUserId = groupByPM;
    // console.log(state.costProposalsGroupedByUserId);
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
    return state.costProposalsGroupedByUserId;
    // var allCP = this.costProposals;
    // console.log(allCP);
    // state.costProposalsGroupedByUserId = costProposals;
    // console.log(0);
    // console.log(costProposals);
    // var groupByPM = d3.nest().key(function(d) {
    //   return d.attributes['user-id'];
    // }).entries(costProposals);
    // state.costProposalsGroupedByUserId = groupByPM;
    // return groupByPM;
  }
};

const actions = {
  initCostProposals: ({commit}) => {
    commit('SET_COST_PROPOSALS', costProposals);
  },
  initCostProposalsGroupedByUserId: ({commit}) => {
    commit('SET_COST_PROPOSALS_GROUPED_BY_USER_ID');
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
