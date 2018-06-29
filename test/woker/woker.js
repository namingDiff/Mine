var i = 0;

;(function () {
  setTimeout(function () {
    i += 1;
    postMessage(i);
  }, 500);
})()