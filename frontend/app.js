const productsDiv = document.getElementById("products");

async function loadProducts() {
  try {
    const res = await fetch("http://localhost:5050/products");
    const products = await res.json();

    productsDiv.innerHTML = "";

    products.forEach(product => {
      productsDiv.innerHTML += `
        <div class="product">
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
        </div>
      `;
    });
  } catch (err) {
    console.error(err);
    productsDiv.innerHTML = "<p>Failed to load products</p>";
  }
}

loadProducts();
