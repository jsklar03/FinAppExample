const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg",
        "imgHead": "Original Cinnamon Roll"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg",
        "imgHead": "Apple Cinnamon Roll"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg",
        "imgHead": "Raisin Cinnamon Roll"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg",
        "imgHead": "Walnut Cinnamon Roll"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg",
        "imgHead": "Double-Chocolate Cinnamon Roll"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg",
        "imgHead": "Strawberry Cinnamon Roll"
    }    
};

let cart = [];

// First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")

// const queryString = window.location.search;
// //console.log(queryString);

// // Then, we use the query string to create a URLSearchParams object:
// const params = new URLSearchParams(queryString);
// //console.log(params);

// const rollType = params.get('roll');
// console.log(rollType);

// // For updating the cart
// class Roll {
//   constructor(rollType, glazing_option, pack_size, base_price) {
//       this.type = rolls[rollType];
//       this.glazing =  glazing_option;
//       this.size = pack_size;
//       this.base_price = base_price;
//   }
// }


