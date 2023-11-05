import React from 'react'
import { Link } from 'react-router-dom'
import TopRightMenu from '../lib/TopRightMenu'

function HeaderComponents() {
  
  return (
    <React.Fragment>
      <div className="top-header"  >
        <div className="container">
          <div className="top-header-container">
            <div className="top-header-left">
              <ul>
                <li><Link to=''>info@ecommerce</Link></li>
                <li><Link to=''>+977 9860178743</Link></li>
              </ul>
            </div>
            <div className="top-header-right">
              <TopRightMenu/>
            </div>
          </div>
        </div>
      </div>
      
      </React.Fragment>
  )
}

export default HeaderComponents