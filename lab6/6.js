function fToC(deg , Temp) {
  if(Temp === "F"){
    return(deg / (5/9) + 32);
  } else {
    return((deg - 32) * (5/9));
  }
}
console.log(fToC(100 , "F"));
