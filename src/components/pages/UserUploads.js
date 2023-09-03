import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";
import GuessesOnUserDog from "../modals/GuessesOnUserDog";
import API from "../../utils/API";
import { useNavigate, Navigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function UserUploads(props) {
  //   console.log(props);
  const [userDogUploadList, setUserDogUploadList] = useState([]);
  const [modal, setModal] = useState(true);
  const [dogGuessData, setDogGuessData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(props.userId.id);
    API.getUserDogUploads(props.token, props.userId.id).then((data) => {
      //   console.log(data);
      setUserDogUploadList(data);
    });
  }, [props.userId.id]);

  const handleViewGuessesViewModal = (userId, dogGuesses) => {
    console.log(dogGuesses);
    API.getAllGuessesOnADog(dogGuesses.DogId).then((data) => {
      console.log(data);
      setDogGuessData(data);
    });
    setModal(false);
  };

  const handleClose = () => setModal(true);

  return (
    <div>

      {!modal ? (
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal.Dialog>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
      ) : (
        <div>
          <h2>{props.userId.name}'s Uploads</h2>
          <div class="d-flex justify-content-around">
            {userDogUploadList.map((udul, i) => {
              return (
                <div>
                  <img src={udul.dog_image} width="100px" />
                  <h4>{udul.name}</h4>
                  <button
                    onClick={() =>
                      handleViewGuessesViewModal(udul.UserId, udul.DogGuesses)
                    }
                    variant="primary"
                    size="md"
                  >
                    View Guesses
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserUploads;
