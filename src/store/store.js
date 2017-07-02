import Vue from 'vue';
import Vuex from 'vuex';

// import createPersistedState from 'vuex-persistedstate';

import companies from './modules/companies';
import contacts from './modules/contacts';
import costProposals from './modules/costProposals';
import filmQuotes from './modules/filmQuotes';
import filmSpecs from './modules/filmSpecs';
import groupingObjects from './modules/groupingObjects';
import offices from './modules/offices';
import opportunities from './modules/opportunities';
import portfolio from './modules/portfolio';
import users from './modules/users';



// import * as actions from './actions';
import * as actions from './data';

Vue.use(Vuex);

const store = new Vuex.Store({
  actions,
  modules: {
    companies,
    contacts,
    costProposals,
    filmQuotes,
    filmSpecs,
    groupingObjects,
    offices,
    opportunities,
    portfolio,
    users
  },
  // plugins: [
  //   createPersistedState({
  //     getState(key) {
  //       const storedState = window.localStorage.getItem(key);
  //       if (!storedState) return {};
  //       const state = storedState;
  //       return JSON.parse(state);
  //     },
  //     setState(key, state) {
  //       const stateJSON = JSON.stringify(state);
  //       return window.localStorage.setItem(key, stateJSON);
  //     },
  //   }),
  // ],
})

export default store;
