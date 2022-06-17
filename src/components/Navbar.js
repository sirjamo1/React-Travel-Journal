import React from "react"
import EarthIcon from "../images/earthIcon.png"


export default function Navbar() {
 return (
  <div className="navbar">
   <img src={EarthIcon}/>
   <h3>My Travel Journal</h3>
  </div>
 )
}