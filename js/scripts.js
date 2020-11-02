// Business Logic
function Place(city, country, landmark, food, pop, lang) {
  this.city = city;
  this.country = country;
  this.landmark = landmark;
  this.food = food;
  this.pop = pop;
  this.lang = lang;
}



// User Logic
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

    $("#showPlace").append(newPlace) 
    $(".city").text(newPlace.city);
    $(".country").text(newPlace.country);
    $(".landmark").text(newPlace.landmark);
    $(".food").text(newPlace.food);
    $(".population").text(newPlace.pop);
    $(".language").text(newPlace.lang);
  });
});

