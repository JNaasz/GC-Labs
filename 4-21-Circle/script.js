var pi = Math.PI ;


//..................FUNCTION TO CREATE A CIRCLE AND DISPLAY AREA
function area(){
 r = document.getElementById('radius').value;
 var area = pi * (r * r) ;
 var announce = document.getElementById('announce');
 announce.innerText = "You have created a circle with an area of " + area;
 var happy = document.getElementById('happy');
 happy.innerText = "Lets make every day EARTH DAY!";
(function (){
  var circle = document.getElementById('circle');
  circle.style.backgroundColor = '#009947';
  var diameter = r*3;
  circle.style.width = diameter + 'px';
  circle.style.height = diameter + 'px';
  circle.style.backgroundSize = diameter + 'px';
  circle.style.borderRadius = '50%';
  }());
 };

 function changeColor(){
   console.log('mouse');
   document.getElementById("circle").style.backgroundImage = "url('images/globe3.jpg')";
 };

 function changeColorBack(){
   document.getElementById("circle").style.backgroundImage = "url('images/globe.jpg')";
 };












//function
