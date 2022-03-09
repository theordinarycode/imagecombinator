import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import cat from "./images/cat.jpeg";
import frame from "./images/frame.png";
import background from "./images/xombies/cryptoZombies_test/00_bg/background_00_color.png";

function App() {
  const [image, setImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  // const [canvas, setCanvas] = useState();
  const canvas2 = useRef(null);
  const canvas3 = useRef(null);
  const imgRef = useRef();

  useEffect(() => {
    //const img = document.getElementById("source2");
  }, []);

  useEffect(() => {
    // var preview = document.querySelector("img");
    // preview.src = image;
    console.log("IMAGE", image);
    console.log("background image", backgroundImage);
    draw();
  }, [image, backgroundImage]);

  function getImage() {
    console.log("GET IMAGE!!");
    var file = document.getElementById("imageInput").files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
    }
  }

  function getBackground() {
    console.log("GET BACKGROUND!!");
    var file = document.getElementById("backgroundInput").files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      setBackgroundImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
    }
  }

  function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //Draw slice
    //ctx.drawImage(document.getElementById("source2"), 0, 0);
    ctx.drawImage(document.getElementById("background-layer"), 0, 0);
    ctx.drawImage(document.getElementById("layer-1"), 0, 0);

    //Draw frame
  }

  return (
    <div className="App">
      <canvas id="canvas" width="400px" height="400px"></canvas>
      <div style={{ display: "none" }}>
        <img
          src={backgroundImage}
          id="background-layer"
          width="150px"
          height="150px"
        />
        <img src={image} id="layer-1" width="150px" height="150px" />
      </div>
      <input id="imageInput" type="file" onChange={getImage} />
      <input id="backgroundInput" type="file" onChange={getBackground} />
    </div>
  );
}

export default App;
