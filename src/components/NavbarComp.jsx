import React from 'react'

import SearchBar from "./SearchBar"
import menu3 from "../assets/menu.png"

function NavbarComp() {

  
  return (
    <div className='navbar'>
      <button className='menu'>
        <img src={menu3} alt="menu" width={"30px"}  />
      </button>
      <img src="" alt="" />
      <SearchBar />
      

      
    </div>
  )
}

export default NavbarComp