import Link from 'next/link';
import {Eyebrow} from '@/components/ui';
export default function NotFound(){return <section className="not-found"><Eyebrow>404 / A DIFFERENT CHAPTER</Eyebrow><h1>這一頁，暫時不在故事裡。</h1><p className="body-copy">您可以回到首頁，或探索我們的收購品牌。</p><Link href="/" className="button">返回 The Luxe Vault 首頁</Link></section>;}
