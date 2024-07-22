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
    }
};

export default nextConfig;
