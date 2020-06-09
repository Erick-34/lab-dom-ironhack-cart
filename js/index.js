// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span ');
  const quantity = product.querySelector('.quantity input');

  const multi = quantity.value * price.innerHTML;

  const subTotal= product.querySelector('.subtotal span').innerHTML = multi;
  // return product.querySelector('#total-value span').innerHTML = subTotal;
}
function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct)
  
  
  // ITERATION 2
  // ITERATION 3
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
 
}

// ITERATION 5

function createProduct() {
 
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

 
});
