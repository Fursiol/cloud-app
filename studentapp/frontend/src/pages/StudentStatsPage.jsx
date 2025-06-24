import React, { useEffect, useState } from 'react';

const StudentStatsPage = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('/students/stats')
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error('Error fetching stats:', err));
  }, []);

  if (!stats) return <div>Loading stats...</div>;

  return (
    <div>
      <h1>Student Statistics</h1>
      <ul>
         <li>Average Exam Score: {stats.averageExamScore != null ? stats.averageExamScore.toFixed(2) : 'N/A'}</li>
         <li>Average Study Hours: {stats.averageStudyHours != null ? stats.averageStudyHours.toFixed(2) : 'N/A'}</li>
         <li>Average Sleep Hours: {stats.averageSleepHours != null ? stats.averageSleepHours.toFixed(2) : 'N/A'}</li>
         <li>Most Common Diet: {stats.mostCommonDiet || 'N/A'}</li>
      </ul>
    </div>
  );
};

export default StudentStatsPage;
