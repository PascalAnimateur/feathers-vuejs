import feathers from '../feathers';

const state = {
  token: null
};

const getters = {
  isAuthenticated (state) {
    return state.token !== null;
  }
};

const mutations = {
  LOGIN (state, result) {
    state.token = result.token;
  },
  LOGOUT (state) {
    state.token = null;
  }
};

const actions = {
  authenticate: ({commit}) => {
    return feathers.authenticate()
      .then(result => commit('LOGIN', result));
  },
  login: ({commit}, email, password) => {
    return feathers.authenticate({type: 'local', email, password})
      .then(result => commit('LOGIN', result));
  },
  logout: ({commit}) => {
    return feathers.logout()
      .then(result => commit('LOGOUT'));
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
