import { createRouter, createWebHistory } from 'vue-router';
import SettingsGrade from './views/SettingsGrade';
import ResultsGrade from './views/ResultsGrade';
import Grades from './views/Grades';
import Home from './views/Home';

const routes = [
  { path: '/', component: Home},
  { path: '/settings-grade', component: SettingsGrade },
  { path: '/results-grade', component: ResultsGrade },
  { path: '/grades', component: Grades },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
