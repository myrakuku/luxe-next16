# SEO 遷移狀態（最新要求）

品牌：The Luxe Vault。原站：`luxe-project-react19`。目前專案資料夾仍是 `the-loop-next16`。

## 通過的精確比對

21頁在桌面及手機：
- document.title 與原站效果執行後的 title 完全一致。
- meta description 與原站完全一致。
- 整頁 H1～H6 數量、層級、順序、文字一致（文字空白及HTML entities正規化）。
- 圖片順序、來源原圖、alt 屬性值一致；空alt及沒有alt分開比對。
- 原網址不變，sitemap列出相同21個正式URL。
- robots允許正式站爬取，並指向 https://theluxevaulthk.com/sitemap.xml。

原始基準在 `src/data/legacy-pages.json`；測試在 `tests/migration.spec.ts`。本次Playwright共10項測試全部通過。

## 內容擴充的保留方式

9個品牌的款式、估價、配件、FAQ與文章連結仍保留。為遵守H1～H6完全一致，新增指南使用普通文字元素，不插入額外heading。標題與描述以legacy資料優先；`src/lib/seo.ts`的關鍵字可繼續補充，但不覆蓋原站標題及描述。Google不使用meta keywords作排名依據，內容品質及相關性仍較重要。

## 刻意保留的原站問題

- 首頁沒有H1，不擅自補上。
- 原站出售頁4張照片没有alt屬性，不擅自改成空alt或新文字。
- 多個品牌頁alt原本使用「Prada 手袋展示」，依要求照原樣保留。
- 某些品牌原圖不是手袋照片，為維持同圖同alt已恢復。
- 歷史文章、成交及高價服務等文案未作事實更新。完全保留不是對這些價格或宣稱的核實。

以上不是SEO／無障礙最佳實踐，但符合這次逐字保留指令。若日後要改善，請將「嚴格遷移比對」與「上線後SEO改善」分開進行。

預览站請設 `SITE_NOINDEX=true` 後重新build；正式網域預設為原站 https://theluxevaulthk.com。此次只修改本機專案，尚未部署、提交Search Console或檢查線上主機設定。
