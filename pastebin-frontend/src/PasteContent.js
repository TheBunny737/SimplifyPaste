import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PasteContent.css'; // Import updated CSS file

const PasteContent = () => {
  const { id } = useParams();
  const [pasteText, setPasteText] = useState('');

  useEffect(() => {
    const fetchPasteContent = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/paste/${id}`);
        setPasteText(response.data.text);
      } catch (error) {
        console.error('Error fetching paste content:', error);
      }
    };

    fetchPasteContent();
  }, [id]);

  return (
    <div className="paste-content-container">
      <p className="paste-text">{pasteText}</p>
      <a href="/" className="link">Back to Home</a>
    </div>
  );
};

export default PasteContent;
