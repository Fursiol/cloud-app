package com.example.studentapp.dto;

public class StudentStats {
    private double averageExamScore;
    private double averageStudyHours;
    private double averageSleepHours;
    private String mostCommonDiet;

    public StudentStats(double averageExamScore, double averageStudyHours, double averageSleepHours, String mostCommonDiet) {
        this.averageExamScore = averageExamScore;
        this.averageStudyHours = averageStudyHours;
        this.averageSleepHours = averageSleepHours;
        this.mostCommonDiet = mostCommonDiet;
    }

    public double getAverageExamScore() {
        return averageExamScore;
    }

    public double getAverageStudyHours() {
        return averageStudyHours;
    }

    public double getAverageSleepHours() {
        return averageSleepHours;
    }

    public String getMostCommonDiet() {
        return mostCommonDiet;
    }
}
