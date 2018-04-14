import {MainPage} from './Pages/MainPage';
import {BlockListPage} from './Pages/BlockListPage';
import {Header} from './Components/Header';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    HashRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

export const App = () => (
    <Router>
        <div>
            <Header/>
            <Route exact={true} path="/main" component={MainPage}/>
            <Route path="/blocks" component={BlockListPage} />
        </div>
    </Router>
);

ReactDOM.render(<App/>, document.getElementById('root'));