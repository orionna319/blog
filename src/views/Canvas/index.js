import { useEffect, useRef } from 'react'
import './index.css'

function Canvas() {
  const canvas = useRef()

  useEffect(() => {
    const canEle = canvas.current
    const ctx = canEle.getContext("2d");

    ctx.fillStyle = "#d8bf9c";
    ctx.fillRect(0, 0, canEle.width, canEle.height);

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    
  }, [])


  return (
    <div id="canvas-container">
      <canvas className="canvas" ref={canvas}></canvas>
    </div>
  );
}

export default Canvas;
