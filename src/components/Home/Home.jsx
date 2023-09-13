import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from "./Home.module.css"
import avatar from "./avataaars.svg"
import { faStar } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  return (<>
    <div className={`${style.background} w-100 pt-5 pb-5`}>
      <div className='text-white text-center pt-5'>
        <img src={avatar} alt="" className={`${style.w15} pb-4`} />
        <h1 className='bold'>START FRAMEWORK</h1>
        <div className='d-flex justify-content-center align-items-center pb-3 pt-2'>
          <div className={`${style.white_line}`}></div>
          <FontAwesomeIcon icon={faStar} className='mx-3 ' />
          <div className={`${style.white_line}`}></div>
        </div>
        <span className='pt-1 pb-5 d-block'>Graphic Artist - Web Designer - Illustrator</span>
      </div>
    </div>
  </>
  )
}
