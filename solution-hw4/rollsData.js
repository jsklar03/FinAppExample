const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg",
        "img_head": "Original Cinnamon Roll"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg",
        "img_head": "Apple Cinnamon Roll"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg",
        "img_head": "Raisin Cinnamon Roll"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg",
        "img_head": "Walnut Cinnamon Roll"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg",
        "img_head": "Double-Chocolate Cinnamon Roll"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg",
        "img_head": "Strawberry Cinnamon Roll"
    }    
};

let cart = [];

// First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")

const queryString = window.location.search;
//console.log(queryString);

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);
//console.log(params);

const rollType = params.get('roll');
console.log(rollType);

// Gets the roll type from the rolls dictionary
let img_source = rolls[rollType]["imageFile"]
console.log(img_source)
// Sets the image Path to the image source
let imagePath = '../assets/products/' + img_source
console.log(imagePath)
// Gets the heading from the dictionary
let detail_img_heading = rolls[rollType]["img_head"]
console.log(detail_img_heading)
// Gets the element from the Product Detail page for the image to change
let detail_page_img = document.querySelector(".image_detail")
console.log(detail_page_img)
// Gets the heading element from the Product Detail page
let detail_page_head = document.querySelector(".h1")
console.log(detail_page_head)
// Gets the price from the dictionary above
base_price = rolls[rollType]["basePrice"]
console.log(base_price)
// Gets the element from the Details HTML page
let detail_basePrice = document.querySelector("#detail_price")
console.log(detail_basePrice)

//  Changes the image
detail_page_img.src = imagePath;
console.log(detail_page_img)
// Changes the heading
detail_page_head.innerHTML = detail_img_heading;
console.log(detail_page_head)
// Changes the basePrice
detail_basePrice.innerHTML = "$"+base_price;
console.log(detail_basePrice)
  
  






/* -- added in lab */
/*class detail_page {
    constructor(imageURL, title, price){
        this.newimageURL = imageURL;
        this.newtitle = title;
        this.newprice = price;
    }
}

const product_set = new Set();

function addProduct (imageURL, title, price){
    const new_product = new Product(imageURL, title, price);
    product_set.add(new_product);
    return new_product; 
}

for (const new_product of product_set){
    console.log(product_set);
    createElement(new_product);
}

function createElement(new_product){
    const template = document.querySelector('#product_template');
    const clone = template.textContent.cloneNode(true);
    new_product.element = clone.querySelector();
    new_product
}

function updateElement(){

}

// function deleteElement(){
//     new_product.element.remove();
//     product_set.delete(new_product)
// } 
*/
