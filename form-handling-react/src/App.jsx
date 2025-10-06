import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm'; // Must match file name exactly

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>User Registration (Controlled Component)</h1>
      <RegistrationForm />

      <hr style={{ margin: '40px 0' }} />

      <h1>Advanced Registration (Formik)</h1>
      <FormikForm /> {/* Make sure this component is called exactly */}
    </div>
  );
}

export default App;



