const element = document.getElementById("root");
let start;
element.innerHTML = 111;

function step(timestamp) {
  if (start === undefined) start = timestamp;
  const elapsed = timestamp - start;

  //这里使用`Math.min()`确保元素刚好停在200px的位置。
  element.style.transform =
    "translateX(" + Math.min(0.1 * elapsed, 200) + "px)";

  if (elapsed < 2000) {
    // 在两秒后停止动画
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
