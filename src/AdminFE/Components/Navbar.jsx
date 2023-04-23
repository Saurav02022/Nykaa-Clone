import { HiOutlineHome } from 'react-icons/hi'
import { AiFillDatabase } from 'react-icons/ai'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { MdAdminPanelSettings } from 'react-icons/md'
import { Icon, MenuButton ,Menu,MenuList,MenuItem,MenuDivider} from '@chakra-ui/react'
import React from 'react'
import {  useNavigate } from 'react-router-dom';
import "./adminNavbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const adminname = localStorage.getItem('adminname')
  // console.log(adminname)

  const handlelogout=()=>{
    localStorage.removeItem('adminname')
    navigate('/admin/login')
  }

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
          <Menu>
            <MenuButton>
              <Icon as={MdAdminPanelSettings} w={8} h={8} /> 
            </MenuButton>
            <MenuList color={'gray'} marginTop="1" bgColor={'#2a2f43'}>
              <MenuItem bgColor={'#2a2f43'} color="white"><NavLink to={'/'}>Nykaa Site</NavLink></MenuItem>
              <MenuDivider />
              {/* AiOutlinePoweroff */}
              <MenuItem bgColor={'#2a2f43'} color="white"><Icon as={AiOutlinePoweroff} w={4} h={4} marginTop="2px" marginRight={'3px'} /><button onClick={handlelogout}>Logout</button></MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Navbar