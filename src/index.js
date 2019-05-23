import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
// screens
import Home from './screens/Home'
// components
import Migrations from './components/Migrations'
import Policies from './components/Policies'
import Blog from './components/Blog'
import Contact from './components/Contact'
// react-router
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/migrations" component={Migrations} />
      <Route path="/policies" component={Policies} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>, document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
