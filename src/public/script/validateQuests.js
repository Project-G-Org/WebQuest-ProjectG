$(document).ready(function () {

    $("form").submit( async function (e) { 

        e.preventDefault();

        var questionAnswers = [];

        questionAnswers.push($("#question-1-selection").val(),$("#question-2-selection").val(), $("#question-3-selection").val(), $("#question-4-selection").val(), $("#question-5-selection").val())

        let result = await fetch('/userAnswers', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(questionAnswers)
        })
        .then(response => response.json())
        .then(data =>{
            let totalPoints = data.points
            let wrongQuestions = data.wrong

            return {
                totalPoints,
                wrongQuestions
            }
        });

        $("#result").css("visibility", "visible")

        if(result.totalPoints < 5){
            $("#wrong-questions").text("As questões " + result.wrongQuestions + " Estão erradas")
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

        $("#total-grade").text(result.totalPoints + "/5");
        sessionStorage.setItem("finalGrade", result.totalPoints);

    });

});