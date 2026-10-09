import type { Language, ProjectKind } from './content'

export type IconName = 'person' | 'trophy' | 'medal' | 'code' | 'graduate' | 'pin' | 'heart' | 'bulb' | 'tools'

export function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, string> = {
    person: 'M16 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM7 27v-5a9 9 0 0 1 18 0v5H7Z',
    trophy: 'M10 4h12v9a6 6 0 0 1-12 0V4ZM10 7H5v4a6 6 0 0 0 6 6m11-10h5v4a6 6 0 0 1-6 6m-5 2v7m-6 2h12',
    medal: 'M8 3h5l5 10m6-10h-5l-5 10M16 29a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13 1.5 3 3.5.5-2.5 2.5.6 3.5-3.1-1.6-3.1 1.6.6-3.5-2.5-2.5 3.5-.5 1.5-3Z',
    code: 'm10 7-8 9 8 9m12-18 8 9-8 9M19 3l-6 26',
    graduate: 'm2 11 14-7 14 7-14 7-14-7Zm6 3v10q8 6 16 0V14m6-3v12',
    pin: 'M16 29S6 20 6 12a10 10 0 0 1 20 0c0 8-10 17-10 17Zm0-12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z',
    heart: 'M16 28 4 15C-3 5 9-2 16 7c7-9 19-2 12 8L16 28Z',
    bulb: 'M12 24h8m-7 4h6M16 2v2M4 6l2 2m22-2-2 2M1 16h3m24 0h3M12 21c0-5-5-5-5-11a9 9 0 0 1 18 0c0 6-5 6-5 11h-8Z',
    tools: 'm5 27 12-12m-9 6-3-3M19 3a8 8 0 0 0-9 11L2 22a4 4 0 0 0 6 6l8-8a8 8 0 0 0 12-9l-6 6-5-5 6-6Z',
  }
  return <svg viewBox="0 0 32 32" width="32" height="32" fill="none" aria-hidden="true"><path d={paths[name]} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export function ChipIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" /><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" stroke="currentColor" strokeWidth="1.4" /><rect x="10" y="10" width="4" height="4" fill="currentColor" /></svg>
}

