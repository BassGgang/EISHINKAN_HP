'use client';
import {useEffect,useState} from 'react';
import {week} from '../lib/data';
export function Motion(){useEffect(()=>{let ctx;let lenis; (async()=>{const {gsap}=await import('gsap');const {ScrollTrigger}=await import('gsap/ScrollTrigger');gsap.registerPlugin(ScrollTrigger);if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const Lenis=(await import('lenis')).default; lenis=new Lenis({autoRaf:true}); ctx=gsap.context(()=>{gsap.utils.toArray('.reveal').forEach(el=>gsap.from(el,{y:45,opacity:0,duration:1.3,scrollTrigger:{trigger:el,start:'top 88%'}}));gsap.utils.toArray('.value').forEach(el=>gsap.from(el.querySelector('strong'),{x:-35,opacity:0,duration:1.1,scrollTrigger:{trigger:el,start:'top 85%'}}));const dojoScene = gsap.timeline({
  scrollTrigger: {
    trigger: '.dojos',
    start: 'top 100%',
    end: 'center 60%',
    scrub: 0.25,
    invalidateOnRefresh: true
  }
});
dojoScene.from('.dojos > .display', {
  opacity: 0, x: -16, duration: 0.35, ease: 'power1.out'
});
gsap.utils.toArray('.dojo-list > a').forEach((card, index) => {
  const entry = 0.35 + index * 0.48;
  dojoScene.fromTo(card,
    {clipPath: 'inset(0% 100% 0% 0%)'},
    {clipPath: 'inset(0% 0% 0% 0%)', duration: 0.65, ease: 'power1.inOut'}, entry
  );
});
gsap.from('.boss-hero img',{scale:1.12,clipPath:'inset(0 0 0 18%)',duration:1.8,ease:'power3.out'});
gsap.from('.master-profile h2',{y:45,opacity:0,duration:1.4,ease:'power2.out',scrollTrigger:{trigger:'.master-profile',start:'top 80%',once:true}});
gsap.from('.master-profile-grid h3',{x:-35,opacity:0,clipPath:'inset(0 100% 0 0)',duration:1.2,ease:'power3.out',scrollTrigger:{trigger:'.master-profile-grid',start:'top 85%',once:true}});
gsap.utils.toArray('.master-profile-grid li').forEach(item=>gsap.from(item,{x:-30,opacity:0,clipPath:'inset(0 100% 0 0)',duration:1.2,ease:'power2.out',scrollTrigger:{trigger:item,start:'top 90%',once:true}}));
gsap.from('.master-record',{scale:.9,opacity:0,duration:1.6,ease:'power2.out',scrollTrigger:{trigger:'.master-record',start:'top 85%',once:true}});
gsap.utils.toArray('.achievement').forEach(row=>gsap.from(row,{y:28,opacity:0,duration:1.1,ease:'power2.out',scrollTrigger:{trigger:row,start:'top 92%',once:true}}));
gsap.from('.master-history h2',{clipPath:'inset(0 100% 0 0)',duration:1.6,ease:'power3.out',scrollTrigger:{trigger:'.master-history',start:'top 80%',once:true}});
gsap.utils.toArray('.master-history > div:last-child p').forEach(paragraph=>gsap.from(paragraph,{y:24,opacity:0,duration:1.1,ease:'power2.out',scrollTrigger:{trigger:paragraph,start:'top 90%',once:true}}));
gsap.from('.philosophy-copy p',{y:45,opacity:0,clipPath:'inset(0 0 100% 0)',duration:1.6,stagger:.3,ease:'power2.out',scrollTrigger:{trigger:'.philosophy-copy',start:'top 90%',once:true}});gsap.from('.mind-text h2 span',{x:-55,opacity:0,clipPath:'inset(0 100% 0 0)',duration:1.5,stagger:.3,ease:'power3.out',scrollTrigger:{trigger:'.mind',start:'top 85%',once:true}});gsap.from('.master-photo img',{clipPath:'inset(25% 10% 25% 10%)',scale:1.14,duration:1.8,ease:'power2.out',scrollTrigger:{trigger:'.master',start:'top 80%',once:true}});if(window.matchMedia('(min-width: 701px)').matches){gsap.to('.mind-image',{scale:1.18,ease:'none',scrollTrigger:{trigger:'.mind',start:'top bottom',end:'bottom top',scrub:1}});gsap.to('.philosophy .display',{x:55,ease:'none',scrollTrigger:{trigger:'.philosophy',start:'top bottom',end:'bottom top',scrub:1}});}gsap.from('.schedule-section h2',{clipPath:'inset(0 100% 0 0)',x:-45,duration:1.6,ease:'power3.out',scrollTrigger:{trigger:'.schedule-section',start:'top 85%',once:true}});
gsap.from('.values-intro h2',{clipPath:'inset(0 0 100% 0)',y:40,duration:1.5,ease:'power3.out',scrollTrigger:{trigger:'.values',start:'top 80%',once:true}});gsap.from('.master-copy h2',{clipPath:'inset(0 100% 0 0)',x:-35,duration:1.5,ease:'power3.out',scrollTrigger:{trigger:'.master',start:'top 75%',once:true}});gsap.to('.hero-image',{scale:1.2,yPercent:8,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
gsap.to('.hero h1',{xPercent:-8,yPercent:-15,opacity:.35,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
gsap.to('.hero-content > :not(h1)',{y:-35,opacity:.25,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'65% top',scrub:1}})});})();return()=>{ctx?.revert();lenis?.destroy()}},[]);return null}

export function Opening(){
  const [visible,setVisible]=useState(true);
  return visible?<div className="opening" aria-hidden="true" onAnimationEnd={event=>{
    if(event.target===event.currentTarget && event.animationName==='opening-fade') setVisible(false);
  }}><img src="/images/eisinkan-logo-trimmed.png" alt="" width="1566" height="683"/><span>EISINKAN</span></div>:null;
}
export function Menu(){const [open,setOpen]=useState(false);useEffect(()=>{if(!open)return;const close=e=>{if(e.key==='Escape')setOpen(false)};document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close)},[open]);return <><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open}>{open?'CLOSE':'MENU'} <span>{open?'×':'☰'}</span></button>{open&&<nav className="overlay" aria-label="メニュー">{[['HOME','/'],['ABOUT','/#about'],['MASTER','/boss/'],['DOJOS','/#dojos'],['SCHEDULE','/#schedule'],['CONTACT','/#contact']].map(([n,h])=><a onClick={()=>setOpen(false)} href={h} key={n}>{n}</a>)}</nav>}</>}
export function Schedule(){const [day,setDay]=useState(0);return <div className="schedule"><div className="days" role="tablist">{week.map((w,i)=><button role="tab" aria-selected={i===day} onClick={()=>setDay(i)} key={w.day}>{w.day}<small>{['MON','TUE','WED','THU','FRI','SAT','SUN'][i]}</small></button>)}</div><div className="schedule-list">{week[day].items.length?week[day].items.map((x,i)=><a href={'/'+x.slug+'/'} className="schedule-row" key={i}><strong>{x.time}</strong><span>{x.name}</span><span>{x.dojo}</span><b>↗</b></a>):<p>掲載されている稽古情報はありません。</p>}</div></div>}

export function Calendar(){
  const [month,setMonth]=useState(null);
  useEffect(()=>{const now=new Date();setMonth(new Date(now.getFullYear(),now.getMonth(),1))},[]);
  if (!month) return <div className="calendar" aria-label="カレンダー"/>;
  const year=month.getFullYear();
  const monthIndex=month.getMonth();
  const offset=new Date(year,monthIndex,1).getDay();
  const count=new Date(year,monthIndex+1,0).getDate();
  const today=new Date();
  const move=(amount)=>setMonth(new Date(year,monthIndex+amount,1));
  return <div className="calendar" aria-label="カレンダー"><div className="calendar-heading"><button onClick={()=>move(-1)} aria-label="前月">‹</button><h3 aria-live="polite">{year}年 {monthIndex+1}月</h3><button onClick={()=>move(1)} aria-label="翌月">›</button></div><div className="calendar-grid">{['日','月','火','水','木','金','土'].map(day=><span className="calendar-weekday" key={day}>{day}</span>)}{Array.from({length:offset},(_,i)=><span key={'blank'+i}/>)}{Array.from({length:count},(_,i)=>{const day=i+1;const isToday=year===today.getFullYear()&&monthIndex===today.getMonth()&&day===today.getDate();return <span className={isToday?'calendar-today':''} aria-current={isToday?'date':undefined} key={day}>{day}</span>})}</div></div>
}
