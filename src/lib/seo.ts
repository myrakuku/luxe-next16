import { brands } from '@/data/content';
import { brandGuides } from '@/data/brand-guides';

type SeoEntry = { title: string; description: string; keywords: string[] };
export const baseKeywords = ['二手手袋', '香港二手手袋', '二手手袋收購', '名牌手袋回收', '二手手袋估價', 'The Luxe Vault'];
export const pageSeo: Record<string, SeoEntry> = {
 '/': { title: '香港二手手袋收購・名牌手袋回收及估價', description: 'The Luxe Vault 提供香港二手手袋收購及名牌手袋回收服務，涵蓋 Hermès、CHANEL、Dior 等品牌。透過 WhatsApp 免費初步估價，預約實物鑑定及交收，讓閒置珍藏延續下一段故事。', keywords: ['香港名牌手袋回收', '二手名牌手袋', '二手奢侈品回收', '閒置手袋出售', 'WhatsApp手袋估價'] },
 '/brands': { title: '二手名牌手袋收購品牌・Hermès、CHANEL、LV', description: '探索 The Luxe Vault 二手手袋收購品牌，包括 Hermès、CHANEL、Louis Vuitton、Dior、CELINE、GUCCI、PRADA、GOYARD 及 FENDI，了解各品牌手袋回收、估價重點及放售安排。', keywords: ['二手名牌手袋收購', '收購閒置名牌手袋', 'Hermes回收', 'Chanel回收', 'LV手袋回收', '多品牌手袋收購'] },
 '/takeoverauth': { title: '二手手袋收購及鑑定・香港名牌手袋估價', description: '了解 The Luxe Vault 二手手袋收購及鑑定流程：免費照片初步估價、實物真偽與品相檢視、確認報價及預約交收。香港名牌手袋回收，一對一清楚跟進。', keywords: ['二手手袋鑑定', '名牌手袋鑑定', '手袋真偽評估', '香港手袋收購', '二手奢侈品回收'] },
 '/howtosell': { title: '如何出售二手手袋・名牌手袋回收流程', description: '想在香港出售二手手袋？The Luxe Vault 整理名牌手袋放售三步驟：WhatsApp 提交照片估價、預約實物鑑定、確認報價及收款，附手袋拍攝與配件準備清單。', keywords: ['出售二手手袋', '二手手袋放售', '名牌手袋回收流程', '線上手袋估價', '手袋交收', '上門收袋查詢'] },
 '/case': { title: '二手手袋收購案例參考・名牌手袋款式', description: '瀏覽 Hermès、CHANEL、Dior 及 Louis Vuitton 二手手袋案例照片，了解名牌手袋收購款式。圖片為原網站案例素材及款式參考，不代表 The Luxe Vault 成交紀錄或即時回收價。', keywords: ['二手手袋案例', '名牌手袋收購案例', 'Hermes手袋款式', 'Chanel手袋款式', '手袋回收價參考'] },
 '/faq': { title: '二手手袋回收常見問題・估價、配件及交收', description: '出售二手手袋前的常見問題：估價需要哪些照片、沒有單據或塵袋能否回收、如何安排交收及付款？The Luxe Vault 解答香港名牌手袋回收與鑑定疑問。', keywords: ['二手手袋回收FAQ', '手袋估價資料', '無單據手袋回收', '上門收袋', '手袋付款方式'] },
 '/blogs': { title: '二手手袋市場資訊與放售指南・The Luxe Vault 風格誌', description: '閱讀 The Luxe Vault 二手手袋風格誌，探索 CHANEL、Hermès、Goyard、CELINE 與 Louis Vuitton 的歷史市場資訊、手袋保值因素及放售估價須知。文章價格僅供歷史參考。', keywords: ['二手手袋市場', '二手手袋保值', '名牌手袋市場資訊', '手袋回收資訊', '二手手袋放售指南'] },
};

