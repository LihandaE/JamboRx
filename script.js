
function getCart() {
    return JSON.parse(localStorage.getItem("jrx_cart") || "[]");
}

function saveCart(cart) {
    localStorage.setItem("jrx_cart", JSON.stringify(cart));
    updateCartCount();
}

function addToCart(product) {
    let cart = getCart();
    let existing = cart.find(i => i.name === product.name);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({...product, qty: 1});
    }

    saveCart(cart);
    alert(product.name + " added to cart!");
}

function updateCartCount() {
    let cart = getCart();
    let total = cart.reduce((sum, i) => sum + i.qty, 0);

    let badge = document.getElementById("cart-count");
    if (badge) badge.innerText = total;
}

function extractProducts() {
    let cards = document.querySelectorAll(".product-card");
    let list = [];

    cards.forEach(card => {
        let name = card.querySelector("h3").innerText;
        let img = card.querySelector("img").src;

        let lines = card.querySelectorAll("p");
        let price = Number(lines[0].innerText.replace("KES ", ""));
        let quantity = Number(lines[1].innerText.replace("Qty: ", ""));

        list.push({ name, img, price, quantity, card });
    });

    return list;
}

function attachAddButtons(products) {
    products.forEach(p => {
        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btn.style.marginTop = "10px";
        btn.style.padding = "8px 12px";
        btn.style.background = "#0b67a4";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "8px";
        btn.style.cursor = "pointer";

        btn.onclick = (e) => {
            e.stopPropagation(); 
            addToCart(p);
        };

        p.card.appendChild(btn);
    });
}

function createPopup(product) {
    let popup = document.createElement("div");
    popup.className = "jrx-popup";

    popup.innerHTML = `
    <div class="jrx-popup-inner">
    <button class="jrx-close">×</button>
    <img src="${product.img}" style="width:180px; border-radius:8px;">
    <h2>${product.name}</h2>
    <p><strong>Price:</strong> KES ${product.price}</p>
    <p><strong>Available:</strong> ${product.quantity}</p>

    <button id="popup-add" style="
                background:#0b67a4; 
                color:white; 
                border:none; 
                padding:10px 20px; 
                border-radius:8px; 
                margin-top:10px;">
                Add to Cart
            </button>
        </div>
    `;

    document.body.appendChild(popup);

    popup.querySelector(".jrx-close").onclick = () => popup.remove();

    popup.querySelector("#popup-add").onclick = () => {
        addToCart(product);
        popup.remove();
    };
}

function attachPopup(products) {
    products.forEach(p => {
        p.card.addEventListener("click", () => {
            createPopup(p);
        });
    });
}

const popupStyles = `
.jrx-popup {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}
.jrx-popup-inner {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 260px;
    text-align: center;
    position: relative;
}
.jrx-close {
    position: absolute;
    top: 5px;
    right: 8px;
    background: none;
    border: none;
    font-size: 22px;
    cursor: pointer;
}
`;
let styleSheet = document.createElement("style");
styleSheet.innerText = popupStyles;
document.head.appendChild(styleSheet);

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();

    let products = extractProducts();
    attachAddButtons(products);
    attachPopup(products);
});



   

