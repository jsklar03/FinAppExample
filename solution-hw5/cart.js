const glazingPrice = {
    "Keep Original": 0,
    "Sugar Milk": 0,
    "Vanilla Milk": 0.50,
    "Double Chocolate": 1.50
}

const pack_size_dict = {
    "1":1,
    "3":3,
    "6":5,
    "12":10
}

//----- For later ----------
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.element = null;
    }
}

const cart_item_1 = new Roll(
    "Original",
    "Sugar Milk",
    "1",
    2.49
)

const cart_item_2 = new Roll(
    "Walnut",
    "Vanilla Milk",
    "12",
    3.49
)

const cart_item_3 = new Roll(
    "Raisin",
    "Sugar Milk",
    "3",
    2.99
)

const cart_item_4 = new Roll(
    "Apple",
    "Keep Original",
    "3",
    3.49
)

let cartSet = new Set();

cartSet.add(cart_item_1);
cartSet.add(cart_item_2);
cartSet.add(cart_item_3);
cartSet.add(cart_item_4);

for (let i of cartSet){
    i.calculated_price = (i.basePrice + glazingPrice[i.glazing]) * pack_size_dict[i.size];
    createElement(i);
    updateTotalPrice(i);
}

function createElement(roll) {
    // make a clone of the notecard template
    const template = document.querySelector('#cart_template');
    const clone = template.content.cloneNode(true);
    
    // connect this clone to our notecard.element
    // from this point we only need to refer to notecard.element
    roll.element = clone.querySelector('.shopping_cart_item');

    const removeBtn = roll.element.querySelector(".remove");
    
    removeBtn.addEventListener('click',() => {
        remove_item(roll);
    });
  
    const cartListElement = document.querySelector('#shopping_cart');
    cartListElement.appendChild(roll.element);
    
    updateRoll(roll)
}

function updateRoll(roll){
    const roll_img = roll.element.querySelector(".cart_image");
    roll_img.src = '../assets/products/'+ rolls[roll.type].imageFile;

    const roll_title = roll.element.querySelector(".cart_title");
    roll_title.innerText = roll.type + " Cinnamon Roll";

    const glaze_title = roll.element.querySelector(".cart_glazing");
    glaze_title.innerText = "Glazing: " + roll.glazing;

    const pack_size_title = roll.element.querySelector(".cart_size");
    pack_size_title.innerText = "Pack Size: " + roll.size;

    const item_price = roll.element.querySelector(".cart_item_price");
    item_price.innerText = "$" + roll.calculated_price.toFixed(2);
}

function updateTotalPrice(roll){
    let total_price = 0.00;
    let total_price_el = document.querySelector(".total_price");
    for (let i of cartSet){
        total_price = total_price + i.calculated_price;
        let final_price = total_price.toFixed(2);
        total_price_el.innerText= "$" + final_price; 
    }
    if (cartSet.size == 0){
        total_price_el.innerText= "$0.00";
    }
}

const cart_item = document.querySelector(".shopping_cart_item");
const shopping_cart_whole = document.querySelector("#shopping_cart")

function remove_item(roll){
    roll.element.remove();
    cartSet.delete(roll);
    updateTotalPrice(roll);
}
console.log(cartSet)

