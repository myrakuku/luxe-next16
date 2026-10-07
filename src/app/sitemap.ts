import type {MetadataRoute} from 'next';
import {site} from '@/lib/site';
import legacy from '@/data/legacy-pages.json';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return Object.keys(legacy).map(path=>({url:`${site.url}${path}`,changeFrequency:path.startsWith('/blogs/post')?'yearly':'monthly',priority:path==='/'?1:path.startsWith('/brands')?.9:.7}));}
