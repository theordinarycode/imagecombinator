import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const canvas = useRef(null);
  const canvas2 = useRef(null);
  const canvas3 = useRef(null);

  useEffect(() => {
    const catImage = new Image();
    catImage.src = "https://d2ph5fj80uercy.cloudfront.net/04/cat3187.jpg";
    console.log(catImage.src);
    catImage.onload = () => setImage(catImage);
    //
    const xLayer = new Image();
    xLayer.src = "https://thiscatdoesnotexist.com";
    xLayer.onload = () => setImage2(xLayer);
    //
    const yLayer = new Image();
    yLayer.src = "https://thiscatdoesnotexist.com";
    yLayer.onload = () => setImage3(yLayer);
  }, []);

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 800, 856 + 80);
      ctx.drawImage(image, 80 / 2, 20);
      //
      const ctx2 = canvas2.current.getContext("2d");
      ctx2.fillStyle = "black";
      ctx2.fillRect(0, 0, 100, 100);
      ctx2.drawImage(image2, 0, 0, 100, 100);
      //
      const ctx3 = canvas3.current.getContext("2d");
      ctx2.fillStyle = "black";
      ctx2.fillRect(0, 0, 100, 100);
      ctx2.drawImage(image3, 0, 0, 100, 100);
    }
  }, [image, canvas]);

  return (
    <div className="App">
      <h1>Cat Meme</h1>
      <div>
        <canvas ref={canvas} width={600} height={456 + 80} />
      </div>
      {/*  */}
      <canvas ref={canvas2} id="layer1" width="100" height="100"></canvas>
      <canvas ref={canvas3} id="layer2" width="100" height="100"></canvas>
      {/* <img src='.images/cat3187.jpeg' /> */}
    </div>
  );
}

export default App;
