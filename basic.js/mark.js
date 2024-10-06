let studentscore = 85;
let grade = getgrade(studentscore);

function getgrade(score) {
    if (score >= 80 && score < 100) {
        return "A";
    } else if (score >= 70 && score <= 79) {
        return "B";
    } else if (score >= 60 && score <= 69) {
        return "C";
    } else if (score >= 50 && score <= 59) {
        return "D";
    } else  {
        return "fail";
    }
}

console.log("the student's geade is",grade);

