import React from "react"
import styled from "styled-components"

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "display: block" : "display: none"

  return (
    <ModalContainer className={showHideClassName}>
      <ModalMain className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </ModalMain>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  ${({ show }) => show && `display: block`}
`

const ModalMain = styled.div`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default Modal
