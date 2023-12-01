import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const KidsKnowledgeGame = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London"],
      answer: "Paris",
    },
    {
      question: "What is the largest continent in the world?",
      options: ["Europe", "Africa", "Asia"],
      answer: "Asia",
    },
    {
      question: "What is the tallest animal in the world?",
      options: ["Elephant", "Giraffe", "Horse"],
      answer: "Giraffe",
    },
  ];

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore((score) => score + 1);
    }
    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const renderQuestion = (props) => {
    return (
      <>
        <Text style={styles.questionText}>
          {questions[currentQuestion].question}
        </Text>
        {questions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </>
    );
  };

  const renderResult = () => {
    return (
      <>
        <Text style={styles.resultText}>
          You got {score} out of {questions.length} correct!
        </Text>
        <TouchableOpacity style={styles.restartButton} onPress={handleRestart}>
          <Text style={styles.restartButtonText}>Play Again</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Kids Knowledge Game</Text>
      {showResult ? renderResult() : renderQuestion()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: "#f00",
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  restartButton: {
    backgroundColor: "#f00",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  restartButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default KidsKnowledgeGame;