export function CircuitBoard({ label, language }: { label: string; language: Language }) {
  return (
    <svg className="circuit-board" viewBox="0 0 650 590" role="img" aria-label={label}>
      <defs>
        <linearGradient id="board-surface" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#163a60" /><stop offset=".48" stopColor="#0f2842" /><stop offset="1" stopColor="#071a30" /></linearGradient>
        <linearGradient id="chip-surface" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#204a71" /><stop offset="1" stopColor="#091b30" /></linearGradient>
        <linearGradient id="chip-edge" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#87c9ff" /><stop offset="1" stopColor="#285575" /></linearGradient>
        <radialGradient id="board-halo"><stop stopColor="#248fff" stopOpacity=".14" /><stop offset="1" stopColor="#248fff" stopOpacity="0" /></radialGradient>
        <filter id="signal-glow"><feGaussianBlur stdDeviation="3" /></filter>
        <pattern id="board-dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".8" fill="#74b9ff" opacity=".18" /></pattern>
      </defs>
      <ellipse cx="332" cy="330" rx="300" ry="242" fill="url(#board-halo)" />
      <g fill="none" stroke="#34526d" strokeWidth=".7">
        <ellipse cx="326" cy="309" rx="280" ry="156" transform="rotate(-28 326 309)" strokeDasharray="3 7" />
        <path d="M38 474 600 151M37 184l551 318M326 47v509" opacity=".4" />
        <path d="M88 79h22m-11-11v22M547 464h22m-11-11v22" />
      </g>
      <g className="board-float">
        <path d="m85 312 246-143 249 143v26L333 482 85 339Z" fill="#040e1b" stroke="#28587b" />
        <path d="m85 312 246-143 249 143-247 144Z" fill="url(#board-surface)" stroke="#4d94c4" strokeWidth="1.3" />
        <path d="m85 312 246-143 249 143-247 144Z" fill="url(#board-dots)" />
        <path d="m101 312 230-132 231 132-229 132Z" fill="none" stroke="#579bd2" strokeOpacity=".25" />
        <g fill="none" stroke="#5aabec" strokeWidth="1.3" strokeLinejoin="round" opacity=".65">
          <path d="m254 278-63-37-52 30m132 20-74-43-23 13m62 44-50-29-55 32m107 8-69-40-40 24m136 31-36 21-80-45-27 16" />
          <path d="m294 364-46 27-77-44m139 26-46 27-45-26m107 5-27 16 35 20 27-15m-12-31 52 30 48-28m-81-14 50 29 72-41" />
          <path d="m382 343 51 29 79-45m-113 3 62 36 76-44m-122-7 55 32 61-35m-115-11 38 22 75-43" />
          <path d="m358 250 48-28 75 43m-106-5 47-27 27 15m-115-12 44-26-45-26m-14 56-48-28-47 27" />
        </g>
        <g fill="#a0d4ff" stroke="#09223b" strokeWidth="2">
          {[[139,271],[174,261],[131,308],[129,308],[122,334],[171,347],[219,374],[335,415],[439,371],[512,327],[537,322],[531,312],[529,280],[481,265],[449,248],[333,184],[224,239]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="3.3" />)}
        </g>
        <g fill="#122e49" stroke="#6791b2" strokeWidth="1">
          <path d="m201 244 14-8 28 16-14 8Z" /><path d="m179 333 16-9 31 18-16 9Z" /><path d="m446 292 16-9 28 16-16 9Z" /><path d="m391 383 15-9 23 14-15 9Z" />
        </g>
        <g stroke="#b0cce4" strokeWidth="3">
          {[0,1,2,3,4,5,6,7].map(i => <g key={i}><path d={`m${235+i*12} ${279-i*7} -13 -8`} /><path d={`m${341+i*12} ${340-i*7} 13 8`} /><path d={`m${235+i*12} ${306+i*7} -13 8`} /><path d={`m${341+i*12} ${245+i*7} 13 -8`} /></g>)}
        </g>
        <path d="m231 288 100-58 101 58v23l-100 58-101-58Z" fill="#050f1f" stroke="#557ea8" />
        <path d="m231 288 100-58 101 58-100 58Z" fill="url(#chip-surface)" stroke="url(#chip-edge)" strokeWidth="1.5" />
        <path d="m244 288 87-50 88 50-87 50Z" fill="none" stroke="#6593bf" strokeWidth=".7" />
        <g transform="translate(331 289) matrix(.866 .5 -.866 .5 0 0)">
          <text x="0" y="10" textAnchor="middle" fill="#d2eaff" fontSize="48" fontFamily="Arial, sans-serif" fontWeight="700" letterSpacing="-3">AA</text>
          <path d="M-27 22h54" stroke="#568bc1" />
        </g>
        <path className="signal-line" d="m382 343 51 29 79-45" fill="none" stroke="#d6efff" strokeWidth="2" />
        <path d="m382 343 51 29 79-45" fill="none" stroke="#60b5ff" strokeWidth="4" filter="url(#signal-glow)" opacity=".5" />
        <circle className="signal-dot" cx="512" cy="327" r="4" fill="#cceeff" />
        <g fill="#112e4a" stroke="#538cbb">
          <ellipse cx="319" cy="205" rx="6" ry="3.5" /><ellipse cx="111" cy="313" rx="6" ry="3.5" /><ellipse cx="553" cy="312" rx="6" ry="3.5" /><ellipse cx="333" cy="436" rx="6" ry="3.5" />
        </g>
        <path d="m105 324 227 131 225-131" fill="none" stroke="#89b6da" strokeOpacity=".18" />
      </g>
      <g stroke="#6298c6" strokeWidth="1" fill="none" opacity=".6"><path d="M401 139h86l26 26" /><circle cx="513" cy="165" r="3" /><path d="M108 420h57l21-22" /><circle cx="186" cy="398" r="3" /></g>
      <g fontFamily="sans-serif" fill="#94b4ce" fontSize="10" letterSpacing={language === 'en' ? '1.3' : '0'}><text x={language === 'en' ? 410 : 570} y="129" textAnchor={language === 'en' ? 'start' : 'end'}>{language === 'en' ? 'FIG. 01 / THE STARTING POINT' : 'شكل ٠١ / نقطة البداية'}</text><text x="108" y="439">{language === 'en' ? 'DESIGNED TO EXPLORE' : 'صُمّمت للاستكشاف'}</text></g>
    </svg>
  )
}

