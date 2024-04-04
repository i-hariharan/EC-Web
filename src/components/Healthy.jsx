import React from 'react'
import Healthyproduct from './Healthyproduct'
import logo from "../assets/images/logo.png"
import profile from "../assets/images/profile.png"
import veg from "../assets/images/veg.png"
import vegg from "../assets/images/vegg.png"
import veggg from "../assets/images/veggg.png"

export default function Healthy() {
  return (
    <div className="container-fluid px-4 py-5 healthy">
      <h2 className="text-center display-4 mt-4  fw-bold">Make a Healthy Food Habit</h2>
      <br></br>
      <div className='container mt-4'>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
         <Healthyproduct
             Image = {vegg} 
             Image2 = {profile}
             Title = "Delicious"
             Description = "its really nice" 
         />
         <Healthyproduct
             Image = {veg} 
             Image2 = {profile}
             Title = "yummy"
             Description = "its tastes good" 
         />
         <Healthyproduct
             Image = {veggg} 
             Image2 = {profile}
             Title = "spicy"
             Description = "its awesome" 
         />
      </div>
      </div>
    </div>
  )
}
