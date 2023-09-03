import React from 'react'
import { useEffect, useInsertionEffect, useState } from "react";
import API from "../../utils/API";
import {Button, Modal } from 'react-bootstrap';

function GuessesOnUserDog(props) {
    const [modal, setModal] = useState(true);
    console.log(props)
    const handleCloseModal = () => {
        setModal(false)
    }
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleCloseModal} variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default GuessesOnUserDog;