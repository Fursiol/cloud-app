# StudentApp — Fullstack Student Management Application

**Tech Stack:** React (frontend) • Spring Boot (backend) • PostgreSQL (database)  
**Infrastructure:** Vagrant + Ansible • Docker • Kubernetes (kind) • Oracle Cloud Free Tier  

---

## Project Overview

**StudentApp** is a fullstack CRUD application for managing student records with additional data analysis capabilities. The project demonstrates a complete DevOps lifecycle, from local development environments to cloud deployment.

### 🔧 Core Features

- Add / Edit / Delete student records
- Browse and search student list
- Basic statistics (e.g. average grades)
- Responsive UI built with React
- REST API with Java Spring Boot
- Persistent PostgreSQL database

---

## Technologies Used

| Layer        | Technology                 |
|--------------|----------------------------|
| Frontend     | React + Vite               |
| Backend      | Java Spring Boot           |
| Database     | PostgreSQL                 |
| DevOps       | Vagrant + Ansible          |
| Containerization | Docker, Docker Compose |
| Orchestration | Kubernetes via kind       |
| Cloud        | Oracle Cloud (Free Tier)   |

---

## Stage 1: Virtualization with Vagrant & Ansible

Located in the `Vagrant + Ansible/` directory:
- `Vagrantfile` – defines a local Ubuntu VM
- `playbook.yml` – automates installation of Docker, Node.js, Java, and PostgreSQL


