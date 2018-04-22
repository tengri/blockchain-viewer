import 'bootstrap/dist/css/bootstrap.css';

import {Header} from './Components/Header';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Reducers} from './Reducers';
import {
    HashRouter as Router,
    Route,
} from 'react-router-dom';
import {BlockDetailsPage} from "./Modules/Blocks/Pages/BlockDetailsPage";
import {MainPage} from "./Modules/Main/Pages/MainPage";
import {BlockListPage} from "./Modules/Blocks/Pages/BlockListPage";
import logger from 'redux-logger';
import {TXDetailsPage} from "./Modules/Transactions/Pages/TXDetailsPage";
import {NotFoundPage} from "./Pages/NotFoundPage";
import {Switch} from "react-router";

const reduxStore = createStore(Reducers, applyMiddleware(logger));

export const App = () => (
    <Provider store={reduxStore}>
        <Router>
                <div className="container">
                    <Header/>
                    <Switch>
                        <Route exact={true} path="/" component={MainPage}/>
                        <Route exact={true} path="/blocks" component={BlockListPage} />
                        <Route path="/blocks/:height" component={BlockDetailsPage} />
                        <Route path="/tx/:hash" component={TXDetailsPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
        </Router>
    </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));