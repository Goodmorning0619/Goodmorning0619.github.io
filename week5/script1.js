let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];

let total = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  total = total + shoppingCart[i].price;
  console.log("total is far", total);
}
console.log("final total", total);
let discount = 0.1;
let discountPrice = 0;
if (total > 100) {
  discountPrice = total - total * discount;
}
console.log("discount price", discountPrice);
