import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import style from "./Portfolio.module.css"
import img1 from "./poert1.png"
import img2 from "./port2.png"
import img3 from "./port3.png"
export default function Portfolio() {
  
  return (
    <>
    <div className={`w-100 h-100 d-flex justify-content-center align-items-center position-fixed`}>
      <img src={""} alt="" />
    </div>
      <div className={`container home ${style.textcolor} text-center pt-5 pb-5`}>
        <h2 className='fs-1'> PORTFOLIO COMPONENT</h2>
        <div className='d-flex justify-content-center align-items-center pb-3 pt-2'>
          <div className={`${style.line} ${style.textcolor}`}></div>
          <FontAwesomeIcon icon={faStar} className='mx-3' />
          <div className={`${style.line}`}></div>
        </div>
        <div className="row gy-5 gx-5">
          <div className="col-md-4 ">
            <div className='position-relative ' >
              <div className={`${style.overlay} d-flex justify-content-center align-items-center text-white`}>
                <FontAwesomeIcon icon={faPlus} className={`${style.big_icon}`} />
              </div>
              <img src={img1} alt="" className='w-100 rounded-3' />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className='position-relative xyz'>
              <div className={`${style.overlay} d-flex justify-content-center align-items-center text-white`}>
                <FontAwesomeIcon icon={faPlus} className={`${style.big_icon}`} />
              </div>
              <img src={img2} alt="" className='w-100 rounded-3'/>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className='position-relative xyz'>
              <div className={`${style.overlay} d-flex justify-content-center align-items-center text-white`}>
                <FontAwesomeIcon icon={faPlus} className={`${style.big_icon}`} />
              </div>
              <img src={img3} alt="" className='w-100 rounded-3' />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className='position-relative xyz'>
              <div className={`${style.overlay} d-flex justify-content-center align-items-center text-white`}>
                <FontAwesomeIcon icon={faPlus} className={`${style.big_icon}`} />
              </div>
              <img src={img1} alt="" className='w-100 rounded-3' />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className='position-relative xyz'>
              <div className={`${style.overlay} d-flex justify-content-center align-items-center text-white`}>
                <FontAwesomeIcon icon={faPlus} className={`${style.big_icon}`} />
              </div>
              <img src={img2} alt="" className='w-100 rounded-3' />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className='position-relative xyz'>
              <div className={`${style.overlay} d-flex justify-content-center align-items-center text-white`}>
                <FontAwesomeIcon icon={faPlus} className={`${style.big_icon}`} />
              </div>
              <img src={img3} alt="" className='w-100 rounded-3' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