type ArticleSeo = SeoEntry & { intro: string; heading: string; paragraphs: string[]; brandSlugs: string[] };
export const articleSeo: Record<string, ArticleSeo> = {
 post1: {
  title: 'CHANEL 2025 加價回顧・二手手袋回收價與放售考量',
  description: '回顧 CHANEL 2025 年手袋價格相關討論，了解 Classic Flap、2.55 等二手手袋估價因素，以及香港 Chanel 手袋回收前的準備。歷史價格未作即時核實，不構成回報保證。',
  keywords: ['Chanel二手手袋', 'Chanel手袋回收', 'CHANEL手袋加價2025', 'Classic Flap二手價', 'Chanel 2.55', '二手手袋放售'],
  intro: 'CHANEL 專門店加價，是否代表自己的二手手袋回收價也會上升？兩者並不相同。閱讀以下 2025 年市場回顧時，可同時留意款式、皮革、尺寸及保存狀態，這些都是香港 Chanel 手袋估價需要個別考慮的因素。',
  heading: '出售 CHANEL 二手手袋前，先分清售價與回收價',
  paragraphs: ['二手手袋平台的刊登價不等於實際成交價，也不等於商戶的收購報價。即使同為 Classic Flap 或 2.55，羊皮與粒面皮、尺寸、年份、五金及邊角磨損不同，都可能影響估價；品牌零售價調整不能直接套用到每件二手名牌手袋。', '查詢 Chanel 手袋回收時，建議提供正背面、內裡、鏈帶、鎖扣及序號相關照片，並交代是否曾翻染或維修。原裝盒、塵袋與收據可一併提供，沒有完整配件亦可先查詢；最終報價仍須經實物檢查後確認。'],
  brandSlugs: ['chanel'],
 },
 post2: {
  title: 'Goyard 與 Hermès 二手手袋・2025 保值市場回顧',
  description: '回顧 Goyard 與 Hermès 2025 年二手手袋市場討論，了解 Saint Louis、Birkin 及 Constance 的估價考量、配件與品相差異。歷史價格不代表現行收購報價或保值保證。',
  keywords: ['Goyard二手手袋', 'Hermes二手手袋', 'Goyard手袋回收', 'Hermes回收', 'Birkin二手價', 'Saint Louis回收', '二手手袋保值'],
  intro: '比較 Goyard 與 Hermès 二手手袋時，不能只看網上的保值率。托特袋與皮革手袋的使用痕跡、材質、尺寸及配件不同，實際收購價也會有所差異。以下保留 2025 年市場文章，並補充放售前值得留意的估價細節。',
  heading: 'Goyard 與 Hermès 二手手袋估價，各有不同重點',
  paragraphs: ['Goyard Saint Louis 等托特袋可先檢視袋角、手柄、塗層、內裡及隨袋小袋；如有個人化圖案或字母，也應在查詢時說明。Hermès Birkin、Kelly 或 Constance 則須考慮皮革種類、刻印、尺寸、顏色、五金與配件，不能用單一保值比例推算二手手袋回收價。', '查詢香港 Hermes 回收或 Goyard 手袋收購時，可把購買年份、使用及維修情況與照片一起提供。市場需求會變動，原文章列出的歷史轉售價格不應視為今日報價，也不代表每件手袋都能高於原價出售。'],
  brandSlugs: ['goyard','hermes'],
 },
 post3: {
  title: 'CELINE 與 LV 二手手袋・2025 市場及估價因素',
  description: '回顧 CELINE 與 Louis Vuitton 二手手袋市場文章，了解 Triomphe、Luggage、Neverfull 及 Speedy 的品相、材質與回收估價重點。歷史數據僅供參考。',
  keywords: ['Celine二手手袋', 'LV二手手袋', 'Louis Vuitton手袋回收', 'Celine回收', 'Neverfull二手價', 'Speedy手袋回收', 'Triomphe估價'],
  intro: '考慮出售 CELINE 或 Louis Vuitton 二手手袋，除了閱讀市場趨勢，更重要的是辨認自己的款式、材質與使用狀態。以下回顧 2025 年文章，並整理 Celine 回收及 LV 手袋估價前可以自行檢查的細節。',
  heading: 'CELINE 與 Louis Vuitton 二手手袋放售準備',
  paragraphs: ['CELINE Triomphe、Luggage 及 Belt Bag 的皮革刮痕、邊油、鎖扣與肩帶狀態，都是值得拍清楚的部位。Louis Vuitton Neverfull 或 Speedy 則可留意帆布、植鞣皮變色、手柄、拉鏈與內襯，並告知是否有改裝或維修。相同品牌不代表所有二手手袋都有相同回收價。', '比較香港二手手袋收購報價時，請使用同一組清晰照片與相同商品資料，並了解報價是否仍需實物確認。沒有收據或塵袋不必直接放棄查詢；如有原裝配件，則應一併說明，讓估價更貼近實際情況。'],
  brandSlugs: ['celine','lv'],
 },
 post4: {
  title: '二手手袋尺寸與回收價・迷你袋及中大號手袋比較',
  description: '從迷你袋到中大號手袋，了解尺寸、實用性、材質與市場需求如何影響二手手袋估價。The Luxe Vault 整理放售名牌手袋前的比較重點，歷史價格趨勢僅供參考。',
  keywords: ['二手手袋回收價', '迷你二手手袋', '中大號手袋', '名牌手袋尺寸', '二手手袋估價', '手袋保值因素'],
  intro: '迷你手袋與中大號手袋各有不同使用場景，但尺寸並不是決定二手手袋回收價的唯一因素。閱讀以下價格分化文章時，亦應把款式、材質、實際品相與當時市場需求一併考慮，避免把流行趨勢當成固定估價公式。',
  heading: '二手手袋尺寸，如何納入估價比較？',
  paragraphs: ['比較二手名牌手袋價格，宜先確認是否屬於同一系列、尺寸、材質及年份。例如外觀相近的迷你袋與中號袋，肩帶配置、容量或款式定位可能不同；不能只按原價比例，或假設較大的手袋必然更保值。', '提交手袋估價資料時，可附上官方尺寸名稱或量度長、寬、高，並拍攝肩帶、底部及內裡。若袋身有變形、袋角磨損或內襯污漬，也應清楚說明，讓二手手袋收購評估以實際狀況為基礎。'],
  brandSlugs: [],
 },
 post5: {
  title: 'CHANEL 2026 加價回顧・二手手袋估價與回收須知',
  description: '回顧 CHANEL 2026 年價格調整相關文章，了解二手 Chanel 手袋收購與零售價的差別，以及放售前的品相、附件及鑑定準備。歷史資訊不代表即時估價。',
  keywords: ['Chanel二手手袋', 'CHANEL手袋加價2026', '二手Chanel收購', 'Chanel手袋估價', '經典手袋回收', '香港二手手袋回收'],
  intro: 'CHANEL 加價新聞常讓人重新思考珍藏的價值，但二手手袋估價需要回到個別商品本身。這篇 2026 年歷史文章以外，我們亦整理二手 Chanel 收購前的實用準備，幫助您分清品牌零售價、平台叫價與最終回收報價。',
  heading: '面對加價消息，如何評估自己的二手 Chanel？',
  paragraphs: ['零售價上調，不表示所有二手 Chanel 手袋都會同步升值。經典款與季節款、皮革種類、五金狀況、翻染或維修紀錄，都會影響收購評估。網上標示的售價與歷史成交數據，只能作比較線索，不能作為回報或收購價保證。', '如希望在香港出售二手手袋，可先傳送清晰照片及購買年份，列出現有肩帶、塵袋、包裝與收據。The Luxe Vault 會按資料提供初步估價，再於實物檢查後確認最終報價；了解安排後，您仍可自行決定是否出售。'],
  brandSlugs: ['chanel'],
 },
};

export function getPageSeo(path: string): SeoEntry | undefined {
 if (pageSeo[path]) return pageSeo[path];
 if (path.startsWith('/blogs/')) return articleSeo[path.split('/')[2]];
 if (path.startsWith('/brands/')) {
  const brand = brands.find(b => path === `/brands/${b.slug}`);
  if (!brand) return undefined;
  const alias = brand.slug === 'hermes' ? 'Hermes' : brand.slug === 'lv' ? 'LV' : brand.name;
  return {
   title: `${brand.name} 二手手袋收購・香港${brand.chinese}手袋回收`,
   description: `香港 ${brand.name} 二手手袋收購及估價，歡迎查詢 ${brand.models.slice(0, 3).join('、')} 等款式。按品相、材質及附件評估回收價，可先以照片取得初步估價，最終報價以實物檢查為準。`,
   keywords: [`${brand.name}二手手袋`, `${alias}手袋回收`, `香港${alias}回收`, `${brand.chinese}二手手袋`, `${alias}手袋估價`, `${brand.models[0]}二手手袋`, ...(brandGuides[brand.slug]?.keywords || []), '二手名牌手袋收購'],
  };
 }
}
