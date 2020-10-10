function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3){
    deliveryOrders.push(order);
  };
};

function refundOrder (orderNumber, deliveryOrders) {
  return deliveryOrders.splice(orderNumber - 1, 1);
};

function listItems(deliveryOrders, items) {
  var list = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    items = deliveryOrders[i].item;
    list.push(items);
    };
  return list.join(", ");
};

function searchOrder(deliveryOrders, orderSearch) {
  var result = false
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (orderSearch === deliveryOrders[i].item) {
      return result = true;
    }
    }
  return result;
};


module.exports = {takeOrder, refundOrder, listItems, searchOrder}
