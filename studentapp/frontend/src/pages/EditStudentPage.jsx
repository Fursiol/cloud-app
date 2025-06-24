import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditStudentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`/students`)
      .then(res => res.json())
      .then(data => {
        const found = data.find(s => s.studentId === id);
        setStudent(found);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/students", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    }).then(() => navigate("/"));
  };

  if (!student) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Student: {student.studentId}</h2>
      <form onSubmit={handleSubmit}>
        <input name="age" value={student.age} onChange={handleChange} />
        <input name="gender" value={student.gender} onChange={handleChange} />
        <input name="studyHoursPerDay" value={student.studyHoursPerDay} onChange={handleChange} />
        <input name="socialMediaHours" value={student.socialMediaHours} onChange={handleChange} />
        <input name="netflixHours" value={student.netflixHours} onChange={handleChange} />
        <input name="partTimeJob" value={student.partTimeJob} onChange={handleChange} />
        <input name="attendancePercentage" value={student.attendancePercentage} onChange={handleChange} />
        <input name="sleepHours" value={student.sleepHours} onChange={handleChange} />
        <input name="dietQuality" value={student.dietQuality} onChange={handleChange} />
        <input name="exerciseFrequency" value={student.exerciseFrequency} onChange={handleChange} />
        <input name="parentalEducationLevel" value={student.parentalEducationLevel} onChange={handleChange} />
        <input name="internetQuality" value={student.internetQuality} onChange={handleChange} />
        <input name="mentalHealthRating" value={student.mentalHealthRating} onChange={handleChange} />
        <input name="extracurricularParticipation" value={student.extracurricularParticipation} onChange={handleChange} />
        <input name="examScore" value={student.examScore} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditStudentPage;
