import{s,a1 as i,a2 as u,a3 as c,a4 as l,a5 as d,a6 as f,a7 as m,a8 as h,a9 as A,aa as g,V as P,d as v,u as y,j as w,y as C,ab as R,ac as _,ad as b,ae as D}from"./chunks/framework.1484e472.js";import{t as E}from"./chunks/theme.ebc3304f.js";const T={...E,NotFound:()=>"404",enhanceApp({app:e,router:a,siteData:t}){}};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=p(T),j=v({name:"VitePressApp",setup(){const{site:e}=y();return w(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),R(),_(),b(),o.setup&&o.setup(),()=>D(o.Layout)}});async function F(){const e=S(),a=O();a.provide(u,e);const t=c(e.route);return a.provide(l,t),a.component("Content",d),a.component("ClientOnly",f),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function O(){return h(j)}function S(){let e=s,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),[])),s&&(e=!1),r},o.NotFound)}s&&F().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{F as createApp};
