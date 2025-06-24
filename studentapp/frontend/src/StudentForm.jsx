import React, { useState } from 'react';

const initialState = {
  studentId: '',
  age: '',
  gender: '',
  studyHoursPerDay: '',
  socialMediaHours: '',
  netflixHours: '',
  partTimeJob: '',
  attendancePercentage: '',
  sleepHours: '',
  dietQuality: '',
  exerciseFrequency: '',
  parentalEducationLevel: '',
  internetQuality: '',
  mentalHealthRating: '',
  extracurricularParticipation: '',
  examScore: '',
};

const StudentForm = ({ onStudentAdded }) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedForm = {
      ...form,
      age: Number(form.age),
      studyHoursPerDay: Number(form.studyHoursPerDay),
      socialMediaHours: Number(form.socialMediaHours),
      netflixHours: Number(form.netflixHours),
      attendancePercentage: Number(form.attendancePercentage),
      sleepHours: Number(form.sleepHours),
      exerciseFrequency: Number(form.exerciseFrequency),
      mentalHealthRating: Number(form.mentalHealthRating),
      examScore: Number(form.examScore),
    };

    fetch('/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formattedForm),
    })
      .then((res) => res.json())
      .then(() => {
        setForm(initialState);
        if (onStudentAdded) onStudentAdded();
      })
      .catch((err) => console.error('Error adding student:', err));
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {Object.keys(initialState).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={form[key]}
            onChange={handleChange}
            required={key === 'studentId'}
          />
        ))}
        <div style={{ gridColumn: 'span 2', textAlign: 'center' }}>
          <button type="submit">Add Student</button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
