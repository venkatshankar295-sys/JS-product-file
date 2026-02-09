let cart = 0;
let darkMode = false;

function addToCart() {
    cart++;
    document.getElementById("cartCount").innerText = cart;
    document.getElementById("titleText").innerText = "Added to Cart!";
}
function changeTheme() {
    if (!darkMode) {
        document.body.style.background = "#111";
        document.body.style.color = "white";
        darkMode = true;
    } else {
        document.body.style.background = "linear-gradient(135deg, #6ee7e0, #fbe9d7)";
        document.body.style.color = "black";
        darkMode = false;
    }
}

function setActive(element) {
    let items = document.querySelectorAll(".navbar li");
    items.forEach(item => item.classList.remove("active"));
    element.classList.add("active");
}
function showDetails(card) {
    let text = card.querySelector("p").innerText;
    alert("Selected Product: " + text);
}
