import React from 'react'
import { Helmet } from 'react-helmet';

export default function About() {
return (
    <>
        <Helmet>
            <title>About</title>
        </Helmet>
        <div style={{ marginTop: '50px', minHeight: 'calc(-106px + 100vh)' }} className='bg-about text-white d-flex flex-column justify-content-center align-items-center'>
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">about component</h2>
            <div className='d-flex align-items-center justify-content-center mb-3'>
                <div className="line me-3" style={{backgroundColor: 'white'}} />
                <i className="fa-solid fa-star" />
                <div className="line ms-3" style={{backgroundColor: 'white'}} />
            </div>

            <div className="row px-5">
                <div className="col-md-6 ps-md-5">
                    <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6 pe-5">
                    <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>    
    </>
)
}
