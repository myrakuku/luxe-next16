import { Plus } from 'lucide-react';
import { Eyebrow, TextLink, ContactButton } from '@/components/ui';
const questions = [
  { question: '不清楚手袋型號，或品牌不在目錄內，可以先查詢嗎？', answer: '可以先提供品牌標記、正背面、內裡及大約尺寸的照片，讓我們了解具體商品。目錄是主要查詢品牌，並非承諾收購所有款式；其他品牌是否接受評估，需另行確認。' },
  { question: '沒有單據、原裝盒或塵袋，是否不能回收？', answer: '缺少附件不代表必定不能收購，也不能因有收據便省略真偽檢查。請列出實際保留的配件及已知購買資料，我們會按品相、款式及實物檢視評估；無法確認的商品不會勉強完成交易。' },
  { question: '如何比較不同商戶的二手手袋回收價？', answer: '比較時應提供同一組照片、相同配件清單及瑕疵說明，並確認報價是否仍待實物檢查。也要了解交收、付款及任何特殊服務安排；平台刊登售價不等於商戶收購報價，不能直接混為一談。' },
  { question: '照片估價後是否一定要出售？', answer: '不用。照片只能提供初步參考，實物檢查後才確認最終報價。您可先了解估價及安排，再決定是否出售；交易需經雙方同意，付款方式與到賬情況亦應在交付手袋前確認。' },
];

export function BrandDirectoryGuide(){return (      <div className="wrap" data-brand-directory-guide>
        <section className="detail-split section border-t border-ink/10" aria-labelledby="directory-heading">
          <div>
            <Eyebrow>FIND YOUR PIECE</Eyebrow>
            <p id="directory-heading">按品牌與款式，<br />了解手袋回收。</p>
          </div>
          <div className="detail-list">
            <div>
              <p>經典皮革手袋：先辨認具體版本</p>
              <p>Hermès Birkin、Kelly、CHANEL Classic Flap 或 Dior Lady Dior 都有不同尺寸、材質與配置。查詢二手手袋收購時，先確認款式比只看品牌更重要；不能因同一袋名，就把另一件商品的網上價格直接當成自己的估價。</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4"><TextLink href="/brands/hermes">Hermes 回收</TextLink><TextLink href="/brands/chanel">Chanel 回收</TextLink><TextLink href="/brands/dior">Dior 回收</TextLink></div>
            </div>
            <div>
              <p>托特與日常肩袋：留意材質及使用狀態</p>
              <p>Louis Vuitton、GOYARD、GUCCI 及 PRADA 的帆布、塗層布、尼龍或皮革款，各有不同檢視重點。污漬、袋角、提把、內襯與拉鏈功能，都可能影響回收評估；外觀照片之外，也請說明有沒有異味或維修紀錄。</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4"><TextLink href="/brands/lv">LV 手袋回收</TextLink><TextLink href="/brands/goyard">Goyard 回收</TextLink><TextLink href="/brands/gucci">Gucci 收購</TextLink><TextLink href="/brands/prada">Prada 收購</TextLink></div>
            </div>
            <div>
              <p>設計與配件：每一系列都需獨立評估</p>
              <p>CELINE Triomphe、Luggage、FENDI Baguette 及 Peekaboo 等系列，肩帶、扣件、手柄與裝飾可能因版本而異。缺少配件、替換零件或個人化改動，應在估價時列明；舊款不代表必定不能收購，新款亦不代表有固定保值比例。</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4"><TextLink href="/brands/celine">Celine 回收</TextLink><TextLink href="/brands/fendi">Fendi 回收</TextLink></div>
            </div>
          </div>
        </section>

        <section className="detail-split section border-t border-ink/10" aria-labelledby="price-heading">
          <div>
            <Eyebrow>VALUATION, EXPLAINED</Eyebrow>
            <p id="price-heading">二手手袋回收價，<br />不只是原價打折。</p>
          </div>
          <div className="detail-list">
            <div><p>款式、尺寸、材質與需求</p><p>同一品牌不同系列的市場需求可以不同，相同系列也有尺寸及材質差異。零售加價、平台叫價或歷史成交價只能提供部分背景，不能保證您的手袋有相同比例的回收價，也不能承諾放售必定獲利。</p></div>
            <div><p>品相、附件及修補情況</p><p>刮痕、袋形、邊油、五金、內裡及異味，比籠統的「九成新」描述更具參考價值。原裝配件有助了解配置；翻染、換件及修補也需交代。不建議為求較高估價而自行補色或強力清潔，處理後不一定增加回收價。</p></div>
            <div><p>初步估價與實物確認</p><p>The Luxe Vault 先根據照片與資料提供初步參考，交收時再檢視真偽、使用狀況及配件。最終報價經雙方同意後才安排付款；如與初步估價不同，應先了解原因再決定是否出售，毋須因已查詢便勉強成交。</p></div>
          </div>
        </section>

        <section className="detail-split section border-t border-ink/10" aria-labelledby="sell-heading">
          <div><Eyebrow>START WITH A PHOTO</Eyebrow><p id="sell-heading">香港名牌手袋放售，<br />從準備資料開始。</p></div>
          <div>
            <p className="body-copy">先拍攝正面、背面、側面、底部及內裡，再補拍五金、肩帶、品牌標記與瑕疵近照。使用自然光、不加濾鏡，能讓我們更容易了解實際顏色及狀態；如不清楚型號，提供大約尺寸及現有購買資料也可先作查詢。</p>
            <p className="body-copy mt-5">列明購入年份、使用與維修情況，以及原裝盒、塵袋、收據、肩帶等現有配件。收據可先遮蓋不必要的個人與付款資料。接受初步估價後，再協商時間與安全交收地點；上門服務範圍、付款渠道及特殊安排請預先確認。</p>
            <div className="flex flex-wrap gap-x-7 gap-y-3 mt-6"><TextLink href="/howtosell">完整二手手袋出售流程</TextLink><TextLink href="/takeoverauth">了解收購及鑑定</TextLink></div>
            <div className="mt-7"><ContactButton /></div>
          </div>
        </section>

        <section className="detail-split section border-t border-ink/10" aria-labelledby="directory-faq-heading">
          <div><Eyebrow>A LITTLE CLARITY</Eyebrow><p id="directory-faq-heading">收購品牌與估價<br />常見問題</p><div className="mt-6"><TextLink href="/faq">更多交收及付款問題</TextLink></div></div>
          <div>{questions.map(faq => <details key={faq.question} className="faq-item"><summary>{faq.question}<Plus aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div>
        </section>
      </div>);}
