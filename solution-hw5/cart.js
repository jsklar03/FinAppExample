/* Notes:
Need to dynamically populate the cart page first with the selected options. Then I
need to save the cart selections in the array.
Once cart page is dynamically populated based on product choices, need to populate
the cart with HTML divs for styling.
Once cart page is dynamically populating HTML, then add the remove functionality and
update the cart's total price.
*/


//----- For later ----------
function add_to_cart (rollType,rollGlaze,packSize,basePrice){
    let new_cart_item = new Roll(rollType, rollGlaze, packSize, basePrice);
    new_cart_item = rollType;
    cart.push(new_cart_item);
    cartSet.add(new_cart_item);
}

const cart_item_1 = add_to_cart(
    "Original",
    "Sugar Milk",
    "1",
    2.49
)

const cart_item_2 = add_to_cart(
    "Walnut",
    "Vanilla Milk",
    "12",
    39.90
)

const cart_item_3 = add_to_cart(
    "Apple",
    "Sugar Milk",
    "3",
    8.97
)

const cart_item_4 = add_to_cart(
    "Apple",
    "Original",
    "3",
    10.47
)

const template = document.querySelector("#cart_template");
const clone = template.content.cloneNode(true);
clone.querySelector("element");
clone.querySelector(".cart_image");

for (let item in cartSet){

}


// let Remove = document.getElementsByClassName("remove");
// Remove.addEventListener("click", Remove_Item)

// function Remove_Item(){

// }

