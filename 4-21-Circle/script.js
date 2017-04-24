var pi = Math.PI ;


//..................FUNCTION TO CREATE A CIRCLE AND DISPLAY AREA
function area(){
 r = document.getElementById('radius').value;
 var area = pi * (r * r) ;
 var announce = document.getElementById('announce');
 announce.innerText = "You have created a circle with an area of " + area;
(function (){
  var circle = document.getElementById('circle');
  circle.style.backgroundColor = '#009947';
  var diameter = r*4;
  circle.style.width = diameter + 'px';
  circle.style.height = diameter + 'px';
  circle.style.borderRadius = '50%';
  }());
 };

 function changeColor(){
   console.log('mouse');
   document.getElementById("circle").style.background = "radial-gradient(#009947, #b0a394, #ffccff)";
 };

 function changeColorBack(){
   document.getElementById("circle").style.background = "radial-gradient(#ccccff, #b0a394, #009947)";
 };


 









//function
