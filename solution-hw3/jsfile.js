// pack_size price adaptations: 1 = 1X price, 3= 3X price, 6= 5X price, 12=10X price
// glazing price adaptations: original=0, SM=0, VM= +0.50, DC= + 1.50

let pack_size = document.getElementbyID("pack_size_dropdown")
let glaze_type = document.getElementbyID("glazing_dropdown")
let pack_price_adapt = 1;
let glaze_price_adapt = 0;
let price = document.getElementById("price")

function Glaze_Price_Adaptation(){
    if (glaze_type === "Keep original"){

    }
    else if (glaze_type === "Sugar milk"){

    }
    else if(glaze_type === "Vanilla milk"){

    }
    else if (glaze_type === "Double chocolate"){

    }
}

function Pack_Size_Price_Adaptation(){
    if (pack_size == 1){
        price = price;
    }
    else if(pack_size == 3){
        let new_price = price * 3;
        new_price = document.getElementbyID("price").innerHTML=new_price;
    }
    else if(pack_size == 6){
        let new_price = price * 5;
        new_price = document.getElementbyID("price").innerHTML=new_price;
    }
    else if(pack_size == 12){
        let new_price = price * 10;
        new_price = document.getElementbyID("price").innerHTML=new_price;
    }
}


