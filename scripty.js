function fuja(t) {
  var btn = t;
  btn.style.position = "absolute";
  btn.style.bottom = numeroAleatorio(10, 90);
  btn.style.left = numeroAleatorio(10, 90);
}

function numeroAleatorio(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}
