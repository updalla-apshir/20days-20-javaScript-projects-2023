let products = {
    data: [
        {
            productName: "Screen toch watch ",
            category: "Watch",
            price: "120",
            image: "image/Screen toch watch.jpg",
        },
        {
            productName: "T-Shirt",
            category: "Clothes",
            price: "30",
            image: 'image/t-shirt.jpg'
        },
        {
            productName: "pair of blue and pink floral",
            category: "Shoes",
            price: "189",
            image: "image/blue shoes.jpg",
        },
        {
            productName: "Suits",
            category: "Clothes",
            price: "49",
            image: "image/suits.jpg",
        },
        {
            productName: "fashionable shoes",
            category: "Shoes",
            price: "189",
            image: "image/fashionable shoes.jpg ",
        },
        {
            productName: "sweater yellow",
            category: "Clothes",
            price: "99",
            image: "image/sweater-yellow.jpg",
        },
        {
            productName: "Basic Knitted Top",
            category: "Clothes",
            price: "29",
            image: "image/red and white shirt.jpg",
        },
        {
            productName: "Kniter Switear",
            category: "Clothes",
            price: "129",
            image: "image/knitter-switear.jpg",
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Clothes",
            price: "89",
            image: "image/assorted-color-clothes.jpg",
        },
        {
            productName: "skyBlue Men's Shirt",
            category: "Clothes",
            price: "189",
            image: "image/skyBlue-shirt.jpg",
        },
        {
            productName: "Gold watch ",
            category: "Watch",
            price: "6000",
            image: "image/Gold watch.jpg",
        },

        {
            productName: "yellow nike shoes",
            category: "Shoes",
            price: "189",
            image: "image/yellow nike shoe.jpg",
        },
        {
            productName: "silver iphone 6",
            category: "Electronics",
            price: "160",
            image: "image/silver iphone 6.jpg",
        },
        {
            productName: "pair of blue and pink floral",
            category: "Shoes",
            price: "189",
            image: "image/pair of blue and pink floral.jpg",
        },


        {
            productName: "gray and green computer processor",
            category: "Electronics",
            price: "189",
            image: "image/gray and green computer processor.jpg",
        },

        {
            productName: "black float screen computer monitor",
            category: "Electronics",
            price: "199",
            image: "image/black float screen computer monitor.jpg",
        },
        {
            productName: "wirless headphones",
            category: "Electronics",
            price: "49",
            image: "image/wirless headphones.jpg",
        },
        {
            productName: "gary watch ",
            category: "Watch",
            price: "89",
            image: "image/gray watch.jpg",
        },
        {
            productName: "Rolex watch ",
            category: "Watch",
            price: "1239",
            image: "image/Rolex watch.jpg",
        },


    ],
};


for (let i of products.data){
    let card = document.createElement('div');

    card.classList.add("card",i.category,"hide");

    let imageContainer = document.createElement("div")
    imageContainer.classList.add('image-container')

    let image = document.createElement("img")
    image.setAttribute("src",i.image)
    imageContainer.appendChild(image)
    card.appendChild(imageContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5")
    name.classList.add("product-name");
    name.textContent = i.productName.toUpperCase();
    container.appendChild(name)

    let price = document.createElement("h6")
    price.innerText = "$" + i.price;
    container.appendChild(price)


    card.appendChild(container)
    document.getElementById("products").appendChild(card)

}

function filterProduct(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) =>{
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active")
        }
        else{
            button.classList.remove("active")
        }
    })

    let elements = document.querySelectorAll(".card");

    elements.forEach ((element) =>{
        if(value == "all"){
            element.classList.remove("hide")
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide")
            }
            else{
                element.classList.add("hide")
            }
        }
    })
}


filterProduct("all");

document.getElementById("search-input").addEventListener("keypress", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});