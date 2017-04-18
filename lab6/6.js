//Creating a function to convert to Celcius from Farenheit or the reverse:
function fToC(deg , Temp) {
  if(Temp === "F"){
    return(deg / (5/9) + 32);
  } else {
    console.log((deg - 32) * (5/9));
  }
}

fToC(212, "C"); // 100
fToC(32, "C"); // 0
fToC(65, "C"); //18.333
fToC(100, "F"); //212
fToC(-40, "F"); //-40


//Temp === F means we are solving for Farenheit
