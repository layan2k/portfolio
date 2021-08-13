import React from 'react';
import "./forms.css"
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mdoypkll");
  if (state.succeeded) {
      return <p>Thanks ! I will get back to you within 24 hours 🙂</p>;
  }
  return (
    <div className="form-container">
      <form  onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
      </label>
      <input
        className="name"
        id="name"
        type="text"
        name="name"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email Address:
      </label>
      <br />
      <input
      className="email"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Message:
      </label>
      <br />
      <textarea
      className="text-area"
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <br />
      <button  classname="sbtn" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}
function SubmitForm() {
  return (
    <ContactForm />
  );
}
export default SubmitForm;

