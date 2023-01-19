import React from 'react'
import { Link } from 'react-router-dom'
import "./panelNavbar.css"

const PanelNavbar = () => {
  return (
    <div className='paneldiv'>
      <div style={{color:"rgb(54, 54, 54)",paddingTop:"20px",margin:"auto"}}>ＡＤＭＩＮ ＰＡＮＥＬ</div>
      <div className='panelnav'>
        <div className='subpanel'>
        <Link to={'/admin/products'}><img src='https://nykaa-clone.itechscripts.com/admin/assets/img/pages/clipart0.png' alt=''></img>Products</Link>
        </div>
        <div className='subpanel'>
        <Link to={'/admin/users'}><img src='https://nykaa-clone.itechscripts.com/admin/assets/img/pages/clipart2.png' alt=''></img>Users</Link>
        </div>
    </div>
    </div>
  )
}

export default PanelNavbar