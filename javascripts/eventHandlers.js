"use strict";

// The second IIFE should augment the original one with a function that creates
// all of the eventHandlers that you need for the application. Name the function activateEvents.

var CarLot = (function (carLot) {

	var inputField = document.getElementById("searchBar");
	var searchResult = document.getElementsByClassName("descrip");
	var carCards = document.getElementsByClassName("carCard");
	 
	//to target specific car clicked on and then do something
	carLot.activateEvents = function() {
		var carCards = document.getElementsByClassName("carCard");
			console.log("event listeners added");
				for (var i = 0; i < carCards.length; i++) {
				//listener to change car styling when car specific element is clicked
				carCards.item(i).addEventListener("click", carLot.changeCarStyling);
			}
	};
		//function icnvoked on element click
		carLot.changeCarStyling = function(event) {
			console.log("look ma I changed the car element style");
			var styleTarget = event.currentTarget;
			//loop to determine which car is being clicked on and remove the newStyle--confusing to look at bc written before newStyle is even added--but it works!
				for (var i = 0; i < carCards.length; i++){
					carCards[i].classList.remove("newStyle");
				}
				//adds thicker border/background color
				styleTarget.classList.add("newStyle");
				//clears input text/ moves cursor to input
				carLot.clearInputMoveCursor();
			};

		//On click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
		carLot.clearInputMoveCursor = function(event){ //called in changeCarStyling function
				console.log("hello from inside clearInputMoveCursor");
					var inputField = document.getElementById("searchBar");
					console.log("inputField", inputField);
							inputField.value = ""; //clears the value
							inputField.focus(); //puts cursor in text input
							inputField.addEventListener("keyup", carLot.editDescription);
			};

		//When you start typing into the navbar's text input, the description, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly (AKA edit description)
		carLot.editDescription = function() {
			var descriptionBox = document.getElementsByClassName("descEdit");
			var inputField = document.getElementById("searchBar");

				for (var i = 0; i < carCards.length; i++) {
					//to target WHICH card currently clicked on/ to edit
					if (carCards[i].classList.contains("newStyle")) {
						descriptionBox[i].innerHTML = inputField.value;
					}
				}
		};



return carLot; //MUST have for cars to show on page

})(CarLot || {});


