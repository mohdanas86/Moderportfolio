export const agrilenses = {
	id: "agrilenses",
	title: "AgriLenses - Smart Crop Advisory System (SIH 2025)",
	githubRepo: "https://github.com/mohdanas86/agrilenses_frontend",
	previewLink: "https://agrilenses.netlify.app",
	siteUrl: "agrilenses.netlify.app",
	thumbnail: "/projectImages/agrilenses/1.png",
	imageGallery: [
        "/projectImages/agrilenses/1.png", 
        "/projectImages/agrilenses/2.png", 
        "/projectImages/agrilenses/3.png", 
        "/projectImages/agrilenses/4.png", 
        "/projectImages/agrilenses/5.png"
    ],
	techs: [
		"Python",
		"TypeScript",
		"Next.js",
		"Google Cloud",
		"Netlify",
		"Scikit-learn",
		"Jupyter",
		"NumPy",
		"Pandas",
		"Matplotlib",
		"Node.js",
		"React.js",
		"MongoDB",
		"SQL",
		"Computer Vision",
		"NLP",
		"Machine Learning",
		"IVR/SMS",
	],
	centerIcon: "Python",
	textStack: [
		"AI Crop Advisory",
		"Voice-First UX",
		"Multilingual NLP",
		"Pest Detection (CNN)",
		"Market Price Prediction",
	],
	metaDescription:
		"AgriLenses is a Smart India Hackathon 2025 solution for small and marginal farmers that provides multilingual, voice-enabled, AI-powered crop advisory using soil health, weather, and market data with offline IVR/SMS support.",
	content: `
> *Built for Smart India Hackathon 2025 to solve real farming problems with practical AI and offline-first delivery.*

---

## Project Snapshot

**Hackathon**: Smart India Hackathon 2025  
**Problem Statement ID**: 25010  
**Title**: Smart Crop Advisory System for Small and Marginal Farmers  
**Theme**: Agriculture, FoodTech and Rural Development  
**Category**: Software  
**Team**: Quantum Crew

**Demo Video**: https://www.canva.com/design/DAGy0NCssmw/Si7NwvVs-ENCFGAGJU0lsQ/watch

---

## What We Built

AgriLenses is a smart advisory platform that helps farmers decide **what to grow, when to irrigate, how to respond to pests, and where to sell for better prices**.

The system combines:

* Soil Health Card (SHC) data
* Weather signals
* Mandi prices and eNAM trends
* Voice and multilingual chatbot interaction
* Offline IVR/SMS fallback for low-connectivity regions

---

## Why This Matters

Most small and marginal farmers face three practical issues:

* Recommendations are not hyperlocal
* Digital products assume literacy and internet availability
* Advice is fragmented across multiple portals

AgriLenses addresses this by providing **one integrated, local-language advisory flow** that is usable even without stable internet.

---

## Technical Architecture

### Input Layer

Farmers can provide inputs through:

* Village/location details
* Soil and crop information
* Pest images
* Voice queries in local language

### Intelligence Layer

The AI engine combines multiple signals to generate actionable advice:

* **CNN models** for pest and disease image detection
* **NLP pipeline** for multilingual intent understanding and advisory generation
* **ML forecasting models** for mandi price prediction
* Rule-based recommendation logic for irrigation and fertilizer scheduling

### Delivery Layer

Advice is delivered in formats that are practical for field use:

* Mobile app/chatbot response
* Local-language text and audio output
* Offline IVR and SMS fallback for no-data zones

---

## Integrations and Ecosystem Alignment

* **SHC** for soil health context
* **PMFBY** references for risk and insurance awareness
* **eNAM/mandi price feeds** for better selling decisions
* Designed for future **AgriStack alignment** to support scale across states

---

## My SDE Contribution

I focused on building a practical software architecture that can move from hackathon prototype to deployable product:

* Designed end-to-end advisory flow (input -> AI processing -> multilingual output)
* Defined service boundaries for model inference, data aggregation, and advisory APIs
* Built backend-ready structure for integrating weather, soil, and market data sources
* Planned offline-first delivery strategy using IVR/SMS for low-connectivity areas
* Documented model selection strategy for CV (CNN), NLP, and price forecasting

---

## Feasibility and Scale

The solution is feasible because it uses a modular architecture:

* Cloud-based core services for model inference and data orchestration
* Lightweight client channels (chatbot/mobile)
* Offline channels (IVR/SMS) for rural accessibility
* Multilingual dataset strategy for cross-state deployment

This allows phased rollout from district pilots to broader state-level deployment.

---

## Expected Impact

Based on cited pilot studies and reports:

* Yield improvement: **10-25%**
* Fertilizer/pesticide input reduction: **15-20%**
* Crop loss reduction via early alerts: **~20%**
* Income uplift via market timing and discovery: **8-15%**

Beyond metrics, the biggest impact is accessibility: farmers receive advice in their own language and through channels they already use.

---

## References Used

* NABARD Report 2022 (small and marginal farmer distribution)
* FAO studies on ICT-enabled advisory outcomes
* Springer paper on AI-based pest and disease detection
* World Bank case studies on ICT for agriculture productivity

---

## Summary

AgriLenses demonstrates my ability to design **real-world, impact-focused AI products** with clear system boundaries, offline-first constraints, and multilingual user experience. It reflects practical SDE strengths in **architecture, data integration, model-driven workflows, and product feasibility for national scale**.
`,
};
