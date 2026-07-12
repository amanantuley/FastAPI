# ⚡ FastAPI

> **Build High-Performance, Scalable & Production-Ready APIs with FastAPI**

![FastAPI](https://img.shields.io/badge/FastAPI-009688)
![Python](https://img.shields.io/badge/Python-3.12-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248)
![Docker](https://img.shields.io/badge/Docker-2496ED)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)
![License](https://img.shields.io/badge/License-MIT-green)

---

# 📖 About

**FastAPI** is a comprehensive repository dedicated to learning and building **modern, high-performance backend applications** using **FastAPI**.

This repository covers RESTful APIs, authentication, authorization, database integration, asynchronous programming, WebSockets, background tasks, file uploads, testing, Docker, and deployment with production-ready architecture.

Whether you're preparing for backend interviews, building scalable APIs, or creating enterprise applications, this repository provides practical implementations and best practices.

---

# 🎯 Objectives

- Learn FastAPI Fundamentals
- Build REST APIs
- Implement JWT Authentication
- Connect SQL & NoSQL Databases
- Master Async Programming
- Develop Scalable Backend Services
- Build Secure APIs
- Deploy Production Applications
- Learn API Testing
- Prepare for Backend Interviews

---

# 🏗 Architecture

```
                Client
                   │
                   ▼
             FastAPI Router
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
 Authentication         Business Logic
         │                   │
         └─────────┬─────────┘
                   ▼
              Database Layer
         ┌─────────┴─────────┐
         ▼                   ▼
    PostgreSQL          MongoDB
                   │
                   ▼
             Docker Deployment
```

---

# 🛠 Tech Stack

## Backend

- FastAPI
- Python
- Uvicorn
- Pydantic

---

## Authentication

- JWT
- OAuth2
- Passlib (Bcrypt)
- Python-JOSE

---

## Databases

- PostgreSQL
- MongoDB
- SQLAlchemy
- Alembic
- Motor

---

## DevOps

- Docker
- Docker Compose
- Nginx
- GitHub Actions

---

## Testing

- Pytest
- HTTPX

---

## API Documentation

- Swagger UI
- ReDoc
- OpenAPI

---

# 📂 Repository Structure

```
FastAPI/
│
├── Basics/
├── CRUD/
├── Authentication/
├── Authorization/
├── SQLAlchemy/
├── Alembic/
├── PostgreSQL/
├── MongoDB/
├── File-Upload/
├── Background-Tasks/
├── WebSockets/
├── Middleware/
├── Dependency-Injection/
├── Async/
├── Docker/
├── Testing/
├── Deployment/
├── Projects/
├── Documentation/
└── Examples/
```

---

# 📚 Topics Covered

## 🚀 FastAPI Basics

- Installation
- Routing
- Request Methods
- Path Parameters
- Query Parameters
- Request Body
- Response Models

---

## 🔐 Authentication

- JWT Authentication
- OAuth2 Password Flow
- Password Hashing
- Role-Based Access Control (RBAC)
- Access & Refresh Tokens

---

## 🗄 Database Integration

### PostgreSQL

- SQLAlchemy ORM
- CRUD Operations
- Relationships
- Transactions

### MongoDB

- Motor
- Async CRUD
- Collections
- Aggregation

---

## ⚡ Advanced Features

- Dependency Injection
- Middleware
- Background Tasks
- File Uploads
- Email Integration
- WebSockets
- Pagination
- Validation
- Exception Handling

---

## 🧪 Testing

- Unit Testing
- API Testing
- Integration Testing
- Pytest
- HTTPX

---

# 📦 Hands-on Projects

- Authentication System
- Blog API
- Task Management API
- E-Commerce Backend
- Healthcare Management API
- Library Management API
- Chat Application (WebSockets)
- File Upload Service
- URL Shortener API
- JWT Authentication API

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/amanantuley/FastAPI.git

cd FastAPI
```

---

## Create Virtual Environment

```bash
python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

### Linux/macOS

```bash
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Run Development Server

```bash
uvicorn app.main:app --reload
```

---

## Open API Documentation

Swagger UI

```
http://localhost:8000/docs
```

ReDoc

```
http://localhost:8000/redoc
```

---

# 📈 Learning Roadmap

### Beginner

- FastAPI Basics
- CRUD APIs
- Validation

### Intermediate

- Authentication
- PostgreSQL
- MongoDB
- SQLAlchemy

### Advanced

- WebSockets
- Background Tasks
- Docker
- CI/CD
- Production Deployment

---

# 🔒 Best Practices

- JWT Authentication
- Password Hashing
- Dependency Injection
- Environment Variables
- Database Migrations
- Input Validation
- Error Handling
- API Versioning
- Logging
- Dockerization

---

# 📈 Future Enhancements

- GraphQL
- Microservices
- gRPC
- Redis Caching
- Celery Background Workers
- Kubernetes Deployment
- AWS Deployment
- Rate Limiting
- API Gateway
- Event-Driven Architecture

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# 📜 License

Licensed under the MIT License.

---

# 👨‍💻 Author

## Aman Antuley

Software Engineer • AI Engineer • Cloud & DevOps Enthusiast

### Connect with me

- GitHub: https://github.com/amanantuley
- LinkedIn: https://www.linkedin.com/in/aman-antuley-8974ab26a/

---

⭐ If you found this repository helpful, don't forget to **Star** it!

**Build Fast. Build Secure. Build Scalable APIs with FastAPI. ⚡**
