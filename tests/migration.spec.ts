import {test,expect} from '@playwright/test';
import legacy from '../src/data/legacy-pages.json';
const origin='https://theluxevaulthk.com';
const isBrand=(route:string)=>route.startsWith('/brands/')&&route!=='/brands';
test('其餘頁面原站Title、Description、H1-H6、圖片alt逐項一致',async({page},testInfo)=>{
 test.setTimeout(120000);
 for(const [route,reference] of Object.entries(legacy)){
  if(isBrand(route))continue;
  const response=await page.goto(route);expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(reference.title);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content',reference.description);
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content',reference.title);
  expect(new URL((await page.locator('link[rel="canonical"]').getAttribute('href'))!).href).toBe(new URL(origin+route).href);
  const headings=await page.locator('h1,h2,h3,h4,h5,h6').evaluateAll(nodes=>nodes.map(el=>({tag:el.tagName.toLowerCase(),text:(el.textContent||'').replace(/\s+/g,' ').trim()})));
  expect(headings,route+' headings').toEqual(reference.headings);
  const images=await page.locator('img').evaluateAll(nodes=>nodes.map(el=>({src:el.getAttribute('src'),alt:el.getAttribute('alt')})));
  expect(images,route+' images').toEqual(reference.images);
  expect(await page.locator('body').innerText()).not.toMatch(/THE LOOP|The Loop/);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),route+' overflow').toBe(true);
  if(route==='/brands/hermes'){await page.screenshot({path:`test-results/luxe-brand-${testInfo.project.name}.png`});await page.locator('#models').scrollIntoViewIfNeeded();await page.screenshot({path:`test-results/luxe-guide-${testInfo.project.name}.png`});}
 }
});
test('sitemap.xml、robots.txt與21個原網址一致',async({request})=>{
 const robots=await request.get('/robots.txt');expect(robots.status()).toBe(200);const text=await robots.text();expect(text).toContain('Allow: /');expect(text).toContain(`Sitemap: ${origin}/sitemap.xml`);expect(text).not.toContain('Disallow: /');
 const sitemap=await request.get('/sitemap.xml');expect(sitemap.status()).toBe(200);const xml=await sitemap.text();const urls=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);expect(urls.sort()).toEqual(Object.keys(legacy).map(p=>origin+p).sort());expect(new Set(urls).size).toBe(21);
});
