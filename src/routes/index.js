import React from 'react'

// import Desert from '../pages/desert';
// import Forest from '../pages/forest';
// import CommonPage from '../pages';
import Loadable from 'react-loadable';
import { withRefreshedStore } from '../utils/storeManager';

const Desert = Loadable({
    loader: () => withRefreshedStore(import('../pages/desert')),
    loading: () => <div>Loading Desert...</div>,
});

const Forest = Loadable({
    loader: () => withRefreshedStore(import('../pages/forest')),
    loading: () => <div>Loading Forest...</div>,
});

const CommonPage = Loadable({
    loader: () => withRefreshedStore(import('../pages')),
    loading: () => <div>Loading Commonpage...</div>,
})

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