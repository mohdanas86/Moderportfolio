'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the InstallPWA component
const InstallPWAComponent = dynamic(() => import('./InstallPWA'), { 
  ssr: false 
});

export default function InstallPWAWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render the component on the client-side
  if (!mounted) return null;

  return <InstallPWAComponent />;
}
