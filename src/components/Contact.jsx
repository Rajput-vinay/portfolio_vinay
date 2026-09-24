import React,{useState} from 'react';
import { Section, SectionHeader, BtnPrimary } from './UI';
import { CONTACT_INFO } from '../data';

function Field({label,type='text',placeholder,value,onChange,multi=false}){
  const [focused,setFocused]=useState(false);
  const Tag=multi?'textarea':'input';
  return <div style={{marginBottom:'1.1rem'}}>
    <label style={{display:'block',fontFamily:"'Space Mono',monospace",fontSize:'.62rem',letterSpacing:'3px',color:'var(--muted)',marginBottom:'.5rem'}}>{label}</label>
    <Tag type={multi?undefined:type} rows={multi?5:undefined} placeholder={placeholder} value={value} onChange={onChange} onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}
      style={{width:'100%',background:'var(--bg2)',border:`1px solid ${focused?'var(--cyan)':'var(--border)'}`,padding:'.8rem 1rem',color:'var(--text)',fontFamily:"'Space Mono',monospace",fontSize:'.8rem',outline:'none',resize:'vertical',boxShadow:focused?'0 0 25px rgba(0,229,255,.05)':'none',transition:'all .2s'}}/>
  </div>;
}
export default function Contact({showToast}){
 const [form,setForm]=useState({name:'',email:'',message:''});
 const submit=()=>{
   if(!form.name||!form.email||!form.message){showToast('> ERROR: FILL ALL FIELDS');return;}
   const subject=encodeURIComponent('Portfolio enquiry from '+form.name);
   const body=encodeURIComponent(form.message+'\n\nReply to: '+form.email);
   window.location.href=`mailto:vinaryrajput2004vr@gmail.com?subject=${subject}&body=${body}`;
   showToast('> MAIL CLIENT OPENED ✓'); setForm({name:'',email:'',message:''});
 };
 return <Section id="contact">
   <SectionHeader num="06 / CONNECT" title="Contact"/>
   <div className="contact-layout" style={{display:'grid',gridTemplateColumns:'1fr 1.1fr',gap:'2rem'}}>
     <div>
       <div className="terminal-card">
         <div className="terminal-bar"><span className="terminal-dot"/><span className="terminal-dot"/><span className="terminal-dot"/></div>
         <div className="terminal-line"><b>vinay@portfolio:~$</b> whoami</div>
         <div className="terminal-line">Full Stack Developer / MERN / AI</div>
         <div className="terminal-line"><b>vinay@portfolio:~$</b> status</div>
         <div className="terminal-line">OPEN_TO_WORK = <b>true</b></div>
         <div className="terminal-line"><b>vinay@portfolio:~$</b> location</div>
         <div className="terminal-line">Agra, Uttar Pradesh, India</div>
       </div>
       <div style={{marginTop:'1.5rem'}}>
         {CONTACT_INFO.map((c,i)=><div key={i} style={{display:'flex',gap:'.75rem',marginBottom:'.85rem'}}>
           <span style={{color:'var(--cyan)',fontFamily:"'Space Mono',monospace",fontSize:'.75rem',minWidth:'18px'}}>{c.icon}</span>
           <div><div style={{fontFamily:"'Space Mono',monospace",fontSize:'.6rem',letterSpacing:'2px',color:'var(--muted)'}}>{c.label}</div>
           {c.href?<a href={c.href} target={c.href.startsWith('http')?'_blank':'_self'} rel="noreferrer" style={{color:'var(--cyan)',textDecoration:'none',fontSize:'.82rem',wordBreak:'break-all'}}>{c.val}</a>:<span style={{color:'var(--text)',fontSize:'.82rem'}}>{c.val}</span>}</div>
         </div>)}
       </div>
     </div>
     <div className="terminal-card">
       <div className="terminal-bar"><span className="terminal-dot"/><span className="terminal-dot"/><span className="terminal-dot"/><span style={{marginLeft:'auto',font:'9px Space Mono',color:'var(--muted)'}}>CONTACT_FORM.exe</span></div>
       <Field label="NAME" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
       <Field label="EMAIL" type="email" placeholder="you@example.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
       <Field label="MESSAGE" multi placeholder="Tell me about your project..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>
       <BtnPrimary onClick={submit} style={{width:'100%'}}>SEND MESSAGE ↗</BtnPrimary>
     </div>
   </div>
 </Section>;
}