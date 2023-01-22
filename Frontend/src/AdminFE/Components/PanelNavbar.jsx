import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./panelNavbar.css"

const PanelNavbar = () => {
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)


  return (
    <div className='paneldiv'>
      <div className='panel-heading' style={{}}>ＡＤＭＩＮ ＰＡＮＥＬ</div>
      <div className='panelnav'>
        <div className='subpanel'>
        <Link className='head-titles' to={'/admin/products'}><img  src='https://nykaa-clone.itechscripts.com/admin/assets/img/pages/clipart0.png' alt=''></img>Products</Link>
        </div>
        <div className='subpanel'>
        <Link className='head-titles' to={'/admin/users'}><img  src='https://nykaa-clone.itechscripts.com/admin/assets/img/pages/clipart2.png' alt=''></img>Users</Link>
        </div>
    </div>
    </div>
  )
}

export default PanelNavbar