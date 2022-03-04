var details = [];
$(document).ready(function () {
  $("#button1").click(function () {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var price = parseInt(document.getElementById("price").value);
    var quantity = parseInt(document.getElementById("quantity").value);

    myobj = {
      id: id,
      name: name,
      price: price,
      quantity: quantity,
    };
    details.push(myobj);
    inputData(details);
  });
});
function inputData(details) {
  html =
    "<table><tr><th>ID</th><th>NAME</th><th>PRICE</th><th>Quantity</th><th>New_QUANTITY</th></tr>";
  for (var i = 0; i < details.length; i++) {
    html +=
      "<tr><td>" +
      details[i].id +
      "</td><td>" +
      details[i].name +
      "</td><td>" +
      details[i].price +
      "</td><td>" +
      details[i].quantity +
      "</td><td><input type='text' id='newquantity"+i+"' value='1'  ><input type='button' id='button2' value='UPDATE' onclick='update("+details[i].id+")'></td></tr>";
  }
  html += "</table>";
  document.getElementById("display").innerHTML = html;
}
function display() {
  html =
    "<table><tr><th>ID</th><th>NAME</th><th>PRICE</th><th>Quantity</th><th>New_QUANTITY</th></tr>";
  for (var i = 0; i < details.length; i++) {
    html +=
      "<tr><td>" +
      details[i].id +
      "</td><td>" +
      details[i].name +
      "</td><td>" +
      details[i].price +
      "</td><td>" +
      details[i].quantity +
      "</td><td><input type='text' id='newquantity"+i+"' value='1' ><input type='button' id='button2' value='UPDATE' onclick='update("+details[i].id+")'></td></tr>";
  }
  html += "</table>";
  //console.log("newquantity+"+i);
  document.getElementById("display").innerHTML = html;
}



function update(m) {
   for (var i = 0; i < details.length; i++) {
    if (details[i].id == m) {
      
   
   
   var price = parseInt(document.getElementById("price").value);
  var quantity = parseInt(document.getElementById("quantity").value);
  var new_quantity = document.getElementById("newquantity"+i).value;
   console.log(new_quantity);
  var a=parseInt(new_quantity);
  console.log(a);
  var avg_price = parseInt(price / quantity);

  var new_price = parseInt(avg_price * a);


  
    
      details[i].quantity = new_quantity;
      details[i].price = new_price;
    }
  }
  display();
}