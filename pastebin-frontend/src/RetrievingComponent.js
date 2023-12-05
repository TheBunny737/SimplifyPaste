import React, { useState } from 'react';
import axios from 'axios';

const RetrievingComponent = () => {
  const [pasteId, setPasteId] = useState('');
  const [pasteText, setPasteText] = useState('');

  const handleRetrieve = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/paste/${pasteId}`);
      setPasteText(response.data.text);
    } catch (error) {
      console.error('Error while retrieving:', error);
    }
  };

  return (
    <div>
      <input value={pasteId} onChange={(e) => setPasteId(e.target.value)} />
      <button onClick={handleRetrieve}>Retrieve</button>
      <div>
        <p>Paste Text:</p>
        <textarea value={pasteText} readOnly />
      </div>
    </div>
  );
};

export default RetrievingComponent;
