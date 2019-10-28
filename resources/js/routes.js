import LandingPage from './pages/Landing.vue';
import AboutPage from './pages/About.vue';
import NotFoundPage from './pages/NotFound.vue';

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: LandingPage,
            name: 'landingPage'
        }, {
            path: '/about',
            component: AboutPage,
            name: 'aboutPage'
        }, {
            path: '*',
            component: NotFoundPage,
            name: 'notFoundPage'
        }
    ]
};