import { LegacyPage } from '@/components/legacy-page';
import { pageMeta } from '@/lib/site';
export const metadata = pageMeta('', '', '/case');
export default function Page(){return <LegacyPage route="/case" />;}
