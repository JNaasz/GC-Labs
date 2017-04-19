var total = 0
 var cart = [
   { name: "milk", price: 2.40},
   { name: "eggs", price: 1.88},
   { name: "strawberries" , price: 2.06},
   { name: "ramen noodles", price: 0.25},
   { name: "yogurt", price: 4.23},
   { name: "toilet paper", price: 13.72},
   { name: "duct tape",  price: 3.75},
   { name: "spatula", price: 3.98},
   { name: "nutella", price: 4.17},
   ]
   cart.forEach(function(i){
     console.log(i.name + ": $" + i.price);
   })
   cart.forEach(function(j){
     total += j.price;
     });
      console.log("  ")
      console.log("Total: $" + total);
