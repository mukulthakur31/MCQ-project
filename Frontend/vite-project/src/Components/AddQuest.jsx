import React, { useState } from 'react';
import axios from 'axios';

function AddQuestion() {
  const [topic, setTopic] = useState('React'); // Default topic set to React
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleOptionChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:4000/mcq/add', {
        topic,
        question,
        options,
        correctAnswerIndex,
      },{
        withCredentials:true
      });
     
      setMessage('Question added successfully');
      
    } catch (error) {
      console.error('Error adding question:', error);
      alert(error.response.data.error);
      setMessage('Failed to add question');
    }
    setLoading(false);
  };

  return (
    <div className="add-question-container">
      <h2 className="add-question-heading">Add Question</h2>
      {message && <p>{message}</p>}
      <form className="add-question-form" onSubmit={handleSubmit}>
        <div>
          <label>Topic:</label>
          <select value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
          </select>
        </div>
        <div>
          <label>Question:</label>
          <textarea value={question} onChange={(e) => setQuestion(e.target.value)} required />
        </div>
        <div>
          <label>Options:</label>
          {options.map((option, index) => (
            <div key={index}>
              <input type="text" value={option} onChange={(e) => handleOptionChange(e, index)} required />
            </div>
          ))}
        </div>
        <div>
          <label>Correct Answer Index:</label>
          <input
            type="number"
            value={correctAnswerIndex || ''}
            onChange={(e) => setCorrectAnswerIndex(parseInt(e.target.value) || 0)}
            min="0"
            max="3"
            required
          />
        </div>
        <button type="submit" disabled={loading}>Add Question</button>
      </form>
    </div>
  );
}

export default AddQuestion;
