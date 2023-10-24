$(document).ready(function () {

    $("form").submit(function (e) { 

        e.preventDefault();

        var questionAnswers = [];

        questionAnswers.push($("#question-1-selection").val(),$("#question-2-selection").val(), $("#question-3-selection").val(), $("#question-4-selection").val(), $("#question-5-selection").val())

        let correctAnswers = ["b","d","d","c","c"];

        var totalPoints = 0;
        let wrongQuestions = [];

        $(questionAnswers).each(function(index, value){
            if (value === correctAnswers[index]){
                totalPoints++;
            }
            else{
                wrongQuestions.push(Number(index)+1)
            }
        });

        $("#result").css("visibility", "visible")

        if(totalPoints < 5){
            $("#wrong-questions").text("As questões " + wrongQuestions + " Estão erradas")
            $("#wrong-questions-title").css("visibility", "visible")
            $("#wrong-questions-title").css("display", "block")
            $("#wrong-questions").css("visibility", "visible")
            $("#wrong-questions").css("display", "flex")
        }
        else {
            $("#wrong-questions").css("visibility", "hidden")
            $("#wrong-questions").css("display", "none")
            $("#wrong-questions-title").css("visibility", "hidden")
            $("#wrong-questions-title").css("display", "none")    
        }

        $("#total-grade").text(totalPoints + "/5");
        sessionStorage.setItem("finalGrade", totalPoints);

    });

});