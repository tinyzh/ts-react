import * as React from 'react'
import * as ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import CounterComponent from './components/Counter'

function Home(){
    return <div>home</div>
}

ReactDom.render(
    <Provider store={store}>
        <Router>

        </Router>
        <CounterComponent />

    </Provider>,
document.querySelector('#app'))