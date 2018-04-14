import {MainPage} from './Pages/MainPage';
import {BlockListPage} from './Pages/BlockListPage';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

export const App = () => (
    <Router>
        <div>
            <div><Link to="/blocks">blocks</Link></div>
            <Route exact={true} path="/" component={MainPage}/>
            <Route path="/blocks" component={BlockListPage} />
        </div>
    </Router>
);

ReactDOM.render(<App/>, document.getElementById('root'));