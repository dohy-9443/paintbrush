const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.querySelector("#jsRange");
const mode = document.querySelector("#jsMode");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
// ctx.fillStyle = "green";

// ctx.fillRect(50, 20, 100, 49);
// x, y, width, height

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

// 마우스를 움직이는 내내 발생하는 함수
function onMouseMove(event) {
  /*
    offsetX,Y = 캔버스와 관련있는 부분
    clientX,Y = 윈도우 전체의 범위 내에서 위치값
  */
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    // console.log("create path in", x, y);
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    // console.log("create line in", x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling) {
    filling = false;
    mode.innerText = "FILL";
  } else {
    filling = true;
    mode.innerText = "PAINT";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting); // 마우스 클릭중
  canvas.addEventListener("mouseup", stopPainting); // 마우스 클릭땜
  canvas.addEventListener("mouseleave", stopPainting); // 마우스가 떠남
  canvas.addEventListener("click", handleCanvasClick);
}

// Array.from() 는 object 로부터 array를 만듬
Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
