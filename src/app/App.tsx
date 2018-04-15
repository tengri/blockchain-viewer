import {MainPage} from './Pages/MainPage';
import {BlockListPage} from './Pages/BlockListPage';
import {Header} from './Components/Header';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore} from 'redux'
import {Provider} from 'react-redux'

import {reducers} from './Reducers';

const reduxStore = createStore(reducers);

import {
    HashRouter as Router,
    Route,
} from 'react-router-dom';

export const App = () => (
    <Provider store={reduxStore}>
        <Router>
            <div className="container">
                <Header/>
                <Route exact={true} path="/" component={MainPage}/>
                <Route path="/blocks" component={BlockListPage} />
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));