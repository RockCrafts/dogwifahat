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
function updateBoxes(){
  var mustacheBox = document.getElementById("mustacheCheck");

  if(mustacheBox.checked){
mustaceO = true;

}else{
  mustaceO = false;
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
    img3.src = "https://cdn.discordapp.com/attachments/660585096067153950/660585296513204227/image-removebg-preview.png"
//img1.src =reader.readAsDataURL(document.getElementById('input').files[0]);

    //img1.src = inputValue;
    //img2.src = document.getElementById('img').src;
    img2.src = "Dog.png"
    img1.onload = function() {
        ctx.drawImage(img1, 0, 0, x, y);
    }

    img2.onload = function() {
        ctx.drawImage(img2, 0, 0, x, y);
if(mustaceO){
            ctx.drawImage(img3, 124, 340, 300,100);
}
    }


}
