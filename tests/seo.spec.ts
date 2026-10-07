import {test,expect} from '@playwright/test';
import legacy from '../src/data/legacy-pages.json';
test('品牌頁用無公司字眼的SEO，其餘頁面保留原站SEO',async({page})=>{
 for(const route of ['/','/brands/chanel','/blogs/post1']){
  await page.goto(route);
  await expect(page.locator('meta[name="keywords"]')).toHaveAttribute('content',/二手手袋/);
  await expect(page.locator('meta[name="robots"]')).not.toHaveAttribute('content',/noindex/);
  if(route==='/brands/chanel'){
   await expect(page.locator('meta[name="description"]')).toHaveAttribute('content',/二手手袋/);
   await expect(page.locator('meta[name="description"]')).not.toHaveAttribute('content',/The Luxe Vault/);
   await expect(page).toHaveTitle(/CHANEL 二手手袋收購/);
  }else{
   const reference=legacy[route as keyof typeof legacy];
   await expect(page).toHaveTitle(reference.title);
   await expect(page.locator('meta[name="description"]')).toHaveAttribute('content',reference.description);
  }
 }
});
