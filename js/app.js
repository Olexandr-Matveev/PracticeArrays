// Використовуємо document.addEventListener('DOMContentLoaded'), щоб переконатися, що DOM повністю завантажений перед виконанням коду.

document.addEventListener("DOMContentLoaded", function () {
  const allProducts = [
    { id: 1, name: "Smartphone", category: "electronics" },
    { id: 2, name: "Laptop", category: "electronics" },
    { id: 3, name: "T-shirt", category: "clothing" },
    { id: 4, name: "Jeans", category: "clothing" },
    { id: 5, name: "Book A", category: "books" },
    { id: 6, name: "Book B", category: "books" },
  ];

  const productList = document.getElementById("product-list"); // Add the id of the element that will display the products
  const categoryFilter = document.getElementById("category"); // Add the id of the element that will filter the products

  function displayProducts(products) {
    productList.innerHTML = "";
    products.forEach((el) => {
      const productDiv = document.createElement('div')
      // викличи метод - для створення div елементу для кожного продукту
      productDiv.className = "product";
      productDiv.textContent = `${el.name}, id:${el.id}`;

      productList.appendChild(productDiv);
      //  передайте productDiv аргументом в метод appendChild для додавання його до елементу productList
    });
  }

  // ТУТ потрібно викликати функцію displayProducts з потрібним аргументом для відображення всіх продуктів //
  displayProducts(allProducts);

  // Filter products based on category
  categoryFilter.addEventListener("change", function () {
    const selectedCategory = categoryFilter.value;
    // за допомогою конструкції if-else відфільтрувати продукти за категоріями
    let filteredProducts = [];

    if (selectedCategory === 'all') {
      filteredProducts = allProducts;
    } else if (selectedCategory === 'electronics') {
      filteredProducts = allProducts.filter(function (product) {
        return product.category === 'electronics';
      });
    } else if (selectedCategory === 'clothing') {
      filteredProducts = allProducts.filter(function (product) {
        return product.category === 'clothing';
      });
    } else if (selectedCategory === 'books') {
      filteredProducts = allProducts.filter(function (product) {
        return product.category === 'books';
      });
    }
  
    displayProducts(filteredProducts);
  });
});
