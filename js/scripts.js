// Business Logic
function Movie(movieType, time) {
  this.movieType = movieType;
  this.time = time;
}

function Person(age) {
  this.age = age;
}

function Price(movie, person) {
  this.movie = movie;
  this.person = person;
}



// Movie.prototype.getPrice = function() {
//   // if (this.movieType == 1) {
//   //   price += 15;
//   // } else if (this.movieType == 2) {
//   //   price += 10;
//   // } else {
//   //   alert("Not working!")
//   // }
//   return this.movieType;
// }

Price.prototype.getPrice = function() {
  debugger;
  var price = 0;
  if (this.movie.movieType === 1) {
    price += 15;
  } else if (this.movie.movieType === 2) {
    price += 10;
  } else {
    alert("Not working!")
  }
  if (this.movie.time === 2) {
    price -= 2;
  } else if (this.movie.time === 7) {
    price;
  } else {
    alert("Not working!")
  }
  if (this.person.age < 13) {
    price -= 2;
  } else if (this.person.age > 60) {
    price -= 5;
  } else {
    price;
  }
  return price;
}

// UI Logic

$(function() {
  $("form#formOne").submit(function(event) {
    // debugger;
    event.preventDefault();

    var movieType = parseInt($("#movieInput").val());
    var movieTime = parseInt($("#timeInput").val());
    var age = parseInt($("#ageInput").val());

    var newMovie = new Movie(movieType, movieTime);

    var newPerson = new Person(age);

    var newPrice = new Price(newMovie, newPerson);
    console.log(newPrice);

    $("#finalPrice").text("Your movie will cost $" + newPrice.getPrice() + ".00");
    $(".output").show();

  });
});
