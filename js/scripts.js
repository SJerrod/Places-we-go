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

$(document).ready(function() {
  $("#addPlace").submit(function(event) {
    event.preventDefault();

    let city = $("input#addCity").val();
    let country = $("input#addCountry").val();
    let landmark = $("input#addLandmark").val();
    let food = $("input#addFood").val();
    let pop = $("input#addPop").val();
    let lang = $("input#addLang").val();
    let newPlace = new Place(city, country, landmark, food, pop, lang);
    placeList.addPlace(newPlace);
    displayPlaceDetails(placeList)


    $(".row").append(newPlace) 
    $(".city").text(newPlace.city);
    $(".country").text(newPlace.country);
    $(".landmark").text(newPlace.landmark);
    $(".food").text(newPlace.food);
    $(".population").text(newPlace.pop);
    $(".language").text(newPlace.lang);
  });
    $("h2").click(function() {
      $("p").toggle();
    });
});