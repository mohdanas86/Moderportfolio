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

    // Production optimizations
    swcMinify: true,

    // Experimental features
    experimental: {
        optimizePackageImports: ['lucide-react', 'react-icons', 'framer-motion', '@radix-ui/react-dialog', '@radix-ui/react-label'],
        optimizeCss: true,
    },

    // Performance optimizations
    compress: true,
    poweredByHeader: false,

    // Webpack optimizations
    webpack: (config, { dev, isServer }) => {
        // Production optimizations
        if (!dev && !isServer) {
            config.optimization = {
                ...config.optimization,
                moduleIds: 'deterministic',
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                    cacheGroups: {
                        default: false,
                        vendors: false,
                        // Vendor chunk for react and related libraries
                        framework: {
                            name: 'framework',
                            chunks: 'all',
                            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
                            priority: 40,
                            enforce: true,
                        },
                        // Separate chunk for Three.js (large library)
                        three: {
                            name: 'three',
                            chunks: 'all',
                            test: /[\\/]node_modules[\\/](three)[\\/]/,
                            priority: 35,
                            enforce: true,
                        },
                        // Separate chunk for motion libraries
                        motion: {
                            name: 'motion',
                            chunks: 'all',
                            test: /[\\/]node_modules[\\/](framer-motion|motion)[\\/]/,
                            priority: 30,
                            enforce: true,
                        },
                        // UI libraries chunk
                        lib: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'lib',
                            priority: 20,
                            minChunks: 1,
                            reuseExistingChunk: true,
                        },
                    },
                },
            };
        }

        return config;
    },
};

export default nextConfig;
