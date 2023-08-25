import React from 'react'
import {Link} from 'react-router-dom'

function TopRightMenu() {
    const rightMenuItems =[
        {
          name:'Home',
          link: '/'
        },
        {
          name:'About',
          link: '/about'
        },
        {
          name:'Contact',
          link: '/contact'
        },
        {
          name:'Login',
          link: '/login'
        },
        {
          name:'Register',
          link: '/register'
        },
        {
          name:'Cart',
          link: '/cart'
        },
        
      ]

  return (
    <React.Fragment>
        <ul>
                {rightMenuItems.map((menu,index)=>(
                  <li key={index}><Link to={menu.link}>{menu.name}</Link></li>
                ))}
                </ul>
    </React.Fragment>
  )
}

export default TopRightMenu