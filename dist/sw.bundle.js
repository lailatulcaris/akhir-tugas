if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const s=e=>a(e,r),d={module:{uri:r},exports:o,require:s};i[r]=Promise.all(n.map((e=>d[e]||s(e)))).then((e=>(c(...e),o)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"aldy.jpeg",revision:"6620838f802e31af27d5f83a08d8bc9b"},{url:"app.bundle.js",revision:"4dcdcfae011529a524ed15786927e68a"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"a1b72b64f1ed67c06a47a6fe52813679"},{url:"barong-dance.jpg",revision:"d825847878d62b0ae79c72f102b46644"},{url:"candi-borobudur.jpeg",revision:"c24b2b7ecce9fb36f15c7c7265ed618d"},{url:"carisma.jpeg",revision:"36755fa7526a2d2f20731cbf8f54c3d3"},{url:"data/culture-en.json",revision:"cb6c0d0197f54e30bc04171cb21cb954"},{url:"data/tours-en.json",revision:"119f4428f08501558b504bb62696d85c"},{url:"hero-3.jpg",revision:"45d76e891fa265cc108ae11e11966136"},{url:"images/icons/icon-128x128.png",revision:"68fdedc13b720c22ae6c54018765b961"},{url:"images/icons/icon-144x144.png",revision:"d9ab24db34a78b76f70133ddd619a5c8"},{url:"images/icons/icon-152x152.png",revision:"dfdd1036c9b36a1b920d32e0c529f84e"},{url:"images/icons/icon-192x192.png",revision:"48dc14328db202a9007b85fc209bb3e6"},{url:"images/icons/icon-384x384.png",revision:"e7cc3c8428219e1e0ce08b9f39abc89e"},{url:"images/icons/icon-512x512.png",revision:"0773756deb6ac1681f7eef4b078f25da"},{url:"images/icons/icon-72x72.png",revision:"8df101f7c0ce0b1f8320fa58a5006edb"},{url:"images/icons/icon-96x96.png",revision:"4204f74d64db421dda758e433e3ea58f"},{url:"index.html",revision:"0c62e5235c373e109022616ce75f0f28"},{url:"karapan-sapi.jpg",revision:"d04833d0f9fb9123426faa00ccd85ab7"},{url:"kota-tua.jpeg",revision:"66ae59a120d4115a4de3eb704039fe43"},{url:"labuan-bajo.jpeg",revision:"180157f6c402f3255eae7db6f706f6ea"},{url:"logo-tanpa-bg.png",revision:"cc435047e39281e6e41ae23841695c8c"},{url:"logo.jpg",revision:"ccb6091fc5f3431214866363e6425941"},{url:"pantai-kuta.jpeg",revision:"692b7b28a52019db086d5ae8874ee83f"},{url:"reog-ponorogo.jpg",revision:"3df2fa52c24e3a93008f5768617ce2c9"},{url:"ruwatan.jpg",revision:"495a5657a70f545478ab848a0560cfd2"},{url:"saman-dance.jpg",revision:"63c56e87bdd1198ce14883036f96f539"},{url:"syarif.jpeg",revision:"f22907e984792e86d1f4caae2d897ef2"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("http://54.255.130.64:5000/")),new e.StaleWhileRevalidate({cacheName:"travelin-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("http://54.255.130.64:5000/cultures/image")),new e.StaleWhileRevalidate({cacheName:"travelin-api-image1",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("http://54.255.130.64:5000/tours/image")),new e.StaleWhileRevalidate({cacheName:"travelin-api-image2",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
