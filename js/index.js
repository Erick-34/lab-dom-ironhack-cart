

function updateSubtotal(product) {
  const price = product.querySelector('.price span ');
  const quantity = product.querySelector('.quantity input');
  const multi = quantity.value * price.innerHTML;
  const subTotal= product.querySelector('.subtotal span').innerHTML = multi;
  return subTotal;
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  if(singleProduct == null){
    alert("Sem produtos no carrinho!")
  }else{
  const h = updateSubtotal(singleProduct);
  const total = document.querySelector('.total-value span').innerHTML = h;
  return total;
  }
}

function removeProduct() {
  let product = document.querySelector('.product');
  if (product.parentNode) {
    product.parentNode.removeChild(product);
  }
}

function createProduct() {
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
