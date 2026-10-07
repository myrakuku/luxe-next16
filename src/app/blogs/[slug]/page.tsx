import { notFound } from 'next/navigation';
import { LegacyPage, legacyPages } from '@/components/legacy-page';
import { pageMeta } from '@/lib/site';
export const dynamicParams=false;
export function generateStaticParams(){return Object.keys(legacyPages).filter(route=>route.startsWith('/blogs/')).map(route=>({slug:route.split('/')[2]}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return pageMeta('','','/blogs/'+slug);}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const route='/blogs/'+slug;if(!legacyPages[route])notFound();return <LegacyPage route={route}/>;}
