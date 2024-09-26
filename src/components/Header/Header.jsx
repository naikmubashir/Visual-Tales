import React from 'react'
import {Container,Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const authStatus = useSelector((state)=>state.auth.status); //checks if we are logged in
  
  const navigate= useNavigate();
  const navItems=[
    {
      name:'Home',
      slug:'/',
      active:true
    },
    {
      name:'Login',
      slug:'/login',
      active: !authStatus  //if logged in , then dont display the login button
    },
    {
      name:'Signup',
      slug:'/signup',
      active: !authStatus  //if logged in , then dont display the sign up button
    },
    {
      name:'All Posts',
      slug:'all-posts',
      active:authStatus
    },
    {
      name:'Add Post',
      slug:'add-post',
      active:authStatus
    }
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          
          <div>
            <Link to='/'>
              <Logo width="70px"/>
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {navItems.map((item)=>(
              item.active?<li key={item.name}><button className='inline-block px-6 py-2  duration-200 hover:bg-blue-100 rounded-full' onClick={()=>navigate(item.slug)} >{item.name} </button></li>  :null
            ))}
            {authStatus&& <li><LogoutBtn/></li>}
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header
