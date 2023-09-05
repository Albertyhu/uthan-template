import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_5aeb105a.mjs';
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
const _page1  = () => import('./chunks/index_dd09a9c3.mjs');
const _page2  = () => import('./chunks/message_sent_ac9efa0f.mjs');
const _page3  = () => import('./chunks/testimonial_51968711.mjs');
const _page4  = () => import('./chunks/_project_name__6aeb9bd5.mjs');
const _page5  = () => import('./chunks/index_95f30feb.mjs');
const _page6  = () => import('./chunks/_type__3d82291c.mjs');
const _page7  = () => import('./chunks/index_0cc6a2fd.mjs');
const _page8  = () => import('./chunks/_tag__1bb13934.mjs');
const _page9  = () => import('./chunks/index_77b7f344.mjs');
const _page10  = () => import('./chunks/_author__eab19d62.mjs');
const _page11  = () => import('./chunks/contact_9a10b532.mjs');
const _page12  = () => import('./chunks/about_7bbe68fb.mjs');
const _page13  = () => import('./chunks/error_316c1ab9.mjs');
const _page14  = () => import('./chunks/this-is-the-7th-blog_ee58b53f.mjs');
const _page15  = () => import('./chunks/post-1 copy_ae1d28c1.mjs');
const _page16  = () => import('./chunks/post-1_6cb150c1.mjs');
const _page17  = () => import('./chunks/post-3_aa4eaa3e.mjs');
const _page18  = () => import('./chunks/post-4_1d555441.mjs');
const _page19  = () => import('./chunks/post-6_a161462c.mjs');
const _page20  = () => import('./chunks/post-7_9e171032.mjs');
const _page21  = () => import('./chunks/_page__5a682b5e.mjs');
const _page22  = () => import('./chunks/_page__283b101a.mjs');
const _page23  = () => import('./chunks/index_e891baf9.mjs');
const _page24  = () => import('./chunks/_page__62ccf1aa.mjs');
const _page25  = () => import('./chunks/_tag__eabd69df.mjs');
const _page26  = () => import('./chunks/index_6c9217c1.mjs');
const _page27  = () => import('./chunks/_team_member__c0b8f7fe.mjs');
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
