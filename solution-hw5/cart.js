/* Notes:
Need to dynamically populate the cart page first with the selected options. Then I
need to save the cart selections in the array.
Once cart page is dynamically populated based on product choices, need to populate
the cart with HTML divs for styling.
Once cart page is dynamically populating HTML, then add the remove functionality and
update the cart's total price.
*/


//----- For later ----------
localStorage.setItem(Roll.type,Roll(rollType))
console.log(localStorage.setItem(Roll.type,Roll(rollType)))

let Remove = document.getElementsByClassName("remove");
Remove.addEventListener("click", Remove_Item)

function Remove_Item(){

}

