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



