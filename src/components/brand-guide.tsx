import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Eyebrow, TextLink, ContactButton } from '@/components/ui';
import { brandGuides } from '@/data/brand-guides';
import articles from '@/data/articles.json';

export function BrandGuideContent({ slug, name }: { slug: string; name: string }) {
  const guide = brandGuides[slug];
  if (!guide) return null;
  const related = articles.filter(article => guide.articles.includes(article.slug));

  return (
    <div className="wrap" data-brand-guide={slug}>
      <nav aria-label={`${name} 收購指南目錄`} className="flex flex-wrap gap-x-7 gap-y-3 border-y border-ink/10 py-6 text-xs leading-7">
        <a href="#models">收購款式</a>
        <a href="#valuation">回收價因素</a>
        <a href="#preparation">估價準備</a>
        <a href="#brand-faq">品牌常見問題</a>
      </nav>

      <section id="models" className="section" aria-labelledby="models-heading">
        <div className="detail-split">
          <div>
            <Eyebrow>THE RESALE EDIT</Eyebrow>
            <p id="models-heading">{name} 二手手袋<br />收購款式指南</p>
            <p className="body-copy mt-6">{guide.intro}</p>
          </div>
          <div className="detail-list">
            {guide.models.map(model => <div key={model.name}><p>{model.name}</p><p>{model.text}</p></div>)}
          </div>
        </div>
        <p className="notice mt-8">以上為歡迎查詢的款式及資料準備方向，並非現貨清單，也不代表所有商品均會收購。其他系列、年份或尺寸，亦可先傳送照片確認。</p>
      </section>

      <section id="valuation" className="section border-t border-ink/10" aria-labelledby="valuation-heading">
        <div className="detail-split">
          <div>
            <Eyebrow>UNDERSTANDING THE VALUE</Eyebrow>
            <p id="valuation-heading">哪些因素影響<br />{guide.focus}價？</p>
            <p className="body-copy mt-6">初步估價的作用，是協助您了解目前的收購考量，而不是保證成交價。相同袋名的商品，也應按具體版本與實物情況比較。</p>
          </div>
          <div className="detail-list">
            {guide.valuation.map(item => <div key={item.title}><p>{item.title}</p><p>{item.text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="preparation" className="section border-t border-ink/10" aria-labelledby="preparation-heading">
        <div className="detail-split">
          <div>
            <Eyebrow>BEFORE YOUR VALUATION</Eyebrow>
            <p id="preparation-heading">查詢 {name} 估價，<br />可以先準備甚麼？</p>
          </div>
          <div>
            <p className="body-copy">{guide.preparation}</p>
            <p className="body-copy mt-5">照片盡量以自然光拍攝，不使用濾鏡，並把整體與瑕疵近照一併提供。若資料不足，可先補充照片及相關資訊；接受初步估價後，再協商安全地點進行實物檢查。最終報價經雙方同意才安排交易，您可選擇不出售。</p>
            <div className="flex flex-wrap gap-x-7 gap-y-3 mt-6">
              <TextLink href="/howtosell">二手手袋放售流程</TextLink>
              <TextLink href="/takeoverauth">收購及實物鑑定</TextLink>
            </div>
            <div className="mt-7"><ContactButton message={`你好，我想查詢 ${name} 二手手袋收購及估價。`}>查詢 {name} 估價</ContactButton></div>
          </div>
        </div>
      </section>

      <section id="brand-faq" className="section border-t border-ink/10" aria-labelledby="brand-faq-heading">
        <div className="detail-split">
          <div>
            <Eyebrow>YOUR QUESTIONS, ANSWERED</Eyebrow>
            <p id="brand-faq-heading">{name} 手袋回收<br />常見問題</p>
            <div className="mt-6"><TextLink href="/faq">查看交收與付款 FAQ</TextLink></div>
          </div>
          <div>
            {guide.faqs.map(faq => <details className="faq-item" key={faq.question}><summary>{faq.question}<Plus aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      {related.length > 0 && <section className="pb-14" aria-labelledby="related-heading">
        <Eyebrow>FURTHER READING</Eyebrow>
        <p id="related-heading" className="text-xl font-normal mt-4 mb-5">延伸閱讀：市場資訊與放售考量</p>
        <ul className="space-y-4 text-sm leading-8">
          {related.map(article => <li key={article.slug}><Link className="underline decoration-gold/50 underline-offset-4 hover:text-gold" href={`/blogs/${article.slug}`}>{article.title}</Link></li>)}
        </ul>
        <p className="muted text-xs leading-7 mt-5">以上為歷史市場文章，文中價格及回報描述並非目前報價或保值保證；請以您的手袋實際狀況另行查詢。</p>
      </section>}
    </div>
  );
}
