export const dynamic = 'force-static';
import {siteUrl} from '../lib/site';
export default function sitemap(){return ['', '/boss/', '/futabahonbu/', '/nanpusu/', '/sakaori/'].map(path=>({url:siteUrl(path || '/')}))}
