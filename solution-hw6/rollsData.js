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

const storage = JSON.parse(localStorage.getItem('storedItem'));
let cart = [];
// const cartSet = new Set();

let basePrice = 2.49;
let glaze_name = ["Keep Original", "Sugar Milk", "Vanilla Milk", "Double Chocolate"];
let glaze_price = [0, 0, 0.50, 1.50];
let pack_size_name = ["1","3","6","12"];

// maps the values of the option elements in glazing_dropdown to numerical values to calculate price
const glazingPrice = {
    "Keep Original": 0,
    "Sugar Milk": 0,
    "Vanilla Milk": 0.5,
    "Double Chocolate": 1.5,
};

// maps the values of the option elements in the pack_size dropdown to numerical values to calculate price
const pack_size_dict = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10,
};

class Roll {
    constructor(rollType, rollGlaze, packSize, basePrice, calculated_price) {
        this.type = rollType;
        this.glazing =  rollGlaze;
        this.size = packSize;
        this.basePrice = basePrice;
        this.element = null;
        this.calculated_price = calculated_price;
        this.cart_id = null;
    }
}

