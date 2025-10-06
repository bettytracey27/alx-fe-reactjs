import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>User Registration (Controlled Component)</h1>
      <RegistrationForm />

      <hr style={{ margin: '40px 0' }} />

      <h1>Advanced Registration (Formik)</h1>
      <FormikForm />
    </div>
  );
}

export default App;


