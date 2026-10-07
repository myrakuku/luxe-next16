import { LegacyPage } from '@/components/legacy-page';
import { pageMeta } from '@/lib/site';
export const metadata = pageMeta('', '', '/faq');
export default function Page(){return <LegacyPage route="/faq" />;}
