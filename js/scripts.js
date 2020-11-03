// Business Logic
function PlaceList() {
  this.places = [];
  this.currentId = 0; 
}

PlaceList.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

PlaceList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlaceList.prototype.findPlace = function(id) {
  for (let i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places[i];
      }
    }
  };
  return false;
}

PlaceList.prototype.deletePlace = function(id) {
  for (let i=0; i< this.places.length; i++) {
    if(this.places[i]) {
      if (this.places[i].id == id) {
        delete this.places[i];
        return true;
      }
    }
  };
  return false
}

function Place(city, country, landmark, food, pop, lang) {
  this.city = city;
  this.country = country;
  this.landmark = landmark;
  this.food = food;
  this.pop = pop;
  this.lang = lang;
}

// User Logic
let placeList = new PlaceList();

function displayPlaceDetails(placeListToDisplay) {
  let destinationList = $("ul#places");
  let htmlForPlacesInfo = "";
  placeListToDisplay.places.forEach(function(place) {
    htmlForPlacesInfo += "<li id=" + place.id + ">" + place.city + "</li>";
  });
  destinationList.html(htmlForPlacesInfo);
};

function showPlace(placeId) {
  const newPlace = placeList.findPlace(placeId);
  $("#showPlace").show() ;
  $(".city").html(newPlace.city);
  $(".country").html(newPlace.country);
  $(".landmark").html(newPlace.landmark);
  $(".food").html(newPlace.food);
  $(".population").html(newPlace.pop);
  $(".language").html(newPlace.lang);
  // Delete button not showing up
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + place.id + ">Delete</button>");
}

function attachPlaceListeners() {
  $("ul#places").on("click", "li", function() {
    showPlace(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    placeList.deletePlace(this.id);
    $("#showPlace").hide();
    displayPlaceDetails(placeList);
  });
};

$(document).ready(function() {
  attachPlaceListeners();
  $("#addPlace").submit(function(event) {
    event.preventDefault();

    let city = $("input#addCity").val();
    let country = $("input#addCountry").val();
    let landmark = $("input#addLandmark").val();
    let food = $("input#addFood").val();
    let pop = $("input#addPop").val();
    let lang = $("input#addLang").val();
    
    // this clears the form fields
    $("input#addCity").val("");
    $("input#addCountry").val("");
    $("input#addLandmark").val("");
    $("input#addFood").val("");
    $("input#addPop").val("");
    $("input#addLang").val("");

    let newPlace = new Place(city, country, landmark, food, pop, lang);
    placeList.addPlace(newPlace);
    displayPlaceDetails(placeList)

  });
});