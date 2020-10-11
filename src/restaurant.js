
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
  if(menuItem.type === "lunch") {
      return pizzaRestaurant.menus.lunch.push(menuItem);
    } else if (menuItem.type === "breakfast") {
      return pizzaRestaurant.menus.breakfast.push(menuItem);
    } else if (menuItem.type === "dinner"){
      return pizzaRestaurant.menus.dinner.push(menuItem)
    } else {
      return ;
    };

    ////pizzaRestaurant.menus.breakfast.pop();
    // if (pizzaRestaurant.includes(menuItem) !== true) {
    //   pizzaRestaurant.push(menuItem);
    // } else {
    //   return pizzaRestaurant;
    // }
};

function removeMenuItem(pizzaRestaurant, menuItem) {
  if(menuItem === menuItem.name) {
      return pizzaRestaurant.menus.pop(menuItem);
    } else {
      return ;
    }
// if (menuItem.name === menuItem)
//   return pizzaRestaurant.menus.splice(pizzaRestaurant.menus.menuItem);
};

//I feel like im close, but

module.exports = {createRestaurant, addMenuItem, removeMenuItem
}
