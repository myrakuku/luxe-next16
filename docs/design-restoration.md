# 品牌頁改造：左圖右文 + 去除公司字眼

## 變更
- 9 個品牌專頁改用新的首屏版面：左邊手袋照片、右邊品牌文字（品牌名、系列款式、估價重點）。
- 移除品牌頁內的公司宣傳文字，改為以手袋資訊為主；收購指南保留並已中性化。
- 移除品牌指南中的「The Luxe Vault」及「我們／我們的」等公司稱呼。
- 品牌頁 meta description 不再含「The Luxe Vault」，改用中性描述；title 改用「{品牌} 二手手袋收購」。
- 其他頁面（首頁、目錄、文章、服務、FAQ、案例）維持原站文字與 SEO。

## 檔案
- `src/components/handbag-brand-page.tsx`：新增品牌首屏元件。
- `src/app/brands/[slug]/page.tsx`：改用 HandbagBrandPage，不再走 LegacyPage。
- `src/app/editorial.css`：新增 .handbag-brand-* 樣式。
- `src/data/brand-guides.ts`、`src/data/content.ts`：中性化公司稱呼。
- `src/lib/site.ts`、`src/lib/seo.ts`：品牌頁 SEO 不再含公司名。
- `tests/brands.spec.ts`：品牌頁版面、公司字眼、指南檢查。
- `tests/seo.spec.ts`、`tests/migration.spec.ts`：因品牌頁獨立，排除品牌頁的原站比對。

## 驗證
- 正式建置、TypeScript、ESLint 通過。
- Playwright 12/12 通過（桌面+手機）。
- 品牌頁桌面確認左圖右文、手機為上下排列、無橫向溢出、內文無「The Luxe Vault／我們／本公司／THE LOOP」。
- 品牌頁 meta description 無公司名；title 含「二手手袋收購」。
- sitemap、robots 不變。

尚未部署。品牌頁的圖片 alt 已改為正確描述，與先前遷移基線不同，屬本次刻意調整。
