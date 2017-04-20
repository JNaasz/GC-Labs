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

//TOTAL PAGE CONTAINER
var container = document.createElement('div');
container.className = 'container';
container.style.position = 'absolute';
container.style.backgroundColor = 'lavender';
container.style.padding = '10px';
container.style.width = '525px';
document.body.appendChild(container);

//Title of Page
var title = document.createElement('h1');
title.innerText = 'Shopping Cart';
title.style.fontFamily = 'cursive';
title.style.color = 'indigo';
title.style.margin = '10px';
container.appendChild(title);

//box for list items
var list = document.createElement('ul');
list.style.border = '2px solid darkSlateBlue';
list.style.margin = '10px';
list.style.listStyleType = 'circle';
list.style.width = 'auto';
container.appendChild(list);

var money = ": $";

//Shopping List of items and price
cart.forEach(function (i){
var spot = ''
  var listItem = document.createElement('li');
  listItem.innerText = i.name + ":           "  + " $" + i.price ;
  list.appendChild(listItem);
  listItem.style.fontFamily = 'cursive';
  listItem.style.padding = '5px';
})

//Total box at bottom of page
var totalPrice = document.createElement('h4');
totalPrice.innerText = "Total:"  + "  $" + total;
totalPrice.style.border = '2px solid blue';
totalPrice.style.color = 'lightSeaBlue';
totalPrice.style.width = '150px';
totalPrice.style.padding = "10px";
totalPrice.style.textAlign = 'center';
totalPrice.style.margin = '10px';
totalPrice.style.float = 'right';
totalPrice.style.fontFamily = 'cursive';
totalPrice.style.backgroundColor = 'mediumPurple';
container.appendChild(totalPrice);

//FORM FOR ADDING TO ARRAY
var inputContainer = document.createElement('fieldset');
inputContainer.style.fontFamily = 'cursive';
inputContainer.style.marginLeft = '10px';
inputContainer.style.marginTop = '10px';
inputContainer.style.padding = '10px';
inputContainer.style.border = '2px solid darkSlateBlue';
container.appendChild(inputContainer);

var legend = document.createElement('legend');
legend.innerText = 'Add Item To List';
legend.fontFamily = 'cursive';
inputContainer.appendChild(legend);

var itemForm = document.createElement('form');
itemForm.onsubmit = 'addToCart()';
inputContainer.appendChild(itemForm);

//         itemLabel.htmlFor = 'inItem';
var itemLabel = document.createElement('label');
itemLabel.innerText = 'Item: ';
itemForm.appendChild(itemLabel);

var putInItem = document.createElement('input');
putInItem.type = "text";
putInItem.id = 'inItem';
putInItem.style.width = "150px";
itemForm.appendChild(putInItem);

//        itemLabel.htmlFor = inPricetem;
var itemLabel2 = document.createElement('label');
itemLabel2.innerText = 'Price: ';
inputContainer.appendChild(itemLabel2);

var putInPrice = document.createElement('input');
putInPrice.type = "text";
putInPrice.id = 'inPrice';
putInPrice.style.width = "150px";
inputContainer.appendChild(putInPrice);

//      SUBMIT BUTTON
var click = document.createElement('button');
click.innerText = 'Add';
//click.onsubmit = 'addToCart()'
inputContainer.appendChild(click);

function addToCart(item , price1){
  var newItemCombo = { name: item , price: price1};
  cart.push(newItemCombo);
  return cart;
}
