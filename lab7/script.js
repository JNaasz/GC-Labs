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

var container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

var title = document.createElement('h1');
title.innerText = 'Shopping Cart';
container.appendChild(title);

var list = document.createElement('ol');
list.style.border = '2px solid black';
container.appendChild(list);

var house = "work"

var listItem = document.createElement('li');
listItem.innerText = cart[0].name, cart[0].price ;
list.appendChild(listItem);
