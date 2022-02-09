
function Question(id, body, choices, RightAnswer) {
    this.id = id;
    this.body = body;
    this.choices = choices;
    this.RightAnswer = RightAnswer;

}


function Answer(id, value) {
    this.id = id;
    this.value = value;
}

var ans1 = new Answer(1, "Parameters with which functions are called")
var ans2 = new Answer(2, "Parameters which are used in the definition of the function")
var ans3 = new Answer(3, "Variables other than passed parameters in a function")
var ans4 = new Answer(3, "Variables that are never used in the function")
var q1_choices = [ans1, ans2, ans3, ans4]
var q1 = new Question(1, "Which of the following statements is correct about the formal parameters in C++?", q1_choices, q1_choices[0])


var ans5 = new Answer(5, "Semi Object-oriented or Partial Object-oriented")
var ans6 = new Answer(6, "Not Object oriented")
var ans7 = new Answer(7, "Pure Object oriented")
var ans8 = new Answer(8, "None of the above")
var q2_choices = [ans5, ans6, ans7, ans8]
var q2 = new Question(2, "The C++ language is ______ object-oriented language.", q2_choices, q2_choices[0])


var ans9 = new Answer(9, "Middle-level language")
var ans10 = new Answer(10, "High-level Language")
var ans11 = new Answer(11, "Low-level language")
var q3_choices = [ans9, ans10, ans11, ans8]
var q3 = new Question(3, "C++ is a ___ type of language.", q3_choices, q3_choices[0])


var ans12 = new Answer(12, "An array is a set of similar data items")
var ans13 = new Answer(13, "An array is a set of distinct data items")
var ans14 = new Answer(14, "An array can hold different types of datatypes")
var q4_choices = [ans12, ans13, ans14, ans8]
var q4 = new Question(4, "Which of the following refers to characteristics of an array?", q4_choices, q4_choices[0])


var ans15 = new Answer(15, "init array []")
var ans16 = new Answer(16, "int array [5];")
var ans17 = new Answer(17, "Array[5];")
var q5_choices = [ans15, ans16, ans17, ans8]
var q5 = new Question(5, "Which of the following is the correct syntax for declaring the array?", q5_choices, q5_choices[0])

var arr = [q1, q2, q3, q4, q5]
var questions = []

for (var i = 0; i < 5; i++) {
    var index = Math.floor((Math.random() * arr.length) + 1) - 1;
    questions.push(arr[index]);
    arr.splice(index, 1);
}



var question_count = 0;
window.onload = function () {
    show(question_count);

}


function show(count) {
    var question = document.getElementById("questions");
    var questionNumberSpan = document.getElementById("qNumber")

    var questionInArray = questions[count];
    var QuestionOption = questionInArray.choices;

    var valueOption = []

    for (var i = 0; i < QuestionOption.length; i++) {
        valueOption.push(QuestionOption[i].value)
    }

    var [first, second, third, fourth] = valueOption;

    questionNumberSpan.textContent = count + 1
    question.innerHTML = `
        <h2>Q${count + 1}. ${questions[count].body}</h2>
        <ul class="option_group">
        <li class="option">${first}</li>
        <li class="option">${second}</li>
        <li class="option">${third}</li>
        <li class="option">${fourth}</li>
    </ul> 
        `;
    toggleActive();
}

function toggleActive() {
    var option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
            studentAnswer();
        };
    }

}


function next() {

    if (question_count < questions.length - 1) {
        question_count++;
        show(question_count)
    }
    // if (question_count == questions.length - 1) {
    //     var btn_submit = document.getElementById("btn_submit")
    //     btn_submit.style.display = "inline"
        

    // }
    saveActive(question_count);

}

function previous() {

    if (question_count > 0) {
        question_count--;
        show(question_count)
        // var btn_submit = document.getElementById("btn_submit")
        // btn_submit.style.display = "none"

    }
    saveActive(question_count);
}


