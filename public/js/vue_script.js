var socket = io();

var vm = new Vue({
  el: '#vueMain',
  data: {
    arbitraryVariableName: 'Klicka på valfri burgare',
    vueBurg: burgers,
    chosenBurger: [],
    name: "",
    email: "",
    payment: "Swish",
    picked: "Female",
    deliveryLocation: {
      x: 0,
      y: 0
    },
    orderNo: 0,
    details: {}

  },

  created: function() {
    socket.on('initialize', function(data) {
      this.orderNo = (Object.keys(data.orders).length);
    }.bind(this));
  },

  methods: {
    getNextOrder: function() {
            this.orderNo = this.orderNo + 1;
            return this.orderNo;
        },
        displayOrder: function (event) {
            var offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top
            };
            this.deliveryLocation.x = event.clientX - 10 - offset.x;
            this.deliveryLocation.y = event.clientY - 10 - offset.y;
        },
        addOrder: function (event) {
          console.log("Utskrift från vue vid gbg-knapp tryck");
          console.log(this.customerInfo);
            var theBurgers = " " + this.chosenBurger;
            var customerInfo = "" + this.name + ", " + this.email + ", " + this.payment + ", " + this.picked;
            var locationx = this.deliveryLocation.x;
            var locationy = this.deliveryLocation.y;

            socket.emit("addOrder", {
                orderId: this.getNextOrder(),
                details: {x: locationx, y: locationy},
                orderItems: [theBurgers, customerInfo]

            });
            document.getElementById("pressedButton").style.display = "block";
    }
  }
});