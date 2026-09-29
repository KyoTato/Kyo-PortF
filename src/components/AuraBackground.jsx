import React from 'react';
export default function AuraBackground(){return <div className="aura-bg" aria-hidden="true">
{[1,2,3,4,5,6].map(n=><div key={n} className={`aura-layer aura-layer-${n}`}/>)}
<div className="aura-grain"><svg width="100%" height="100%"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="matrix" values=".181 .608 .061 0 .075 .181 .608 .061 0 .075 .181 .608 .061 0 .075 0 0 0 1 0"/></filter><rect width="100%" height="100%" filter="url(#grain)"/></svg></div>
</div>}