import React from "react"
import { Outlet, Link } from 'react-router-dom';
import './index.scss'
const Layout = () => {
  return (
    <div className="layout">
      <nav className="layout-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Progress">Progress</Link>
          </li>
          <li>
            <Link to="/Canvas">Canvas</Link>
          </li>
        </ul>
      </nav>
      <div className="layout-content"><Outlet /></div>
    </div>
  )
}

export default Layout
