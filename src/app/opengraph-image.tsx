import {ImageResponse} from 'next/og';
export const alt='The Luxe Vault — Pre-loved. Re-loved.';
export const size={width:1200,height:630};
export const contentType='image/png';
export const dynamic='force-static';
export default function Image(){return new ImageResponse(<div style={{width:'100%',height:'100%',background:'#f6f5f1',display:'flex',flexDirection:'column',padding:'70px',color:'#20201e',justifyContent:'space-between'}}><div style={{display:'flex',fontSize:29,letterSpacing:5}}>The Luxe Vault <span style={{fontSize:15,letterSpacing:6,marginLeft:22,marginTop:11,color:'#8b734c'}}>LUXURY</span></div><div style={{display:'flex',flexDirection:'column',fontSize:110,fontFamily:'serif',lineHeight:1.05}}><span>Pre-loved.</span><span style={{color:'#8b734c',fontStyle:'italic'}}>Re-loved.</span></div><div style={{display:'flex',borderTop:'1px solid #b8ac96',paddingTop:24,fontSize:15,letterSpacing:4,justifyContent:'space-between'}}><span>CURATED LUXURY, CONTINUED STORIES.</span><span>HONG KONG</span></div></div>,size);}
