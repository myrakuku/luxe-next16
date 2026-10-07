import { test, expect } from '@playwright/test';
test('編輯式設計預覽與圖片載入',async({page},testInfo)=>{
 for(const [name,route] of [['home','/'],['directory','/brands'],['journal','/blogs'],['service','/takeoverauth']]){
  await page.goto(route);
  await page.locator('img').evaluateAll(async images=>{await Promise.all(images.filter(img=>img.getBoundingClientRect().top<innerHeight).map(img=>(img as HTMLImageElement).decode().catch(()=>null)));});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);
  await page.screenshot({path:`test-results/editorial-${name}-${testInfo.project.name}.png`});
 }
});
