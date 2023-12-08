/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro_32dbe7d3.mjs';
import { a as $$ContentWrapper, $ as $$BaseLayout } from './404_8bf7126a.mjs';
import 'clsx';
import 'html-escaper';
import 'react/jsx-runtime';
import 'react';
import 'react-uuid';
/* empty css                            */import 'svgo';
import 'nanostores';
import '@nanostores/react';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./post-1_07fcfee5.mjs').then(n => n.p),"../posts/post-3.md": () => import('./post-3_f6ebffdd.mjs'),"../posts/post-4.md": () => import('./post-4_3b15ac64.mjs'),"../posts/post-6.md": () => import('./post-6_d67972cc.mjs'),"../posts/post-7.md": () => import('./post-7_29b62b00.mjs'),"../posts/post-8.md": () => import('./post-8_9589f831.mjs'),"../posts/post-9.md": () => import('./post-9_0963acda.mjs')}), () => "../posts/*.md");
  const allAuthors = [...new Set(allPosts.map((post) => post.frontmatter.author))];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Authors" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<h1 class="font-bold">Authors</h1>${allAuthors ? renderTemplate`<ul>${allAuthors.map((author) => renderTemplate`<a${addAttribute(`/authors/${author}`, "href")}><li>${author}</li></a>`)}</ul>` : renderTemplate`<p>There are currently no authors on the site yet.</p>`}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/authors/index.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/authors/index.astro";
const $$url = "/authors";

export { $$Index as default, $$file as file, $$url as url };
