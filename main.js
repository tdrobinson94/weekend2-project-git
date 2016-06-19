var average_price = items.map(function (item) {
  return item.price;
  }).reduce(function(total, current_price){
  return total + current_price})/ items.length;

average = average_price.toFixed(2);

var average_prices = document.getElementById('answer1');
  average_prices.textContent += average;


var item_code = items.filter(function(item) {
  return item.currency_code === "USD"});

// var titles = [];
var midPriceItems = item_code.filter(function(item) {
  return item.price >= 14 && item.price <= 18;
  }).map(function(objects){
  return objects.title});

var midPriceHTML = document.getElementById('answer2');
midPriceItems.forEach(function (title) {
  midPriceHTML.innerHTML += "<p>" + title + "</p>";
});

var item_GBP = items.filter(function(item){
  return item.currency_code === "GBP";
});

var nameOfItem = item_GBP.map(function(description){
  return description.title;
});

var priceOfItem = item_GBP.map(function(description){
  return description.price;
});

var namePrice = document.getElementById('answer3');
  namePrice.textContent = nameOfItem +
  " has a GBP currency code and the price is $" + priceOfItem + ".";

var item_material = items.filter(function(item){
  return item.materials.includes("wood");
  }).map(function(objects){
  return objects.title});

var materialHTML = document.getElementById('answer4');
  item_material.forEach(function (title) {
  materialHTML.innerHTML += "<p>" + title + "</p>";
});


var whoMade = items.filter(function(item){
  return item.who_made === "i_did"});

var madeBySeller = whoMade.length;

var seller = document.getElementById('answer6');
  seller.textContent = madeBySeller + " items were made by seller.";
