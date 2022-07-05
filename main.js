function getImage(url) {
  const img = new Image();
  img.src = url;
  return img;
}
var games = [ ["https://pokewhat.github.io/pokerby/static/red.png", "https://pokewhat.github.io/pokerby/"] ];
for(let i = 0; i < games.length; i++) {
  var theurl = games[i][0];
  var thelink = games[i][1];
  var theimage = new Image();
  theimage.addEventListener("load", function() {
    var thelogo = document.createElement("div");
    var thelinka = document.createElement("a");
    thelinka.setAttribute("href", thelink);
    thelogo.setAttribute("style", "width: " + theimage.naturalWidth + "px; height: " + theimage.naturalHeight + "px; background-image: url(\"" + theurl + "\");");
    thelinka.append(thelogo);
    document.querySelectorAll("body")[0].append(thelinka);
  });
  theimage.src = theurl;
}
