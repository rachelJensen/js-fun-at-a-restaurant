function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  };
  return restaurant;
}


function addMenuItem(restaurant, menuItem) {
  var menu = menuItem.type;

  var menuToAddTo = restaurant.menus[menu];

  for (var i = 0; i < menuToAddTo.length; i++) {
    if (menuToAddTo[i].name === menuItem.name) {
      return;
    }
  }

  menuToAddTo.push(menuItem);
}


function removeMenuItem(restaurant, itemName, type) {
  var editedMenu = restaurant.menus[type]; //array

  for (var i = 0; i < editedMenu.length; i++) {
    if (editedMenu[i].name === itemName) {
      editedMenu.splice(i, 1);
      return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`
    }
  }
  return `Sorry, we don\'t sell ${itemName}, try adding a new recipe!`
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
