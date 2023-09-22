// I used this https://www.w3schools.com/js/js_htmldom_html.asp
// let Glazing_Dict = {
//     original: {name: "Keep Original", value: 0, str_value:"keep_original"},
//     sugar: {name:"Sugar Milk", value: 0, str_value:"sugar_milk"},
//     vanilla: {name:"Vanilla Milk", value: 0.50, str_value: "vanilla_milk"},
//     chocolate: {name: "Double Chocolate", value: 1.50, str_value: "double_chocolate" }
// }

// let Pack_Size_Dict = {
//     one: {name: "1", value: 1},
//     three: {name: "3", value: 3},
//     six: {name: "6", value: 5},
//     twelve: {name: "12", value: 10}
// }

let base_price = 2.49;
let glaze_name = ["Keep Original", "Sugar Milk", "Vanilla Milk", "Double Chocolate"];
let glaze_price = [0, 0, 0.50, 1.50];
let glaze_value = ["keep_original", "sugar_milk", "vanilla_milk", "double_chocolate"];
let pack_size_name = ["1","3","6","12"];
let pack_size_num = ["1", "3", "6", "12"];

let glazing_option = document.querySelector("#glazing_dropdown");
let pack_dropdown = document.querySelector("#pack_size_dropdown");

glazing_option.addEventListener("load", populate_glaze_dropdown());

function populate_glaze_dropdown(){
    for (let i in glaze_name, glaze_value){
        // console.log(glaze_name[i]);
        let new_element = document.createElement("option");
        new_element.innerHTML = glaze_name[i];
        new_element.value = glaze_value[i];
        glazing_option.appendChild(new_element);
    }
    for (let i in pack_size_name, pack_size_num){
        let new_pack_el = document.createElement("option");
        new_pack_el.innerHTML = pack_size_name[i];
        new_pack_el.value = pack_size_num[i];
        pack_dropdown.appendChild(new_pack_el);
    }
}

// prices of rolls
const rollPrice = {
    original_price: 2.49,
    app_cin_price: 3.49,
    raisin_cin_price: 2.99,
    walnut_cin_price: 3.49,
    double_choc_price: 3.99,
    straw_cin_price: 3.99,
}

const glazingPrice = {
    "keep_original": 0,
    "sugar_milk": 0,
    "vanilla_milk": 0.5,
    "double_chocolate": 1.5,
};

const packSize = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10,
};

function Price_Change(element){
    let glazing_option = document.getElementById("glazing_dropdown").value;
    console.log(glazing_option);
    let pack_option = document.getElementById("pack_size_dropdown").value;
    console.log(pack_option);
    let glazing_price = glazingPrice[glazing_option];
    console.log(glazing_price);
    let pack_size = packSize[pack_option];
    console.log(pack_size)
    new_price = (base_price + glazing_price) * pack_size;
    let final_price = new_price.toFixed(2);
    document.getElementById("detail_price").innerText = "$"+ final_price;
};
