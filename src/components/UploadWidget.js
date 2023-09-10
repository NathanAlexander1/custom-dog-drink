import React from "react";
import { useEffect, useState, useRef } from "react";
import { Button } from "react-bootstrap";

function UploadWidget(props) {
    console.log(props.sendImgFromChild)
    let newImg;
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
        console.log(result.info.path);
        newImg = result.info.path
        props.sendImgFromChild(newImg)
      }
    );
    console.log(widgetRef.current);
  }, []);

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
