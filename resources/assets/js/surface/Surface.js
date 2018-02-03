import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import MainNavbar from './MainNavbar'
import Sidebar from './Sidebar'
import Content from './Content'

class Surface extends Component {
  constructor() {
    super()
    this.state = {
      fade: true
    }
  }

  render() {
    return (
        <div className="container-fluid">
          <MainNavbar />
            <Router>
              <div className="row">
                <Sidebar />
                <Content />
              </div>
            </Router>
        </div>
    );
  }
}

export default Surface;

if (document.getElementById('app')) {
    ReactDOM.render(<Surface />, document.getElementById('app'));
}
