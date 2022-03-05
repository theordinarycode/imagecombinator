import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const canvas = useRef(null);

  useEffect(() => {
    const catImage = new Image();
    catImage.src = "https://thiscatdoesnotexist.com";
    catImage.onload = () => setImage(catImage);
  }, []);

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 800, 856 + 80);
      ctx.drawImage(image, 80 / 2, 20);
    }
  }, [image, canvas]);
  return (
    <div className="App">
      <h1>Cat Meme</h1>
      <div>
        <canvas ref={canvas} width={600} height={456 + 80} />
      </div>
    </div>
  );
}

export default App;
