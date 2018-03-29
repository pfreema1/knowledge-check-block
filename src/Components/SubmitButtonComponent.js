import React from 'react';

const SubmitButtonComponent = ({
  isClickable,
  hasClickedSubmit,
  handleSubmitClick,
  handleSubmitButtonTransitionEnd,
  setSubmitButtonDisplay
}) => {
  return (
    <div
      onTransitionEnd={handleSubmitButtonTransitionEnd}
      onClick={handleSubmitClick}
      className={
        'submit-button ' +
        (isClickable !== null
          ? 'submit-button--hoverable '
          : 'submit-button--inactive ') +
        (hasClickedSubmit ? 'fade-out ' : '') +
        (setSubmitButtonDisplay ? 'set-no-display' : '')
      }
    >
      SUBMIT
    </div>
  );
};

export default SubmitButtonComponent;
