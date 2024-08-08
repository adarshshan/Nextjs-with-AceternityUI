/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pics.craiyon.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'play-lh.googleusercontent.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'newprofilepic.photo-cdn.net',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'images.sftcdn.net',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**'
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/:path*/',
                has: [{ type: 'query', key: 'code' }],
                destination: '/:path*?code=:code',
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
