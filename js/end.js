var user_fname = sessionStorage.getItem("fname");
var user_lname = sessionStorage.getItem("lname");
var user_grade = sessionStorage.getItem("grade");
var numberQuestion = sessionStorage.getItem("questionNumber");
var user_time = sessionStorage.getItem("time");
document.querySelector("span.name").innerHTML = user_fname+" "+user_lname;
document.querySelector("span.points").innerHTML = user_grade;
document.querySelector("span.numberQuestion").innerHTML = numberQuestion;
document.querySelector("span.time_taken").innerHTML = user_time;

