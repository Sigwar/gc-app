import axios from 'axios';

const state = {
  projects: [],
  sort: {
    sortBy: 'NAME',
    direction: 'ASC',
  },
};

//getters
const getters = {
  projects: (state) => {
    return state.projects;
  },
  sort: (state) => {
    return state.sort;
  },
};

//actions
const actions = {
  async getProjects({ commit }) {
    try {
      const { data } = await axios.get('http://localhost:3000/projects');
      commit('setProjects', data);
    } catch (e) {
      console.log('e: ', e);
    }
  },
};

//mutations
const mutations = {
  setProjects: (state, payload) => {
    state.projects = payload;
  },
  setSort: (state, payload) => {
    if (state.sort.sortBy === payload) {
      state.sort.direction = state.sort.direction === 'ASC' ? 'DES' : 'ASC';
    } else {
      state.sort.sortBy = payload;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
