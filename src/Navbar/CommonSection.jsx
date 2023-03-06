import React from 'react'
import {NavLink} from "react-router-dom"
const CommonSection = (props) => {
  return (
    <>
      <div className="row flex-wrap mt-5 mx-5">
        <div className="col-md-6 d-flex align-items-center px-5 pt-5 pb-2 mt-5">
          <div className="container commonBox text-start mt-5 mb-1">
            <h2 className=' mb-0'>{props.pageName} </h2>
            <h2 className='titleName'>ST Developer</h2>
            <p>We are team of talented developers making websites</p>

            <NavLink to={props.visit}> <button className='contactHereBtn btn-outline-info-commonBox fs-5' > {props.btName} </button></NavLink>
          </div>

        </div>
        <div className="col-md-6 px-5 pt-5 pb-2 mt-5 position-relative ">
          <div className="container sectionImage position-absolute text-center">
            <img src={props.imageSrc} className='' width="80%" alt="not found" />
          </div>
        </div>
      </div>


    </>
  )
}

export default CommonSection