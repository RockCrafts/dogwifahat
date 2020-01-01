//
// function getImg() {
//
//
//
// }
// function run() {
//     x = 500;
//     y = 500;
//
//     var canvas = document.getElementById('canvas1');
//     if (! canvas || ! canvas.getContext) { return false; }
//     canvas.width = x;
//     canvas.height = y;
//     var ctx = canvas.getContext('2d');
//     var img1 = new Image();
//     var img2 = new Image();
//     img1.src = inputValue;
//     img2.src = "https://discordapp.com/channels/659559648877215764/659559649552629772";
//     img1.onload = function() {
//         ctx.drawImage(img1, 0, 0, x, y);
//     }
//     img2.onload = function() {
//         ctx.drawImage(img2, 150, 100, 150, 120);
//     }\
var image = "";
var mustaceO = false;
var blackO = false;
var flippedO = false;
var woolO = false;
function preloadimages(arr){
    var newimages=[], loadedimages=0
    var postaction=function(){}
    var arr=(typeof arr!="object")? [arr] : arr
    function imageloadpost(){
        loadedimages++
        if (loadedimages==arr.length){
            postaction(newimages) //call postaction and pass in newimages array as parameter
        }
    }
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image()
        newimages[i].src=arr[i]
        newimages[i].onload=function(){
            imageloadpost()
        }
        newimages[i].onerror=function(){
            imageloadpost()
        }
    }
    return { //return blank object with done() method
        done:function(f){
            postaction=f || postaction //remember user defined callback functions to be called when images load
        }
    }
}
function download2() {
  var canvas = document.getElementById('canvas1');
  var filename = 'download.png';
    /// create an "off-screen" anchor tag
    var lnk = document.createElement('a'),
        e;

    /// the key here is to set the download attribute of the a tag
    lnk.download = filename;

    /// convert canvas content to data-uri for link. When download
    /// attribute is set the content pointed to by link will be
    /// pushed as "download" in HTML5 capable browsers
    lnk.href = canvas.toDataURL();

    /// create a "fake" click-event to trigger the download
    if (document.createEvent) {

        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window,
                         0, 0, 0, 0, 0, false, false, false,
                         false, 0, null);

        lnk.dispatchEvent(e);

    } else if (lnk.fireEvent) {

        lnk.fireEvent("onclick");
    }
}
function fixBoxes(name){
  var mustacheBox = document.getElementById("mustacheCheck");
  var blackBox = document.getElementById("blackCheck");
  var flippedBox = document.getElementById("flippedCheck");
  var woolBox = document.getElementById("woolCheck");
var box = document.getElementById(name);
if(name=="blackBox" && woolBox.checked){
  blackBox.checked = false;
  window.alert("Can not have both Wool Hat and Black Hat!");
}
else if (name=="woolBox" && blackBox.checked) {
  woolBox.checked = false;

  window.alert("Can not have both Wool Hat and Black Hat!");
}
}
function updateBoxes(name){
  fixBoxes(name)
  var mustacheBox = document.getElementById("mustacheCheck");
  var blackBox = document.getElementById("blackCheck");
  var flippedBox = document.getElementById("flippedCheck");
  var woolBox = document.getElementById("woolCheck");

  if(mustacheBox.checked){
mustaceO = true;

}else{
  mustaceO = false;
}
if(blackBox.checked){
blackO = true;

}else{
blackO = false;
}


if(flippedBox.checked){
flippedO = true;

}else{
  flippedO = false;
}
if(woolBox.checked){
  woolO = true;
}else{
  woolO = false;
}
}
var settings = document.getElementById("settings");
settings.style.display = "none";
function showSettings(){

//  background-color: #f0e3c5;
  if (settings.style.display === "none") {
    settings.style.display = "block";
  } else {
    settings.style.display = "none";
  }
}
function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    image = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    image = "";
  }
}
function download(){
        var download = document.getElementById("download");
        var image = document.getElementById('canvas1').toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
        download.setAttribute("href", image);

    }
function getImg() {
    //var inputValue = document.getElementById("url").value;
    x = 500;
    y = 500;

    var canvas = document.getElementById('canvas1');
    if (! canvas || ! canvas.getContext) { return false; }
    canvas.width = x;
    canvas.height = y;
    var ctx = canvas.getContext('2d');
    var img1 = new Image();
    var img2 = new Image();
var img3 = new Image();



    img1.src = image;
    img3.src = "Mustache.png"
    if(blackO){
      img2.src = "BlackHat.png"
    }
    else if(woolO){
      img2.src = "WoolHat.png";
    }
    else{
    img2.src = "Dog.png";
  }
  img1.crossOrigin="anonymous";

  img2.crossOrigin="anonymous";

  img3.crossOrigin="anonymous";

  if(flippedO){
  ctx.translate(0, y);
ctx.scale(1, -1);
}
var offsetX = parseInt(document.getElementById("offsetX").value);
var offsetY = parseInt(document.getElementById("offsetY").value);
var offsetMath1 = offsetX+227;
var offsetMath2 = offsetY-150;
var offsetMath3 = offsetY-135;
  preloadimages([image, "Mustache.png", "BlackHat.png", "Dog.png", "WoolHat.png"]).done(function(images){

  //  img1.onload = function() {
      if(!blackO || !woolO){
        ctx.drawImage(img1, offsetX, offsetY, x, y);
      }

  //  }


  //  img2.onload = function() {

        ctx.drawImage(img2, 0, 0, x, y);
        if(blackO){

        ctx.drawImage(img1, offsetMath1, offsetMath2, 80, 80);
      }
      if(woolO){
          ctx.drawImage(img1, offsetMath1, offsetMath3, 80, 80);
      }
if(mustaceO){
            ctx.drawImage(img3, 124, 340, 300,100);
}
})


//)}
}
