import axios from 'axios';

const state = {
  projects: [],
  isModalOpen: false,
  sort: {
    sortBy: 'NAME',
    direction: 'ASC',
  },
  employees: [],
  newProjectForm: {
    name: '',
    client: '',
    dateStart: '',
    dateEnd: '',
    topic: '',
    description: '',
    employees: [],
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
  isModalOpen: (state) => {
    return state.isModalOpen;
  },
  newProjectForm: (state) => {
    return state.newProjectForm;
  },
  employees: (state) => {
    return state.employees;
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
  async getEmployees({ commit }) {
    try {
      const { data } = await axios.get('http://localhost:3000/projectsEmployees');
      commit('setEmployees', data);
    } catch (e) {
      console.log('e: ', e);
    }
  },
  async createNewProject({ commit }) {
    try {
      // await axios.get('http://localhost:3000/projectsEmployees');
      commit('resetForm');
      commit('setModal');
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
  setModal: (state) => {
    state.isModalOpen = !state.isModalOpen;
  },
  setNewProjectForm: (state, payload) => {
    state.newProjectForm = payload;
  },
  setEmployees: (state, payload) => {
    state.employees = payload;
  },
  resetForm: (state) => {
    state.newProjectForm = {
      name: '',
      client: '',
      dateStart: '',
      dateEnd: '',
      topic: '',
      description: '',
      employees: [],
    };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
