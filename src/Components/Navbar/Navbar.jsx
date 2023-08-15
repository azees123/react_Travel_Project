import React,{useState} from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  const [active,setActive] = useState('navBar')

  const showNav = () =>{
    setActive('navBar activeNavbar')
  }

  const removeNav = () =>{
    setActive('navBar')
  }

  return (
    <section className="navBarSection">
      <header className="header flex">
        
        <div className="logoDiv">
          <a href="#top" className="logo flex">
            <h1><MdOutlineTravelExplore className="icon"/> Travel.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#home" className="navLinks">Home</a>
            </li>

            <li className="navItem">
            <a href="#packages" className="navLinks">Packages</a>
            </li>

            <li className="navItem">
            <a href="#shop" className="navLinks">Shop</a>
            </li>

            <li className="navItem">
            <a href="#about" className="navLinks">About</a>
            </li>

            <li className="navItem">
            <a href="#pages" className="navLinks">Pages</a>
            </li>

            <li className="navItem">
            <a href="#news" className="navLinks">News</a>
            </li>

            <li className="navItem">
            <a href="#contact" className="navLinks">Contact</a>
            </li>

            <button className="btn">
              <a href="#book_now">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>

      </header>
    </section>
  )
}

export default Navbar