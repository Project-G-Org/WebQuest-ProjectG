$(document).ready(function () {

    $("form").submit(function (e) { 

        e.preventDefault();

        var questionAnswers = [];

        questionAnswers.push($("#question-1-selection").val(),$("#question-2-selection").val(), $("#question-3-selection").val(), $("#question-4-selection").val(), $("#question-5-selection").val())

        let correctAnswers = ["b","a","c","d","a"];

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

        $("#wrong-questions").text("As questões " + wrongQuestions + " Estão erradas")
        $("#total-grade").text(totalPoints + "/5");
    });

});