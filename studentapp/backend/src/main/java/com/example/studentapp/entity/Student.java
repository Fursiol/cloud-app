package com.example.studentapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Data
@Entity
@Table(name = "student")
public class Student {

    @Id
    private String studentId;

    private int age;
    private String gender;
    private double studyHoursPerDay;
    private double socialMediaHours;
    private double netflixHours;
    private String partTimeJob;
    private double attendancePercentage;
    private double sleepHours;
    private String dietQuality;
    private int exerciseFrequency;
    private String parentalEducationLevel;
    private String internetQuality;
    private int mentalHealthRating;
    private String extracurricularParticipation;
    private double examScore;
}
