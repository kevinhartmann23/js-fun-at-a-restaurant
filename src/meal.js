function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
};

function createMenuItem(name, price, type) {
    var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem;
};

function addIngredients(food, ingredients) {
  if (ingredients.includes(food) !== true) {
  ingredients.push(food);
} else {
  return ingredients;
}
};

function formatPrice(initialPrice) {
  return "$" + initialPrice;
};

function decreasePrice(initialPrice) {
  return initialPrice * .9
};

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
  return recipe;
};
module.exports = {
  nameMenuItem, createMenuItem, addIngredients, formatPrice, decreasePrice, createRecipe
}
