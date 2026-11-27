import {siteUrl} from '../lib/site';
import './style.css';
export const metadata={metadataBase:new URL(siteUrl('/')),alternates:{canonical:siteUrl('/')},openGraph:{title:'英心館 | 長谷川空手スクール',description:'自分で自分を守れる子を育てます。',images:[siteUrl('/images/道場.jpg')],type:'website'},title:'英心館 | 長谷川空手スクール',description:'自分で自分を守れる子を育てます。山梨の空手道場、長谷川空手スクール英心館。'};
export default function Layout({children}){return <html lang="ja"><body>{children}</body></html>}
