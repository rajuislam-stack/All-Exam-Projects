
export default function WelcomeForm({onToogleForm, userName, feedbackMessage, onHandleNameChange, onHandleMessageChange}) {
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      onHandleNameChange('');
      onHandleMessageChange('');
     onToogleForm();
    }} id="welcome-form">
      <div id="success">
        <i className="fa-solid fa-check"></i>
      </div>

       <h2>Thank you, {userName}!</h2>
      <p id="p-text">Your feedback has been successfully shared. We appritiate your valuable time.</p>

      <div id="show-message-div">
        <p>"<i>{feedbackMessage}</i>"</p>
      </div>

      <button id="another-feedback-btn">
        Submit Another Feedback
      </button>
    </form>
  )
}
