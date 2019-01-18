import React from 'react'

// import Desert from '../pages/desert';
// import Forest from '../pages/forest';
// import CommonPage from '../pages';
import Loadable from 'react-loadable';

const Desert = Loadable({
    loader: () => (import('../pages/desert')),
    loading: () => <div>Loading D...</div>,
});

const Forest = Loadable({
    loader: () => (import('../pages/forest')),
    loading: () => <div>Loading F...</div>,
});

const CommonPage = Loadable({
    loader: () => (import('../pages')),
    loading: () => <div>Loading CP...</div>,
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