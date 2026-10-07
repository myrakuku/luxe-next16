'use client';
import {useState} from 'react';
import {cases} from '@/data/content';
import {Photo} from './ui';
export default function CaseGallery(){
    const [active,setActive]=useState('全部');
    const filtered=cases.filter(c=>active==='全部'||c.brand===active);
    
    return <>
    <div className="filter-toolbar">
        <div className="filter-buttons" role="group" aria-label="按品牌篩選案例">
            {['全部','Hermès','CHANEL','Dior','Louis Vuitton'].map(name=><button key={name} aria-pressed={active===name} onClick={()=>setActive(name)}>{name}</button>)}
        </div>
            <p className="filter-count" aria-live="polite">{String(filtered.length).padStart(2,'0')} PIECES IN THE ARCHIVE</p>
        </div>
        <div className="archive-grid">{filtered.map(c=><figure key={c.id}><Photo src={c.image} alt={`${c.brand} 手袋案例照片 ${c.id}`} sizes="(max-width: 640px) 50vw, 33vw"/>
        <figcaption className="archive-caption"><h2>{c.brand}
            </h2><span>ARCHIVE / {String(c.id).padStart(2,'0')}</span>
        </figcaption>
        </figure>)}
        </div>
    </>
    ;}
