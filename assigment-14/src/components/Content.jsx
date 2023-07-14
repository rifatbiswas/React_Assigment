/* eslint-disable no-unused-vars */
import React, { useState } from 'react';


// eslint-disable-next-line react/prop-types
function Content({ onButtonClick }) {
  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleButtonClick = () => {
    onButtonClick(textareaValue);
  };

  return (
    <div className="content">
      <textarea
        className="textarea"
        placeholder="Enter text"
        onChange={handleTextareaChange}
      />
      <button className="button" onClick={handleButtonClick}>
        Display Text
      </button>
    </div>
  );
}

export default Content;
