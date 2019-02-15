import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Dashboard from './Dashboard'

const APP_TITLE = 'VP Finance'

const Home = () => {
    return (
        <div className="flex-center position-ref full-height">
            <div className="content">
                <div className="title m-b-md">{APP_TITLE}</div>

                <div className="links">
                    <Link to="/bill">Bill</Link>
                    <Link to="/user">User</Link>
                </div>
            </div>
        </div>
    )
}

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Switch>
                        {/* <Route path="/bill" component={BillList} /> */}
                        <Route path="/dashboard" component={Dashboard} />
                        {/* <Route path="/bill" component={Dashboard} /> */}
                        {/* <Route path="/user" component={UserList} /> */}
                        <Route path="/user" render={() => <div>user</div>} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Fragment>
            </BrowserRouter>
        )
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'))
}
