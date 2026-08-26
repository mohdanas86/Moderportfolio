export const anasufyide = {
  id: "anasufyide",
  title: "Ansufy IDE | Secure Online Code Compiler & Editor",
  githubRepo: "https://github.com/mohdanas86/code-editor",
  previewLink: "https://anasufyide.netlify.app",
  siteUrl: "anasufyide.netlify.app",
  thumbnail: "/projectImages/anasufyide/anasufyide1.png",
  imageGallery: [
    "/projectImages/anasufyide/anasufyide1.png",
    "/projectImages/anasufyide/anasufyide2.png",
    "/projectImages/anasufyide/anasufyide3.png",
    "/projectImages/anasufyide/anasufyide4.png",
    "/projectImages/anasufyide/anasufyide5.png",
    "/projectImages/anasufyide/anasufyide6.png",
  ],
  techs: [
    "Next.js",
    "TypeScript",
    "Docker",
    "Node.js",
    "Tailwind CSS",
    "Github",
    "Postman",
    "Netlify",
  ],
  centerIcon: "TypeScript",
  textStack: [
    "Online Code Execution",
    "Docker Sandbox",
    "Secure APIs",
    "Monaco Editor",
    "Production System Design",
  ],
  metaDescription:
    "Ansufy IDE is a production-ready online code editor and compiler that executes user code securely using Docker-isolated environments, supporting multiple programming languages.",
  content: `
> *Designed and built as a secure, production-grade online code execution platform*

---

### **Context**

Ansufy IDE is an online code editor and compiler designed to safely execute untrusted user code.  
The project focuses on **security, isolation, and system-level constraints**, similar to platforms like online judges and coding playgrounds.

Rather than being UI-only, this project emphasizes **sandboxed execution, resource control, and backend safety**.

---

## **Responsibilities & Objectives**

As the developer, I focused on:

* Designing a secure architecture for executing arbitrary user code
* Preventing system abuse using container-level isolation
* Providing a smooth, VS Code–like editor experience
* Supporting multiple programming languages with predictable execution
* Ensuring performance, stability, and cleanup under load

---

## **Core Features**

### **Code Editor & Execution**

* Online code editor powered by **Monaco Editor**
* Supports multiple languages including C++, Python, Java, JavaScript, Go, C, and Rust
* Real-time compilation and execution with execution time tracking
* Clean UI with resizable panels and dark/light themes
* Responsive layout optimized for desktop and mobile

### **Security & Isolation**

* Code execution inside **Docker containers**
* Strict CPU, memory, and execution time limits
* Network isolation (no outbound access)
* Read-only filesystem for containers
* Automatic cleanup after execution
* Input validation and sanitization at API level

---

## **System Design Highlights**

* Frontend communicates with execution service via secure API routes
* Each execution runs in a short-lived Docker container
* Resource limits prevent infinite loops and abuse
* No shell execution — commands executed using controlled binaries
* Errors are sanitized to avoid leaking system details

---

## **Technology Stack**

### **Frontend**

| Layer | Tools |
|-----|------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Editor | Monaco Editor |
| Styling | Tailwind CSS |
| UI | shadcn/ui, Radix UI |

### **Backend & Infra**

| Layer | Tools |
|-----|------|
| Runtime | Node.js |
| Execution | Docker |
| APIs | Next.js API Routes |
| Testing | Postman |

---

## **Performance**

* Fast editor load with optimized bundles
* Average execution time under 500ms for common programs
* High Lighthouse scores for performance and SEO
* Predictable behavior under constrained resources

---

## **Deployment**

* Docker-based execution environment
* Production builds optimized for performance
* Environment-based configuration
* Continuous deployment via Github

---

## **Engineering Learnings**

* Designing secure systems for executing untrusted code
* Applying container isolation in real-world scenarios
* Enforcing resource constraints at OS and container level
* Building developer tools with strong UX and safety guarantees
* Balancing performance with security trade-offs

---

## **Summary**

Ansufy IDE demonstrates my ability to design and implement **security-critical backend systems** combined with a polished frontend experience.  
The project reflects strong understanding of **system design, sandboxing, API safety, and production constraints**, beyond typical CRUD or UI-focused applications.
`,
};
