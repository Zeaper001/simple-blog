import React from 'react';
import { Link} from './utils/Link';

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    const navbar = document.getElementById('Surface--Navbar')
    const navbarHeight = navbar.offsetHeight
    this.setState({navbarHeight});
  }

  render() {
    const {navbarHeight} = this.state;
    const style = {
      height: `calc(100vh - ${navbarHeight}px)`
    }
    return (
      <div className="Sidebar--Wrapper col-md-3" style={style}>
        <nav className="sidebar-nav">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <ul className="list">
            <Link to={'dashboard'} singular={'Dashboard'} />
            <Link to={'posts'} singular={'Posts'} />
            <Link to={'something'} singular={'Something else'} />
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
