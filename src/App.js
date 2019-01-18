import React, { Component, Fragment } from 'react'
// import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
// import reducers from './reducers';
import ReduxLogger from 'redux-logger';
import { applyMiddleware } from 'redux';
import { storeManager } from './utils/storeManager';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from './routes';
// const store = createStore(reducers, applyMiddleware(ReduxLogger));

export default class App extends Component {
    render() {
        return (
            <Provider store={storeManager.createStore(applyMiddleware(ReduxLogger))}>
                <Router>
                    <Fragment>
                        {
                            routes.map((data) => {
                                return <Route {...data} />
                            })
                        }
                    </Fragment>
                </Router>
            </Provider>
        )
    }
}