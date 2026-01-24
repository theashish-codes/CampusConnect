# CampusConnect – Backend API Documentation (v1)

CampusConnect is a full-stack campus management system designed for students, faculty, HODs, and admins. This backend provides secure, role-based REST APIs for authentication, attendance management, subject management, and eligibility calculation.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Role-Based Access Control (RBAC)

---

## 🌐 Base URL

```
http://localhost:5000/api
```

All APIs are prefixed with `/api`.

---

## 🔐 Authentication

CampusConnect uses **JWT-based authentication**.

### Authorization Header

```
Authorization: Bearer <JWT_TOKEN>
```

This header is required for all protected routes.

---

## 👤 User Roles

- `student`
- `faculty`
- `hod`
- `admin`

Access to APIs is controlled based on role.

---

## 🔑 Auth APIs

### Register User

**POST** `/auth/register`

**Request Body**
```json
{
  "name": "Ashish Kumar",
  "email": "ashish@student.com",
  "password": "123456",
  "role": "student"
}
```

**Response**
```json
{
  "message": "User registered successfully"
}
```

---

### Login User

**POST** `/auth/login`

**Request Body**
```json
{
  "email": "ashish@student.com",
  "password": "123456"
}
```

**Response**
```json
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "_id": "65abc...",
    "name": "Ashish Kumar",
    "email": "ashish@student.com",
    "role": "student"
  }
}
```

---

## 👨‍🎓 Student APIs

### Get My Attendance Records

**GET** `/attendance/my`

**Auth**: Student

**Response**
```json
[
  {
    "_id": "att123",
    "subject": "65sub1",
    "date": "2025-01-20",
    "status": "present"
  }
]
```

---

### Get Attendance Summary

**GET** `/attendance/summary/me`

**Auth**: Student

**Response**
```json
{
  "studentId": "65stu1",
  "summary": [
    {
      "subject": "Mathematics",
      "totalClasses": 10,
      "present": 8,
      "percentage": 80,
      "eligibleForExam": true
    }
  ]
}
```

---

## 👨‍🏫 Faculty / Admin APIs

### Create Subject

**POST** `/subjects`

**Auth**: Admin

**Request Body**
```json
{
  "name": "Mathematics",
  "code": "MATH101",
  "semester": 2,
  "faculty": "65fac1"
}
```

**Response**
```json
{
  "message": "Subject created successfully",
  "subject": {
    "_id": "65sub1",
    "name": "Mathematics"
  }
}
```

---

### Get All Subjects

**GET** `/subjects`

**Auth**: Any logged-in user

**Response**
```json
[
  {
    "_id": "65sub1",
    "name": "Mathematics",
    "semester": 2,
    "faculty": {
      "name": "Prof. Sharma",
      "email": "sharma@college.com",
      "role": "faculty"
    }
  }
]
```

---

### Mark Attendance

**POST** `/attendance/mark`

**Auth**: Faculty / Admin

**Request Body**
```json
{
  "studentId": "65stu1",
  "subject": "65sub1",
  "date": "2025-01-21",
  "status": "present"
}
```

**Response**
```json
{
  "message": "Attendance marked successfully"
}
```

---

## 👨‍💼 HOD APIs (Planned)

- View student attendance reports
- Approve / reject leave applications
- Monitor subject-wise eligibility

---

## 🔒 Security Notes (Frontend Integration)

- Store JWT securely (localStorage or HTTP-only cookies)
- Attach token in every protected API call
- Restrict frontend routes based on user role

---

## 🎨 Frontend Pages Required

- Splash / Initialization Screen
- Login Page
- Register Page
- Student Dashboard
- Faculty Dashboard
- HOD Dashboard
- Admin Dashboard

---

## 📌 Resume Description

**CampusConnect** – A full-stack campus management system with role-based authentication, attendance tracking, eligibility calculation, and modular REST APIs using Node.js, Express, MongoDB, and JWT.

---

## 🚀 Next Steps

- Frontend development (React + Vite)
- Leave Management Module
- HOD Analytics Dashboard
- API Documentation Enhancement

