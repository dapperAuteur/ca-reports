const state = {
  contact: {},
  contacts: [],
  contactsByOffice: []
};

const mutations = {
  'SET_CONTACTS' (state, contacts) {
    state.contacts = contacts;
  },
  'SET_CONTACTS_BY_ID' (state, contacts){
    state.contacts.sort(function(a, b) {
      return a.id - b.id;
    });
  },
  'SET_CONTACTS_BY_ID_REVERSE' (state, contacts){
    state.contacts.sort(function(a, b) {
      return b.id - a.id;
    });
  },
  'SET_CONTACTS_BY_OFFICE_ID' (state, contacts){
    state.contacts.sort(function(a, b) {
      return a.attributes['office-id'] - b.attributes['office-id'];
    });
  },
  'SET_CONTACTS_BY_OFFICE_ID_REVERSE' (state, contacts){
    state.contacts.sort(function(a, b) {
      return b.attributes['office-id'] - a.attributes['office-id'];
    });
  },
  'SET_CONTACTS_BY_LAST_NAME' (state, contacts){
    state.contacts.sort(function(a, b) {
      var nameA = a.attributes.last_name.toUpperCase();
      var nameB = b.attributes.last_name.toUpperCase();
      if(nameA < nameB) {
        return -1;
      }
      if(nameA > nameB) {
        return 1;
      }
      return 0;
    });
  },
  'SET_CONTACTS_BY_LAST_NAME_REVERSE' (state, contacts){
    state.contacts.sort(function(a, b) {
      var nameA = a.attributes.last_name.toUpperCase();
      var nameB = b.attributes.last_name.toUpperCase();
      if(nameA > nameB) {
        return -1;
      }
      if(nameA < nameB) {
        return 1;
      }
      return 0;
    });
  },
  'SET_CONTACTS_BY_FIRST_NAME' (state, contacts){
    state.contacts.sort(function(a, b) {
      var nameA = a.attributes.first_name.toUpperCase();
      var nameB = b.attributes.first_name.toUpperCase();
      if(nameA < nameB) {
        return -1;
      }
      if(nameA > nameB) {
        return 1;
      }
      return 0;
    });
  },
  'SET_CONTACTS_BY_FIRST_NAME_REVERSE' (state, contacts){
    state.contacts.sort(function(a, b) {
      var nameA = a.attributes.first_name.toUpperCase();
      var nameB = b.attributes.first_name.toUpperCase();
      if(nameA > nameB) {
        return -1;
      }
      if(nameA < nameB) {
        return 1;
      }
      return 0;
    });
  },
  'SET_PERSON' (state, contact) {
    state.contact = contact;
  },
  'RND_CONTACTS' (state) {
      state.contacts.forEach(contact => {
        contact.price = Math.round(contact.price * (1 + Math.random() - 0.5));
      })
  }
};

const actions = {
  addContact: ({ commit}, order) => {
    commit('ADD_PERSON', order);
  },
  initContacts: ({commit}) => {
    commit('SET_CONTACTS', contacts);
  },
  sortContactById: ({commit}) => {
    commit('SET_CONTACTS_BY_ID');
  },
  sortContactByIdReverse: ({commit}) => {
    commit('SET_CONTACTS_BY_ID_REVERSE');
  },
  sortContactByOfficeId: ({commit}) => {
    commit('SET_CONTACTS_BY_OFFICE_ID');
  },
  sortContactByOfficeIdReverse: ({commit}) => {
    commit('SET_CONTACTS_BY_OFFICE_ID_REVERSE');
  },
  sortContactByfirstName: ({commit}) => {
    commit('SET_CONTACTS_BY_FIRST_NAME');
  },
  sortContactByFirstNameReverse: ({commit}) => {
    commit('SET_CONTACTS_BY_FIRST_NAME_REVERSE');
  },
  sortContactByLastName: ({commit}) => {
    commit('SET_CONTACTS_BY_LAST_NAME');
  },
  sortContactByLastNameReverse: ({commit}) => {
    commit('SET_CONTACTS_BY_LAST_NAME_REVERSE');
  }
};

const getters = {
  contacts: state => {
    return state.contacts; //refers to contacts array from state on line 4
  },
  contact: state => {
    return state.contact;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
