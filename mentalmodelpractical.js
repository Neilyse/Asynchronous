

//
const data = {
  users: [
    { id: 1, name: "Regis" },
    { id: 2, name: "Alice" },
    { id: 3, name: "John" }
  ],

  orders: [
    { id: 101, userId: 1, product: "Laptop", price: 1200 },
    { id: 102, userId: 1, product: "Mouse", price: 25 },
    { id: 103, userId: 2, product: "Phone", price: 800 },
    { id: 104, userId: 2, product: "Headphones", price: 100 },
    { id: 105, userId: 3, product: "Keyboard", price: 70 }
  ]
};
function getUser(id) {
  const user = data.users.find(user => user.id === id);

  if (!user) {
    throw new Error("User not found");
  }

  return Promise.resolve(user);
}

function getOrders(userId) {
  const orders = data.orders.filter(order => order.userId === userId);

  if (orders.length === 0) {
    throw new Error("No orders found");
  }

  return Promise.resolve(orders);
}

function getOrderDetails(orderId) {
  const order = data.orders.find(order => order.id === orderId);

  if (!order) {
    throw new Error("Order not found");

  }

  return Promise.resolve(order);
}
getUser(id).then((result)=> { console.log(result)})
getOrders(userId).then((result2)=> { console.log(result2)})
getOrderDetails(orderId).then((result3)=> { console.log(result3)})


// 2
function dashboard(user,orders,notifications){
    let caseA= Promise.all([Promise.resolve("User loaded"),Promise.reject("Orders failed"),Promise.resolve("Notifications loaded")])
if(caseA.
){
    return caseA
}
else{
    console.log('error')
}

let caseB= Promise.race([Promise.resolve("User loaded"),Promise.reject("Orders failed"),Promise.resolve("Notifications loaded")])
){
if(caseB)
    return user
}
else{
    reject(err=> console.log ())
} 
const user = Promise.resolve("User loaded");
const orders = Promise.reject("Orders failed");
const notifications = Promise.resolve("Notifications loaded")


}
async function (fetchUsers){
const xhr =  await fetch('https://jsonplaceholder.typicode.com/users')

xhr
xhr.onload()
xhr.send()
}

