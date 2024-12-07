import { NextConfig } from 'next';
import dotenv from 'dotenv';


// Load environment variables from /env/.env.local
dotenv.config({ path: '.env.local' });

const nextConfig: NextConfig = {
	webpack: (config) => {
		config.optimization = {
			...config.optimization,
			splitChunks: {
				chunks: 'all',
			},
		};
		return config;
	},
	reactStrictMode: true, // Ensure strict mode to catch more errors during dev
};

export default nextConfig;
