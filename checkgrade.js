function checkGrade() {
  var grade, text;

  // Get the value of the input field with id="grade"
  grade = document.getElementById("grade").value;

  // If grade is Not a Number
  if (isNaN(grade)) {
    text = "Grade not valid";
  } else {
    // If grade = 0-50
    if (grade >= 0 && grade <= 50){
      text = "Sorry, You Failed!";
    // If grade = 51-60
    } else if (grade >= 51 && grade <= 60){
      text = "Congrats, You barely passed.";
    // If grade = 61-70
    } else if (grade >= 61 && grade <= 70){
      text = "Congrats, You passed.";
    // If grade = 71-80
    } else if (grade >= 71 && grade <= 80){
      text = "Congrats, You passed. Good job!";
    // If grade = 81-90
    } else if (grade >= 81 && grade <= 90){
      text = "Congrats, You passed. You're on your way to the top!";
    // If grade = 91-100
    } else if (grade >= 91 && grade <= 100){
      text = "Congrats, You passed. Excellent!";
    } else {
      text = "Grade can only be from 0 to 100";
    }
  }
  //Display message
  document.getElementById("message").innerHTML = text;
}