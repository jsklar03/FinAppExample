


// Sets the basePrice constant, provides an abundance of arrays from which to iterate through to populate the dropdowns
let basePrice = 2.49;
let glaze_name = ["Keep Original", "Sugar Milk", "Vanilla Milk", "Double Chocolate"];
let glaze_price = [0, 0, 0.50, 1.50];
let pack_size_name = ["1","3","6","12"];

// Gets the correct elements from HTML file
let rollGlaze = document.querySelector("#glazing_dropdown");
let packSize = document.querySelector("#pack_size_dropdown");
console.log(packSize)
// Adds event listener so that the dropdowns populate once the page loads
rollGlaze.addEventListener("load", populate_dropdown());

//Constants added for add to cart btn
const queryString = window.location.search;
//console.log(queryString);

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);
//console.log(params);

const rollType = params.get('roll');
console.log(rollType);


// Function that populates the dropdown selections once the page loads
function populate_dropdown(){
    for (let i in glaze_name){
        // console.log(glaze_name[i]);
        let new_element = document.createElement("option");
        new_element.innerHTML = glaze_name[i];
        new_element.value = glaze_name[i];
        rollGlaze.appendChild(new_element);
    }
    for (let i in pack_size_name){
        let new_pack_el = document.createElement("option");
        new_pack_el.innerHTML = pack_size_name[i];
        new_pack_el.value = pack_size_name[i];
        packSize.appendChild(new_pack_el);
    }
}

// maps the values of the option elements in glazing_dropdown to numerical values to calculate price
const glazingPrice = {
    "Keep Original": 0,
    "Sugar Milk": 0,
    "Vanilla Milk": 0.5,
    "Double Chocolate": 1.5,
};

// maps the values of the option elements in the pack_size dropdown to numerical values to calculate price
const pack_size_dict = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10,
};

// The function that actually re-calculates the total price
function Price_Change(element){
    let rollGlaze = document.getElementById("glazing_dropdown").value;
    let pack_option = document.getElementById("pack_size_dropdown").value;
    let glazing_price = glazingPrice[rollGlaze];
    let pack_size = pack_size_dict[pack_option];
    new_price = (basePrice + glazing_price) * pack_size;
    let final_price = new_price.toFixed(2);
    document.getElementById("detail_price").innerText = "$"+ final_price;
};


// Gets the roll type from the rolls dictionary
let img_source = rolls[rollType]["imageFile"]
// Sets the image Path to the image source
let imagePath = '../assets/products/' + img_source

// Gets the heading from the dictionary
let detail_img_heading = rolls[rollType]["imgHead"]
console.log(detail_img_heading)
// Gets the element from the Product Detail page for the image to change
let detail_page_img = document.querySelector(".image_detail")

// Gets the heading element from the Product Detail page
let detail_page_head = document.querySelector(".h1")

// Gets the price from the dictionary above
basePrice = rolls[rollType]["basePrice"]
// Gets the element from the Details HTML page
let detail_basePrice = document.querySelector("#detail_price")

//  Changes the image
detail_page_img.src = imagePath;
console.log(detail_page_img)
// Changes the heading
detail_page_head.innerHTML = detail_img_heading;
console.log(detail_page_head)
// Changes the basePrice
detail_basePrice.innerHTML = "$"+basePrice;
console.log(detail_basePrice)

// Above works fine, below needs attention
//-----------------------------------------
// Adding stuff to the cart part
// For updating the cart


class Roll {
    constructor(rollType, rollGlaze, packSize, basePrice) {
        console.log(rollType);
        console.log(rollGlaze);
        console.log(packSize.selectedIndex);
        console.log(basePrice);
        this.type = rollType["basePrice"];
        this.glazing =  glaze_name[rollGlaze.selectedIndex];
        this.size = pack_size_name[packSize.selectedIndex];
        this.basePrice = basePrice;
    }
}
// let new_cart_item = new Roll(rollType, rollGlaze, pack_size, basePrice);


let add_to_cart_btn = document.querySelector("#add_to_cart");
add_to_cart_btn.onclick = function(add_to_cart){
    // let new_cart_item = new Roll;
    let new_cart_item = new Roll(rollType, rollGlaze, packSize, basePrice);
    new_cart_item.type = rollType;
    console.log(new_cart_item);
    new_cart_item.rollGlaze = rollGlaze;
    new_cart_item.packSize = packSize;
    new_cart_item.basePrice = basePrice;
    cart.push(new_cart_item);
    console.log(new_cart_item)
    console.log(cart)
};


