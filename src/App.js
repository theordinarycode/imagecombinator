import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import cat from "./images/cat.jpeg";
import frame from "./images/frame.png";

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
    ctx.drawImage(
      document.getElementById("source"),
      33,
      71,
      104,
      124,
      21,
      20,
      87,
      104
    );

    //Draw frame
    ctx.drawImage(document.getElementById("frame"), 0, 0);
  }

  return (
    <div className="App">
      <canvas id="canvas" width="150" height="150"></canvas>
      <div style={{ display: "none" }}>
        <img id="frame" src={frame} width="132" height="150" />
        <img id="source" src={cat} width="300" height="227" />
      </div>
    </div>
  );
}

export default App;
