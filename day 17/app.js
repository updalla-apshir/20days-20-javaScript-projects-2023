let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');

// Initialize arrays for products and cart
let products = [];
let cart = [];

// Event listeners for showing/hiding cart
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

// Function to add product data to HTML
const addDataToHTML = () => {
    if(products.length > 0) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.dataset.id = product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
            listProductHTML.appendChild(newProduct);
        });
    }
};

// Function to add a product to the cart
const addToCart = (product) => {
    let positionThisProductInCart = cart.findIndex((value) => value.id == product.id);
    if(positionThisProductInCart < 0){
        cart.push({ ...product, quantity: 1 });
    }else{
        cart[positionThisProductInCart].quantity += 1;
    }
    addCartToHTML();
    addCartToMemory();
};

// Function to save cart to local storage
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

// Function to update cart HTML
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity += item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.id;
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
                <div class="image">
                    <img src="${item.image}">
                </div>
                <div class="name">${item.name}</div>
                <div class="totalPrice">$${item.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>`;
        });
    }
    iconCartSpan.innerText = totalQuantity;
};

// Event listener for adding products to cart
listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let id_product = positionClick.parentElement.dataset.id;
        let productToAdd = products.find(product => product.id == id_product);
        addToCart(productToAdd);
    }
});

// Event listener for changing quantity in cart
listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = positionClick.classList.contains('plus') ? 'plus' : 'minus';
        changeQuantityCart(product_id, type);
    }
});

// Function to change quantity in cart
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.id == product_id);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity += 1;
                break;
            case 'minus':
                cart[positionItemInCart].quantity -= 1;
                if (cart[positionItemInCart].quantity <= 0) {
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory()
};


products = [
    {
        "id": 1,
        "name": "LD01 LOUNGE CHAIR",
        "price": 200,
        "image": "image/1.png"
    },
    {
        "id": 2,
        "name": "LD02 LOUNGE CHAIR",
        "price": 250,
        "image": "image/2.png"
    },
    {
        "id": 3,
        "name":" LD03 LOUNGE CHAIR",
        "price": 290,
        "image": "image/3.png"
    },
    {
        "id": 4,
        "name":" LD04 LOUNGE CHAIR",
        "price": 200,
        "image": "image/4.png"
    },

    {
        "id": 6,
        "name":" LD06 LOUNGE CHAIR",
        "price": 200,
        "image": "image/6.png"
    },
    {
        "id": 7,
        "name":" LD07 LOUNGE CHAIR",
        "price": 200,
        "image": "image/7.png"
    },
    {
        "id": 8,
        "name":" LD08 LOUNGE CHAIR",
        "price": 200,
        "image": "image/8.png"
    }
    
];

addDataToHTML();
if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
    addCartToHTML();
}


