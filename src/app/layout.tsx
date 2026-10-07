import type { Metadata, Viewport } from 'next';
import Header from '@/components/header';
import { Footer } from '@/components/ui';
import { site, pageMeta } from '@/lib/site';
import './globals.css';
import './migration.css';
import './editorial.css';
export const metadata:Metadata={...pageMeta('','','/'),metadataBase:new URL(site.url),applicationName:site.name,robots:{index:site.indexable,follow:site.indexable}};
export const viewport:Viewport={themeColor:'#20201e'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-Hant"><body><a className="skip-link" href="#main-content">跳至主要內容</a><Header/><main id="main-content">{children}</main><Footer/></body></html>;}
