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

    img1.src = image;

//img1.src =reader.readAsDataURL(document.getElementById('input').files[0]);

    //img1.src = inputValue;
    img2.src = "https://media.discordapp.net/attachments/659559649552629772/660513964219695114/image0.png";
    img1.onload = function() {
        ctx.drawImage(img1, 0, 0, x, y);
    }
    img2.onload = function() {
        ctx.drawImage(img2, 0, 0, x, y);
    }
}
