import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import style from "./Portfolio.module.css";
import img1 from "./poert1.png";
import img2 from "./port2.png";
import img3 from "./port3.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const handleShowModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const images = [img1, img2, img3, img1, img2, img3];

  return (
    <>
      <div
        className={`w-100 h-100 d-flex justify-content-center align-items-center position-fixed ${style.imageshow}`}
      >
        {selectedImage && (
          <Modal
            show={showModal}
            onHide={handleCloseModal}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Image Preview</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={selectedImage} alt="Selected" className="w-100" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
      <div
        className={`container home ${style.textcolor} text-center pt-5 pb-5`}
      >
        <h2 className="fs-1"> PORTFOLIO COMPONENT</h2>
        <div className="d-flex justify-content-center align-items-center pb-3 pt-2">
          <div className={`${style.line} ${style.textcolor}`}></div>
          <FontAwesomeIcon icon={faStar} className="mx-3" />
          <div className={`${style.line}`}></div>
        </div>

        <div className="row gy-5 gx-5">
          {images.map((image, index) => (
            <div className="col-md-4" key={index}>
              <div className="position-relative">
                <div
                  className={`${style.overlay} d-flex justify-content-center align-items-center text-white`}
                  onClick={() => handleShowModal(image)}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={`${style.big_icon}`}
                  />
                </div>
                <img src={image} alt="" className="w-100 rounded-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}