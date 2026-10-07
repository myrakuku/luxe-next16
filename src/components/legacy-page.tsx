import Link from 'next/link';
import Image from 'next/image';
import { createElement, type ReactNode } from 'react';
import data from '@/data/legacy-pages.json';
import { BrandGuideContent } from '@/components/brand-guide';
import { BrandDirectoryGuide } from '@/components/brand-directory-guide';
import { Eyebrow, ContactButton, CtaBand } from '@/components/ui';
import { brands } from '@/data/content';
import { articleSeo } from '@/lib/seo';

type Block = { type:string; text?:string; src?:string; alt?:string|null; href?:string };
type Legacy = { title:string; description:string; keywords:string[]; headings:{tag:string;text:string}[]; images:{src:string;alt:string|null}[]; blocks:Block[] };
export const legacyPages = data as Record<string,Legacy>;

function LegacyImage({block,index}:{block:Block;index:number}){
 const image = block.alt === null
   // Intentionally preserve the original missing alt; tracked in the migration report.
   // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
   ? <img src={block.src} width={768} height={1024} loading="lazy" className="legacy-image" />
   : <Image src={block.src!} alt={block.alt || ''} width={1200} height={900} unoptimized loading={index===0?'eager':'lazy'} className="legacy-image" />;
 return <figure className="legacy-figure">{block.href?<Link href={block.href}>{image}<span className="legacy-image-link">{block.alt || '閱讀更多'} ↗</span></Link>:image}</figure>;
}

function Blocks({blocks,route,offset=0}:{blocks:Block[];route:string;offset?:number}){
 const result:ReactNode[]=[];
 for(let i=0;i<blocks.length;i++){
  const block=blocks[i];
  if(block.type==='image'){
   const images:Block[]=[];while(i<blocks.length&&blocks[i].type==='image')images.push(blocks[i++]);i--;
   result.push(<div key={`images-${i}`} className={`legacy-gallery ${images.length===1?'legacy-gallery-single':''}`}>{images.map((image,n)=><LegacyImage key={`${image.src}-${n}`} block={image} index={n}/>)}</div>);continue;
  }
  if(block.type==='li'){
   const items:Block[]=[];while(i<blocks.length&&blocks[i].type==='li')items.push(blocks[i++]);i--;
   result.push(<ul className="legacy-list" key={`list-${i}`}>{items.map((item,n)=><li key={n}>{item.text}</li>)}</ul>);continue;
  }
  if(/^h[1-6]$/.test(block.type)){
   if(route==='/faq'&&block.type==='h2'&&blocks[i+1]?.type==='p'){
    const answer=blocks[++i];result.push(<section className="legacy-faq" key={`faq-${i}`}>{createElement('h2',{className:'legacy-heading'},block.text)}<details className="faq-item"><summary>查看解答 <span aria-hidden="true">＋</span></summary><p>{answer.text}</p></details></section>);continue;
   }
   result.push(createElement(block.type,{className:'legacy-heading',key:`heading-${i}`,id:`legacy-section-${offset+i}`},block.text));
  } else result.push(<p className="legacy-paragraph" key={`paragraph-${i}`}>{block.text}</p>);
 }
 return result;
}

