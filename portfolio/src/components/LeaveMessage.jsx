import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IconButton, Tooltip } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import '../assets/styles/LeaveMessage.css';

const LeaveMessage = () => {
  const form = useRef();
  const [showForm, setShowForm] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p5dyraj', 'template_j23w8jz', form.current, {
        publicKey: 'HF_KHktroXRZDZFcf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    setShowForm(false); // Close the form after sending the email
  };

  const toggleForm = () => {
    setShowForm((prev) => !prev); // Toggle form visibility
  };

  return (
    <div className={`leave-msg-container ${showForm ? 'active' : ''}`}>
      <Tooltip title={showForm ? 'Close Message' : 'Leave a Message'}>
        <IconButton className="thumbnail-icon" onClick={toggleForm}>
          <MessageIcon id="msg-thumbnail" />
        </IconButton>
      </Tooltip>

      {showForm && (
        <div className="msg-form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      )}
    </div>
  );
};

export default LeaveMessage;
