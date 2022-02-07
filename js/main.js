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
function correctAnswer(userData) {
  for (let answer of userData) {
    var userKey = answer[0];
    var userValue = answer[1];
    if (userValue === quizData[userKey]) {
      score++;
    }
  }
  document.getElementById("score").innerText = scoreDiplay(score);
  userForm.style.display = "none";
}
// display the score to user
function scoreDiplay(score) {
  var score = (score / 5) * 100;
  var message = "";
  if (score < 50) {
    message = "Poor score retake the quiz";
  } else if (score < 80) {
    message = "Average score keep it up!";
  } else {
    message = "Excellent!";
  }
  return score + "%: " + message;
}
