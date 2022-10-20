import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const onFirstNameChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const onLastNameChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const onEmailChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    if (values.firstName && values.lastName && values.email) {
        setValid(true);
    }

    setSubmitted(true);
  }

  return (
    <div className="form-container">
        {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
      <form className="register-form" onSubmit={onFormSubmit}>
        {submitted && !values.firstName ? <span>Please enter a first name</span> : null}
        <input
          onChange={onFirstNameChange}
          value={values.firstName}
          className="form-field"
          id="first-name"
          name="firstName"
          placeholder="First Name"
          type="text"
        />
        {submitted && !values.lastName ? <span>Please enter a last name</span> : null}
        <input
          onChange={onLastNameChange}
          value={values.lastName}
          className="form-field"
          id="last-name"
          name="lastName"
          placeholder="Last Name"
          type="text"
        />
        {submitted && !values.email ? <span>Please enter an email</span> : null}
        <input
          onChange={onEmailChange}
          value={values.email}
          className="form-field"
          id="email"
          name="email"
          placeholder="Email"
          type="text"
        />
        <button className="form-field" type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;
