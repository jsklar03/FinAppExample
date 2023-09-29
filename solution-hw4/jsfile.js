// I used this https://www.w3schools.com/js/js_htmldom_html.asp


// Sets the base_price constant, provides an abundance of arrays from which to iterate through to populate the dropdowns
let base_price = 2.49;
let glaze_name = ["Keep Original", "Sugar Milk", "Vanilla Milk", "Double Chocolate"];
let glaze_price = [0, 0, 0.50, 1.50];
let pack_size_name = ["1","3","6","12"];

// Gets the correct elements from HTML file
let glazing_option = document.querySelector("#glazing_dropdown");
let pack_dropdown = document.querySelector("#pack_size_dropdown");

// Adds event listener so that the dropdowns populate once the page loads
glazing_option.addEventListener("load", populate_dropdown());

// Function that populates the dropdown selections once the page loads
function populate_dropdown(){
    for (let i in glaze_name){
        // console.log(glaze_name[i]);
        let new_element = document.createElement("option");
        new_element.innerHTML = glaze_name[i];
        new_element.value = glaze_name[i];
        glazing_option.appendChild(new_element);
    }
    for (let i in pack_size_name){
        let new_pack_el = document.createElement("option");
        new_pack_el.innerHTML = pack_size_name[i];
        new_pack_el.value = pack_size_name[i];
        pack_dropdown.appendChild(new_pack_el);
    }
}

// prices of rolls -- not needed for now, but possibly later.
const rollPrice = {
    original_price: 2.49,
    app_cin_price: 3.49,
    raisin_cin_price: 2.99,
    walnut_cin_price: 3.49,
    double_choc_price: 3.99,
    straw_cin_price: 3.99,
}

// maps the values of the option elements in glazing_dropdown to numerical values to calculate price
const glazingPrice = {
    "Keep Original": 0,
    "Sugar Milk": 0,
    "Vanilla Milk": 0.5,
    "Double Chocolate": 1.5,
};

// maps the values of the option elements in the pack_size dropdown to numerical values to calculate price
const packSize = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10,
};

// The function that actually re-calculates the total price
function Price_Change(element){
    let glazing_option = document.getElementById("glazing_dropdown").value;
    let pack_option = document.getElementById("pack_size_dropdown").value;
    let glazing_price = glazingPrice[glazing_option];
    let pack_size = packSize[pack_option];
    new_price = (base_price + glazing_price) * pack_size;
    let final_price = new_price.toFixed(2);
    document.getElementById("detail_price").innerText = "$"+ final_price;
};


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
