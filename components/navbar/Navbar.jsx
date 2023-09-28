"use client"
import React from 'react'
import { useState } from 'react';
import './Navbar.css'
// import Home from './../../app/page';


const Menu = () => (
    <>
    <a href="home">Home</a>
    <a href="products">Products</a>
    <a href="how to use">How to Use</a>
    <a href="blog">Blog</a>
    </>
  )


const Navbar = () => {
// const [toggleMenu, setToggleMenu] = useState(false);



  return (
    <div className='nav'>
    <div className='navbar__container'>
   
      <div className='navbar__logo'>
            <img className='navbar__logo__img' src="images/hardsands_word_logo.b849e33f.svg" alt="" />
        </div>  

        <div className='navbar-links_container'>
       <Menu />
      </div>

          <div>
            <a href="">Account</a>
        </div>
     </div>
     </div>
  )
}

export default Navbar