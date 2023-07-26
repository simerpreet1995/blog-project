import React from 'react'
import MostLiked from './MostLiked'
import MostCommented from './MostCommented'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'


function Header() {


  return ( 
  <>

  
    

    <div className="container-fluid mb-5">
        <div className="row bg-dark " style={{height: "5rem", justifyContent: "flex-end", alignItems: "center"}}>

            <div className="col-md-3">
              <Link to="/" className='Navbar-link'>Home</Link>
            </div>

            <div className="col-md-3">
           <Link to="/most-liked" className='Navbar-link'>Most Liked</Link>
            </div>
            <div className="col-md-3">
            <Link to='/most-commented' className='Navbar-link'>Most Commented</Link>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Header
