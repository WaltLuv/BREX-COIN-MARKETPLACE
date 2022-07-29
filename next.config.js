/** @type {import('next').NextConfig} */ 
const nextConfig = {  
  reactStrictMode: true,
  images: {
    domains: [
      'media.giphy.com',
      'openseauserdata.com',
      'brand.assets.adidas.com',
      'media0.giphy.com',
      'avatars.dicebear.com',
      'media1.giphy.com',
      'media3.giphy.com',
      'media2.giphy.com',
      'media4.giphy.com',
      'lh3.googleusercontent.com',     
      'gateway.ipfscdn.io',
      'gateway.thirdweb.dev',
      'assets.foundation.app'
    ],
  },
}

module.exports = nextConfig