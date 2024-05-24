import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import "./Contact.css"

const Contact = () => {
  return (
    <>
    <div className='contact'>
      <div className='header'>
        <h2>Contact</h2>
        <p>
          Seasoned Java Full Stack Developer with over 2 years of hands-on experience in 
          designing and implementing robust, scalable, and innovative web solutions.
          Adept at leveraging a comprehensive skill set encompassing front-end and back-end developer. 
        </p>
        </div>

        <div className='icon'>
        <CgMail /> shrutishero@gmail.com
        <br/>
         <FaAddressBook />  Ambala city, Haryana
        </div>

        <div className='icon-2'>
        <FaInstagram  />
        <FaTwitter  />
        <FaYoutube  />
        </div>
      </div>
    </>
  )
}

export default Contact