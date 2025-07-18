'use client';

import { useState, useEffect } from 'react';

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67+ from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Show the install button
      setShowInstallButton(true);
    });

    // Listen for app install event
    window.addEventListener('appinstalled', () => {
      // Log app install to analytics
      console.log('PWA was installed');
      // Hide the install button
      setShowInstallButton(false);
      setDeferredPrompt(null);
    });
  }, []);

  const handleInstallClick = () => {
    // Hide the app provided install promotion
    setShowInstallButton(false);
    // Show the install prompt
    if (deferredPrompt) {
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  if (!showInstallButton) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#2a2929] p-4 rounded-lg shadow-lg border border-[#3a3939] text-center max-w-xs">
      <p className="text-white mb-3">Install this app on your device for the best experience!</p>
      <button
        onClick={handleInstallClick}
        className="bg-[#FF7A00] text-white px-4 py-2 rounded-md hover:bg-[#ff8a20] transition-colors"
      >
        Install App
      </button>
    </div>
  );
}
