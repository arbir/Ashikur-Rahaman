const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isProjectPage = repo && !repo.endsWith('.github.io');
const basePath = process.env.GITHUB_ACTIONS === 'true' && isProjectPage ? `/${repo}` : '';
/** @type {import('next').NextConfig} */
const nextConfig = { output: 'export', trailingSlash: true, images: { unoptimized: true }, basePath };
export default nextConfig;
