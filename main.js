let faviconurl = "";

var faviconloader = document.createElement("link");
faviconloader.setAttribute("rel", "icon");
faviconloader.setAttribute("href", faviconurl);
document.querySelectorAll("head")[0].append(faviconloader);
