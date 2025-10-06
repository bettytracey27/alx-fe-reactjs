import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormikForm() {
  // 1️⃣ Yup validation schema
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  // 2️⃣ Formik submit function
  const handleSubmit = (values, { resetForm }) => {
    alert(`Registration successful!\nUsername: ${values.username}\nEmail: ${values.email}`);
    resetForm(); // Clear form after submission
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema} // Attach Yup schema
      onSubmit={handleSubmit} // Formik submit
    >
      <Form>
        <h2>Registration Form (Formik)</h2>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="username">Username:</label><br />
          <Field id="username" name="username" type="text" />
          <div style={{ color: 'red' }}>
            <ErrorMessage name="username" />
          </div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label><br />
          <Field id="email" name="email" type="email" />
          <div style={{ color: 'red' }}>
            <ErrorMessage name="email" />
          </div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label><br />
          <Field id="password" name="password" type="password" />
          <div style={{ color: 'red' }}>
            <ErrorMessage name="password" />
          </div>
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;



