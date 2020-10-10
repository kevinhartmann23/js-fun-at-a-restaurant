
function createRestaurant(name) {
var pizzaRestaurant = {
  name: name,
  menus: {
          breakfast: [],
          lunch: [],
          dinner: [],
          }
}
  return pizzaRestaurant;
};

function addMenuItem(pizzaRestaurant, menuItem) {
    if (menuItem.type === "lunch") {
      return pizzaRestaurant.menus.lunch.push(menuItem);
    } else if (menuItem.type === "breakfast") {
      return pizzaRestaurant.menus.breakfast.push(menuItem);
    } else {
      return pizzaRestaurant.menus.dinner.push(menuItem);
    };
    // if (pizzaRestaurant.menus.name.includes(menuItem) !== true) {
    //   pizzaRestaurant.menus.name.push(menuItem);
    // } else {
    //   return menuItem;
    // }
    return menuItem;
};

module.exports = {createRestaurant, addMenuItem,
  // removeMenuItem
}
