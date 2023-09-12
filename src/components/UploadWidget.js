import React from "react";
import { useEffect, useState, useRef } from "react";
import { Button } from "react-bootstrap";

function UploadWidget(props) {
    // console.log(props.sendImgFromChild)
    let newImg;
    const [uploadImage, setUploadImage] = useState("")
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    console.log(cloudinaryRef.current);
    console.log(widgetRef);
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dr8wgvoyk",
        uploadPreset: "jbtfo1hi",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
            // console.log(result.info.secure_url);
            newImg = result.info.secure_url
            setUploadImage(result.info.secure_url)
            
        }
      }
    );
    console.log(widgetRef.current);
  }, []);
  props.sendImgFromChild(uploadImage)
console.log(uploadImage)
  // const showWidget = () => {

  //     let widget = window.cloudinary.createUploadWidget({
  //        cloudName: `dr8wgvoyk`,
  //        uploadPreset: `jbtfo1hi`},
  //     (error, result) => {
  //       if (!error && result && result.event === "success") {
  //       console.log(result.info.url);
  //     }});
  //     widget.open()
  //   }
  const handleOpenWidget = (currentWidget) => {
    currentWidget.open();
  };
  return (
    <div>
      <Button onClick={() => handleOpenWidget(widgetRef.current)}>
        Upload Image
      </Button>
    </div>
  );
}

export default UploadWidget;
