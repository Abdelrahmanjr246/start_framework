import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ marginTop: '50px', minHeight: 'calc(-106px + 100vh)' }} className="w-100 bg-about text-white d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-uppercase mb-3 fs-1 fw-bolder">404</h1>
        <div className='d-flex align-items-center justify-content-center mb-3'>
                <div className="line me-3" style={{backgroundColor: 'white'}} />
                <i className="fa-solid fa-star" />
                <div className="line ms-3" style={{backgroundColor: 'white'}} />
            </div>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
        <Link to="/home" className="nav-link text-white fw-bold bg-color p-2 rounded-2">Go Back Home</Link>
    </div>
    )
}
