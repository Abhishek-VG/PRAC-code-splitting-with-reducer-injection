import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxLogger from 'redux-logger';
import reducers from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from './routes';
const store = createStore(reducers, applyMiddleware(ReduxLogger));
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
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