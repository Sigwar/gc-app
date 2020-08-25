import axios from 'axios';

const state = {
  employees: [],
  sort: {
    sortBy: 'NAME',
    direction: 'ASC',
  },
};

// getters
const getters = {
  employees: (state) => {
    return state.employees;
  },
  sort: (state) => {
    return state.sort;
  },
};

// actions
const actions = {
  async getEmployees({ commit }) {
    try {
      const { data } = await axios.get('http://localhost:3000/employees');
      commit('setEmployees', data);
    } catch (e) {
      console.log('e: ', e);
    }
  },
};

// mutations
const mutations = {
  setEmployees: (state, payload) => {
    state.employees = payload;
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