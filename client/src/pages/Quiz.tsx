import React, { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  {
    question: "What percentage of Earth's water is in the oceans?",
    options: ["50%", "71%", "97%", "85%"],
    correct: 2
  },
  {
    question: "Which of these contributes most to ocean pollution?",
    options: ["Oil spills", "Plastic waste", "Industrial waste", "Sewage"],
    correct: 1
  },
  {
    question: "How many species of marine mammals exist?",
    options: ["Around 50", "Around 100", "Around 130", "Around 200"],
    correct: 2
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correct) {
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
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          {showScore ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
              <p className="text-lg text-gray-600">
                You scored {score} out of {questions.length}
              </p>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setScore(0);
                  setShowScore(false);
                }}
                className="mt-6 px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors duration-200"
              >
                Retry Quiz
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Question {currentQuestion + 1} of {questions.length}
                </h2>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <h3 className="text-lg text-gray-700 mb-6">
                {questions[currentQuestion].question}
              </h3>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(index)}
                    className="w-full p-4 text-left rounded-lg border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-200"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Quiz;