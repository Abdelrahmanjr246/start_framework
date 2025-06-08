import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-color text-white text-center p-0 w-100">
            <div className="row m-4">
                <div className='col-sm-12 col-md-4'>
                    <div className="inner p-3">
                        <h3 className='pt-4 mb-2'>LOCATION</h3>
                        <p className='mb-3'>2215 John Daniel Drive</p>
                        <p className='mb-3'>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className="inner p-3">
                        <h3 className='pt-4 mb-2'>AROUND THE WEB</h3>
                        <div className="icons d-flex justify-content-center align-items-center gap-3 mb-3">
                            <span  style={{ width: '40px', height: '40px', fontSize: '20px' }} className='d-flex justify-content-center align-items-center  border border-white text-white rounded-circle'><i className="fa-brands fa-facebook"></i></span>
                            <span style={{ width: '40px', height: '40px', fontSize: '20px' }} className='d-flex justify-content-center align-items-center  border border-white text-white rounded-circle'><i className="fa-brands fa-twitter"></i></span>
                            <span style={{ width: '40px', height: '40px', fontSize: '20px' }} className='d-flex justify-content-center align-items-center  border border-white text-white rounded-circle'><i className="fa-brands fa-linkedin-in"></i></span>
                            <span style={{ width: '40px', height: '40px', fontSize: '20px' }} className='d-flex justify-content-center align-items-center  border border-white text-white rounded-circle'><i className="fa-solid fa-globe"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className="inner p-3">
                        <h3 className='pt-4 mb-2'>ABOUT FREELANCER</h3>
                        <p className='mb-3'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            <div className="bg-bottom p-3">
                <div className="col-12">
                    <p className='mb-3 pt-3'>Copyright &copy; Your Website 2023</p>
                </div>
            </div>
        </footer>
    )
}
