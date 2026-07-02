# 🚀 From Zero to Full Stack — Chapter 5: DevOps

> Learn how professional software teams build, test, and deploy production-ready Full-Stack applications.

Welcome to **Chapter 5** of the **From Zero to Full Stack** series.

In the previous chapters, we built a complete Full-Stack application with a backend and a frontend great. 

Now it's time to transform that application into a professional software project by introducing modern DevOps practices.

In this chapter, you'll learn how to automate development workflows, containerize applications, implement Continuous Integration (CI), Continuous Deployment (CD), and deploy your application to production.

---

# 🎯 Objectives

By the end of this chapter, you will be able to:

- Containerize a Full-Stack application using Docker.
- Build multi-container applications with Docker Compose.
- Manage environment variables.
- Configure ESLint and Prettier.
- Automate code quality checks.
- Write and execute automated tests.
- Build a professional Continuous Integration pipeline.
- Build a Continuous Deployment pipeline.
- Deploy applications to production using Render.
- Understand modern DevOps workflows used by software engineering teams.

---

# 🧠 What You'll Learn

## Docker

- Docker Fundamentals
- Images
- Containers
- Volumes
- Networks
- Dockerfiles
- Multi-stage Builds

---

## Docker Compose

- Multi-container Applications
- Backend + Frontend
- Environment Variables
- Networking

---

## Code Quality

- ESLint
- Prettier
- Husky
- Commitlint
- Git Hooks

---

## Testing

- Jest
- MongoDB Memory Server
- Unit Testing
- Integration Testing

---

## GitHub Actions

- Workflow Files
- Jobs
- Steps
- Runners
- GitHub Secrets

---

## Continuous Integration (CI)

- Automated Builds
- Automated Linting
- Automated Testing

---

## Continuous Deployment (CD)

- Deploy Hooks
- GitHub Actions
- Render
- Automated Production Deployment

---

# 🏗️ Project

In this chapter, we'll transform the blog application built in the previous chapters into a production-ready application.

We'll implement a professional development workflow similar to the one used by modern software engineering teams.

By the end of this chapter, every push to the main branch will automatically:

- Verify code quality.
- Execute automated tests.
- Build the application.
- Deploy the application to production.

---

# 📚 Prerequisites

Before starting this chapter, you should have completed:

- ✅ Chapter 1 — Foundations
- ✅ Chapter 2 — Backend Fundamentals
- ✅ Chapter 3 — Backend Development
- ✅ Chapter 4 — Frontend Development

---

# 🛠️ Technologies

- Docker
- Docker Compose
- GitHub Actions
- GitHub
- Git
- Node.js
- Express.js
- React
- MongoDB
- Jest
- ESLint
- Prettier
- Husky
- Commitlint
- Render

---

# 📂 Project Structure

```text
from-zero-to-fullstack-ch5-devops/

├── .github/
│   └── workflows/
│       └── ci-cd.yaml
│
├── backend/
├── src/
├── compose.yaml
├── dockerfile
├── .prettierrc.json
├── eslint.config.js
└── ...
```

---

# 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/XMAN-MHD/from-zero-to-fullstack-ch5-devops.git
```

Install dependencies

```bash
npm install

cd backend
npm install
```

Run the application

```bash
docker compose up --build
```

Frontend

```
http://localhost:3000
```

Backend

```
http://localhost:3001
```

---

# 🧪 Testing

Frontend

```bash
npm run lint
npm run build
```

Backend

```bash
cd backend

npm run lint
npm test
```

---

# 🔄 CI/CD Pipeline

Every push to the **main** branch automatically executes the following pipeline:

```text
Push
 │
 ▼
Frontend CI
 │
 ▼
Backend CI
 │
 ▼
Deploy to Render
```

If any step fails, the deployment is automatically cancelled.

---

# 🎓 Skills Acquired

After completing this chapter, you will be able to:

- Containerize applications.
- Configure Docker Compose.
- Build professional CI pipelines.
- Build professional CD pipelines.
- Deploy applications automatically.
- Debug GitHub Actions.
- Apply modern DevOps practices to Full-Stack applications.

---

# 🗺️ Learning Roadmap

## 🟢 Phase 1 — Foundations

- ✅ Chapter 1 — Foundations
- ✅ Chapter 2 — Backend Fundamentals
- ✅ Chapter 3 — Backend Development
- ✅ Chapter 4 — Frontend Development
- ✅ Chapter 5 — DevOps

---

## 🔵 Phase 2 — Production Applications

- ⏳ Chapter 6 — Authentication
- ⏳ Chapter 7 — Server-Side Rendering
- ⏳ Chapter 8 — Search Engine Optimization
- ⏳ Chapter 9 — End-to-End Testing
- ⏳ Chapter 10 — Data Visualization

---

## 🟣 Phase 3 — Advanced Full Stack

- ⏳ Chapter 11 — GraphQL Backend
- ⏳ Chapter 12 — GraphQL Frontend
- ⏳ Chapter 13 — Real-Time Backend
- ⏳ Chapter 14 — Real-Time Frontend
- ⏳ Chapter 15 — Real-Time Persistence

---

## 🟠 Phase 4 — Next.js

- ⏳ Chapter 16 — Next.js Fundamentals
- ⏳ Chapter 17 — React Server Components
- ⏳ Chapter 18 — Advanced Next.js
- ⏳ Chapter 19 — Next.js Deployment

---

## 🔴 Phase 5 — Professional Software Engineering

- ⏳ Chapter 20 — Professional Full Stack

---

# ➡️ Next Chapter

## Chapter 6 — Authentication

In the next chapter, we'll secure our application by implementing authentication using **JWT**, protected routes, authorization, password hashing, refresh tokens, and role-based access control (RBAC).

---

# ⭐ Support

If this repository helps you in your learning journey, consider giving it a ⭐ on GitHub.

Happy coding! 🚀