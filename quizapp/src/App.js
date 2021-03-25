import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "I am good with mixing colors,fonts and layouts?",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
    {
      questionText: "I can easily create attractive visuals",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
    {
      questionText: "I consider myself a creative person",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
    {
      questionText: "I can easily represent human words, thoughts and emotions in a visual graphical manner",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
    {
      questionText: "Can you consistently come up with unique designs??",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
    {
      questionText: "I love puzzles that require me to use logic and reason to solve them.",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
    {
      questionText: "I am systematic executor; I prefer to break down a problem into small bits before I finally begin to work on it",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
    {
      questionText: "I can easily understand new and foreign concepts",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
    {
      questionText: "I love to and I can easily solve problems by creating solutions from scratch",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
    {
      questionText: "I prefer to work alone as opposed to in a team. Working alone helps me become more productive and creative",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
    {
      questionText: "I am a good storyteller and I can easily convey a message to an unknowing message to an unknowing audience",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
    {
      questionText: "I am investigative and curious. I try to dig into what I don’t know and I don’t easily stop at the obvious",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
    {
      questionText: "I can easily pick up on a hidden trend that has been going on",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
    {
      questionText: "I love mathematics and I consider it as one of my favorite subjects",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
    {
      questionText: "I can easily compute calculations in my head",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
    {
      questionText: "I am good at public speaking and I can easily communicate to others facts and findings unknown to them",
      answerOptions: [
        { answerText: "Strongly Agree ", isCorrect: false },
        { answerText: "Agree", isCorrect: false },
        { answerText: "Disagree ", isCorrect: true },
        { answerText: "Strongly Disagree ", isCorrect: false }
      ]
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnserButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the
      score when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1} </span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnserButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
