import * as d3 from 'd3';
const state = {
  user: {},
  users: [],
  costProposalsByUser: [],
  opportunitiesByUser: [],
};

const mutations = {
  'SET_USERS' (state, users) {
    state.costProposalsByUser = users;
    state.users = users;
    console.log(state.costProposalsByUser);
  }
};

const actions = {
  initUsers: ({commit}) => {
    commit('SET_USERS', users);
  }
}

const getters = {
  users: state => {
    return state.users;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
