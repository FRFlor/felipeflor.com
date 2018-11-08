import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Portfolio from './views/Portfolio.vue';
import Story from './views/Story.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
        },
        {
            path: '/story',
            name: 'story',
            component: Story,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
    ],
});
