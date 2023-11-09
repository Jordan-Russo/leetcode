// Given a discount price and a sale percentage

// Return the original price of a product

// Examples:
console.log(discoverOriginalPrice(75,25),100);
console.log(discoverOriginalPrice(25,75),100);
console.log(discoverOriginalPrice(75.75,25),101);

// Divide the discounted price by its sales percentage as a percent
// Return the quotient.

function discoverOriginalPrice(discountedPrice, salePercentage){
  let price = discountedPrice / (1 - salePercentage / 100)
  price = Math.round(price * 100) / 100;
  return price;
}