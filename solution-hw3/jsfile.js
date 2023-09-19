// pack_size price adaptations: 1 = 1X price, 3= 3X price, 6= 5X price, 12=10X price
// glazing price adaptations: original=0, SM=0, VM= +0.50, DC= + 1.50


const price = document.getElementById("detail_price").value;

// prices of rolls

const original_price = 2.49;
const app_cin_price = 3.49;
const raisin_cin_price = 2.99;
const walnut_cin_price = 3.49;
const double_choc_price = 3.99;
const straw_cin_price = 3.99;


//prices of glaze changes
const orig_glaze = 0;
const sugar_milk_glaze = 0;
const vanilla_milk_glaze = 0.50;
const double_choc_glaze = 1.50;

//price factors of pack size
const size_one = 1;
const size_three = 3;
const size_six = 5;
const size_twelve = 10;

// define new_price variable as a number
let new_price = Number(price)

// let pack_size_event = pack_size.addEventListener("click", Pack_Size_Price_Adaptation);
// let glazing_event = glaze_type.addEventListener("click", Glaze_Price_Adaptation);

//Need to change the innerHTML part of this function below.

function GlazeChange(element){
    const Glazing_Change = element.value;
    if (Glazing_Change== "keep_original"){
        new_price = original_price + 0;
    }
    else if (Glazing_Change=="sugar_milk"){
        new_price = original_price + 0;
    }
    else if (Glazing_Change=="vanilla_milk"){
        new_price = original_price + vanilla_milk_glaze;
        console.log(new_price);
        let old_price = document.getElementById("detail_price").value;
        let price_change = old_price.innerHTML=new_price;
    }
    else if (Glazing_Change=="double_chocolate"){
        new_price = original_price + double_choc_glaze;
        console.log(new_price);
        let old_price = document.getElementById("detail_price").value;
        let price_change = old_price.innerHTML=new_price;
    }

}

function Pack_Size_Price_Adaptation(element){
    const Pack_Size_Change = element.value;
    if (Pack_Size_Change == 1){
        new_price = new_price;
        console.log(new_price);
    }
    else if(Pack_Size_Change == 3){
        new_price = new_price * 3;
        console.log(new_price);
        let old_price = document.getElementById("detail_price").value;
        let price_change = old_price.innerHTML= new_price;
    }
    else if(Pack_Size_Change == 6){
        new_price = new_price * 5;
        console.log(new_price);
        let old_price = document.getElementById("detail_price").value;
        let price_change = old_price.innerHTML= new_price;
    }
    else if(Pack_Size_Change == 12){
        new_price = new_price * 10;
        console.log(new_price);
        let old_price = document.getElementById("detail_price").value;
        let price_change = old_price.innerHTML= new_price;
    }
}



