// pack_size price adaptations: 1 = 1X price, 3= 3X price, 6= 5X price, 12=10X price
// glazing price adaptations: original=0, SM=0, VM= +0.50, DC= + 1.50


// let base_price = document.getElementById("detail_price").value;
// let new_price = parseFloat(base_price);
// let old_price = new_price

let base_price = 2.49;

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
    console.log(pack_option)
    let glazing_price = glazingPrice[glazing_option];
    console.log(glazing_price);
    let pack_size = packSize[pack_option];
    console.log(pack_size);
    new_price = (base_price + glazing_price) * pack_size;
    console.log(new_price)
    document.getElementById("detail_price").innerText = "$"+ new_price;
};

// function GlazeChange(element){
//     const Glazing_Change = element.value;
//     if (Glazing_Change== "keep_original"){
//         new_price = original_price + 0;
//     }
//     else if (Glazing_Change=="sugar_milk"){
//         new_price = original_price + 0;
//     }
//     else if (Glazing_Change=="vanilla_milk"){
//         let old_price = document.getElementById("detail_price").innerHTML = new_price;
//         new_price = original_price + vanilla_milk_glaze;
//         console.log(new_price);
//         old_price = document.getElementById("detail_price").innerHTML = new_price;
//         let vanilla_milk_glaze_price = new_price;
//     }
//     else if (Glazing_Change=="double_chocolate"){
//         let old_price = document.getElementById("detail_price").value;
//         new_price = original_price + double_choc_glaze;
//         console.log(new_price);
//         old_price = document.getElementById("detail_price").innerHTML = new_price;
//         let double_choc_base_price = new_price;
//     }

// }

// function Pack_Size_Price_Adaptation(element){
//     let Pack_Size_Change = element.value;
//     Pack_Size_Change = parseFloat(Pack_Size_Change);
//     if (Pack_Size_Change == 1){
//         new_price = new_price;
//         console.log(new_price);
//     }
//     else if(Pack_Size_Change == 3){
//         let old_price = document.getElementById("detail_price").value;
//         new_price = new_price * 3;
//         console.log(new_price);
//         old_price = document.getElementById("detail_price").innerHTML= new_price;
//     }
//     else if(Pack_Size_Change == 6){
//         let old_price = document.getElementById("detail_price").value;
//         new_price = new_price * 5;
//         console.log(new_price);
//         old_price = document.getElementById("detail_price").innerHTML= new_price;
//     }
//     else if(Pack_Size_Change == 12){
//         let old_price = document.getElementById("detail_price").value;
//         new_price = new_price * 10;
//         console.log(new_price);
//         old_price = document.getElementById("detail_price").innerHTML= new_price;
//     }
// }



