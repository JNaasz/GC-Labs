var total = 0
 var cart = [
   { name: "milk", price: 2.42},
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

//................................................TOTAL PAGE CONTAINER
var container = document.createElement('div');
container.className = 'container';
container.style.position = 'absolute';
container.style.backgroundColor = 'lavender';
container.style.padding = '10px';
container.style.width = '480px';
document.body.appendChild(container);

//........................................................ Title of Page
var title = document.createElement('h1');
title.innerText = 'Shopping List';
title.style.fontFamily = 'cursive';
title.style.color = 'indigo';
title.style.margin = '10px';
container.appendChild(title);

// ......................................................box for list items
var list = document.createElement('ul');
list.style.border = '2px solid darkSlateBlue';
list.style.margin = '10px';
list.style.listStyleType = 'circle';
list.style.width = 'auto';
container.appendChild(list);

var money = ": $";

// ..........................................Shopping List of items and price
cart.forEach(function (i){
  var listItem = document.createElement('li');
  listItem.innerText = i.name + ": "  + " $" + i.price ;
  list.appendChild(listItem);
  listItem.style.fontFamily = 'cursive';
  listItem.style.padding = '5px';
})

//................................................Total box at bottom of page
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

//....................................................FORM FOR ADDING TO ARRAY
var inputContainer = document.createElement('fieldset');
inputContainer.style.fontFamily = 'cursive';
inputContainer.style.marginLeft = '10px';
inputContainer.style.margin = '10px';
//inputContainer.style.padding = '10px';
inputContainer.style.border = '2px solid darkSlateBlue';
container.appendChild(inputContainer);

var legend = document.createElement('legend');
legend.innerText = 'Add Item To List';
legend.fontFamily = 'cursive';
inputContainer.appendChild(legend);

//...........................................................Start Input Form
var itemForm = document.createElement('form');
itemForm.onsubmit = 'addToCart()';
inputContainer.appendChild(itemForm);

//      ........................................ itemLabel.htmlFor = 'inItem';
var itemLabel = document.createElement('label');
itemLabel.innerText = 'Item: ';
itemForm.appendChild(itemLabel);

var putInItem = document.createElement('input');
putInItem.type = "text";
putInItem.setAttribute("id" , "inItem");
putInItem.style.width = "150px";
itemForm.appendChild(putInItem);

linebreak = document.createElement('br');
itemForm.appendChild(linebreak);

// ...........................................itemLabel.htmlFor = inPricetem;
var priceLabel = document.createElement('label');
priceLabel.innerText = 'Price: ';
itemForm.appendChild(priceLabel);

var putInPrice = document.createElement('input');
putInPrice.type = "text";
putInPrice.setAttribute("id" , "inPrice");
putInPrice.style.width = "150px";
itemForm.appendChild(putInPrice);

//...............................................................ADD BUTTON
var click = document.createElement('button');
//click.onsubmit = 'addToCart()';
click.innerText = 'Add';
click.style.marginLeft = '5px';
itemForm.appendChild(click);

//................................................ADD ITEM OBJECT TO CART ARRAY
function addToCart(item , price1){
  item = document.getElementById('inItem').value ; //This and
  price1 = Number(document.getElementById('inPrice').value); //This are wrong
  var newItemCombo = { name: item , price: price1};
  cart.push(newItemCombo);
  console.log(cart);
}
//
//var newLine = document. -may need to create a new li for the funciton
