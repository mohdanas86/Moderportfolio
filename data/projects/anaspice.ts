export const anaspice = {
  id: "2",
  title: "Anaspice | Full-Stack Food Application",
  githubRepo: "https://github.com/mohdanas86/anaspiceFood",
  previewLink: "https://anaspice.netlify.app",
  siteUrl: "anaspice.netlify.app",
  thumbnail: "/projectImages/anaspice/anaspice1.png",
  imageGallery: [
    "/projectImages/anaspice/anaspice1.png",
    "/projectImages/anaspice/anaspice2.png",
    "/projectImages/anaspice/anaspice3.png",
    "/projectImages/anaspice/anaspice4.png",
    "/projectImages/anaspice/anaspice5.png",
  ],
  techs: [
    "React",
    "TypeScript",
    "MongoDB",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Netlify",
  ],
  centerIcon: "JavaScript",
  textStack: [
    "MERN Stack",
    "React.js",
    "Express.js",
    "MongoDB",
    "Node.js",
    "Tailwind CSS",
  ],
  metaDescription:
    "A comprehensive full-stack food ordering web application built with the MERN stack, featuring secure authentication, responsive design, and scalable architecture.",
  content: `
> *Designed and developed as a production-ready MERN stack application*

---
### **Context**

Anaspice is a full-stack web application built to solve a common real-world problem:
providing small and medium food businesses with a reliable, secure, and responsive online ordering system.

The project focuses on **clean architecture, secure authentication, scalable APIs, and real-world deployment practices**, rather than being a demo or UI-only project.

---

## 2. Responsibilities & Objectives

As the developer, my goals were to:

* Design a scalable frontend with reusable components
* Build secure and maintainable backend APIs
* Implement authentication using industry-standard practices
* Ensure smooth frontend–backend communication
* Deploy the application with real production constraints

---

## 3. Core Features

### **Frontend Implementation**

* Built the UI using **React.js** with a component-based architecture
* Implemented **JWT-based authentication** for login and signup
* Developed menu listing and cart management logic
* Handled order placement with user confirmation flow
* Designed a fully responsive UI using **Tailwind CSS** and **DaisyUI**
* Integrated API calls using **Axios** with proper error handling

### **Backend Implementation**

* Designed RESTful APIs using **Express.js**
* Structured MongoDB collections using **Mongoose schemas**
* Implemented **JWT authentication and protected routes**
* Applied **CORS configuration** for secure API access
* Used **dotenv** for environment-based configuration
* Ensured separation of concerns between routes, controllers, and models

---

## 4. Technology Stack

### **Frontend**

| Layer            | Tools / Libraries                          |
|------------------|--------------------------------------------|
| Framework        | React.js (Create React App)                |
| Styling          | Tailwind CSS, DaisyUI                     |
| Routing          | React Router DOM                          |
| API Layer        | Axios                                     |
| UI Utilities     | React Icons, React Hot Toast              |
| Hosting          | Netlify                                   |

### **Backend**

| Layer        | Tools / Libraries        |
|-------------|--------------------------|
| Server      | Express.js               |
| Database    | MongoDB + Mongoose       |
| Auth        | JSON Web Tokens (JWT)    |
| Environment | dotenv                   |
| Hosting     | Render                   |

---

## 5. System Design Overview

* Client communicates with backend via REST APIs
* JWT tokens are used for authentication and authorization
* MongoDB handles persistence for users, menu items, and orders
* Backend enforces route-level access control
* Environment variables isolate sensitive configuration data

---

## 6. Deployment & Production Setup

* **Frontend:** Deployed on Netlify
* **Backend:** Deployed on Render
* **Authentication:** Token-based (JWT)
* **Version:** v1.0.0

Live Application: https://anaspice.netlify.app

---

## 7. Local Development Setup

### **Prerequisites**

* Node.js and npm
* MongoDB Atlas or local MongoDB instance

### **Setup Steps**

#### Frontend

\`\`\`bash
git clone https://github.com/mohdanas86/anaspiceFood.git
cd anaspice
npm install
npm start
\`\`\`

#### Backend

\`\`\`bash
cd backend
npm install
npm start
\`\`\`

---

## 8. Engineering Learnings

* Hands-on experience with full-stack MERN development
* Implemented secure authentication using JWT
* Designed REST APIs following real-world conventions
* Learned deployment and environment configuration
* Improved understanding of application-level security

---

## 9. Developer

**Anas Alam**
Software Developer
Email: coadanas@gmail.com

---

## 10. Future Enhancements

* Online payment gateway integration
* Admin dashboard for order and menu management
* Role-based access control
* Real-time order status updates
* Performance optimization and caching

---

## Summary

Anaspice reflects my ability to design, develop, and deploy a complete full-stack application with production-level considerations, focusing on **clean code, security, and scalability**.
`,
};
