import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from "./About.module.css"
import { faStar } from '@fortawesome/free-solid-svg-icons'
export default function About() {
  return (<>
  <div className={`${style.background} text-white py-5`}>
  <div className='text-center pt-5'>
      <h2 className='bold fs-1'>ABOUT COMPONENT</h2>
      <div className='d-flex justify-content-center align-items-center pb-3 pt-2'>
        <div className={`${style.white_line}`}></div>
        <FontAwesomeIcon icon={faStar} className='mx-3 ' />
        <div className={`${style.white_line}`}></div>
      </div>
    </div>
    <div className='container pb-5'>
      <div className="row">
        <div className='col-md-6'>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className='col-md-6'>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </div>
  </div>
   
  </>)
}
