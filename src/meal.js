//Function adds the word 'Delicious' to an inputed food
function nameMenuItem(food) {
  return 'Delicious ' + food;
}

//write a function with 3 parameters that creates an object with properties name, price, and type
function createMenuItem(food, price, type) {
  var menuItem = {
    name: food,
    price: price,
    type: type
  };

  return menuItem;
}

// Function to add ingredient to an array
// Edge case: will not add a dupicate ingredient
function addIngredients(ingredient, array) {
  for (var i = 0; i < array.length; i++) {
    if (ingredient === array[i]) {
      return;
    }
  }

  array.push(ingredient);
}


// Function formats an inputed price to add a $
function formatPrice(startPrice) {
  return "$" + startPrice;
}

// Function decreases a given price by 10%
function decreasePrice(currentPrice) {
  return currentPrice * 0.9;
}

//Function to create a recipe object
function createRecipe(menuItem, ingredients, menuType) {
  var recipe = {
    title: menuItem,
    ingredients: ingredients,
    type: menuType
  };

  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
