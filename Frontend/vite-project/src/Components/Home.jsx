import React, { useState } from 'react';
import axios from 'axios';
import './Home.css'; 

function Home() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [mcqs, setMcqs] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const topics = ['react', 'js', 'html', 'css'];

  const fetchMCQs = async (topic) => {
    try {
      const response = await axios.get(`http://localhost:4000/mcq/${topic}`,{ withCredentials: true });
      if (response.status === 200) {
        setMcqs(response.data);
        setSelectedAnswers({});
        setShowResult(false);
        setScore(0);
      } else {
        throw new Error('Failed to fetch MCQs');
      }
    } catch (error) {
      console.error('Error fetching MCQs:', error);
      alert("Login First")
    }
  };

  const handleOptionChange = (e, mcqIndex) => {
    setSelectedAnswers(prevAnswers => {
      const updatedAnswers = { ...prevAnswers };
      updatedAnswers[mcqIndex] = e.target.value;
      return updatedAnswers;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = 0;
    const result = mcqs.map((mcq, index) => {
      const selectedOption = selectedAnswers[index];
      if (selectedOption !== undefined && selectedOption !== null) {
        if (mcq.correctAnswerIndex.toString() === selectedOption.toString()) {
          newScore++;
          return { ...mcq, isCorrect: true };
        } else {
          return { ...mcq, isCorrect: false };
        }
      } else {
        return { ...mcq, isCorrect: false };
      }
    });
    setScore(newScore);
    setShowResult(true);
    setMcqs(result);
  };

  const shuffleMCQs = () => {
    const shuffledMCQs = [...mcqs];
    for (let i = shuffledMCQs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledMCQs[i], shuffledMCQs[j]] = [shuffledMCQs[j], shuffledMCQs[i]];
    }
    setMcqs(shuffledMCQs);
  };

  return (
    <div className="app-container">
      <h1 className="title">MCQ Quiz</h1>
     
      {showResult && (
  <div className="result-container">
    <h2 className="result-title">Result</h2>
    <p>Total Questions: {mcqs.length}</p>
    <p>Correct Answers: {score}</p>
    <h3>Answers:</h3>
    {mcqs.map((mcq, index) => (
      <div key={mcq._id} className="question-container">
        <p className="question">{index + 1}. {mcq.question}</p>
        <p className={mcq.isCorrect ? 'correct-answer' : 'wrong-answer'}>
          {mcq.isCorrect ? 'Correct' : 'Wrong'}
        </p>
        {mcq.isCorrect ? null : (
          <div className="correct-options">
            <p>Correct Option:</p>
            <ul>
              {mcq.options.map((option, optionIndex) => (
                mcq.correctAnswerIndex === optionIndex && (
                  <li key={optionIndex}>{optionIndex}.{option}</li>
                )
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
)}


      {!showResult && (
        
        <div className="topic-selection">
           <button onClick={shuffleMCQs}>Shuffle Questions</button>
          <h2 className="sub-title">Select a Topic</h2>
          <div className="topic-buttons">
            {topics.map((topic) => (
              <button
                key={topic}
                className={`topic-button ${selectedTopic === topic ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedTopic(topic);
                  fetchMCQs(topic);
                }}
              >
                {topic}
              </button>
            ))}
          </div>
          {mcqs.length > 0 && (
            <div className="quiz-container">
              <form onSubmit={handleSubmit}>
                {mcqs.map((mcq, index) => (
                  <div key={mcq._id} className="question-container">
                    <p className="question">{index + 1}. {mcq.question}</p>
                    <div className="options-container">
                      {mcq.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="option">
                          <input
                            type="radio"
                            id={`option_${index}_${optionIndex}`}
                            name={`question_${index}`}
                            value={optionIndex}
                            checked={selectedAnswers[index] === optionIndex.toString()}
                            onChange={(e) => handleOptionChange(e, index)}
                          />
                          <label htmlFor={`option_${index}_${optionIndex}`}>{option}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <button type="submit" className="submit-button">Submit</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
