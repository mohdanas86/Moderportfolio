/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image optimization configuration
    images: {
        formats: ['image/avif', 'image/webp'],
        qualities: [75, 85, 90, 100],
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
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Compiler options
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'],
        } : false,
    },

    // React strict mode for better development experience
    reactStrictMode: true,

    // Experimental features
    experimental: {
        optimizePackageImports: [
            'lucide-react',
            'react-icons',
            'framer-motion',
            '@radix-ui/react-icons',
            '@radix-ui/react-dialog',
            '@radix-ui/react-label',
            '@radix-ui/react-progress',
            '@radix-ui/react-separator',
            '@radix-ui/react-slot',
            '@radix-ui/react-toast',
        ],
        optimizeCss: true,
        turbo: {
            resolveAlias: {
                canvas: './empty-module.js',
            },
        },
    },

    // Webpack optimizations for faster builds
    webpack: (config, { dev, isServer }) => {
        if (dev && !isServer) {
            config.cache = {
                type: 'filesystem',
                cacheDirectory: '.next/cache/webpack',
            };
        }

        // Reduce bundle analyzer overhead
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': require('path').resolve(__dirname),
        };

        return config;
    },

    // Performance optimizations
    compress: true,
    poweredByHeader: false,

    // Security and performance headers
    async redirects() {
        return [
            {
                source: '/projects/:path*',
                destination: '/project/:path*',
                permanent: true,
            },
        ];
    },

    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()'
                    },
                ],
            },
            {
                source: '/public/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
