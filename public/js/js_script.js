
function Menuitem(name, price, kCal,ingredients, gluten, lactos, stock, b_image) {
  this.name = name;
  this.price = price;
  this.kCal = kCal;
  this.ingredients = ingredients;
  this.gluten = gluten;
  this.lactos = lactos;
  this.stock = stock;
  this.b_image = b_image;
}
var burgers = [];

food.burgers(new Menuitem("Kycklingburgare",55, 459, ["Ost","Tomat","Saltgurka","Bröd"], false, false, 3, "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwja4NPIh43mAhXKwsQBHU4jC44QjRx6BAgBEAQ&url=https%3A%2F%2Fthatsup.se%2Fmalmo%2Fguide%2Fguiden-till-malm%25C3%25B6s-b%25C3%25A4sta-hamburgare%2F&psig=AOvVaw33KD45WY6-LAKbI1YqorXI&ust=1575035711626871"));
food.burgers(new Menuitem("Cheeseburgare", 15, 4432,["Ost","Tomat","Saltgurka","Bröd"], true, false, 5, "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi14uTDh43mAhWDw8QBHfDeCFEQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.bigboy.se%2F&psig=AOvVaw33KD45WY6-LAKbI1YqorXI&ust=1575035711626871"));
food.burgers(new Menuitem("KnudzSpecial", 20,9, ["Ost","Tomat","Saltgurka","Bröd"], true, true, 9, "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjPw-m_h43mAhUuxaYKHQQhC5YQjRx6BAgBEAQ&url=https%3A%2F%2Fvegokak.se%2Fvegan%2Fvegansk-hamburgare-av-formbar-fars%2F&psig=AOvVaw33KD45WY6-LAKbI1YqorXI&ust=1575035711626871"));
food.burgers(new Menuitem("Pizzaburgare", 550, 2432,["Ost","Tomat","Saltgurka","Bröd"], false, true, 8, "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiAvdW6h43mAhXVwsQBHY3lDisQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.helagotland.se%2Fnyheter%2Fhemlagad-burgare-15602138.aspx&psig=AOvVaw33KD45WY6-LAKbI1YqorXI&ust=1575035711626871"));
food.burgers(new Menuitem("Gammaldags burgare", 1, 93293,["Ost","Tomat","Saltgurka","Bröd"], false, false, 3, "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi9oqq1h43mAhWSepoKHcSbB3AQjRx6BAgBEAQ&url=https%3A%2F%2Fmallorcaguide.se%2Fata-dricka%2Frestauranger%2Frestauranger-i-palma-de-mallorca%2Fhamburger-restauranger%2F&psig=AOvVaw33KD45WY6-LAKbI1YqorXI&ust=1575035711626871"));

/*
var myElement = document.getElementById("myID");
for (var i = 0 in order) {
  if (order[i].stock > 0) {
    var listItem = document.createElement("li");
    var listValue = document.createTextNode(order[i].name);
    listItem.appendChild(listValue);
    myElement.appendChild(listItem);

if (order[i].lactos || order[i].gluten)
{
var listItem2 = document.createElement("dd");
var listValue2 = document.createTextNode("Innehåller gluten eller laktos");
listItem2.appendChild(listValue2);
myElement.appendChild(listItem2);
}

  }
}

if ('gluten' === true in order)
  console.log("Ja det är gluten i");
else {
  console.log("Nej inget gluten");
}
if ('lactose' === true in order)
  console.log("Ja det är laktos i");
else {
  console.log("Nej inget laktos");
} */