export function ProjectIllustration({ kind, label, language }: { kind: ProjectKind; label: string; language: Language }) {
  return (
    <svg viewBox="0 0 400 260" className={`project-illustration ${kind}`} role="img" aria-label={label}>
      <defs><linearGradient id={`project-${kind}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="currentColor" stopOpacity=".12" /><stop offset="1" stopColor="currentColor" stopOpacity=".02" /></linearGradient></defs>
      <g stroke="currentColor" strokeWidth=".6" opacity=".12" fill="none"><circle cx="200" cy="132" r="91" /><circle cx="200" cy="132" r="109" strokeDasharray="2 8" /><path d="M35 132h330M200 12v235" /></g>
      {kind === 'vest' && <>
        <g fill={`url(#project-${kind})`} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="m157 49-38 22 11 52 20-8-5 92h109l-5-92 20 8 12-52-39-22c-4 22-15 35-42 35s-39-13-43-35Z" /><path d="M178 53c2 9 8 15 22 15s20-6 22-15" /><path d="M200 85v122" opacity=".5" /></g>
        <g stroke="currentColor" fill="none" strokeWidth="1" opacity=".65"><path d="M162 112h20v23h-20v23h20v22m56-68h-20v23h20v23h-20v22" /><rect x="153" y="102" width="37" height="87" rx="9" /><rect x="210" y="102" width="37" height="87" rx="9" /></g>
        <g stroke="currentColor" fill="none"><path d="M263 149h43v-38" strokeDasharray="3 4" /><rect x="295" y="77" width="23" height="36" rx="4" /><path d="M303 82h7m-4 25h2" /><path d="M307 87v12m-4-3a4 4 0 1 0 8 0" /></g>
        <g fill="currentColor" fontFamily="sans-serif" fontSize="9" opacity=".7"><text x="38" y="95">{language === 'en' ? '01 / THERMAL' : '٠١ / الراحة'}</text><text x="38" y="108">{language === 'en' ? 'COMFORT' : 'الحرارية'}</text><text x="258" y="219">{language === 'en' ? 'ZIEKO VEST' : 'زيكو ڤست'}</text></g><path d="M105 102h22" stroke="currentColor" strokeWidth=".7" />
      </>}
      {kind === 'home' && <>
        <path d="m118 116 82-66 82 66" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /><path d="M134 108v98h131v-98" fill={`url(#project-${kind})`} stroke="currentColor" strokeWidth="1.5" /><path d="M185 206v-51h32v51" stroke="currentColor" strokeWidth="1.3" fill="none" />
        <g stroke="currentColor" strokeWidth="1.2" fill="none"><rect x="151" y="128" width="20" height="20" /><path d="M161 128v20m-10-10h20" /><rect x="231" y="128" width="20" height="20" /><path d="M241 128v20m-10-10h20" /><path d="M180 104q20-19 40 0m-32 9q12-12 24 0" /></g><circle cx="200" cy="120" r="2" fill="currentColor" />
        <g fill="none" stroke="currentColor" strokeWidth=".8" opacity=".6"><path d="M134 172H86v-51m179 51h47v-45" strokeDasharray="3 4" /><rect x="74" y="94" width="24" height="27" rx="3" /><circle cx="86" cy="107" r="5" /><circle cx="312" cy="113" r="12" /><path d="M308 114v-6a4 4 0 0 1 8 0v6m-10 0h12v7h-12Z" /></g>
        <text x="200" y="236" textAnchor="middle" fill="currentColor" fontFamily="sans-serif" fontSize="9" letterSpacing={language === 'en' ? '1' : '0'} opacity=".6">{language === 'en' ? 'ZIEKO SMART HOME' : 'زيكو سمارت هوم'}</text>
      </>}
      {kind === 'car' && <>
        <path d="m99 145 15-35h36l25-33h68l35 40 22 10v35H99Z" fill={`url(#project-${kind})`} stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="m163 110 19-25h56l23 25Zm44-25v25M109 136h18m157 0h15" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <g fill="#0e2036" stroke="currentColor" strokeWidth="1.5"><circle cx="141" cy="160" r="19" /><circle cx="261" cy="160" r="19" /></g><g fill="none" stroke="currentColor"><circle cx="141" cy="160" r="8" /><circle cx="261" cy="160" r="8" /></g>
        <g stroke="currentColor" strokeWidth="1" fill="none"><path d="M172 127h56v28h-56Z" strokeDasharray="3 3" /><path d="M187 121V97m13 24V97m13 24V97" opacity=".4" /><path d="M200 133v16m-7-12 14 8m-14 0 14-8m-7-12 3 3m-3-3-3 3m3 13 3-3m-3 3-3-3" /><path d="M112 192h176" opacity=".4" /></g>
        <text x="200" y="222" textAnchor="middle" fill="currentColor" fontFamily="sans-serif" fontSize="9" letterSpacing={language === 'en' ? '1' : '0'} opacity=".6">{language === 'en' ? 'RETHINKING COOLING' : 'رؤية جديدة للتبريد'}</text>
      </>}
    </svg>
  )
}
