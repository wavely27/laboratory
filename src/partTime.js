function renderList() {
  const startTime = Date.now();
  console.log("partTime start", startTime);
  const appDom = document.querySelector("#root");
  let count = 65;
  fn1(appDom);
  fn2(appDom);
  fn3(appDom, count);
  fn4(appDom, count);
  fn5(appDom);
  console.log("partTime end", Date.now() - startTime);
}
const arrOrigin = Array.from({ length: 10000 }).map((_, i) => i);
setTimeout(renderList, 0);

function fn1(appDom) {
  const arr = [...arrOrigin];
  const ul = document.createElement("ul");
  appDom.appendChild(ul);
  for (let i = -0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = arr[i];
    ul.appendChild(li);
  }
}

function fn2(appDom) {
  const arr = [...arrOrigin];
  const ul = document.createElement("ul");
  for (let i = -0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = arr[i];
    ul.appendChild(li);
  }
  appDom.appendChild(ul);
}

function fn3(appDom, count) {
  const arr = [...arrOrigin];
  let timer = null;
  const ul = document.createElement("ul");
  appDom.appendChild(ul);
  function append3(item) {
    let li = document.createElement("li");
    li.innerHTML = item;
    ul.appendChild(li);
  }
  function chunk() {
    clearTimeout(timer);
    timer = null;
    let i = 0;
    let len = Math.min(arr.length, count);
    console.log("len", len);
    while (i < len) {
      let item = arr.shift();
      append3(item);
      i++;
    }

    if (arr.length > 0) {
      timer = setTimeout(chunk, 0);
    }
  }

  chunk();
}

function fn4(appDom, count) {
  const arr = [...arrOrigin];
  const fragment = document.createDocumentFragment();
  fragment.appendChild(document.createElement("ul"));
  function append4(item) {
    let li = document.createElement("li");
    li.innerHTML = item;
    fragment.appendChild(li);
  }
  function chunk(timestamp) {
    let i = 0;
    let len = Math.min(arr.length, count);
    while (i < len) {
      let item = arr.shift();
      append4(item);
      i++;
    }
    appDom.appendChild(fragment);
    if (arr.length > 0) {
      window.requestAnimationFrame(chunk);
    }
  }
  chunk();
}

function fn5(appDom, count) {
  const arr = [...arrOrigin];
  const fragment = document.createDocumentFragment();
  fragment.appendChild(document.createElement("ul"));
  function append5(item) {
    let li = document.createElement("li");
    li.innerHTML = item;
    fragment.appendChild(li);
  }
  function chunk(timestamp) {
    let item = arr.shift();
    append5(item);
    appDom.appendChild(fragment);
    if (arr.length > 0) {
      window.requestAnimationFrame(chunk);
    }
  }
  chunk(0);
}
