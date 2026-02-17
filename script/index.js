
// "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
// "rating": {
// "rate": 3.9,
// "count": 120

const loadProducts = (id) => {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayProducts(data);
            displayTrendingProducts(data)
        })
};

const loadCategory = () => {
    const url = "https://fakestoreapi.com/products/categories/";
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategory(data))
};


const loadCategoryProduct = (category) => {
    const url = `https://fakestoreapi.com/products/category/${category}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayProducts(data))
};

const displayCategory = (categories) => {
    const allCategories = document.getElementById("product-category");
    allCategories.innerHTML = "";

    const allBtn = document.createElement("button");
    allBtn.className = "btn btn-outline btn-primary";
    allBtn.innerText = "All";
    allBtn.addEventListener("click", loadProducts);
    allCategories.appendChild(allBtn);

    categories.forEach((category) => {
        const singleCategory = document.createElement("div");
        singleCategory.innerHTML = `
            <button onclick="loadCategoryProduct('${category}')" class="btn btn-outline btn-primary">${category}</button>
        `;
        allCategories.appendChild(singleCategory);
    })

};

const displayProducts = (products) => {
    // console.log(products);
    const productContainer = document.getElementById("product-container")
    productContainer.innerHTML = "";

    products.forEach((product) => {
        // console.log(product);
        const singleProduct = document.createElement("div");
        singleProduct.innerHTML += `
        <div class="card bg-base-100 w-72 shadow-sm">
        <figure class="bg-neutral-200 py-5">
        <img src="${product.image}" class="h-60 mx-auto px-3" />
        </figure>
        <div class="card-body">
        <div class="flex justify-between">
        <div class="badge badge-soft badge-primary font-semibold">${product.category}</div>
        <div class="badge"><i class="fa-solid fa-star text-yellow-400"></i>${product.rating.rate} (${product.rating.count})</div>
        </div>
        <p class="text-lg font-semibold text-slate-700">${product.title.slice(0, 22)}...</p>
        <p class="text-xl font-bold">$${product.price}</p>
        <div class="card-actions justify-between mt-4">
        <button onclick="loadProductDetail(${product.id})" class="btn shadow-md bg-white text-slate-600 px-6"><i
        class="fa-regular fa-eye"></i>Details</button>
        <button class="btn btn-primary px-7"><i class="fa-solid fa-cart-arrow-down"></i>Add</button>
        </div>
        </div>
        </div>
        `;
        productContainer.appendChild(singleProduct);
    });
};
const displayTrendingProducts = (products) => {
    const productContainer = document.getElementById("trending-product")
    productContainer.innerHTML = "";

    const trendingProducts = products
    .sort((a, b) => b.rating.rate - a.rating.rate).slice(0,3);

    trendingProducts.forEach((product) => {
        const singleProduct = document.createElement("div");
        singleProduct.innerHTML += `
        <div class="card bg-base-100 w-80 shadow-sm">
        <figure class="bg-neutral-200 py-5">
        <img src="${product.image}" class="h-60 mx-auto px-3" />
        </figure>
        <div class="card-body">
        <div class="flex justify-between">
        <div class="badge badge-soft badge-primary font-semibold">${product.category}</div>
        <div class="badge"><i class="fa-solid fa-star text-yellow-400"></i>${product.rating.rate} (${product.rating.count})</div>
        </div>
        <p class="text-lg font-semibold text-slate-700">${product.title.slice(0, 22)}...</p>
        <p class="text-xl font-bold">$${product.price}</p>
        <div class="card-actions justify-between mt-4">
        <button onclick="loadProductDetail(${product.id})" class="btn shadow-md bg-white text-slate-600 px-6"><i
        class="fa-regular fa-eye"></i>Details</button>
        <button class="btn btn-primary px-7"><i class="fa-solid fa-cart-arrow-down"></i>Add</button>
        </div>
        </div>
        </div>
        `;
        productContainer.appendChild(singleProduct);
    });
};

const loadProductDetail = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(url);
  const detail = await res.json();

  displayProductModal(detail);
};

const displayProductModal = (product) => {
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
    <h3 class="text-xl font-bold mb-4">${product.title}</h3>

    <img src="${product.image}" 
         class="w-40 mx-auto mb-4"/>

    <p class="mb-2"><strong>Category:</strong> ${product.category}</p>
    <p class="mb-2"><strong>Price:</strong> $${product.price}</p>

    <p class="mb-2">
      <strong>Rating:</strong> 
      ${product.rating.rate} (${product.rating.count})
    </p>

    <p class="text-sm text-gray-600 mt-4">
      ${product.description}
    </p>

    <div class="card-actions justify-between mt-4">
      <button onclick="loadProductDetail(${product.id})"  class="btn btn-soft btn-primary btn-sm">
          <i class="fa-solid fa-cart-shopping"></i> Add to Cart
      </button>
    </div>

    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Close</button>
      </form>
    </div>
  `;

  document.getElementById("my_modal_5").showModal();
};

loadProducts()
loadCategory()