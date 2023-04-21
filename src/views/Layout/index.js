import React from "react"
import { Outlet, Link } from 'react-router-dom';
import './index.scss'
const Layout = () => {
  return (
    <div className="layout">
      <nav className="layout-nav">
        <ul>
          <li>
            <Link to="/blog">Home</Link>
          </li>
          <li>
            <Link to="/blog/progress">Progress</Link>
          </li>
          <li>
            <Link to="/blog/canvas">Canvas</Link>
          </li>
        </ul>
      </nav>
      <div className="layout-content"><Outlet /></div>
    </div>
  )
}

export default Layout
