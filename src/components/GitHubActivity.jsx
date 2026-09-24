import React from 'react';
import { Section, SectionHeader } from './UI';

const REPOS = [
  {name:'CampusSync', repo:'campus_sync', url:'https://github.com/Rajput-vinay/campus_sync'},
  {name:'Thunder.ai', repo:'thunder.ai', url:'https://github.com/Rajput-vinay/thunder.ai'},
  {name:'YouTube Lite', repo:'youtube_lite', url:'https://github.com/Rajput-vinay/youtube_lite'},
  {name:'Portfolio', repo:'portfolio_vinay', url:'https://github.com/Rajput-vinay/portfolio_vinay'},
];

export default function GitHubActivity(){
  const [stats,setStats]=React.useState(null);
  const [repos,setRepos]=React.useState([]);
  const [contributions,setContributions]=React.useState([]);
  const [total,setTotal]=React.useState(0);
  const [loading,setLoading]=React.useState(true);

  React.useEffect(()=>{
    const controller=new AbortController();
    const load=async()=>{
      try{
        const [profileRes,reposRes,contribRes]=await Promise.all([
          fetch('https://api.github.com/users/Rajput-vinay',{signal:controller.signal}),
          fetch('https://api.github.com/users/Rajput-vinay/repos?per_page=100&sort=updated',{signal:controller.signal}),
          fetch('https://github-contributions-api.jogruber.de/v4/Rajput-vinay?y=last',{signal:controller.signal})
        ]);
        if(!profileRes.ok||!reposRes.ok||!contribRes.ok) throw new Error('GitHub API unavailable');
        const profile=await profileRes.json();
        const all=await reposRes.json();
        const contributionData=await contribRes.json();
        setStats({publicRepos:profile.public_repos,followers:profile.followers,following:profile.following});
        setRepos(all.slice(0,6));
        setContributions(contributionData.contributions||[]);
        const totals=Object.values(contributionData.total||{});
        setTotal(totals.reduce((sum,n)=>sum+Number(n||0),0));
      }catch(e){
        if(e.name!=='AbortError') setStats(null);
      }finally{
        if(!controller.signal.aborted) setLoading(false);
      }
    };
    load();
    return()=>controller.abort();
  },[]);

  const recentDays=contributions.slice(-364);
  const levels=recentDays.map(d=>Number(d.count||0));
  const max=Math.max(...levels,1);

  return <Section id="github">
    <SectionHeader num="08 / OPEN SOURCE" title="GitHub Activity" />
    <div className="github-panel">
      <div className="github-header">
        <div>
          <div className="github-kicker">RAJPUT-VINAY / PUBLIC ACTIVITY</div>
          <h3>Building in public, one commit at a time.</h3>
        </div>
        <a href="https://github.com/Rajput-vinay" target="_blank" rel="noreferrer" className="github-profile-link">VIEW PROFILE ↗</a>
      </div>

      <div className="github-stats">
        {[
          ['PUBLIC REPOS',stats?.publicRepos ?? '—'],
          ['CONTRIBUTIONS',loading?'—':total],
          ['FOLLOWERS',stats?.followers ?? '—'],
          ['STATUS',loading?'SYNCING':'ONLINE']
        ].map(([label,value])=><div className="github-stat" key={label}><span>{label}</span><strong>{value}</strong></div>)}
      </div>

      <div className="github-repo-grid">
        {(repos.length?repos:REPOS).map((r,i)=>{
          const fallback=REPOS.find(x=>x.repo===r.name);
          return <a className="github-repo" href={r.html_url||fallback?.url||'https://github.com/Rajput-vinay'} target="_blank" rel="noreferrer" key={r.id||r.name}>
            <span className="github-repo-num">0{i+1}</span>
            <span className="github-repo-name">{r.name}</span>
            <span className="github-repo-meta">{r.language||'PROJECT'} · ★ {r.stargazers_count??0}</span>
            <span className="github-arrow">↗</span>
          </a>
        })}
      </div>

      <div className="github-graph" aria-label="GitHub contribution activity">
        <div className="github-graph-title">CONTRIBUTION GRAPH · LAST YEAR</div>
        <div className="github-heatmap github-real-heatmap">
          {recentDays.map((day,i)=>{
            const count=Number(day.count||0);
            const intensity=Math.min(4,Math.ceil((count/max)*4));
            return <span key={day.date||i} className={`github-level-${intensity}`} title={`${count} contributions · ${day.date||''}`} />;
          })}
        </div>
        <div className="github-graph-footer">
          <small>Live contribution data from GitHub's public contribution calendar.</small>
          <a href="https://github.com/Rajput-vinay" target="_blank" rel="noreferrer">SEE ON GITHUB ↗</a>
        </div>
      </div>
    </div>
  </Section>;
}
