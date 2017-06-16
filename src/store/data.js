import Vue from 'vue';

export const loadData = ({commit}) => {
  Vue.axios.get('companies')
    .then(response => response.data.data)
    .then(data => {
      if (data) {
        const companies = data;
        commit('SET_COMPANIES', companies);
      }
    });

  Vue.axios.get('contacts')
    .then(response => response.data.data)
    .then(data => {
      if (data) {
        const contacts = data;
        commit('SET_CONTACTS', contacts);
      }
    });

  Vue.axios.get('cost_proposals')
    .then(response => response.data.data)
    .then(data => {
      if (data) {
        const cost_proposals = data;
        commit('SET_COST_PROPOSALS', cost_proposals);
        console.log(1);
      }
    });

  Vue.axios.get('film_quotes')
    .then(response => response.data.data)
    .then(data => {
      if (data) {
        const film_quotes = data;
        commit('SET_FILM_QUOTES', film_quotes);
      }
    });

  Vue.axios.get('film_specs')
    .then(response => response.data.data)
    .then(data => {
      if (data) {
        const film_specs = data;
        commit('SET_FILM_SPECS', film_specs);
      }
    });

  Vue.axios.get('offices')
    .then(response => response.data.data)
    .then(data => {
      if (data) {
        const offices = data;
        commit('SET_OFFICES', offices);
      }
    });

  Vue.axios.get('opportunities')
    .then(response => response.data.data)
    .then(data => {
      if (data) {
        const opportunities = data;
        commit('SET_OPPORTUNITIES', opportunities);
      }
    });

  // Vue.axios.get('users')
  //   .then(response => response.data.data)
  //   .then(data => {
  //     if (data) {
  //       const users = data;
  //       commit('SET_USERS', users);
          // console.log('users loaded');
  //     }
  //   });
  console.log('all data loaded');
}
