# The Luxe Vault — Next.js 16

原 React 網站的 Next.js 16 + Tailwind CSS 4 遷移版，保留白、黑、金新版視覺。品牌已改回 The Luxe Vault；資料夾仍名為 `the-loop-next16`，避免擅自變更既有本機路徑。原 `luxe-project-react19` 未修改。

## 啟動

```bash
source ~/.nvm/nvm.sh
nvm use 22.19.0
npm ci
npm run dev
```

http://localhost:3000

正式部署：`npm run build`、`npm start`。標準 Next.js Node.js/Vercel 部署，非 out 靜態匯出。

## 本次遷移優先規則

依最新要求，21 個內容頁面的 **Title、Description、H1～H6 層級／順序／文字、原圖及 alt** 以原 React 專案為準。不是以先前 THE LOOP 版本為準。

- `src/data/legacy-pages.json`：由原 React 元件渲染擷取的 SEO 與內容基準。
- `src/components/legacy-page.tsx`：以新版樣式呈現原站內容。
- `src/lib/site.ts`：原 Title／Description 優先；原 keywords 合併新增二手手袋關鍵字。
- `src/data/brand-guides.ts`、`src/components/brand-guide.tsx`：9 品牌新增指南及FAQ。為保持 H1～H6 清單完全相同，補充指南標題使用一般文字元素，不新增 heading 標籤。
- `src/components/brand-directory-guide.tsx`：總覽的補充指南。
- `src/lib/seo.ts`：補充關鍵字與文章指南。其 title/description 不再覆蓋原站基準。
- `public/legacy-images/`：48 張原站圖片，保留原圖以便逐項對照 alt。

精確對照的是使用者看到的標題文字（HTML entities 解碼、連續空白正規化）、heading 標籤層級和顺序，以及 alt 属性值（包括空字串與缺少屬性的差別），不是 JSX 原始碼縮排。

原站首頁沒有 H1；出售頁 4 張圖沒有 alt；多個品牌頁的 alt 本來寫成 Prada，部分原圖為建築照片。按照本次「一模一樣」要求保留，**不代表這些是SEO／無障礙最佳實踐**。未來如要修正，需同步更新基準與比對測試。

目前頁面主要以原站內容順序呈現，不再使用前版首頁圖片／標題或案例品牌篩選。FAQ 保留原問題 H2 並提供開合；品牌新增FAQ、站內連結與手機選單仍在。原站內容中的價格、回報、服務承諾未重新核實；文章保留歷史資訊提示，正式上線前應確認營運宣稱。

## 網域、sitemap、robots

依原站 public/sitemap.xml 與 robots.txt，正式網域為：

- `https://theluxevaulthk.com`
- `https://theluxevaulthk.com/sitemap.xml`
- `https://theluxevaulthk.com/robots.txt`

保留全部21個原始頁面路徑，沒有為改框架而更改網址，故這些頁面不需要額外301。sitemap由 `src/app/sitemap.ts` 產生；robots由 `src/app/robots.ts` 產生，不要再另外手動放一份同名檔案到 public/。

環境設定參考 `.env.example`：

```
NEXT_PUBLIC_SITE_URL=https://theluxevaulthk.com
SITE_NOINDEX=false
NEXT_PUBLIC_WHATSAPP_NUMBER=85266771933
```

**預覽／測試站請設 `SITE_NOINDEX=true` 並重新 build。** 正式站預設允許收錄，不再沿用先前「未填網域即noindex」模式。禁止爬取和noindex不是存取控制；私有預覽應另設驗證。修改網域與收錄設定後務必重新build。

canonical、Open Graph及sitemap使用同一正式網域；首頁canonical的尾斜線可能被Next.js正規化，指向相同URL。未啟用原站GTM，避免未經確認追蹤；WhatsApp沿用原號碼並補香港区號。

## 驗證

```bash
npm run lint
npm run build
npm run test:e2e
```

- ESLint、正式建置、TypeScript：通過。
- Playwright：10/10通過（桌面+手機）。
- 全部21頁：Title、Description、H1～H6、圖片src／alt逐項比對。
- sitemap21個URL與原站路徑集合一致；robots指向正確sitemap。
- 品牌補充內容、FAQ、手機導覽及無橫向溢出：通過。
- 測試使用獨立3417埠，禁止重用舊伺服器，避免比對到舊建置。

`docs/home-desktop.png`、`docs/home-mobile.png` 為前次THE LOOP設計歷史截圖，不是目前版本。最新測試截圖輸出至 `test-results/luxe-*.png`。
