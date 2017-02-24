"use strict";

var CarLot = (function(carLot){

    var inventory = [];

        carLot.loadInventory = function(callback) {
            var inventoryLoader = new XMLHttpRequest();

            inventoryLoader.addEventListener("load", function(event) {
                console.log("yay your car inventory loaded");
                var inventory = JSON.parse(event.target.responseText);
                populatePage(inventory);
            });

            inventoryLoader.addEventListener("error", function(event) {
                console.log("sorry, no cars are showing up");
            });

            inventoryLoader.open("GET", "inventory.json");
            inventoryLoader.send();
        };

        carLot.loadInventory();
    

        function populatePage(inventory){ //THIS WORKS--MUST HAVE
            console.log("page is now populated");
            var carList = document.getElementById("carsHere");
            //loop through JSON file
            for (var i = 0; i < inventory.length; i++) {
                var makeData = inventory[i].make;
                var modelData = inventory[i].model;
                var yearData = inventory[i].year;
                var priceData = inventory[i].price;
                var descData = inventory[i].description;

                carList.innerHTML += 
                `<div class="carCard container">
                    <div class="row col-md-12 cardStyle">
                        <div class="col-md-3" class="originalStyle" id="carInfo"><h4>${yearData} ${makeData} ${modelData}</h4></div>
                        <div class="col-md-3 price"><h4>${priceData}</h4></div>
                        <div class="col-md-6 descrip"><h5 class="descEdit">${descData}</h5></div>
                    </div>
                </div>`;
            }

            CarLot.activateEvents();
      
        }

          return carLot;  



})(CarLot || {});


    // Need to expose a public getter and setter (something like below)

//  originalSandwich.getToppingPrice = function(topping){
//      return toppingPrices[topping]; //getter
//  };

//  originalSandwich.setTopping = function(obj) {
//      console.log("obj", obj);
