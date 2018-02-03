import React from 'react'
import {Navbar, DropdownMenu} from './utils/Navbar'

class MainNavbar extends React.Component {
  render() {
    return (
      <Navbar id={'Surface--Navbar'}>
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Brand</a>
        </div>
        <DropdownMenu />
      </Navbar>
    )
  }
}

export default MainNavbar;
