package com.example.studentapp.controller;

import com.example.studentapp.entity.Student;
import com.example.studentapp.repository.StudentRepository;
import com.example.studentapp.service.StudentStatsService;
import org.springframework.web.bind.annotation.*;
import com.example.studentapp.dto.StudentStats;
import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentRepository repository;
    private final StudentStatsService statsService;

    public StudentController(StudentRepository repository, StudentStatsService statsService) {
        this.repository = repository;
        this.statsService = statsService;
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    @GetMapping(params = "gender")
    public List<Student> getByGender(@RequestParam String gender) {
        return repository.findByGender(gender);
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return repository.save(student);
    }

    @PutMapping
    public Student updateStudent(@RequestBody Student student) {
        return repository.save(student);
    }

    @GetMapping("/stats")
    public StudentStats getStats() {
        return statsService.getStats();
    }
}
