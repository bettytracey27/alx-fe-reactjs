import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormikForm() {
  // Step 1: Define validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  // Step 2: Handle form submission
  const handleSubmit = (values) => {
    alert(`Registration successful!\nUsername: ${values.username}\nEmail: ${values.email}`);
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Registration Form (Formik)</h2>

        <div style={{ marginBottom: '10px' }}>
          <label>Username:</label><br />
          <Field name="username" type="text" />
          <div style={{ color: 'red' }}>
            <ErrorMessage name="username" />
          </div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <Field name="email" type="email" />
          <div style={{ color: 'red' }}>
            <ErrorMessage name="email" />
          </div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label><br />
          <Field name="password" type="password" />
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
