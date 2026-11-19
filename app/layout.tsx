import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Ashikur Rahaman | Research & Engineering',description:'Ph.D. researcher in software security and formal methods, and full-stack software engineer.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
