$(document).ready(function(){



  var groceries = [
    {name: "Tomatoes", status: "needed", price: "3.99", quantity: 5},
    {name: "Onions", status: "needed", price: "1.85", quantity: 2},
    {name: "Cilantro", status: "needed", price: ".95", quantity: 1},
    {name: "Limes", status: "complete", price: ".33", quantity: 3},
    {name: "Jalapeno", status: "complete", price: ".15", quantity: 2}
  ];
  console.log(groceries);
//1. Add groceries to <ul>. Store status, price and quantity as data attributes
function genList(){
  for(i=0;i<groceries.length;i++){
    $("#list").append("<li class='listItem' data-status='"+groceries[i].status+"' data-price='"+groceries[i].price+"' data-quantity='"+groceries[i].quantity+"'><h2>"+groceries[i].name+"</h2></li>");
  }
}
genList();

//2. Give 'needed' items a background-color of your choosing. Do the same for 'complete' items.
//   Choose any text color you desire.

//3. Display the item quantity next to it's name. (  i.e. Tomatoes (5)  )

//. When an item is hovered over, it's background should darken slightly. This can be done through CSS but use
//   JS for practice.

//. When and item is double-clicked, give it the class 'selected' and have it's background remain slightly darkened.

//. When 'Remove Item' is clicked, delete the item from the list.

//. When 'Add item' is clicked, a new item should be added to the list. 'Status' should default as 'needed'.






});
