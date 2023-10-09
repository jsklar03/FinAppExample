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
}

console.log(cartSet)

function createElement(roll) {
    // make a clone of the notecard template
    const template = document.querySelector('#cart_template');
    const clone = template.content.cloneNode(true);
    
    // connect this clone to our notecard.element
    // from this point we only need to refer to notecard.element
    roll.element = clone.querySelector('.shopping_cart_item');
  
    const cartListElement = document.querySelector('.shopping_cart');
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

    updateTotalPrice(roll);
}

function updateTotalPrice(roll){
    let total_price = 0.00;
    console.log(total_price);
    for (let i of cartSet){
        let total_price_el = document.querySelector(".total_price");
        total_price = total_price + i.calculated_price;
        console.log(total_price)
        let final_price = total_price.toFixed(2);
        total_price_el.innerText= "$" + final_price;
    }
}

const remove_button = document.querySelector(".remove");
const cart_item = document.querySelector(".shopping_cart_item")


for (let j of cartSet){
    let remove_button = document.querySelector(".remove");
    console.log (remove_button)
}

remove_button.addEventListener('click', () => {
     remove_item();
   });


function remove_item(roll){
    console.log("button");
    cart_item.remove(roll);
    cartSet.delete();
    console.log(cartSet);
    updateTotalPrice(roll);
}
console.log(cartSet)

