import React, { useEffect, useRef } from "react";

const CREDLY_SCRIPT_ID = "credly-embed-script";
const CREDLY_SCRIPT_SRC = "https://cdn.credly.com/assets/utilities/embed.js";
const CREDLY_HOST = "https://www.credly.com";

const CredlyBadge = ({ badgeId, width = 150, height = 270 }) => {
  const badgeRef = useRef(null);

  // Append the script only once globally
  useEffect(() => {
    if (!document.getElementById(CREDLY_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.src = CREDLY_SCRIPT_SRC;
      script.async = true;
      script.id = CREDLY_SCRIPT_ID;
      document.body.appendChild(script);
    }
  }, []);

  // Render badge after script is loaded
  useEffect(() => {
    const tryRender = () => {
      if (window.CY && typeof window.CY.render === "function") {
        window.CY.render();
      } else {
        setTimeout(tryRender, 200);
      }
    };
    tryRender();
  }, [badgeId]);
  // Use dangerouslySetInnerHTML to inject the badge div
  return (
    <div
      ref={badgeRef}
      className="bg-white rounded-lg p-4"
      dangerouslySetInnerHTML={{
        __html: `<div data-iframe-width="${width}" data-iframe-height="${height}" data-share-badge-id="${badgeId}" data-share-badge-host="${CREDLY_HOST}"></div>`,
      }}
    />
  );
};

export default CredlyBadge;
