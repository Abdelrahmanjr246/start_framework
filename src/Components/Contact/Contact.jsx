import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
export default function Contact() {
  const [inputs, setInputs] = useState({
    userName: '',
    userAge: '',
    userEmail: '',
    userPassword: ''
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div style={{ minHeight: '100vh', paddingTop: '86px' }} className='d-flex flex-column justify-content-center align-items-center'>
      <div className="pt-3 mb-4">
        <div className="text-center pt-4" style={{ color: 'rgb(44, 62, 80)' }}>
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">contact section</h2>
          <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className="line me-3" style={{ backgroundColor: 'rgb(44, 62, 80)' }} />
            <i className="fa-solid fa-star" />
            <div className="line ms-3" style={{ backgroundColor: 'rgb(44, 62, 80)' }} />
          </div>
        </div>
      </div>
      <form noValidate className="w-50 p-3 mx-auto mt-5">
        {['User Name', 'User Age', 'User Email', 'User Password'].map((field) => (
          <div key={field} className="position-relative mb-4">
            <label htmlFor={field} className={inputs[field] ? 'show-label' : ''}>
              {field} :
            </label>
            <input
              id={field}
              name={field}
              type="text"
              placeholder={field}
              className="form-control border-0 border-bottom py-3"
              value={inputs[field]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button className="btn mt-4 text-white" type='button' style={{ backgroundColor: '#1abc9c' }}>
          send Message
        </button>
      </form>
    </div>
    </>
  );
}
