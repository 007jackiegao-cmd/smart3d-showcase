// Focused public demonstration. The original project backend remains outside this package.
export const densities={aluminium:2.7,steel:7.85,polymer:1.2};
export function validate(p){
 const ranges={outer:[60,200],thickness:[4,30],bore:[8,80],pitch:[35,170],hole:[3,16],count:[3,12]};
 for(const [key,[lo,hi]] of Object.entries(ranges)) if(!Number.isFinite(p[key])||p[key]<lo||p[key]>hi)throw Error(`${key} must be between ${lo} and ${hi}.`);
 if(!Number.isInteger(p.count))throw Error('Hole count must be a whole number.');
 if(p.pitch+p.hole>=p.outer-4)throw Error('Leave at least 2 mm between the holes and the outer edge.');
 if(p.bore+p.hole>=p.pitch-4)throw Error('Leave at least 2 mm between the centre bore and bolt holes.');
 if(p.pitch*Math.sin(Math.PI/p.count)<=p.hole+2)throw Error('Hole spacing must exceed the hole diameter by at least 2 mm.');
 if(!densities[p.material])throw Error('Unknown material assumption.');
 return p;
}
export function holes(p){return Array.from({length:p.count},(_,i)=>[p.pitch/2*Math.cos(i*2*Math.PI/p.count),p.pitch/2*Math.sin(i*2*Math.PI/p.count)]);}
export function buildPart(M,p,kind='flange'){
 validate(p);let solid;
 const keep=[];const tracked=s=>{keep.push(s);return s;};
 try{
  solid=tracked(kind==='flange'?M.cylinder(p.thickness,p.outer/2,p.outer/2,96,true):M.cube([p.outer,p.outer,p.thickness],true));
  let cut=tracked(M.cylinder(p.thickness+4,p.bore/2,p.bore/2,96,true));solid=tracked(solid.subtract(cut));
  for(const [x,y] of holes(p)){const c=tracked(M.cylinder(p.thickness+4,p.hole/2,p.hole/2,48,true));const shifted=tracked(c.translate([x,y,0]));solid=tracked(solid.subtract(shifted));}
  if(solid.status()!=='NoError')throw Error('Geometry kernel rejected the current shape.');
  const mesh=solid.getMesh();return {positions:new Float32Array(Array.from({length:mesh.numVert*3},(_,i)=>mesh.vertProperties[Math.floor(i/3)*mesh.numProp+i%3])),indices:new Uint32Array(mesh.triVerts),volume:solid.volume(),triangles:solid.numTri()};
 }finally{for(const s of keep.reverse())s.delete();}
}
export function summary(part,p,assembly=false){
 const qty=assembly?2:1,gap=36,shaftR=p.bore*.38,shaftH=gap+2*p.thickness,spacerR=p.hole*.4;
 const rows=[{part:'Parametric component',spec:`${p.outer} × ${p.thickness}; bore ${p.bore}`,material:p.material,qty,unitMass:part.volume/1000*densities[p.material]}];
 if(assembly){rows.push({part:'Illustrative spacer',spec:`Ø${(spacerR*2).toFixed(1)} × ${gap}`,material:'steel',qty:p.count,unitMass:Math.PI*spacerR**2*gap/1000*densities.steel});rows.push({part:'Illustrative shaft',spec:`Ø${(shaftR*2).toFixed(1)} × ${shaftH}`,material:'steel',qty:1,unitMass:Math.PI*shaftR**2*shaftH/1000*densities.steel});}
 return rows.map(r=>({...r,totalMass:r.unitMass*r.qty}));
}
