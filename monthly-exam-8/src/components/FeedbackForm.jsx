
export default function FeedbackForm({onToogleForm, onHandleNameChange, onHandleMessageChange, userName, feedBackMessage}) {
  return (
    <form onSubmit={(e)=>{
     e.preventDefault();
     onToogleForm('hello');
    }} id="feedback-form">
      
       <div>
        <h1 className="text">☁️ User Feedback Form</h1>
        <p className="text">We would love to hear your thought!</p>
       </div>

       <label>
        Your Name <br/>
        <input type="text" 
        placeholder="Enter your name"
        id="input-field"
        value={userName}
        onChange={(e)=>{onHandleNameChange(e.target.value)}}
         />
       </label> <br />

       <label>
        Your feedback <br/>
       < textarea
       id="text-area"
        placeholder="Write your comments here..."
        value={feedBackMessage}
        onChange={(e)=> onHandleMessageChange(e.target.value)}
        />
       </label> <br />

       <button id="feedback-btn">
        Submit Feedback
      </button>
    </form>
  )
}
