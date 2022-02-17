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
      "</td><td><input type='text' id='newquantity' value='' ><input type='button' id='button2' value='UPDATE' onclick='update(10)'></td></tr>";
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
      "</td><td><input type='text' id='newquantity' value='' ><input type='button' id='button2' value='UPDATE' onclick='update(10)'></td></tr>";
  }
  html += "</table>";
  document.getElementById("display").innerHTML = html;
}

function update(val1) {
  console.log(val1);
  var price = parseInt(document.getElementById("price").value);
  var quantity = parseInt(document.getElementById("quantity").value);
  val1 = document.getElementById("id").value;
  var new_quantity = parseInt(document.getElementById("newquantity").value);
  console.log(new_quantity);
  var avg_price = parseInt(price / quantity);
  console.log(avg_price);
  var new_price = parseInt(avg_price * new_quantity);
  console.log(new_price);

  for (var i = 0; i < details.length; i++) {
    if (details[i].id == val1) {
      details[i].quantity = new_quantity;
      details[i].price = new_price;
    }
  }
  display();
}
