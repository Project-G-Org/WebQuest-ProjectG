$(document).ready(function () {

    $("form").submit(function () { 

        var questionAnswers = [];

        questionAnswers.push($("#question-1-selection").val(),$("#question-2-selection").val(), $("#question-3-selection").val(), $("#question-4-selection").val(), $("#question-5-selection").val())
        
        alert(questionAnswers)

        let correctAnswers = ["b","a","c","d","a"];

        var totalPoints = 0;

        $(questionAnswers).each(function(index, value){
            if (value === correctAnswers[index]){
                totalPoints++;
            }
            else{
                alert("Questão: " + (Number(index)+1) + " Está Errada.")
            }
        });

        alert("Acertou: " + totalPoints);
    });

});