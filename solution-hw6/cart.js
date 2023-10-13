const storage = JSON.parse(localStorage.getItem('storedItem'));
console.log(storage);

console.log(cart);

//This iterates through the stored array, then is supposed to create the elements
//to populate the shopping cart html page.

for (let i of storage){
    console.log(i);
    cart.push(i);
    console.log(cart);
    i.calculated_price = (i.basePrice + glazingPrice[i.glazing]) * pack_size_dict[i.size];
    i.cart_id = cart.length;
    createElement(i);
    updateTotalPrice(i);
}



console.log(cart);

function createElement(roll) {
    // make a clone of the notecard template
    const template = document.querySelector('#cart_template');
    const clone = template.content.cloneNode(true);
    
    // connect this clone to our notecard.element
    // from this point we only need to refer to notecard.element
    roll.element = clone.querySelector('.shopping_cart_item');
    console.log(roll.element);

    const removeBtn = roll.element.querySelector(".remove");
    
    removeBtn.addEventListener('click',() => {
    remove_item(roll);
    });
  
    const cartListElement = document.querySelector('#shopping_cart');
    cartListElement.appendChild(roll.element);
    
    updateRoll(roll)
}

// Retrieving the locally stored item from storage to populate the dropdown
function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedItem');
    const cartArray = JSON.parse(cartArrayString);
  }
  if (localStorage.getItem('storedItem') != null) {
    console.log("Hi");
    retrieveFromLocalStorage();
  }

  //updates the roll information on the screen. Provides image/details/price etc. 
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

//Updates the total price displayed at the bottom of the cart page. Aggregates the calculated
//price in the set for each item in the cart.
function updateTotalPrice(roll){
    let total_price = 0.00;
    let total_price_el = document.querySelector(".total_price");
    for (let i of storage){
        total_price = total_price + i.calculated_price;
        let final_price = total_price.toFixed(2);
        total_price_el.innerText= "$" + final_price; 
    }
    if (storage.length == 0){
        total_price_el.innerText= "$0.00";
    }
}

const cart_item = document.querySelector(".shopping_cart_item");
const shopping_cart_whole = document.querySelector("#shopping_cart");

function remove_item(roll){
    roll.element.remove();
    for (let i=0; i < storage.length; i++){
        if (roll.cart_id == storage.indexOf(roll)+ 1){
            storage.splice(i,i+1);
            updateTotalPrice(roll);
        }
        else {
            let roll_spot = storage.indexOf(roll);
            storage.splice(roll_spot,roll_spot+1);
        }
    }
    updateTotalPrice(roll);
}

