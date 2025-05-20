function addToCart(productName) {
  const item = document.createElement('li');
  item.textContent = productName;
  document.getElementById('cart-items').appendChild(item);
}