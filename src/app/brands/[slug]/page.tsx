import { notFound } from 'next/navigation';
import { brands } from '@/data/content';
import { HandbagBrandPage } from '@/components/handbag-brand-page';
import { pageMeta } from '@/lib/site';
export const dynamicParams=false;
export function generateStaticParams(){return brands.map(brand=>({slug:brand.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return pageMeta('','','/brands/'+slug);}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!brands.some(brand=>brand.slug===slug))notFound();return <HandbagBrandPage slug={slug}/>;}
