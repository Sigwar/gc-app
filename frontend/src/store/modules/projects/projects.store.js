import axios from 'axios';

const state = {
  isModalOpen: false,
  isDeleteModal: false,
  isEditMode: false,
  projectToDelete: {},
  projects: [],
  employees: [],
  sort: {
    sortBy: 'NAME',
    direction: 'ASC',
  },
  projectForm: {
    name: '',
    client: '',
    date: [],
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
  isDeleteModal: (state) => {
    return state.isDeleteModal;
  },
  isEditMode: (state) => {
    return state.isEditMode;
  },
  projectForm: (state) => {
    return state.projectForm;
  },
  employees: (state) => {
    return state.employees;
  },
  projectToDelete: (state) => {
    return state.projectToDelete;
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
  async getProjectDetail({ commit }, payload) {
    try {
      const { data } = await axios.get('http://localhost:3000/projectDetail', payload);
      commit('setProjectForm', data);
      commit('setModal');
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
  async updateProject({ commit }) {
    try {
      // await axios.post('URL', state.projectForm)
      commit('resetForm');
      commit('setModal');
    } catch (e) {
      console.log('e: ', e);
    }
  },
  async deleteProject({ commit }) {
    try {
      // await axios.get('http://localhost:3000/projectsEmployees');
      commit('setDeleteModal');
      commit('resetProjectToDelete');
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
  setEditMode: (state, payload) => {
    state.isEditMode = payload;
  },
  setDeleteModal: (state) => {
    state.isDeleteModal = !state.isDeleteModal;
  },
  setProjectForm: (state, payload) => {
    state.projectForm = payload;
  },
  setEmployees: (state, payload) => {
    state.employees = payload;
  },
  resetForm: (state) => {
    state.projectForm = {
      name: '',
      client: '',
      dateStart: '',
      dateEnd: '',
      topic: '',
      description: '',
      employees: [],
    };
  },
  setProjectToDelete: (state, payload) => {
    state.projectToDelete = payload;
  },
  resetProjectToDelete: (state) => {
    state.projectToDelete = {};
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
