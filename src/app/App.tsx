import {MainPage} from './Pages/MainPage';
import {BlockListPage} from './Pages/BlockListPage';
import {Header} from './Components/Header';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux'

import {reducers} from './Reducers';

const store = createStore(reducers);


import {
    HashRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

export const App = () => (
    <Router>
        <div className="container">
            <Header/>
            <Route exact={true} path="/" component={MainPage}/>
            <Route path="/blocks" component={BlockListPage} />
        </div>
    </Router>
);

ReactDOM.render(<App/>, document.getElementById('root'));