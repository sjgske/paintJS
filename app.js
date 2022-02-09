const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 430;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

// 페인팅 시작점 찾기 (클릭 순간 좌표)
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y); // path를 마우스가 움직이는 x,y좌표로 이동
  } else {
    ctx.lineTo(x, y); // 직선으로 연결
    ctx.stroke();
  }
}

function onMouseDown(event) {
  painting = true;
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}