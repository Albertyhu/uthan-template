import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_eb607096.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_c3674c5a.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_d0458300.mjs');
const _page1  = () => import('./chunks/index_351eb484.mjs');
const _page2  = () => import('./chunks/message_sent_e6f98f88.mjs');
const _page3  = () => import('./chunks/testimonial_8b33724b.mjs');
const _page4  = () => import('./chunks/_project_name__06e17c9e.mjs');
const _page5  = () => import('./chunks/index_eba5d537.mjs');
const _page6  = () => import('./chunks/_type__1e505715.mjs');
const _page7  = () => import('./chunks/index_d76dfa5e.mjs');
const _page8  = () => import('./chunks/_tag__0ec4a3c8.mjs');
const _page9  = () => import('./chunks/index_7ef69911.mjs');
const _page10  = () => import('./chunks/_author__77583aac.mjs');
const _page11  = () => import('./chunks/contact_bd6898c2.mjs');
const _page12  = () => import('./chunks/about_109a11e1.mjs');
const _page13  = () => import('./chunks/post-1_3d24f97b.mjs');
const _page14  = () => import('./chunks/post-3_46c35e37.mjs');
const _page15  = () => import('./chunks/post-4_a1132e4d.mjs');
const _page16  = () => import('./chunks/post-6_72f6bbd4.mjs');
const _page17  = () => import('./chunks/post-7_2930d29d.mjs');
const _page18  = () => import('./chunks/post-8_da486afc.mjs');
const _page19  = () => import('./chunks/post-9_bde0c139.mjs');
const _page20  = () => import('./chunks/_page__9f563c6b.mjs');
const _page21  = () => import('./chunks/_page__afbed5af.mjs');
const _page22  = () => import('./chunks/index_aab58bc0.mjs');
const _page23  = () => import('./chunks/_page__f726c154.mjs');
const _page24  = () => import('./chunks/_tag__8e814757.mjs');
const _page25  = () => import('./chunks/_team_member__3142022f.mjs');
const _page26  = () => import('./chunks/404_5fbc2b98.mjs');
const _page27  = () => import('./chunks/contact_form_ae4c4671.mjs');
const _page28  = () => import('./chunks/faq_212e7c29.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/message_sent.astro", _page2],["src/pages/testimonial.astro", _page3],["src/pages/projects/[project_name].astro", _page4],["src/pages/services/index.astro", _page5],["src/pages/services/[type].astro", _page6],["src/pages/tags_old/index.astro", _page7],["src/pages/tags_old/[tag].astro", _page8],["src/pages/authors/index.astro", _page9],["src/pages/authors/[author].astro", _page10],["src/pages/contact.astro", _page11],["src/pages/about.astro", _page12],["src/pages/posts/post-1.md", _page13],["src/pages/posts/post-3.md", _page14],["src/pages/posts/post-4.md", _page15],["src/pages/posts/post-6.md", _page16],["src/pages/posts/post-7.md", _page17],["src/pages/posts/post-8.md", _page18],["src/pages/posts/post-9.md", _page19],["src/pages/blog/search/[search_query]/[page].astro", _page20],["src/pages/blog/[page].astro", _page21],["src/pages/tags/index.astro", _page22],["src/pages/tags/[tag]/[page].astro", _page23],["src/pages/tags/[tag].astro", _page24],["src/pages/team/[team_member].astro", _page25],["src/pages/404.astro", _page26],["src/pages/api/contact_form.ts", _page27],["src/pages/faq.astro", _page28]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
