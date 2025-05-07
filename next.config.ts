import type {NextConfig} from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
    serverExternalPackages: [], // ['package-name']
    experimental: {
        optimizePackageImports: [] // ['icon-library']
    }
};

export default bundleAnalyzer(nextConfig);
