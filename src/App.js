import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import cat from "./images/cat.jpeg";
import frame from "./images/frame.png";
import background from "./images/xombies/cryptoZombies_test/00_bg/background_00_color.png";

function App() {
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  // const [canvas, setCanvas] = useState();
  const canvas2 = useRef(null);
  const canvas3 = useRef(null);

  useEffect(() => {
    draw();
  }, []);

  function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //Draw slice
    ctx.drawImage(document.getElementById("source2"), 0, 0);
    ctx.drawImage(document.getElementById("source"), 0, 0);

    //Draw frame
  }

  return (
    <div className="App">
      <canvas id="canvas" width="400px" height="400px"></canvas>
      <div style={{ display: "none" }}>
        <img id="source" src={background} width="150px" height="150px" />
        <img id="source2" src={cat} width="150px" height="150px" />
      </div>
    </div>
  );
}

export default App;
