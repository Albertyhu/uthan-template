import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_3fd85e28.mjs';
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
const _page1  = () => import('./chunks/index_b4fe02ae.mjs');
const _page2  = () => import('./chunks/message_sent_2cbae054.mjs');
const _page3  = () => import('./chunks/testimonial_e866dc10.mjs');
const _page4  = () => import('./chunks/_project_name__4d9e60d4.mjs');
const _page5  = () => import('./chunks/index_1b19dbef.mjs');
const _page6  = () => import('./chunks/artificial-turf_59fe57fd.mjs');
const _page7  = () => import('./chunks/step-example_79444c09.mjs');
const _page8  = () => import('./chunks/post-1_137efa2c.mjs');
const _page9  = () => import('./chunks/_type__95218b36.mjs');
const _page10  = () => import('./chunks/index_396abb58.mjs');
const _page11  = () => import('./chunks/_page__13b7afe9.mjs');
const _page12  = () => import('./chunks/_author__e04c5975.mjs');
const _page13  = () => import('./chunks/contact_af9b61fa.mjs');
const _page14  = () => import('./chunks/about_ccdef77f.mjs');
const _page15  = () => import('./chunks/post-1_3020eec8.mjs');
const _page16  = () => import('./chunks/post-3_d71a1fc2.mjs');
const _page17  = () => import('./chunks/post-4_67102c58.mjs');
const _page18  = () => import('./chunks/post-6_177546ba.mjs');
const _page19  = () => import('./chunks/post-7_65ebc714.mjs');
const _page20  = () => import('./chunks/post-8_b7391ea4.mjs');
const _page21  = () => import('./chunks/post-9_49879ae7.mjs');
const _page22  = () => import('./chunks/_page__89a16581.mjs');
const _page23  = () => import('./chunks/_page__37d14e75.mjs');
const _page24  = () => import('./chunks/index_1055b4d4.mjs');
const _page25  = () => import('./chunks/_page__879d2d40.mjs');
const _page26  = () => import('./chunks/_tag__9ffc3dd6.mjs');
const _page27  = () => import('./chunks/_team_member__d0344624.mjs');
const _page28  = () => import('./chunks/404_59b012bc.mjs');
const _page29  = () => import('./chunks/FAQ_cf6de6fd.mjs');
const _page30  = () => import('./chunks/contact_form_ae4c4671.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/message_sent.astro", _page2],["src/pages/testimonial.astro", _page3],["src/pages/projects/[project_name].astro", _page4],["src/pages/services/index.astro", _page5],["src/pages/services/artificial-turf.astro", _page6],["src/pages/services/step-example.astro", _page7],["src/pages/services/special/post-1.md", _page8],["src/pages/services/[type].astro", _page9],["src/pages/authors/index.astro", _page10],["src/pages/authors/[name]/[page].astro", _page11],["src/pages/authors/[author].astro", _page12],["src/pages/contact.astro", _page13],["src/pages/about.astro", _page14],["src/pages/posts/post-1.md", _page15],["src/pages/posts/post-3.md", _page16],["src/pages/posts/post-4.md", _page17],["src/pages/posts/post-6.md", _page18],["src/pages/posts/post-7.md", _page19],["src/pages/posts/post-8.md", _page20],["src/pages/posts/post-9.md", _page21],["src/pages/blog/search/[search_query]/[page].astro", _page22],["src/pages/blog/[page].astro", _page23],["src/pages/tags/index.astro", _page24],["src/pages/tags/[tag]/[page].astro", _page25],["src/pages/tags/[tag].astro", _page26],["src/pages/team/[team_member].astro", _page27],["src/pages/404.astro", _page28],["src/pages/FAQ.astro", _page29],["src/pages/api/contact_form.ts", _page30]]);
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
