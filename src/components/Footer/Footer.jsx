import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Footer.module.css'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
  return (<>
    <div className={` ${style.bg_background} w-100 `}>
      <div className=' container justify-content-between text-white py-5 mx-auto'>
        <div className="row">
        <div className='py-5 text-center col-md-4' >
          <span className='fs-3 bold d-block'>LOCATION</span>
          <span className='py-1 d-block'>2215 John Daniel Drive</span>
          <span className='d-block'>Clark, MO 65243</span>
        </div>
        <div className='py-5 text-center col-md-4'>
          <span className='fs-3 bold'>AROUND THE WEB</span>
          <div className='d-flex justify-content-center'>
            <div className={`text-white ${style.icon} mx-1`}>
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className={`text-white ${style.icon} mx-1`}>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className={`text-white ${style.icon} mx-1`}>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className={`text-white ${style.icon} mx-1`}>
              <FontAwesomeIcon icon={faGlobe} />
            </div>
          </div>
        </div>
        <div className=' py-5 text-center col-md-4'>
          <span className='fs-3 bold'>ABOUT FREELANCER</span>
          <span className='py-1 d-block mx-auto'>Freelance is a free to use, licensed Bootstrap theme created by Route</span>
        </div>
        </div>
        
      </div>
    </div>
    <div className={`text-center text-white ${style.bg_secondery} w-100 py-4`}>
      <span className=''>Copyright © Your Website 2021</span>
    </div>
  </>

  )
}
