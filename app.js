const canvas = document.querySelector("#jsCanvas");

let painting = false;

function stopPainting(event) {
  painting = false;
}

function onMouseMove(event) {
  /*
    offsetX,Y = 캔버스와 관련있는 부분
    clientX,Y = 윈도우 전체의 범위 내에서 위치값
  */
  const x = event.offsetX;
  const y = event.offsetY;
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown); // 마우스 클릭중
  canvas.addEventListener("mouseup", onMouseUp); // 마우스 클릭땜
  canvas.addEventListener("mouseleave", stopPainting); // 마우스가 떠남
}
