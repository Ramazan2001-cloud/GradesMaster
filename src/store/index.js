import { createStore } from 'vuex';  // Используйте createStore вместо new Vuex.Store
import addGrades from './modules/add-grades';

export default createStore({  // Используйте createStore вместо new Vuex.Store
  modules: {
    addGrades,
  },
});
