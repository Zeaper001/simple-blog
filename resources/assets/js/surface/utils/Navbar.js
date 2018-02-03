import React from 'react'

export const Navbar = ({id, className, children}) => {
  return(
    <div id={id} className={`row ${className}`}>
      <div className="col-md-12">
        <nav className="navbar navbar-default" role="navigation">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-3">
            {children}
          </div>
        </nav>
      </div>
    </div>
  );
}

export const DropdownMenu = ({singular, position = 'right'}) => {
  return (
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className={`nav navbar-nav navbar-${position}`}>
      <li><a href="/logout">Log out</a></li>
        <li className="dropdown">
          {singular}
          <ul className="dropdown-menu">
            <li><a href="#">Profile</a></li>
            <li className="divider"></li>
            <li><a href="/logout">Log out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
