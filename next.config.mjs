/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image optimization configuration
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '/devicons/devicon/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.worldvectorlogo.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.vectorlogo.zone',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'seaborn.pydata.org',
                pathname: '/**',
            },
        ],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Compiler options
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'],
        } : false,
    },

    // React strict mode for better development experience
    reactStrictMode: true,

    // Production optimizations
    swcMinify: true,

    // Experimental features
    experimental: {
        optimizePackageImports: ['lucide-react', 'react-icons'],
    },
};

export default nextConfig;
