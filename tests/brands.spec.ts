import {test,expect} from '@playwright/test';
const slugs=['hermes','chanel','dior','celine','lv','gucci','prada','goyard','fendi'];
test('品牌頁首圖文左右版、移除公司字眼、指南保留',async({page},testInfo)=>{
 test.setTimeout(90000);
 for(const slug of slugs){
  await page.goto('/brands/'+slug);
  const hero=page.locator('.handbag-brand-hero');
  await expect(hero).toBeVisible();
  const photo=await hero.locator('.handbag-brand-photo').boundingBox();
  const copy=await hero.locator('.handbag-brand-copy').boundingBox();
  if(testInfo.project.name==='desktop'){expect(photo!.x<copy!.x,`${slug} 左圖右文`).toBe(true);}else{expect(photo!.y<copy!.y,`${slug} 手機上下堆疊`).toBe(true);}
  await expect(hero.locator('h1')).toContainText('二手手袋');
  await expect(hero.locator('img')).toHaveCount(1);
  await expect(hero.locator('img')).toHaveAttribute('alt',/手袋款式展示/);
  const guide=page.locator('[data-brand-guide]');
  expect(((await guide.textContent())?.match(/\p{Script=Han}/gu)||[]).length).toBeGreaterThan(900);
  await expect(guide.locator('h1,h2,h3,h4,h5,h6')).toHaveCount(0);
  const bodyText=await page.locator('main').innerText();
  expect(bodyText).not.toMatch(/The Luxe Vault|我們|本公司|THE LOOP/);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),slug+' overflow').toBe(true);
  if(slug==='hermes')await page.screenshot({path:`test-results/handbag-brand-${testInfo.project.name}.png`});
 }
});
