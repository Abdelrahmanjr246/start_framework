import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import port1 from "../../../public/assets/poert1.png";
import port2 from "../../../public/assets/port2.png";
import port3 from "../../../public/assets/port3.png";
export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  // Close modal on ESC key press
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") closeModal();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function openModal(img) {
    setModalImg(img);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalImg(null);
  }
  

  const images = [
    port1,
    port2,
    port3,
    port1,
    port2,
    port3,  ];



  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <div style={{ marginTop: '86px', minHeight: 'calc(-106px + 100vh)' }} className='d-flex flex-column justify-content-center align-items-center mx-2'>
      <div className="pt-3 mb-4 container">
          <div className="text-center pt-4" style={{color: 'rgb(44, 62, 80)'}}>
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">portfolio section</h2>
              <div className='d-flex align-items-center justify-content-center mb-3'>
                <div className="line me-3" style={{backgroundColor:'rgb(44, 62, 80)'}} />
                <i className="fa-solid fa-star" />
                <div className="line ms-3" style={{backgroundColor:'rgb(44, 62, 80)'}} />
              </div>
          </div>
      </div>
      <div className="container">
        <div className="row g-4 mb-3">
        {images.map((imgSrc, index) => (
          <div key={index} className="col-sm-12 col-md-4">
            <div className="inner position-relative" style={{ cursor: "pointer" }}>
              <img
                src={imgSrc}
                alt={`Portfolio ${index + 1}`}
                className="w-100 rounded-2"
                onClick={() => openModal(imgSrc)}
              />
              <div
                className="layer position-absolute top-0 start-0 w-100 rounded-2 h-100 d-flex justify-content-center align-items-center"
                style={{ color: "white", fontSize: "3rem", pointerEvents: "none" }}
              >
                <i className="fa-solid fa-plus fa-2x" />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {modalOpen && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
            flexDirection: "column",
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90%",
              maxHeight: "90%",
              width: "auto",
              height: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImg}
              alt="Modal content"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "2rem",
                color: "white",
                background: "rgba(0,0,0,0.5)",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                lineHeight: "36px",
                textAlign: "center",
                padding: 0,
                zIndex: 1060,
              }}
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
