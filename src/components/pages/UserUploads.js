import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";
import GuessesOnUserDog from "../modals/GuessesOnUserDog";
import Form from "react-bootstrap/Form";
import Guesses from "../partials/Guesses";
import API from "../../utils/API";
import { useNavigate, Navigate } from "react-router-dom";
import UploadWidget from "../UploadWidget";
import { Button, Modal } from "react-bootstrap";

function UserUploads(props) {
//   console.log(props);

  const [userDogUploadList, setUserDogUploadList] = useState([]);
  const [dogGuessData, setDogGuessData] = useState([]);
  const [showGuesses, setShowGuesses] = useState(false);
  const [renderUploadForm, setRenderUploadForm] = useState(false);
  const [newDogName, setNewDogName] = useState("");
  const [newDogImage, setNewDogImage] = useState("");
  const [newDogPrivate, setNewDogPrivate] = useState(false);
  const [newDogOwner, setNewDogOwner] = useState(props.userId.id);
  //   const [newDogUpload, setNewDogUpload] = useState({
  //     newDogName: "",
  //     newDogImage: "",
  //     newDogPrivate: false,
  //     newDogOwner: props.userId.id
  //   })
  const navigate = useNavigate();
  useEffect(() => {
    console.log(props);
    API.getUserDogUploads(props.token, props.userId.id).then((data) => {
      //   console.log(data);
      setUserDogUploadList(data);
    });
  }, [props.userId.id]);

  //   console.log(dogGuessData);

  const sendImgFromChild = (image) => {
    setNewDogImage(image);
    console.log(newDogImage)
  };

  const handleRenderGuesses = (guesses) => {
    console.log(guesses);
    setDogGuessData(guesses);
    setShowGuesses(true);
  };

  const handleRenderUploadForm = () => {
    setRenderUploadForm(true);
  };

  const handleNewDogUploadForm = (e) => {

    e.preventDefault();
    const newDog = {
      name: newDogName,
      dog_image: newDogImage,
      isPrivate: newDogPrivate,
      UserId: props.userId.id,
    };

    console.log(newDog)
    setNewDogName("");
    setNewDogImage("");
    setNewDogPrivate(false);

    API.uploadNewDog(newDog, props.token).then((data) => {
      API.getUserDogUploads(props.token, props.userId.id).then((data) => {
        //   console.log(data);
        setUserDogUploadList(data);
      });
    });
    setRenderUploadForm(false)
  };
  return (
    <div>
      <div className="d-flex flex-column align-items-center p-2">
        <h2>{props.userId.name}'s Uploads</h2>
        {/* <UploadWidget/> */}

        {!renderUploadForm ? (
          <button onClick={() => handleRenderUploadForm()}>New Upload</button>
        ) : (
          <div>
            <Form onSubmit={handleNewDogUploadForm}>
              <Form.Control
                placeholder="Dog Name"
                onChange={(e) => setNewDogName(e.target.value)}
              />
              <UploadWidget sendImgFromChild={sendImgFromChild} />
              <Form.Check id="isPrivateCheckbox" type="checkbox" label="Make dog private?"  onChange={(e) => setNewDogPrivate(e.target.checked)}/>
              {/* <Form.Check
                label="Make dog private?"
                feedback="Make dog private?"
                feedbackType="invalid"
                value="true"
                onChange={(e) => setNewDogPrivate(e.target.value)}
              /> */}
              <Button className="center-btn" type="submit" variant="primary">
                Upload
              </Button>{" "}
            </Form>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-around">
        {userDogUploadList.map((udul, i) => {
          // console.log(udul)
          return (
            <div>
              <img src={udul.dog_image} width="100px" />
              <h4>{udul.name}</h4>
              <button
                onClick={() => handleRenderGuesses(udul)}
                variant="primary"
                size="md"
              >
                View Guesses
              </button>
            </div>
          );
        })}
      </div>
      {showGuesses ? (
        <Guesses dogGuessData={dogGuessData} />
      ) : (
        console.log("No guesses requested")
      )}
    </div>
  );
}

export default UserUploads;
