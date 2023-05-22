import React from 'react'
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"
import { TiLocation } from "react-icons/ti"
import { IoIosHelpCircle } from "react-icons/io"
import { FiSearch } from "react-icons/fi"
import { HiUserCircle } from "react-icons/hi"
import { FcLike } from "react-icons/fc"


import Logo from "../../assets/images/Logo.svg"


import "./style.scss"

export default function Header() {



  return (
    <>
      <header className='header'>

        <div className='header__top'>
          <div className='container'>
            <div className='header__top-info'>
              <ul className='d-flex align-items-center gap-3'>
                <li className='header__top-link '>
                  <a href=''>
                    <FaFacebookF color='white' opacity='0.7' />
                  </a>
                </li>

                <li className='header__top-link'>
                  <a href=''>
                    <FaTwitter color='white' opacity='0.7' />
                  </a>
                </li>

                <li className='header__top-link'>
                  <a href=''>
                    <FaYoutube color='white' opacity='0.7' />
                  </a>
                </li>

                <li className='header__top-link'>
                  <a href=''>
                    <RiInstagramFill color='white' opacity='0.7' />
                  </a>
                </li>

                <li className='header__top-link'>
                  <a href=''>
                    <RiWhatsappFill color='white' opacity='0.7' />
                  </a>
                </li>

                <li className='header__top-link'>
                  <a href='tel: +971 55 811 9024'>
                    +971 55 811 9024
                  </a>
                </li>

                <li className='header__top-link'>
                  <a href='mailto:request@example.com'>
                    <MdEmail color='white' opacity='0.7' /> request@example.com
                  </a>
                </li>
              </ul>

              <div>
                <div className='d-flex gap-3 align-items-center'>
                  <div>
                    <select className='form-select' name="lang" id="">
                      <option value="Canada">Canada</option>
                      <option value="Use">USA</option>
                      <option value="Rus">Rus</option>
                    </select>
                  </div>



                  <a href=''
                    className='text-white d-flex align-items-center gap-2 opacity-75 font-monospace'>
                    <IoIosHelpCircle size='13px' color='white' opacity='0.7' />Help
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='header__bottom'>
          <div className="container">
            <div className='d-flex align-items-center justify-content-between'>

              <div className='d-flex align-items-center gap-5'>
                <a href="">
                  <img src={Logo} alt={Logo} />
                </a>


                <nav className=''>
                  <ul>
                    <li>
                      <NavLink
                        className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}
                        to="/allCards">Barcha portfoliolar</NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}
                        to="/about" >Biz haqimizda</NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}
                        to="/blog">Blog</NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}
                        to="/contact">Bog'lanish</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>


              <div className='d-flex align-items-center gap-4'>
                <ul className='d-flex gap-4'>
                  <li>
                    <button className='search-btn'>
                      <FiSearch size='20px' />
                    </button>
                  </li>

                  <li>
                    <FcLike size='25px' />
                  </li>

                  <li>
                    <HiUserCircle size='25px' />
                  </li>
                </ul>

                <button className='btn btn-success'>Get a quote</button>
              </div>


            </div>
          </div>


        </div>
      </header>
    </>
  )
}
