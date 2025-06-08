import React from 'react'
import { Helmet } from 'react-helmet';
import avatar from '../../../public/assets/avataaars.svg';
export default function Home() {
    
return (
    <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <div style={{ marginTop: '86px', minHeight: 'calc(-106px + 100vh)' }} className='bg-about text-white text-center d-flex flex-column justify-content-center align-items-center'>        
            <div className="row flex-column justify-content-center align-items-center">
                <div className="col">
                            <img src={avatar} className='w-75 mb-3'/>
                </div>
                <div className="col">
                    <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start framework</h2>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div className="line me-3" style={{backgroundColor: 'white'}} />
                            <i className="fa-solid fa-star" />
                            <div className="line ms-3" style={{backgroundColor: 'white'}} />
                        </div>
                </div>
                <div className="col">
                            <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>        
        </div>
    </>
)
}
