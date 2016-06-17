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


// midPriceItems.forEach(function(){
//   newHTML += midPriceItems;
// });
// midPrice.textContent += newHTML;
