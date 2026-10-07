import Link from 'next/link';
import Image from 'next/image';
import { brands } from '@/data/content';
import { BrandGuideContent } from '@/components/brand-guide';
import { Eyebrow, ContactButton } from '@/components/ui';

export function HandbagBrandPage({slug}:{slug:string}) {
 const brand=brands.find(item=>item.slug===slug);
 if(!brand)return null;
 return <div data-handbag-brand={slug}>
  <div className="wrap">
   <nav className="breadcrumb" aria-label="麵包屑"><Link href="/">首頁</Link><span>/</span><Link href="/brands">收購品牌</Link><span>/</span><span aria-current="page">{brand.name}</span></nav>
   <section className="handbag-brand-hero" aria-labelledby="handbag-brand-title">
    <div className="handbag-brand-photo"><Image src={brand.image} alt={`${brand.name}（${brand.chinese}）手袋款式展示`} fill priority sizes="(max-width: 760px) 100vw, 50vw" /></div>
    <div className="handbag-brand-copy">
     <Eyebrow>{brand.chinese} / PRE-LOVED HANDBAGS</Eyebrow>
     <p className="handbag-brand-name">{brand.name}</p>
     <h1 id="handbag-brand-title">{brand.name} 二手手袋收購與估價</h1>
     <p className="handbag-brand-tagline">{brand.line}</p>
     <p className="body-copy">{brand.description.replace('我們都珍視每一件作品的獨特性。','每一件作品都有獨特的設計細節。')}</p>
     <div className="model-tags" aria-label="手袋款式">{brand.models.map(model=><span key={model}>{model}</span>)}</div>
     <p className="body-copy handbag-brand-note">{brand.note}</p>
     <ContactButton message={`你好，我想查詢 ${brand.name} 二手手袋收購及估價。`}>查詢 {brand.name} 估價</ContactButton>
     <p className="handbag-brand-disclaimer">圖片為款式參考，並非現貨清單。初步估價須經實物檢查後確認。</p>
    </div>
   </section>
  </div>
  <BrandGuideContent slug={slug} name={brand.name}/>
 </div>;
}
