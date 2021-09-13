var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

// $(".btn").click(function () {
//   var randomNumber = Math.random() * 10;
//   randomNumber = Math.floor(randomNumber);
//   randomNumber = randomNumber % 4;

//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour)
//     .fadeIn(100)
//     .fadeOut(100)
//     .fadeIn(100);

//   var butt = new Audio("sounds/" + randomChosenColour + ".mp3");
//   butt.play();
// });

//New Section

var userClickedPattern = [];

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});
