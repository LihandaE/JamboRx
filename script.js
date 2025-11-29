
const products = [
    
    { id: 1, name: "Ondansetron", category: "Antiemetic", price: 150 },
    { id: 2, name: "Chlorpromazine", category: "Antiemetic", price: 120 },
    { id: 3, name: "Promethazine", category: "Antiemetic", price: 100 },
    { id: 4, name: "Scopolamine", category: "Antiemetic", price: 180 },


    { id: 5, name: "Metformin", category: "Antidiabetic", price: 80 },
    { id: 6, name: "Sitagliptin", category: "Antidiabetic", price: 250 },
    { id: 7, name: "Dapagliflozin", category: "Antidiabetic", price: 300 },
    { id: 8, name: "Semaglutide", category: "Antidiabetic", price: 450 },
    { id: 9, name: "Insulin", category: "Antidiabetic", price: 350 },
    { id: 10, name: "Lantus", category: "Antidiabetic", price: 500 },

   
    { id: 11, name: "Quinine", category: "Antimalarial", price: 200 },
    { id: 12, name: "Atovaquone-Proguanil", category: "Antimalarial", price: 450 },

   
];

function renderProducts(productList) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    productList.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <h3>${p.name}</h3>
            <p>${p.category}</p>
            <p>KES ${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;

        container.appendChild(card);
    });
}

function searchProducts() {
    const text = document.getElementById("search-box").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(text));
    renderProducts(filtered);
}

function filterByCategory(category) {
    if (category === "All") {
        renderProducts(products);
    } else {
        const results = products.filter(p => p.category === category);
        renderProducts(results);
    }
}

let cart = [];

function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(item.name + " added to cart!");
}


function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const table = document.getElementById("cart-table");

    table.innerHTML = "";
    let total = 0;

    cartItems.forEach((item, index) => {
        total += item.price;
        table.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td><button onclick="removeItem(${index})">Remove</button></td>
            </tr>
        `;
    });

    document.getElementById("total").innerText = "KES " + total;
}

function removeItem(index) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    displayCart();
}


