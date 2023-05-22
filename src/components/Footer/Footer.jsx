import React from 'react';
import {Link} from "react-router-dom";

import {AiFillInstagram} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import {FaFacebookF, FaTwitter,FaYoutube,FaWhatsapp} from "react-icons/fa"


import "./Footer.scss";
import Logo from "../../assets/images/Logo.svg"

const Footer = () => {
    return (
        <footer className='footer'>
           <div className='container'>
               <div className='footer__info'>
                   <div>
                       <Link to='/'>
                           <img src={Logo} alt={Logo}/>
                       </Link>

                       <p>Nullam non nisi est sit amet. Arcu vitae <br/> elementum curabitur vitae nunc. Ut tellus <br/> elementum sagittis vitae et leo duis.</p>
                       <div className='d-flex  align-items-center gap-4'>
                           <a href="">
                               <FaFacebookF color='#767676' size='25px'/>
                           </a>

                           <a href="">
                               <FaTwitter color='#767676' size='25px'/>
                           </a>

                           <a href="">
                               <FaYoutube color='#767676' size='25px'/>
                           </a>

                           <a href="">
                               <AiFillInstagram color='#767676' size='25px'/>
                           </a>
                       </div>
                   </div>


                   <ul className='footer__list'>

                       <li className='footer__list-item'>
                           <strong>Company</strong>

                           <ul>
                               <li>
                                   <a href="">About Us</a>
                               </li>

                               <li>
                                   <a href="">Blog</a>
                               </li>

                               <li>
                                   <a href="">FAQ</a>
                               </li>
                           </ul>
                       </li>

                       <li className='footer__list-item'>
                           <strong>Cars</strong>
                           
                           <ul className='m-0 p-0'>
                               <li>
                                   <a href="">Special offers</a>
                               </li>

                               <li>
                                   <a href="">New cars</a>
                               </li>

                               <li>
                                   <a href="">Used cars</a>
                               </li>

                               <li>
                                   <a href="">Brands</a>
                               </li>
                           </ul>
                       </li>



                       <li className='footer__list-item'>
                           <strong>Contacts</strong>

                           <ul>
                               <li>
                                   <a href="tel:+971 55 811 9024"><FaWhatsapp/>  +971 55 811 9024</a>
                               </li>

                               <li>
                                   <a href="mailto:request@example.com"><MdEmail/>request@example.com</a>
                               </li>

                           </ul>
                       </li>


                   </ul>
                   

               </div>
           </div>
        </footer>
    );
};

export default Footer;