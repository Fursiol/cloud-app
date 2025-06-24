package com.example.studentapp.service;

import com.example.studentapp.dto.StudentStats;
import com.example.studentapp.entity.Student;
import com.example.studentapp.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class StudentStatsService {

    private final StudentRepository repository;

    public StudentStatsService(StudentRepository repository) {
        this.repository = repository;
    }

    public StudentStats getStats() {
        List<Student> students = repository.findAll();

        double avgExam = students.stream().mapToDouble(Student::getExamScore).average().orElse(0.0);
        double avgStudy = students.stream().mapToDouble(Student::getStudyHoursPerDay).average().orElse(0.0);
        double avgSleep = students.stream().mapToDouble(Student::getSleepHours).average().orElse(0.0);

        String mostCommonDiet = students.stream()
                .collect(Collectors.groupingBy(Student::getDietQuality, Collectors.counting()))
                .entrySet().stream()
                .max(Map.Entry.comparingByValue())
                .map(Map.Entry::getKey)
                .orElse("unknown");

        return new StudentStats(avgExam, avgStudy, avgSleep, mostCommonDiet);
    }
}
