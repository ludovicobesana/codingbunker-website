/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  //outDir: "dist",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
