export default {
  namespaced: true,  // Добавьте эту строку
  actions: {
    addGrades({ commit }, gradesData) {
      const jsonString = JSON.stringify(gradesData);
      localStorage.setItem('datagrades', jsonString)
      commit('updateAddGrades', gradesData);
    },
  },
  mutations: {
    updateAddGrades(state, gradesData) {
      state.grades_data = gradesData;
    },
  },
  state: {
    grades_data: null,
  },
  getters: {
    getGradesSettings(state) {
    
      return state.grades_data;
    },
  },
};
