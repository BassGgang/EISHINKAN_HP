import {siteUrl} from '../lib/site';
import './style.css';
export const metadata={metadataBase:new URL(siteUrl('/')),alternates:{canonical:siteUrl('/')},openGraph:{title:'英心館 | 長谷川空手スクール',description:'自分で自分を守れる子を育てます。',images:[siteUrl('/images/道場.jpg')],type:'website'},title:'英心館 | 長谷川空手スクール',description:'自分で自分を守れる子を育てます。山梨の空手道場、長谷川空手スクール英心館。'};
export default function Layout({children}){return <html lang="ja"><head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@700&family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Serif+JP:wght@700&display=swap" /></head><body>{children}</body></html>}
