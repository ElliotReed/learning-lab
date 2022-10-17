export function canvas() {
  const fallbackText = `Your browser does not support HTML5 Canvas.`;
  const canvas = document.createElement("canvas");
  canvas.textContent = fallbackText;
  canvas.setAttribute("id", "canvas-element");
  canvas.setAttribute("width", "100");
  canvas.setAttribute("height", "100");
  const ctx = canvas.getContext("2d");

  ctx.translate(50, 50);
  // ctx.scale(0.75, 0.75);
  ctx.strokeStyle = "#fcfcfc";
  ctx.fillStyle = "#fcfcfc";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";

  for (var i = 0; i < 4; i++) {
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.rotate(Math.PI / 2);
    ctx.moveTo(0, 0);
    ctx.lineTo(35, 0);
    ctx.stroke();
  }

  for (i = 0; i < 8; i++) {
    if (i % 2 != 0) {
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(35, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 4);
  }

  for (i = 0; i < 16; i++) {
    if (i % 2 != 0) {
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(30, 0);
      ctx.lineTo(25, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 8);
  }

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.arc(0, 0, 30, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.font = "12px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  ctx.fillText("N", 0, -36);
  ctx.textBaseline = "top";
  ctx.fillText("S", 0, 40);
  ctx.textBaseline = "middle";
  ctx.fillText("E", 42, 0);
  ctx.fillText("W", -42, 0);
  return canvas;
}
