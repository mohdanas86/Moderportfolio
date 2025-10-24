/**
 * Application Constants
 * Centralized configuration and constant values
 */

/**
 * Social Media Links
 */
export const SOCIAL_LINKS = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anas86",
        icon: "FaLinkedin",
        ariaLabel: "Visit my LinkedIn profile"
    },
    {
        name: "GitHub",
        url: "https://github.com/mohdanas86",
        icon: "FaGithub",
        ariaLabel: "Visit my GitHub profile"
    },
    {
        name: "Instagram",
        url: "https://instagram.com/@_anas__86",
        icon: "FaInstagram",
        ariaLabel: "Visit my Instagram profile"
    },
    {
        name: "YouTube",
        url: "https://youtube.com/c/AG4444YT",
        icon: "FaYoutube",
        ariaLabel: "Visit my YouTube channel"
    },
];

/**
 * Portfolio Statistics
 */
export const STATS = {
    experience: {
        value: "+13",
        label: "MONTHS OF\nEXPERIENCE"
    },
    projects: {
        value: "+10",
        label: "PROJECTS\nCOMPLETED"
    },
    clients: {
        value: "+4",
        label: "WORLDWIDE\nCLIENTS"
    }
};

/**
 * Form Configuration
 */
export const FORM_CONFIG = {
    nameMinLength: 2,
    nameMaxLength: 100,
    messageMinLength: 10,
    messageMaxLength: 2000,
    requestTimeout: 10000,
    fallbackTimeout: 5000,
    successMessageDuration: 5000,
    errorMessageDuration: 7000,
};

/**
 * Animation Delays (in milliseconds)
 */
export const ANIMATION_DELAYS = {
    fadeIn: 200,
    stagger: 150,
};

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
    contact: '/api/contact',
    contactSimple: '/api/contact-simple',
    test: '/api/test',
};

/**
 * Theme Colors
 */
export const COLORS = {
    primary: '#FF7A00',
    secondary: '#353334',
    background: '#151312',
    text: '#948A8A',
    border: '#2726262e',
};

/**
 * Breakpoints (matches Tailwind CSS)
 */
export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
};
