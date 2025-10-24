"use client";

import React from "react";

/**
 * ErrorBoundary component catches JavaScript errors anywhere in the child
 * component tree and displays a fallback UI
 * @class
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#151312] text-white p-4">
          <div className="max-w-md w-full bg-[#2726262e] p-8 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#FF7A00]">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-400 mb-4">
              We're sorry for the inconvenience. The error has been logged and we'll look into it.
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 text-sm">
                <summary className="cursor-pointer text-gray-500 hover:text-gray-300">
                  Error details (development only)
                </summary>
                <pre className="mt-2 p-4 bg-black/50 rounded overflow-auto text-xs">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
            
            <button
              onClick={() => window.location.reload()}
              className="mt-6 w-full bg-[#FF7A00] hover:bg-[#FF7A00]/80 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
