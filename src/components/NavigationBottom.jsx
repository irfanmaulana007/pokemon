import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './styles.css'

class NavigationBottom extends Component {
    render () {
        return (
            <div className=" d-block d-sm-none">
                <ul className="fixed-bottom nav nav-pills nav-justified">
                    <li className="nav-item">
                        <NavLink to ='/pokemon/list' activeClassName="active">
                            <span className="nav-link">Pokemon List</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to ='/pokemon/owned' activeClassName="active">
                            <span className="nav-link">My Pokemon</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavigationBottom