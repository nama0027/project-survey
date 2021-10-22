import React from 'react';

const SeventhQuestionReason = ({ textInput, performanceRange }) => {
  return (
    <div>
      <p className="question">
        7{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        Could you tell us why you rated {performanceRange}?
      </p>
      <div>
        <input
          type="Text"
          value={textInput}
          placeholder="Type your answer here..."
        />
      </div>
    </div>
  );
};

export default SeventhQuestionReason;
