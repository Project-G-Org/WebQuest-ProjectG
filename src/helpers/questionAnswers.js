function treatAnswers(answers){
  
  const correctAnswers = ["b","d","d","c","c"];

  var totalPoints = 0;
  let wrongQuestions = [];

  answers.forEach((value, index) =>{
    if (value === correctAnswers[index]){
      totalPoints++;
    } else {
      wrongQuestions.push(Number(index)+1)
    };
  });
  return {
    points: totalPoints,
    wrong: wrongQuestions
  };
};

export default treatAnswers;