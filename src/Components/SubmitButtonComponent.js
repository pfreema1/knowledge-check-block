import React from 'react';

const SubmitButtonComponent = ({ isClickable }) => {
  return (
    <div
      className={
        'submit-button ' + (isClickable ? '' : 'submit-button--inactive')
      }
    >
      SUBMIT
    </div>
  );
};

export default SubmitButtonComponent;
