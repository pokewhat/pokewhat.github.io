function getImage(url) {
  const img = new Image();
  img.src = url;
  return img;
}
var redurl = "https://pokewhat.github.io/pokerby/static/red.png";
var redimage = new Image();
redimage.addEventListener("load", function() {
  var redbluelogo = document.createElement("div");
  redbluelogo.setAttribute("style", "width: " + redimage.naturalWidth + "px; height: " + redimage.naturalHeight + "px; background-image: url(\"" + redurl + "\");");
  document.querySelectorAll("body")[0].append(redbluelogo);
});
redimage.src = redurl;
