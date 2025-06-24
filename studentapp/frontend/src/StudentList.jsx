import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [genderFilter, setGenderFilter] = useState("all");

  useEffect(() => {
    const url =
      genderFilter === "all" ? "/students" : `/students?gender=${genderFilter}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) =>
          a.studentId.localeCompare(b.studentId)
        );
        setStudents(sorted);
      });
  }, [genderFilter]);

  return (
    <div style={{ overflowX: 'auto' }}>
      <h2>Student List</h2>
      <div style={{ marginBottom: "1rem" }}>
        <label>Filter by gender: </label>
        <select
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Actions</th>
            <th>Student ID</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Study Hours/Day</th>
            <th>Social Media Hours</th>
            <th>Netflix Hours</th>
            <th>Part-Time Job</th>
            <th>Attendance %</th>
            <th>Sleep Hours</th>
            <th>Diet Quality</th>
            <th>Exercise Frequency</th>
            <th>Parental Education</th>
            <th>Internet Quality</th>
            <th>Mental Health Rating</th>
            <th>Extracurriculars</th>
            <th>Exam Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.studentId}>
              <td>
                 <Link to={`/edit/${s.studentId}`}>Edit</Link>
              </td>
              <td>{s.studentId}</td>
              <td>{s.age}</td>
              <td>{s.gender}</td>
              <td>{s.studyHoursPerDay}</td>
              <td>{s.socialMediaHours}</td>
              <td>{s.netflixHours}</td>
              <td>{s.partTimeJob}</td>
              <td>{s.attendancePercentage}</td>
              <td>{s.sleepHours}</td>
              <td>{s.dietQuality}</td>
              <td>{s.exerciseFrequency}</td>
              <td>{s.parentalEducationLevel}</td>
              <td>{s.internetQuality}</td>
              <td>{s.mentalHealthRating}</td>
              <td>{s.extracurricularParticipation}</td>
              <td>{s.examScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
