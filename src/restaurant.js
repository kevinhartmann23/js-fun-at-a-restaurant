
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

function addMenuItem() {

};

module.exports = {createRestaurant, addMenuItem,
  // removeMenuItem
}
