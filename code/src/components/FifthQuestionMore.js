import React from 'react';
import './fifthQuestion.css';

const FifthQuestionMore = ({ whatsMissing, onWhatsMissingChange }) => {
  return (
    <div className="fifth-question">
      <p className="question">
        5{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        Is there anything you feel is missing?
      </p>
      <div>
        <input
          
          className="whats-missing"
          type="Text"
          placeholder="Type your answer here..."
          value={whatsMissing}
          onChange={onWhatsMissingChange}
        />
      </div>
    </div>
  );
};

export default FifthQuestionMore;
