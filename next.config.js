/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    images: {
        domains: ["cloud.n-io.cz"]
    },
    output: 'standalone',
}

module.exports = nextConfig
