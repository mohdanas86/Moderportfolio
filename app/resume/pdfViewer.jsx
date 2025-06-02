"use client";

import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Create PDFViewer component
export const PDFViewer = ({ pdfUrl }) => {
  // Initialize the default layout plugin
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => defaultTabs,
  });

  return (
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@3.12.0/build/pdf.worker.min.js`}
    >
      <div style={{ height: "100%", width: "100%" }}>
        <Viewer
          fileUrl={pdfUrl}
          plugins={[defaultLayoutPluginInstance]}
          defaultScale={1.2}
          theme={{
            primary: "#FF7A00",
          }}
        />
      </div>
    </Worker>
  );
};
