import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    render () {
        return (
            <nav className="navbar navbar-expand-sm bg-theme fixed-top">
                <a className="navbar-brand text-white" href="/#" rel="noopener noreferrer">Pokemon</a>
            
                <div className="d-none d-sm-block ml-auto">
                    <ul className="navbar-nav navbar-large">
                        <li className="nav-item ml-2 mr-2 pull-left">
                            <NavLink to ='/pokemon/list' activeClassName="active">
                                <span className="nav-link text-white">Pokemon List</span>
                            </NavLink>
                        </li>
                        <li className="nav-item ml-2 mr-2 pull-left">
                            <NavLink to ='/pokemon/owned' activeClassName="active">
                                <span className="nav-link text-white">My Pokemon</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation