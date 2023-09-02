import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_57340eba.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_d427acf6.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_ff9f67fc.mjs');
const _page1  = () => import('./chunks/index_22675351.mjs');
const _page2  = () => import('./chunks/message_sent_427db873.mjs');
const _page3  = () => import('./chunks/testimonial_0d3a8734.mjs');
const _page4  = () => import('./chunks/_project_name__a9d96ef2.mjs');
const _page5  = () => import('./chunks/index_05079e23.mjs');
const _page6  = () => import('./chunks/_type__07a63dc5.mjs');
const _page7  = () => import('./chunks/index_95719a29.mjs');
const _page8  = () => import('./chunks/_tag__f62c765c.mjs');
const _page9  = () => import('./chunks/index_d610ea4d.mjs');
const _page10  = () => import('./chunks/_author__5e0f6cfb.mjs');
const _page11  = () => import('./chunks/contact_0b005a13.mjs');
const _page12  = () => import('./chunks/about_ae5d4360.mjs');
const _page13  = () => import('./chunks/error_7a1b187e.mjs');
const _page14  = () => import('./chunks/this-is-the-7th-blog_bcafa7fc.mjs');
const _page15  = () => import('./chunks/post-1 copy_1c8551ac.mjs');
const _page16  = () => import('./chunks/post-1_698b57d5.mjs');
const _page17  = () => import('./chunks/post-3_c7219068.mjs');
const _page18  = () => import('./chunks/post-4_ad7c6aec.mjs');
const _page19  = () => import('./chunks/post-6_a171a06d.mjs');
const _page20  = () => import('./chunks/post-7_4029273a.mjs');
const _page21  = () => import('./chunks/_page__b273bc1f.mjs');
const _page22  = () => import('./chunks/_page__291967e4.mjs');
const _page23  = () => import('./chunks/index_73466360.mjs');
const _page24  = () => import('./chunks/_page__94f9d3cf.mjs');
const _page25  = () => import('./chunks/_tag__b2daf070.mjs');
const _page26  = () => import('./chunks/index_14089b11.mjs');
const _page27  = () => import('./chunks/_team_member__5f151cbb.mjs');
const _page28  = () => import('./chunks/contact_form_ae4c4671.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/message_sent.astro", _page2],["src/pages/testimonial.astro", _page3],["src/pages/projects/[project_name].astro", _page4],["src/pages/services/index.astro", _page5],["src/pages/services/[type].astro", _page6],["src/pages/tags_old/index.astro", _page7],["src/pages/tags_old/[tag].astro", _page8],["src/pages/authors/index.astro", _page9],["src/pages/authors/[author].astro", _page10],["src/pages/contact.astro", _page11],["src/pages/about.astro", _page12],["src/pages/error.astro", _page13],["src/pages/posts/this-is-the-7th-blog.md", _page14],["src/pages/posts/post-1 copy.md", _page15],["src/pages/posts/post-1.md", _page16],["src/pages/posts/post-3.md", _page17],["src/pages/posts/post-4.md", _page18],["src/pages/posts/post-6.md", _page19],["src/pages/posts/post-7.md", _page20],["src/pages/blog/search/[search_query]/[page].astro", _page21],["src/pages/blog/[page].astro", _page22],["src/pages/tags/index.astro", _page23],["src/pages/tags/[tag]/[page].astro", _page24],["src/pages/tags/[tag].astro", _page25],["src/pages/team/index.astro", _page26],["src/pages/team/[team_member].astro", _page27],["src/pages/api/contact_form.ts", _page28]]);
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
