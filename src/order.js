// Function takeOrder takes in 2 parameters, an order object and an array of orders
function takeOrder(order, deliveries) {
  //only add order if there are less than 3 deliveries
  if (deliveries.length < 3) {
    deliveries.push(order);
  }
}

//Function will remove order from deliveries array. Takes two parameters: an order number (which accesses an order object) and a deliveries array
function refundOrder(orderToRefund, deliveryOrders) {

  for (var i = 0; i < deliveryOrders.length; i++) {

    if (deliveryOrders[i].orderNumber === orderToRefund) {
      //remove one order from the deliveryOrders array
      deliveryOrders.splice(i, 1);
    }
  }
}


//Function listItems is going to take an array as an argument and return a string value of all order items in array
function listItems(deliveryOrders) {
  var orderList = [];

  //find the value in each object element in the array and add it to a new array
  for (var i = 0; i < deliveryOrders.length; i++) {
    orderList.push(deliveryOrders[i].item);
  }

  //turn new array data into a string value to be the functions output
  var joinedOrderList = orderList.join(', ');
  return joinedOrderList;
}


//Function searchOrder will take an array of orders and check if an item has been ordered. Will return a boolean value
function searchOrder(orderList, itemToCheck) {
  var isOrdered = false;

  for (var i = 0; i < orderList.length; i++) {
    if (orderList[i].item === itemToCheck) {
      isOrdered = true;
    }
  }
  return isOrdered;
}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
