import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_fc7e96f2.mjs';
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
const _page1  = () => import('./chunks/index_d1233c8b.mjs');
const _page2  = () => import('./chunks/message_sent_fcd19ad0.mjs');
const _page3  = () => import('./chunks/testimonial_8fb48b66.mjs');
const _page4  = () => import('./chunks/_project_name__db1a20cb.mjs');
const _page5  = () => import('./chunks/index_9e3e4a56.mjs');
const _page6  = () => import('./chunks/artificial-turf_4d0c9ee7.mjs');
const _page7  = () => import('./chunks/step-example_327353b5.mjs');
const _page8  = () => import('./chunks/_type__4bf9142a.mjs');
const _page9  = () => import('./chunks/index_955d6186.mjs');
const _page10  = () => import('./chunks/_page__a36ec50a.mjs');
const _page11  = () => import('./chunks/_author__91a26995.mjs');
const _page12  = () => import('./chunks/contact_c4c8460e.mjs');
const _page13  = () => import('./chunks/about_32255b10.mjs');
const _page14  = () => import('./chunks/post-1_812679fc.mjs');
const _page15  = () => import('./chunks/post-3_88c74852.mjs');
const _page16  = () => import('./chunks/post-4_8f04f0ce.mjs');
const _page17  = () => import('./chunks/post-6_877add75.mjs');
const _page18  = () => import('./chunks/post-7_17d1a82e.mjs');
const _page19  = () => import('./chunks/post-8_4a32db4d.mjs');
const _page20  = () => import('./chunks/post-9_a5234ebb.mjs');
const _page21  = () => import('./chunks/_page__0ca12970.mjs');
const _page22  = () => import('./chunks/_page__0ba8e837.mjs');
const _page23  = () => import('./chunks/index_6b80c2c3.mjs');
const _page24  = () => import('./chunks/_page__a5925bd4.mjs');
const _page25  = () => import('./chunks/_tag__cdaa6e67.mjs');
const _page26  = () => import('./chunks/_team_member__683afe8f.mjs');
const _page27  = () => import('./chunks/404_698a0632.mjs');
const _page28  = () => import('./chunks/FAQ_25352b9f.mjs');
const _page29  = () => import('./chunks/contact_form_ae4c4671.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/message_sent.astro", _page2],["src/pages/testimonial.astro", _page3],["src/pages/projects/[project_name].astro", _page4],["src/pages/services/index.astro", _page5],["src/pages/services/artificial-turf.astro", _page6],["src/pages/services/step-example.astro", _page7],["src/pages/services/[type].astro", _page8],["src/pages/authors/index.astro", _page9],["src/pages/authors/[name]/[page].astro", _page10],["src/pages/authors/[author].astro", _page11],["src/pages/contact.astro", _page12],["src/pages/about.astro", _page13],["src/pages/posts/post-1.md", _page14],["src/pages/posts/post-3.md", _page15],["src/pages/posts/post-4.md", _page16],["src/pages/posts/post-6.md", _page17],["src/pages/posts/post-7.md", _page18],["src/pages/posts/post-8.md", _page19],["src/pages/posts/post-9.md", _page20],["src/pages/blog/search/[search_query]/[page].astro", _page21],["src/pages/blog/[page].astro", _page22],["src/pages/tags/index.astro", _page23],["src/pages/tags/[tag]/[page].astro", _page24],["src/pages/tags/[tag].astro", _page25],["src/pages/team/[team_member].astro", _page26],["src/pages/404.astro", _page27],["src/pages/FAQ.astro", _page28],["src/pages/api/contact_form.ts", _page29]]);
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
