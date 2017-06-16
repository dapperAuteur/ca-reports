import Vue from 'vue';

export const loadData = ({commit}) => {
  Vue.axios.get('data.json')
    .then(response => response.data)
    .then(data => {
      if (data) {
        const companies = data;

        commit('SET_COMPANIES', companies);

      }
    });
};

export const deleteData = ({commit}) => {
  Vue.axios.delete('data.json')
    .then(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
}

export const editData = ({commit}) => {
  Vue.axios.edit('data.json')
    .then(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
}

export const createData = ({commit}) => {
  Vue.axios.post('data.json')
    .then(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
}
