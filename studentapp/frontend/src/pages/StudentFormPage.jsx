import React, { useState } from 'react';
import StudentForm from '../StudentForm';

const StudentFormPage = () => {
  const [refresh, setRefresh] = useState(false);
  return (
    <div>
      <h1>Add New Student</h1>
      <StudentForm onStudentAdded={() => setRefresh(!refresh)} />
    </div>
  );
};

export default StudentFormPage;
