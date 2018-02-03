import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Posts from './components/Posts'
import Notfound from './components/Notfound'

class Content extends React.Component {
  render() {
    return (
      <div className="col-sm-8 col-sm-offset-4 col-md-8 col-md-offset-4">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/posts" component={Posts} />
          <Route component={Notfound} />
        </Switch>
      </div>
    )
  }
}

export default Content;
