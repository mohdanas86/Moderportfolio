// filepath: c:\Users\anasa\portfolio\app\resume\page.jsx
import React from "react";
import { PDFViewer } from "./pdfViewer";
import Header from "../_components/Header";

export const metadata = {
  title: "Resume - Anas Alam",
  description: "View and download Anas Alam's resume",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">My Resume</h1>

        <div className="flex justify-center mb-4">
          <a
            href="/anasalam-resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-2 md:p-6 h-[80vh] w-full">
          <PDFViewer pdfUrl="/anasalam-resume.pdf" />
        </div>
      </div>
    </main>
  );
}
