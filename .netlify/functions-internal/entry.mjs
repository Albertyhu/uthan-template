import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ca6a1db5.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_32dbe7d3.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_7abf73dd.mjs');
const _page1  = () => import('./chunks/index_0a017e3c.mjs');
const _page2  = () => import('./chunks/message_sent_2ee642f7.mjs');
const _page3  = () => import('./chunks/testimonial_584208a4.mjs');
const _page4  = () => import('./chunks/_project_name__5a6bf5f6.mjs');
const _page5  = () => import('./chunks/index_7a410374.mjs');
const _page6  = () => import('./chunks/turf-calculator_d7f7c904.mjs');
const _page7  = () => import('./chunks/_type__742e13a3.mjs');
const _page8  = () => import('./chunks/index_a914d0d7.mjs');
const _page9  = () => import('./chunks/_page__4335206b.mjs');
const _page10  = () => import('./chunks/_author__2b92729d.mjs');
const _page11  = () => import('./chunks/contact_4b9a0890.mjs');
const _page12  = () => import('./chunks/about_318ac95b.mjs');
const _page13  = () => import('./chunks/post-1_2fe10016.mjs');
const _page14  = () => import('./chunks/post-3_e54aec61.mjs');
const _page15  = () => import('./chunks/post-4_91167331.mjs');
const _page16  = () => import('./chunks/post-6_ebf44d88.mjs');
const _page17  = () => import('./chunks/post-7_3cd2512f.mjs');
const _page18  = () => import('./chunks/post-8_02c825b2.mjs');
const _page19  = () => import('./chunks/post-9_f0196630.mjs');
const _page20  = () => import('./chunks/_page__ee0020e3.mjs');
const _page21  = () => import('./chunks/_page__c6a5dd3f.mjs');
const _page22  = () => import('./chunks/index_c5ece3fa.mjs');
const _page23  = () => import('./chunks/_page__c96f8577.mjs');
const _page24  = () => import('./chunks/_tag__3e393ec5.mjs');
const _page25  = () => import('./chunks/_team_member__75714760.mjs');
const _page26  = () => import('./chunks/404_b5440440.mjs');
const _page27  = () => import('./chunks/FAQ_2b6f5379.mjs');
const _page28  = () => import('./chunks/contact_form_ae4c4671.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/message_sent.astro", _page2],["src/pages/testimonial.astro", _page3],["src/pages/projects/[project_name].astro", _page4],["src/pages/services/index.astro", _page5],["src/pages/services/turf-calculator.astro", _page6],["src/pages/services/[type].astro", _page7],["src/pages/authors/index.astro", _page8],["src/pages/authors/[name]/[page].astro", _page9],["src/pages/authors/[author].astro", _page10],["src/pages/contact.astro", _page11],["src/pages/about.astro", _page12],["src/pages/posts/post-1.md", _page13],["src/pages/posts/post-3.md", _page14],["src/pages/posts/post-4.md", _page15],["src/pages/posts/post-6.md", _page16],["src/pages/posts/post-7.md", _page17],["src/pages/posts/post-8.md", _page18],["src/pages/posts/post-9.md", _page19],["src/pages/blog/search/[search_query]/[page].astro", _page20],["src/pages/blog/[page].astro", _page21],["src/pages/tags/index.astro", _page22],["src/pages/tags/[tag]/[page].astro", _page23],["src/pages/tags/[tag].astro", _page24],["src/pages/team/[team_member].astro", _page25],["src/pages/404.astro", _page26],["src/pages/FAQ.astro", _page27],["src/pages/api/contact_form.ts", _page28]]);
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
