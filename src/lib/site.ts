import type { Metadata } from 'next';
import { baseKeywords, getPageSeo } from './seo';
import legacy from '@/data/legacy-pages.json';
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://theluxevaulthk.com';
const parsedUrl = new URL(configuredUrl);
if (!['http:', 'https:'].includes(parsedUrl.protocol) || parsedUrl.pathname !== '/' || parsedUrl.search || parsedUrl.hash) throw new Error('NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without a path, query or fragment.');
export const site = { name:'The Luxe Vault', shortName:'The Luxe Vault', url:parsedUrl.origin, indexable:process.env.SITE_NOINDEX !== 'true', phone:(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '85262239870').replace(/\D/g,'') };
export const whatsapp = (message='你好 The Luxe Vault，我想查詢名牌手袋估價服務。') => `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;
export const navItems = [{href:'/brands',label:'收購品牌'},{href:'/takeoverauth',label:'收購及鑑定'},{href:'/howtosell',label:'如何出售'},{href:'/case',label:'交易案例'},{href:'/blogs',label:'部落格'},{href:'/faq',label:'常見問題'}];
export function pageMeta(title:string, description:string, path:string):Metadata {
 const isBrand = path.startsWith('/brands/') && path !== '/brands';
 const original=(legacy as Record<string,{title:string;description:string;keywords:string[]}>)[path];
 const seo=getPageSeo(path);
 const pageTitle= isBrand ? (seo?.title ? `${seo.title} | ${site.name}` : original?.title || `${title} | ${site.name}`) : (original?.title || `${title} | ${site.name}`);
 const pageDescription= isBrand ? (seo?.description || description) : (original?.description || description);
 return {
  title:{absolute:pageTitle}, description:pageDescription,
  keywords:[...new Set([...(original?.keywords||[]),...baseKeywords,...(seo?.keywords||[])])],
  alternates:{canonical:`${site.url}${path}`},
  openGraph:{title:pageTitle,description:pageDescription,type:path.startsWith('/blogs/')?'article':'website',locale:'zh_HK',siteName:site.name,url:`${site.url}${path}`,images:[{url:'/opengraph-image',width:1200,height:630}]},
  twitter:{card:'summary_large_image',title:pageTitle,description:pageDescription,images:['/opengraph-image']},
 };
}
