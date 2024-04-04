import React from 'react'
import profile from "../assets/images/profile.png" 

export default function Hero() {
  return (
    <div className="container-fluid col-xxl-8 px-4 py-5 hero-container">
      <div className="row flex-lg-row-reverse align-items-center g-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={profile} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6 py-5 hero-text">
          <h1 className="display-1 fw-bold text-body-emphasis lh-1 mb-3">
            <span> Farm Online</span>
          </h1>
          <p className="lead">We deliver you healthy and organic vegetables with affordable pricelist and make your self easy and comfortable with service</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type='button' className='btn btn-warning btn-lg px-4 me-md-2 rounded-0'>
                Shop Your Product
              </button>
              <button type='button' className='btn btn-light btn-lg px-4 rounded-0'>
                Shop All Product 
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}
