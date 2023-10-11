// Gets the correct elements from HTML file
let rollGlaze = document.querySelector("#glazing_dropdown");
let packSize = document.querySelector("#pack_size_dropdown");
//console.log(packSize)
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

// The function that actually re-calculates the total price
function Price_Change(element){
    let rollGlaze = document.getElementById("glazing_dropdown").value;
    let pack_option = document.getElementById("pack_size_dropdown").value;
    let glazing_price = glazingPrice[rollGlaze];
    let pack_size = pack_size_dict[pack_option];
    new_price = (basePrice + glazing_price) * pack_size;
    let final_price = new_price.toFixed(2);
    document.getElementById("detail_price").innerText = "$"+ final_price;
    return final_price;
};

// Gets the roll type from the rolls dictionary
let img_source = rolls[rollType]["imageFile"]
// Sets the image Path to the image source
let imagePath = '../assets/products/' + img_source

// Gets the heading from the dictionary
let detail_img_heading = rolls[rollType]["imgHead"]

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

// Changes the heading
detail_page_head.innerHTML = detail_img_heading;

// Changes the basePrice
detail_basePrice.innerHTML = "$"+basePrice;

let add_to_cart_btn = document.querySelector("#add_to_cart");
add_to_cart_btn.onclick = 
function add_to_cart(){
    let new_cart_item = new Roll(rollType, rollGlaze, packSize, basePrice);
    new_cart_item.type = rollType;
    new_cart_item.glazing = rollGlaze.value;
    new_cart_item.size = packSize.value;
    new_cart_item.basePrice = basePrice;
    new_cart_item.element = null;
    new_cart_item.calculated_price = parseFloat(Price_Change(new_cart_item));
    cart.push(new_cart_item);
    console.log(cart);
    cartSet.add(new_cart_item);
    console.log(cartSet);
};

//-------------------------------------- Shopping Cart------

