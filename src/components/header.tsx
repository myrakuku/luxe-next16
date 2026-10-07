'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Menu,X,ArrowUpRight,MessageCircle} from 'lucide-react';
import {navItems,whatsapp} from '@/lib/site';
import {Wordmark} from './ui';

export default function Header(){
    const pathname=usePathname();
    const [open,setOpen]=useState(false);
    const dialog=useRef<HTMLDialogElement>(null);
    const trigger=useRef<HTMLButtonElement>(null);
    useEffect(()=>{if(open){dialog.current?.showModal();document.body.style.overflow='hidden';}else{dialog.current?.close();document.body.style.overflow='';}return()=>{document.body.style.overflow='';};},[open]);
    const close=()=>{setOpen(false);trigger.current?.focus();};
    return <>
    <div className="announcement" id="top">A NEW CHAPTER FOR YOUR LUXURY <span>・</span> 讓珍藏，遇見下一段故事</div>
    <header className="site-header">
        <div className="header-inner wrap">
            <Link href="/" aria-label="The Luxe Vault 首頁">
                <Wordmark/>
            </Link>
            <nav className="desktop-nav" aria-label="主要導覽">{navItems.map(item=>
                <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href)?'page':undefined}>{item.label}</Link>)}
            </nav>
            <a className="header-cta rounded-2xl" href={whatsapp()} target="_blank" rel="noopener noreferrer">預約估價 
                <ArrowUpRight size={16}/>
                </a>
                    <button ref={trigger} className="mobile-trigger" onClick={()=>setOpen(true)} aria-label="開啟導覽選單" aria-expanded={open} aria-controls="mobile-navigation"><Menu size={24}/></button>
        </div>
    </header>
    <dialog ref={dialog} id="mobile-navigation" className="mobile-dialog" onCancel={close} onClick={e=>{if(e.target===dialog.current)close();}} aria-label="網站導覽">
        <div className="mobile-panel">
            <div className="flex items-center justify-between">
                <Wordmark/>
                <button className="icon-button" onClick={close} aria-label="關閉導覽選單">
                    <X/>
                </button>
            </div>
            <p className="eyebrow mt-14">EXPLORE The Luxe Vault</p>
            <nav aria-label="手機導覽">
                <Link href="/" onClick={close}>首頁 
                <ArrowUpRight size={19}/>
                </Link>{navItems.map((item,i)=><Link key={item.href} href={item.href} onClick={close} aria-current={pathname.startsWith(item.href)?'page':undefined}><span>
                    <small>0{i+1}</small>{item.label}</span>
                    <ArrowUpRight size={19}/></Link>)}
            </nav>
            <a href={whatsapp()} className="button mt-8" target="_blank" rel="noopener noreferrer">WhatsApp 免費估價 <ArrowUpRight size={17}/></a>
        </div>
    </dialog>
    <a className="floating-contact rounded-2xl" href={whatsapp()} aria-label="透過 WhatsApp 聯絡 The Luxe Vault" target="_blank" rel="noopener noreferrer">
        <MessageCircle size={19}/>
        <span>聊聊您的珍藏</span>
        <span className="contact-dot"/>
    </a>
    </>
    ;}