var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {

    //Get grade values
    var assignments = document.getElementById("assignments").value;
    var groupProject = document.getElementById("groupProjects").value; 
    var quizzes = document.getElementById("quizzes").value;
    var exams = document.getElementById("exams").value;
    var intex = document.getElementById("intex").value;

    //Grade weights
    var assignWeight = .5;
    var groupProjectWeight = .1;
    var quizWeight = .1;
    var examWeight = .2;
    var intexWeight = .1;

    //Calculate grade weights
    var assignFinal = assignments * assignWeight;
    var groupFinal = groupProject * groupProjectWeight;
    var quizFinal = quizzes * quizWeight;
    var examFinal = exams * examWeight;
    var intexFinal = intex * intexWeight;

    var finalGrade = 0;

    //Calculate final grade
    finalGrade = (assignFinal + groupFinal + quizFinal + examFinal + intexFinal);

    //Assign letter grade
    var letterGrade = "";
    if (finalGrade >= 94) {
        letterGrade = "A";
    }
    else if (finalGrade >= 90 && finalGrade < 94) {
        letterGrade = "A-";
    }
    else if (finalGrade >= 87 && finalGrade < 90) {
        letterGrade = "B+";
    }
    else if (finalGrade >= 84 && finalGrade < 87) {
        letterGrade = "B";
    }
    else if (finalGrade >= 80 && finalGrade < 84) {
        letterGrade = "B-";
    }
    else if (finalGrade >= 77 && finalGrade < 80) {
        letterGrade = "C+";
    }
    else if (finalGrade >= 74 && finalGrade < 77) {
        letterGrade = "C";
    }
    else if (finalGrade >= 70 && finalGrade < 74) {
        letterGrade = "C-";
    }
    else if (finalGrade >= 67 && finalGrade < 70) {
        letterGrade = "D+";
    }
    else if (finalGrade >= 64 && finalGrade < 67) {
        letterGrade = "D";
    }
    else if (finalGrade >= 60 && finalGrade < 64) {
        letterGrade = "D-";
    }
    else if (finalGrade < 60) {
        letterGrade = "E";
    }

    //Display letter grade and final grade to user
    alert("Letter grade: " + letterGrade + "\nPercentage: " + finalGrade);
});