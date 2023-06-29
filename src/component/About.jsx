import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='fw-bold md-4'>Về chúng tôi</h1>
            <div className="lead mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ipsam quae maxime mollitia, eum repellat consequuntur nihil eaque eos iusto ullam voluptate accusamus fugit quas necessitatibus illo ex earum delectus.
            </div>
            <NavLink to = "/contact" className="btn btn-outline-primary px-3">Liên hệ</NavLink>

          </div>
          <div className="col-md-6 d-flex justify-content-center ">
            <img src="/assets/bg.jpg" alt="About Us" height="400px" width="400px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About