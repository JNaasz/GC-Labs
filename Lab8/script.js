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
   { name: "socks", price: 4.67},
   ]
   cart.forEach(function(i){
     console.log(i.name + ": $" + i.price);
   })
   cart.forEach(function(j){
     total += j.price;
     });
      console.log("  ")
      console.log("Total: $" + total);

function listItems(){
  cart.forEach(function list(i){
     console.log(i.name + ": $" + i.price);
   })
}

var container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

var title = document.createElement('h1');
title.innerText = 'Shopping Cart';
container.appendChild(title);

var list = document.createElement('ul');
list.style.border = '2px solid black';
container.appendChild(list);

var money = ": $";
var listItem0 = document.createElement('li');
listItem0.innerText = cart[0].name + money + cart[0].price;
list.appendChild(listItem0);

var listItem1 = document.createElement('li');
listItem1.innerText = cart[1].name + money + cart[1].price;
list.appendChild(listItem1);

var listItem2 = document.createElement('li');
listItem2.innerText = cart[2].name + money + cart[2].price;
list.appendChild(listItem2);

var listItem3 = document.createElement('li');
listItem3.innerText = cart[3].name + money + cart[3].price;
list.appendChild(listItem3);

var listItem4 = document.createElement('li');
listItem4.innerText = cart[4].name + money + cart[4].price;
list.appendChild(listItem4);

var listItem5 = document.createElement('li');
listItem5.innerText = cart[5].name + money + cart[5].price;
list.appendChild(listItem5);

var listItem6 = document.createElement('li');
listItem6.innerText = cart[6].name + money + cart[6].price;
list.appendChild(listItem1);

var listItem7 = document.createElement('li');
listItem7.innerText = cart[7].name + money + cart[7].price;
list.appendChild(listItem7);

var listItem8 = document.createElement('li');
listItem8.innerText = cart[8].name + money + cart[8].price;
list.appendChild(listItem8);

var listItem9 = document.createElement('li');
listItem9.innerText = cart[9].name + money + cart[9].price;
list.appendChild(listItem9);

var totalPrice = document.createElement('h3');
totalPrice.innerText = 'Total' + money + total;
totalPrice.style.border = '2px solid red';
container.appendChild(totalPrice);
