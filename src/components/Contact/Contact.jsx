import React from 'react'
import style from "./Contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
  return (<>
    <h2 className='fs-1 text-center pt-2 pt-5'>CONATCT SECTION</h2>
    <div className='d-flex justify-content-center align-items-center pb-5 pt-2'>
      <div className={`${style.line} ${style.textcolor}`}></div>
      <FontAwesomeIcon icon={faStar} className='mx-3' />
      <div className={`${style.line}`}></div>
    </div>
    <div className='py-5 d-flex flex-column mx-auto w-50'>
    <input type="text" className='form-control  mb-5 shadow-none' placeholder='userName'/>
    <input type="text" className='form-control  mb-5 shadow-none' placeholder='userAge'/>
    <input type="text" className='form-control  mb-5 shadow-none' placeholder='userEmail'/>
    <input type="text" className='form-control  mb-5 shadow-none' placeholder='userPassword'/>
    <div>
    <button className={`btn ${style.btn_cyan}`}> Send message</button>
    </div>
    
    </div>
   
  </>
  )
}
