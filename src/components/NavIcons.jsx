
import { Link } from 'react-scroll';

import React from 'react'
import { FaHome } from 'react-icons/fa';

function NavIcons() {
  return (
    <div style={{padding:'5px 5px',margin:'20px 10px'}}>
       <Link to='/' style={{textDecoration:'none',color:'white'}}>
       <FaHome /> 
  </Link>
    </div>
  )
}

export default NavIcons
