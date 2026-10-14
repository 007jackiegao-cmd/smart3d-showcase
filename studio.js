import './studio.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GLTFExporter} from 'three/addons/exporters/GLTFExporter.js';
import Module from 'manifold-3d';
import wasmUrl from 'manifold-3d/manifold.wasm?url';
import {buildPart,holes,summary,densities} from './geometry-demo.js';
const $=id=>document.getElementById(id),form=$('parameters');let mode='component',kind='flange',wire=false,current,params,geometry,engine;
const area=$('viewport');const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(34,1,.1,3000);camera.up.set(0,0,1);camera.position.set(185,-200,155);
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0xffffff,0);renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.35;area.appendChild(renderer.domElement);renderer.domElement.setAttribute('aria-label','Interactive parametric 3D model');
const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.08;controls.minDistance=65;controls.maxDistance=650;
scene.add(new THREE.HemisphereLight(0xffffff,0xa2b0a5,2.4));const light=new THREE.DirectionalLight(0xfff5df,4);light.position.set(150,-200,300);light.castShadow=true;light.shadow.mapSize.set(2048,2048);light.shadow.camera.left=-210;light.shadow.camera.right=210;light.shadow.camera.top=210;light.shadow.camera.bottom=-210;light.shadow.bias=-.0001;scene.add(light);const rim=new THREE.DirectionalLight(0xbbd9d3,2);rim.position.set(-150,100,100);scene.add(rim);
const grid=new THREE.GridHelper(420,28,0x9cb5a3,0xccd8cb);grid.rotation.x=Math.PI/2;grid.position.z=-45;grid.material.transparent=true;grid.material.opacity=.55;scene.add(grid);
const floor=new THREE.Mesh(new THREE.PlaneGeometry(700,700),new THREE.ShadowMaterial({opacity:.13}));floor.position.z=-45;floor.receiveShadow=true;scene.add(floor);
const group=new THREE.Group();scene.add(group);
new ResizeObserver(()=>{const w=area.clientWidth,h=area.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);}).observe(area);
renderer.setAnimationLoop(()=>{controls.update();renderer.render(scene,camera);});
function read(){const v=Object.fromEntries(new FormData(form));for(const k of ['outer','thickness','bore','pitch','hole','count'])v[k]=Number(v[k]);return v;}
function material(){const colours={aluminium:0x708b85,steel:0x647481,polymer:0xcd955a};return new THREE.MeshStandardMaterial({color:colours[params.material],metalness:params.material==='polymer'?.1:.62,roughness:.47,wireframe:wire});}
function clear(){for(const obj of [...group.children]){group.remove(obj);if(obj.userData.uniqueGeometry)obj.geometry.dispose();obj.material.dispose();}}
function add(geo,mat,pos=[0,0,0],unique=false){const mesh=new THREE.Mesh(geo,mat);mesh.position.set(...pos);mesh.castShadow=true;mesh.receiveShadow=true;mesh.userData.uniqueGeometry=unique;group.add(mesh);return mesh;}
function solidCylinder(r,height,pos){const geo=new THREE.CylinderGeometry(r,r,height,48);geo.rotateX(Math.PI/2);add(geo,new THREE.MeshStandardMaterial({color:0xbd8750,metalness:.65,roughness:.34,wireframe:wire}),pos,true);}
function populate(){
 clear();const assembly=mode!=='component';if(assembly){const z=18+params.thickness/2;add(geometry,material(),[0,0,-z]);add(geometry,material(),[0,0,z]);for(const [x,y] of holes(params))solidCylinder(params.hole*.4,36,[x,y,0]);solidCylinder(params.bore*.38,36+2*params.thickness,[0,0,0]);}else add(geometry,material());
 const rows=summary(current,params,assembly);$('bom-body').innerHTML=rows.map(r=>`<tr><td>${r.part}</td><td>${r.spec}</td><td>${r.material}</td><td>${r.qty}</td><td>${r.unitMass.toFixed(2)}</td><td>${r.totalMass.toFixed(2)}</td></tr>`).join('');
 $('volume').textContent=(current.volume/1000).toFixed(2);$('mass').textContent=rows.reduce((a,r)=>a+r.totalMass,0).toFixed(1)+' g';$('density-note').textContent=assembly?'Assembly total · density assumptions':`${densities[params.material].toFixed(2)} g/cm³ · assumed`;let triangles=0;group.traverse(x=>{if(x.isMesh)triangles+=(x.geometry.index?.count||x.geometry.attributes.position.count)/3;});$('triangles').textContent=Math.round(triangles).toLocaleString('en-US');
 $('part-title').textContent=(assembly?'Mounting assembly':kind==='flange'?'Mounting flange':'Mounting plate');$('view-subtitle').textContent=assembly?'ILLUSTRATIVE ASSEMBLY / MM':'PARAMETRIC COMPONENT / MM';$('bom-section').hidden=mode!=='bom';
 $('feature-tree').innerHTML=`<li>↳ subtract <i>/ root</i></li><li>↳ ${kind==='flange'?'cylinder':'box'} <i>/ base</i></li><li>↳ cylinder <i>/ bore</i></li><li>↳ radial array <i>/ ${params.count} holes</i></li><li>↳ material <i>/ ${params.material}</i></li>`;$('node-count').textContent=String(params.count+3);
}
function rebuild(){try{const p=read(),next=buildPart(engine.Manifold,p,kind);params=p;current=next;clear();if(geometry)geometry.dispose();geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(current.positions,3));geometry.setIndex(new THREE.BufferAttribute(current.indices,1));geometry=geometry.toNonIndexed();geometry.computeVertexNormals();populate();$('notice').textContent='Geometry rebuilt from the current dimensions.';$('notice').className='';}catch(e){$('notice').textContent=e.message;$('notice').className='error';}}
form.addEventListener('submit',e=>{e.preventDefault();if(engine)rebuild();});
for(const b of document.querySelectorAll('[data-mode]'))b.addEventListener('click',()=>{mode=b.dataset.mode;document.querySelectorAll('[data-mode]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));if(current)populate();if(mode==='bom')$('bom-section').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'});});
for(const b of document.querySelectorAll('[data-part]'))b.addEventListener('click',()=>{kind=b.dataset.part;document.querySelectorAll('[data-part]').forEach(x=>x.classList.toggle('active',x===b));if(engine)rebuild();});
$('fit').addEventListener('click',()=>{camera.position.set(185,-200,155);controls.target.set(0,0,0);controls.update();});$('wire').addEventListener('click',()=>{wire=!wire;$('wire').setAttribute('aria-pressed',String(wire));if(current)populate();});
function download(data,name,type){const blob=data instanceof Blob?data:new Blob([data],{type});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);$('notice').textContent='File exported.';}
$('export-params').addEventListener('click',()=>{if(current)download(JSON.stringify({demo:true,part:kind,units:'mm',parameters:params},null,2),'smart3d-parameters.json','application/json');});
$('export-bom').addEventListener('click',()=>{if(!current)return;const rows=summary(current,params,mode!=='component');const quote=s=>'"'+String(s).replaceAll('"','""')+'"';download('Part,Specification,Material,Quantity,Unit mass (g),Total mass (g)\n'+rows.map(r=>[r.part,r.spec,r.material,r.qty,r.unitMass.toFixed(3),r.totalMass.toFixed(3)].map(quote).join(',')).join('\n'),'smart3d-bom.csv','text/csv');});
$('export-glb').addEventListener('click',async()=>{if(!current)return;try{const model=group.clone(true);model.scale.setScalar(.001);const buffer=await new GLTFExporter().parseAsync(model,{binary:true,onlyVisible:true});download(buffer,'smart3d-demo.glb','model/gltf-binary');}catch(e){$('notice').textContent='Export failed: '+e.message;}});
async function initialize(){try{engine=await Module({locateFile:()=>wasmUrl});engine.setup();rebuild();$('loading').hidden=true;}catch(e){$('loading').textContent='Geometry engine could not load. Reload the page to retry.';$('notice').textContent=e.message;}
}
initialize();
