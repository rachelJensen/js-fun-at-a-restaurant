class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(customer, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${customer}!`
    } else {
      return `Hello, ${customer}!`
    }
  }

  checkForFood(foodItem) {
    var menuToCheck = foodItem.type;

    if (this.restaurant.menus[menuToCheck].includes(foodItem)) {
      return `Yes, we're serving ${foodItem.name} today!`;
    } else {
      return `Sorry, we aren't serving ${foodItem.name} today.`;
    }
  }
}

module.exports = Chef;
