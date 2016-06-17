var item_price = items.map(function(prices) {
return prices.price});

var average = item_price.reduce(function(total, current_price){
return total + current_price})/ items.length;

average = average.toFixed(2);

var average_prices = document.getElementById('answer1');
average_prices.textContent += average;
