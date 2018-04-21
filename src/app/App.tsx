
import {Header} from './Components/Header';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

import {reducers} from './Reducers';

import {
    HashRouter as Router,
    Route,
} from 'react-router-dom';
import {BlockDetailsPage} from "./Modules/Blocks/Pages/BlockDetailsPage";
import {TXListPage} from "./Modules/Transactions/Pages/TXListPage";
import {MainPage} from "./Modules/Main/Pages/MainPage";
import {BlockListPage} from "./Modules/Blocks/Pages/BlockListPage";



const reduxStore = createStore(reducers,
    // applyMiddleware(thunk)
);


export const App = () => (
    <Provider store={reduxStore}>
        <Router>
            <div className="container">
                <Header/>
                <Route exact={true} path="/" component={MainPage}/>
                <Route path="/blocks" component={BlockListPage} />
                <Route path="/blocks/{:id}" component={BlockDetailsPage} />
                <Route path="/txs" component={TXListPage} />

            </div>
        </Router>
    </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));