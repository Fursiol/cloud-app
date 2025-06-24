package com.example.studentapp.util;

import com.example.studentapp.entity.Student;
import com.example.studentapp.repository.StudentRepository;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CsvImporter {

    private final StudentRepository studentRepository;

    public CsvImporter(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @PostConstruct
    public void importCsv() throws Exception {
        if (studentRepository.count() > 0) {
            return;
        }

        Reader reader = new InputStreamReader(
                getClass().getClassLoader().getResourceAsStream("student_habits_performance.csv"));

        CSVParser parser = CSVFormat.DEFAULT
                .withFirstRecordAsHeader()
                .parse(reader);

        List<Student> students = parser.getRecords().stream().map(this::toStudent).collect(Collectors.toList());
        studentRepository.saveAll(students);

        System.out.println("Zaimportowano " + students.size() + " rekordów z CSV.");
    }

    private Student toStudent(CSVRecord record) {
        Student s = new Student();
        s.setStudentId(record.get("student_id"));
        s.setAge(Integer.parseInt(record.get("age")));
        s.setGender(record.get("gender"));
        s.setStudyHoursPerDay(Double.parseDouble(record.get("study_hours_per_day")));
        s.setSocialMediaHours(Double.parseDouble(record.get("social_media_hours")));
        s.setNetflixHours(Double.parseDouble(record.get("netflix_hours")));
        s.setPartTimeJob(record.get("part_time_job"));
        s.setAttendancePercentage(Double.parseDouble(record.get("attendance_percentage")));
        s.setSleepHours(Double.parseDouble(record.get("sleep_hours")));
        s.setDietQuality(record.get("diet_quality"));
        s.setExerciseFrequency(Integer.parseInt(record.get("exercise_frequency")));
        s.setParentalEducationLevel(record.get("parental_education_level"));
        s.setInternetQuality(record.get("internet_quality"));
        s.setMentalHealthRating(Integer.parseInt(record.get("mental_health_rating")));
        s.setExtracurricularParticipation(record.get("extracurricular_participation"));
        s.setExamScore(Double.parseDouble(record.get("exam_score")));
        return s;
    }
}
