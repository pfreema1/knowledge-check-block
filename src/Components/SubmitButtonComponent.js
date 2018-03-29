import React from 'react';

const SubmitButtonComponent = ({
  isClickable,
  hasClickedSubmit,
  handleSubmitClick
}) => {
  return (
    <div
      onClick={handleSubmitClick}
      className={
        'submit-button ' +
        (isClickable !== null
          ? 'submit-button--hoverable '
          : 'submit-button--inactive ') +
        (hasClickedSubmit ? 'fade-out' : '')
      }
    >
      SUBMIT
    </div>
  );
};

export default SubmitButtonComponent;
