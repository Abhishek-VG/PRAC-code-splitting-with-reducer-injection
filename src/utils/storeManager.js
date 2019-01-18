import { combineReducers, createStore } from 'redux';

const reduceReducers = (reducers) => {
    return (state, action) =>
        reducers.reduce((result, reducer) => {
            return reducer(result, action)
        }, state)
};

export const storeManager = {
    createRootReducer() {
        return (
            combineReducers(Object.keys(this.reducerMap).reduce((result, key) => {
                return Object.assign(result, {
                    [key]: reduceReducers(this.reducerMap[key]),
                })
            }, {}))
        );
    },
    createStore(...args) {
        this.store = createStore(this.createRootReducer(), ...args);
        return this.store;
    },
    reducerMap: {},
    refreshStore() {
        this.store.replaceReducer(this.createRootReducer());
    },
    registerReducers(reducerMap) {
        Object.entries(reducerMap).forEach(([name, reducer]) => {
            if (!this.reducerMap[name]) { this.reducerMap[name] = []; }
            this.reducerMap[name].push(reducer);
        });
    },
    store: null,
};

export const withRefreshedStore = (importPromise) => (
    importPromise
        .then((module) => {
            storeManager.refreshStore();
            return module;
        },
            (error) => {
                throw error;
            })
);

export default storeManager;
