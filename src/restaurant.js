
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


module.exports = {createRestaurant,
  // addMenuItem,
  // removeMenuItem
}
