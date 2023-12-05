import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PastingComponent.css';

const PastingComponent = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePaste = async () => {
    if (text.trim() === '') {
      setError('Please enter text to paste.');
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/paste`, { text });
      console.log('Paste created with ID:', response.data.id);
      navigate(`/view/${response.data.id}`);
    } catch (error) {
      console.error('Error while pasting:', error);
    }
  };

  return (
    <div className="pasting-container">
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setError('');
        }}
        placeholder="Enter text to paste"
      />
      <button className="button" onClick={handlePaste}>Paste</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default PastingComponent;
