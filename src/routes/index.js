import Desert from '../pages/desert';
import Forest from '../pages/forest';
import CommonPage from '../pages';

export const routes = [
    {
        path: '/',
        component: CommonPage,
    },
    {
        path: '/desert',
        component: Desert,
        exact: true
    },
    {
        path: '/forest',
        component: Forest,
        exact: true
    },
]