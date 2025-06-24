import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentListPage from './pages/StudentListPage';
import StudentFormPage from './pages/StudentFormPage';
import StudentStatsPage from './pages/StudentStatsPage';
import EditStudentPage from './pages/EditStudentPage';

const App = () => (
  <Router>
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Student List</Link>
        <Link to="/add" style={{ marginRight: '15px' }}>Add Student</Link>
        <Link to="/stats">Statistics</Link>
      </nav>

      <Routes>
        <Route path="/" element={<StudentListPage />} />
        <Route path="/add" element={<StudentFormPage />} />
        <Route path="/stats" element={<StudentStatsPage />} />
        <Route path="/edit/:id" element={<EditStudentPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
