<?php
//updateText();
addToCounter();
function addToCounter() {
  $myfile = fopen("counter.txt", "r") or die("Unable to open file!");

  $count = fgets($myfile);
  fclose($myfile);
  $myfile2 = fopen("counter.txt", "w") or die("Unable to open file!");
  fwrite($myfile2, $count+1);
//  echo $count+1;
  fclose($myfile2);
}
// function updateText(){
//   $myfile = fopen("counter.txt", "r") or die("Unable to open file!");
//
//   $count = fgets($myfile);
// echo $count;
// fclose($myfile);
// }
?>
