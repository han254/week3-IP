const quizData = {
  quiz1: "clear",
  quiz2: "float",
  quiz3: "margin",
  quiz4: ".content",
  quiz5: "clear",
};
var count = 0;
var score = 0;

// listen to form submission and get user data
var userForm = document.getElementById("form");
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var userData = new FormData(userForm);
  correctAnswer(userData);
});

//  compare user's with correct answers