function EditorialBlocks({blocks,route}:{blocks:Block[];route:string}){
 const render=(start:number,end:number)=> <Blocks blocks={blocks.slice(start,end)} route={route} offset={start}/>;
 if(route.startsWith('/brands/')){
  const imageStart=blocks.findIndex(b=>b.type==='image');
  return <div className="editorial-brand-layout"><div className="editorial-brand-story">{render(0,imageStart)}</div><aside className="editorial-brand-visual">{render(imageStart,blocks.length)}</aside></div>;
 }
 if(route==='/') return <>
  <div className="editorial-home-hero"><div className="editorial-home-image">{render(0,1)}</div><div className="editorial-home-copy">{render(1,4)}</div></div>
  <section className="editorial-home-about">{render(4,8)}</section>
  <section className="editorial-home-values">{render(8,12)}</section>
  <section className="editorial-home-philosophy">{render(12,15)}</section>
  <section className="editorial-home-collection">{render(15,19)}</section>
  <div className="editorial-home-archive">{render(19,blocks.length)}</div>
 </>;
 if(route==='/brands'){
  const imageStart=blocks.findIndex(b=>b.type==='image');
  return <><section className="editorial-directory-intro">{render(0,imageStart)}</section><div className="editorial-directory-gallery">{render(imageStart,blocks.length)}</div></>;
 }
 if(route==='/blogs'){
  const firstImage=blocks.findIndex(b=>b.type==='image');
  const starts=blocks.map((b,i)=>b.type==='image'?i:-1).filter(i=>i>=0);
  return <><header className="editorial-journal-intro">{render(0,firstImage)}</header><div className="editorial-journal-grid">{starts.map((start,i)=><section className="editorial-journal-card" key={start}>{render(start,starts[i+1]??blocks.length)}</section>)}</div></>;
 }
 if(route.startsWith('/blogs/')){
  const image=blocks.findIndex(b=>b.type==='image');
  return <><header className="editorial-article-title">{render(0,image)}</header><div className="editorial-article-cover">{render(image,image+1)}</div><div className="editorial-article-body">{render(image+1,blocks.length)}</div></>;
 }
 if(route==='/takeoverauth') return <>
  <header className="editorial-service-intro">{render(0,3)}</header>
  <section className="editorial-service-row">{render(3,6)}</section>
  <section className="editorial-service-row editorial-service-reverse">{render(6,9)}</section>
  <section className="editorial-service-row">{render(9,12)}</section>
  <section className="editorial-service-note">{render(12,blocks.length)}</section>
 </>;
 if(route==='/howtosell') return <><header className="editorial-sell-intro">{render(0,2)}</header><div className="editorial-sell-steps">{[2,4,6].map(start=><section className="editorial-sell-step" key={start}>{render(start,start+2)}</section>)}</div><section className="editorial-sell-prep">{render(8,13)}</section><div className="editorial-sell-gallery">{render(13,17)}</div><section className="editorial-sell-end">{render(17,blocks.length)}</section></>;
 if(route==='/faq') return <div className="editorial-faq-layout"><header>{render(0,1)}</header><div>{render(1,blocks.length)}</div></div>;
 if(route==='/case'){
  const imageStart=blocks.findIndex(b=>b.type==='image');
  return <><header className="editorial-case-intro">{render(0,imageStart)}</header><div className="editorial-case-gallery">{render(imageStart,blocks.length)}</div></>;
 }
 return <Blocks blocks={blocks} route={route}/>;
}

export function LegacyPage({route}:{route:string}){
 const page=legacyPages[route];const slug=route.split('/')[2];
 const brand=route.startsWith('/brands/')?brands.find(b=>b.slug===slug):undefined;
 const article=route.startsWith('/blogs/')?articleSeo[slug]:undefined;
 return <>
  <div className={`wrap legacy-page editorial-page ${brand?'editorial-brand-page':''} ${route==='/'?'editorial-home-page':''}`}>
   <nav className="breadcrumb" aria-label="麵包屑"><Link href="/">首頁</Link>{route!=='/'&&<><span>/</span>{brand?<><Link href="/brands">收購品牌</Link><span>/</span><span>{brand.name}</span></>:<span>{route.startsWith('/blogs')?'部落格':route==='/brands'?'收購品牌':route==='/faq'?'FAQ':route==='/case'?'真實交易案例':route==='/howtosell'?'如何出售':'收購及鑑定'}</span>}</>}</nav>
   <div className="legacy-masthead"><Eyebrow>{brand?`${brand.name} / PRE-LOVED LUXURY`:'THE LUXE VAULT / LUXURY CONTINUED'}</Eyebrow><p className="legacy-kicker">{brand?brand.line:route==='/'?'讓經典延續，讓美好循環。':'每一件珍藏，都值得細心對待。'}</p></div>
   {article&&<aside className="notice mb-8">本文保留原網站歷史內容、標題及圖片。文中價格、升幅與回報描述未作即時核實，並非現行報價或回報保證，亦不構成投資建議。</aside>}
   <article className={`legacy-content ${brand?'legacy-brand-content':''}`} data-legacy-route={route}><EditorialBlocks blocks={page.blocks} route={route}/></article>
   <div className="legacy-contact"><ContactButton message={`你好 The Luxe Vault，我想查詢${brand?` ${brand.name}`:''}二手手袋收購及估價。`}/></div>
  </div>
  {brand&&<BrandGuideContent slug={slug} name={brand.name}/>}
  {route==='/brands'&&<BrandDirectoryGuide/>}
  {article&&<section className="wrap section legacy-supplement"><Eyebrow>SECOND-HAND BAG GUIDE</Eyebrow><p className="supplement-title">{article.heading}</p><p className="body-copy">{article.intro}</p>{article.paragraphs.map(text=><p className="body-copy mt-5" key={text}>{text}</p>)}<div className="flex flex-wrap gap-6 mt-7"><Link href="/howtosell">二手手袋放售流程 ↗</Link>{article.brandSlugs.map(s=><Link href={`/brands/${s}`} key={s}>{brands.find(b=>b.slug===s)?.name} 手袋收購 ↗</Link>)}</div></section>}
  <CtaBand/>
 </>;
}
