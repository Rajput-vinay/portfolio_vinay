import React,{useState} from 'react';
import { NAV_ITEMS } from '../data';

const labels={about:'about',qualification:'education',skills:'skills',projects:'projects',experience:'experience',activities:'activities',certifications:'certs',github:'github',contact:'contact'};

export default function Navbar({active,scrollTo}){
  const [open,setOpen]=useState(false);
  return <nav className="site-nav">
    <div className="nav-inner">
      <button className="nav-logo" onClick={()=>scrollTo('about')}><span className="nav-logo-dot"/>VR.dev</button>
      <button className={`nav-menu-toggle ${open?'is-open':''}`} aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>
        <span/><span/><span/>
      </button>
      <div className={`nav-links ${open?'is-open':''}`}>
        {NAV_ITEMS.map(id=><a key={id} className={active===id?'active':''} href={`#${id}`} onClick={e=>{e.preventDefault();scrollTo(id);setOpen(false)}}>{labels[id]||id}</a>)}
      </div>
    </div>
  </nav>;
}
