import { HiOutlineHome } from 'react-icons/hi'
import { AiFillDatabase } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { MdAdminPanelSettings } from 'react-icons/md'
import { Icon, Link } from '@chakra-ui/react'
import React from 'react'
import "./adminNavbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const adminname = localStorage.getItem('adminname')
  // console.log(adminname)
  return (
    <div className='adminNavbar'>
    <div className='navicon-cont'>
        <div className='nav-icons'>
            {/* MdAdminPanelSettings */}
            <NavLink to={'/admin/panel'}><Icon as={HiOutlineHome} w={6} h={6} /></NavLink>
        </div>
        <div className='nav-icons'>
       <NavLink to="/admin/products"> <Icon as={AiFillDatabase} w={6} h={6} /></NavLink>
        </div>
        <div className='nav-icons'>
        <NavLink to={'/admin/users'}><Icon as={FaUsers} w={6} h={6} /></NavLink>
        </div>
    </div>
    <div className='user-admin'>
        
            <h3>{adminname}</h3>
       
        <div>
        <Icon as={MdAdminPanelSettings} w={8} h={8} />
        </div>
    </div>
    </div>
  )
}

export default Navbar