var dt = new Date(new Date().setTime(0))
var ctime = dt.getTime();
var seconds = Math.floor((ctime % (1000 * 60)) / 1000);
var minutes = Math.floor((ctime % (1000 * 60 * 60)) / (1000 * 60));
var time = 0;
var mytime = setInterval(function () {
    time++;
    if (seconds < 59) {
        seconds++;
    } else {
        seconds = 0;
        minutes++;
    }
    let formatted_sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let formatted_min = minutes < 10 ? `0${minutes}` : `${minutes}`
    document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
    if (document.querySelector("span.time").innerHTML === "05 : 00") {
        submit();
    }

}, 1000);






function submit() {
    var grade = checkAnswer();
    sessionStorage.setItem("time", document.querySelector("span.time").innerHTML);
    sessionStorage.setItem("grade", grade);
    sessionStorage.setItem("questionNumber", stuAnswer.length);
    clearInterval(mytime);
    location.replace("end.html")

}


function checkAnswer() {
    let points = 0;
    for (var i = 0; i < stuAnswer.length; i++) {
        for (var j = 0; j < questions.length; j++) {
            if (stuAnswer[i].QId == questions[j].id) {
                if (stuAnswer[i].user_answer == questions[j].RightAnswer.value) {
                    points += 10;
                }
            }
        }
    }
    return points;

}



function mark() {
    if (question_count < questions.length) {
        var markDiv = document.getElementsByClassName("Mark-Question")[0]
        var marDivChild = markDiv.children;

        if (marDivChild.length == 0) {
            var div = document.createElement('div');
            div.id = questions[question_count].id;
            div.className = "markDiv1";
            div.innerHTML = "Q" + (question_count + 1) + ") ";

            div.onclick = function () {

                for (var i = 0; i < questions.length; i++) {
                    if (questions[i].id == this.getAttribute("id")) {
                        question_count = i;
                    }
                }
                show(question_count)
                // var btn_submit = document.getElementById("btn_submit")
                // btn_submit.style.display = "none"

                // for (var i = 0; i < questions.length; i++) {
                //     if (questions[questions.length - 1].id == this.getAttribute("id")) {
                //         btn_submit.style.display = "inline-block"
                //     }
                // }

            
                saveActive(question_count);
                // this.remove()
            }
            markDiv.appendChild(div)

        } else {
            var idNotFound = false;
            for (var i = 0; i < marDivChild.length; i++) {
                var marDivChildId = marDivChild[i].getAttribute("id")
                if (questions[question_count].id == marDivChildId) {
                    idNotFound = true;
                }

            }
            if (!idNotFound) {
                var div = document.createElement('div');
                div.id = questions[question_count].id;
                div.className = "markDiv1";
                div.innerHTML = "Q" + (question_count + 1) + ") "

                div.onclick = function () {
                    for (var i = 0; i < questions.length; i++) {
                        if (questions[i].id == this.getAttribute("id")) {
                            question_count = i;
                        }
                    }
                    show(question_count)
                    // var btn_submit = document.getElementById("btn_submit")
                    // btn_submit.style.display = "none"

                    // for (var i = 0; i < questions.length; i++) {
                    //     if (questions[questions.length - 1].id == this.getAttribute("id")) {
                    //         btn_submit.style.display = "inline-block"
                    //     }
                    // }

                
                    saveActive(question_count);
                    // this.remove();
                }
                markDiv.appendChild(div)
            }

        }
    }



}


var stuAnswer = [];
function studentAnswer() {
    var option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
            var user_answer = document.querySelector("li.option.active").innerHTML;
            var QId = questions[question_count].id;
            if (stuAnswer.length == 0) {
                stuAnswer.push({ QId, user_answer });
            } else {
                var IdEqual = false;
                for (var j = 0; j < stuAnswer.length; j++) {
                    console.log(stuAnswer[j].QId)
                    if (stuAnswer[j].QId == QId) {
                        stuAnswer.splice(j, 1)
                        stuAnswer.push({ QId, user_answer });
                        IdEqual = true;
                    }
                }
                if (!IdEqual) {
                    stuAnswer.push({ QId, user_answer });
                }

            }
        }

    }
    console.log(stuAnswer)

}


function saveActive(question_count) {
    var option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        for (let j = 0; j < stuAnswer.length; j++) {
            if (option[i].innerHTML == stuAnswer[j].user_answer && stuAnswer[j].QId == questions[question_count].id) {
                option[i].classList.add("active");
            }
        }
    }
}

