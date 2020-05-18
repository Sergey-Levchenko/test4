import {http} from '@/api';

const users = {
  namespaced: true,
  state: {
    users: [],
  },
  getters: {
    getUsers: state => state.users,
    getUserById: state => id => state.users.find(user => user.id === +id),
  },
  actions: {
    async fetchUsers({commit}) {
      await http
        .get('/users')
        .then(response => {
          commit('SET_USERS', response.data.data);
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload;
    },
  },
};

export default users;
