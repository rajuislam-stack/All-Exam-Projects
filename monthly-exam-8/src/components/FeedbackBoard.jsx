import { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import WelcomeForm from "./WelcomeForm";

export default function FeedBackBoard() {
   const [isFeedbackFormActive, setIsFeedbackFormActive] = useState(true);
   const [userName, setUserName] = useState('');
   const [feedbackMessage, setFeedbackMessage] = useState('');

   let showForm;

   if(isFeedbackFormActive){
    showForm = <FeedbackForm onToogleForm = {toogleForm} onHandleNameChange = {handleNameChange} onHandleMessageChange = {handleMessageChange} userName ={userName} feedbackMessage ={feedbackMessage}/>
   }
   else{
    showForm = <WelcomeForm onToogleForm = {toogleForm} userName = {userName} feedbackMessage ={feedbackMessage} onHandleNameChange= {handleNameChange} onHandleMessageChange = {handleMessageChange}/>
   }


   function toogleForm(){
    if(userName == ''){
      alert('Please enter your name!')
      return;
    }
    else if(feedbackMessage == ''){
      alert('Please write something !')
      return;
    }
    setIsFeedbackFormActive(!isFeedbackFormActive);
   }
   
   function handleNameChange(name){
   setUserName(name)
   }

   function handleMessageChange(message){
    setFeedbackMessage(message)
   }
   
  return (
    <div id="main-div">
      { showForm }
    </div>
  )
}
