import type {MetadataRoute} from 'next';
export const dynamic='force-static';
export default function manifest():MetadataRoute.Manifest{return {name:'The Luxe Vault',short_name:'The Luxe Vault',description:'香港名牌手袋收購・讓經典延續',lang:'zh-Hant',start_url:'/',display:'standalone',background_color:'#ffffff',theme_color:'#20201e',icons:[{src:'/favicon.ico',sizes:'any',type:'image/x-icon'}]};}
