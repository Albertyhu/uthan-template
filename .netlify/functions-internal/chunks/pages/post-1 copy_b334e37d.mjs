/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, f as renderSlot, s as spreadAttributes, u as unescapeHTML } from '../astro_d427acf6.mjs';
import { $ as $$BaseLayout, e as $$Index$2 } from './_page__a15086b9.mjs';
import 'clsx';
/* empty css                                 */import { $ as $$Index$1 } from './index_94d3129d.mjs';
import '@astrojs/internal-helpers/path';
import './image-endpoint_91028d3c.mjs';

const $$Astro$5 = createAstro();
const $$TagListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TagListItem;
  const {
    tag,
    url
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="hover:underline hover:font-bold my-5 cursor-pointer capitalize rounded-[0.5em] w-fit border-2 text-base border-[#a1a1a1] p-1 bg-[#F8FCFD] tagListItem"><a${addAttribute(url, "href")}>${tag}</a></li>`;
}, "D:/Astro/uthan-site/src/components/taglist/tagListItem.astro", void 0);

const $$Astro$4 = createAstro();
const $$Taglist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Taglist;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="flex flex-row [&>li]:mr-1">${tags.map((item) => renderTemplate`${renderComponent($$result, "TagListItem", $$TagListItem, { "url": `../tags/${item.tag}`, "tag": item.tag })}`)}</ul>`;
}, "D:/Astro/uthan-site/src/components/taglist/taglist.astro", void 0);

const $$Astro$3 = createAstro();
const $$Item = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Item;
  const {
    thumbnail,
    title,
    date,
    url
  } = Astro2.props;
  const formattedTittle = title.length < 32 ? title : `${title.substr(0, 32)}...`;
  const formattedDate = new Date(date);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}><div class="flex flex-row gap-10 relative min-h-[100px] text-[16px] my-5 "><div>${thumbnail && renderTemplate`<figure class="rounded-lg overflow-hidden w-[80px] h-[80px]"><img${addAttribute(thumbnail, "src")} alt="thumbnail image" class="w-full h-full object-cover"></figure>`}</div><div class="grid"><h5 class="text-lg font-medium mb-[6px]">${formattedTittle}</h5><span class="post-date relative block text-xl leading-[28px]">${formattedDate.toDateString()}</span></div></div></a>`;
}, "D:/Astro/uthan-site/src/components/blogComponents/recent_post/item.astro", void 0);

const $$Astro$2 = createAstro();
const $$PostGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostGrid;
  const { RecentPosts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col">${RecentPosts.map(
    (post, index) => renderTemplate`<div>${renderComponent($$result, "PostItem", $$Item, { "thumbnail": post.frontmatter.featured_image, "title": post.frontmatter.title, "date": post.frontmatter.pubDate, "url": post.url })}${index < RecentPosts.length - 1 && renderTemplate`<hr class="border-[1px] bg-[#dbdbdb]">`}</div>`
  )}</div>`;
}, "D:/Astro/uthan-site/src/components/blogComponents/recent_post/post_grid.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative block pt-[30px] pr-[40px] pl-[40px] rounded-lg mb-[50px] border-2 border-[#dbdbdb] h-fit"><h3 class="text-4xl mb-[15px] font-['Prata',serif]">Recent Posts</h3>${renderComponent($$result, "PostGrid", $$PostGrid, { "RecentPosts": posts })}</div>`;
}, "D:/Astro/uthan-site/src/components/blogComponents/recent_post/index.astro", void 0);

const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  const tags = frontmatter.tags;
  var allPosts = [];
  try {
    allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/posts/post-1 copy.md": () => Promise.resolve().then(() => post1_copy),"../pages/posts/post-1.md": () => import('./post-1_663ca99e.mjs'),"../pages/posts/post-3.md": () => import('./post-3_aad20aa0.mjs'),"../pages/posts/post-4.md": () => import('./post-4_52a800f9.mjs'),"../pages/posts/post-6.md": () => import('./post-6_d5dbeca6.mjs'),"../pages/posts/post-7.md": () => import('./post-7_50eeeaba.mjs'),"../pages/posts/this-is-the-7th-blog.md": () => import('./this-is-the-7th-blog_145d2d4b.mjs')}), () => "../pages/posts/*.md");
  } catch (error) {
    console.log("error: ", error);
  }
  var selectedPosts = [];
  if (allPosts && allPosts.length > 0) {
    selectedPosts = allPosts.sort((a, b) => {
      var a_date = new Date(a.frontmatter.pubDate);
      var b_date = new Date(b.frontmatter.pubDate);
      return b_date.getTime() - a_date.getTime();
    }).slice(0, 3);
  }
  const formattedDate = new Date(frontmatter.pubDate);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pateTitle": frontmatter.title, "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$1, {})}${maybeRenderHead()}<div class="flex flex-col sm:flex-row sm:gap-10 mt-5 w-11/12 mx-auto"><div>${frontmatter.featured_image && renderTemplate`<div class="max-h-[500px] w-full overflow-hidden justify-center mb-10"><img${addAttribute(frontmatter.featured_image, "src")} class="w-full h-full object-cover"></div>`}${frontmatter.pubDate && renderTemplate`<p class="relative block text-[15px] mb-[2px] text-slate-400">${formattedDate.toLocaleDateString()}</p>`}<h1 class="text-2xl font-bold">${frontmatter.title}</h1><p>Written by <a${addAttribute(`/authors/${frontmatter.author}`, "href")} class="hover:underline cursor-pointer"><b>${frontmatter.author}</b></a></p><hr class="border-2 bg-black w-full my-5">${renderSlot($$result2, $$slots["default"])}${tags && tags.length > 0 && renderTemplate`<div class="mt-10"><h3 class="font-bold text-base">Tags: </h3>${renderComponent($$result2, "TagList", $$Taglist, { "tags": tags })}</div>`}</div><div class="flex flex-col min-w-[33.33%]">${renderComponent($$result2, "SearchComponent", $$Index$2, { "allPosts": allPosts })}${renderComponent($$result2, "RecentPosts", $$Index, { "posts": selectedPosts })}</div></div>` })}`;
}, "D:/Astro/uthan-site/src/layouts/MarkdownPostLayout.astro", void 0);

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Published on: 2022-07-01</p>\n<p>Welcome to my <em>new blog</em> about learning Astro! Here, I will share my learning journey as I build a new website.</p>\n<h2 id=\"what-ive-accomplished\">What I’ve accomplished</h2>\n<ol>\n<li>\n<p><strong>Installing Astro</strong>: First, I created a new Astro project and set up my online accounts.</p>\n</li>\n<li>\n<p><strong>Making Pages</strong>: I then learned how to make pages by creating new <code>.astro</code> files and placing them in the <code>src/pages/</code> folder.</p>\n</li>\n<li>\n<p><strong>Making Blog Posts</strong>: This is my first blog post! I now have Astro pages and Markdown posts!</p>\n</li>\n</ol>\n<h2 id=\"whats-next\">What’s next</h2>\n<p>I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My First Blog Post","pubDate":"2022-07-01T00:00:00.000Z","description":"This is the first post of my new Astro blog.","author":"Astro Learner","featured_image":"/src/assets/uploads/pots.jpg","images":[],"tags":[{"tag":"mermaids"}]};
				const file = "D:/Astro/uthan-site/src/pages/posts/post-1 copy.md";
				const url = "/posts/post-1 copy";
				function rawContent() {
					return "\nPublished on: 2022-07-01\n\nWelcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.\n\n## What I've accomplished\n\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\n\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\n\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\n\n## What's next\n\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"what-ive-accomplished","text":"What I’ve accomplished"},{"depth":2,"slug":"whats-next","text":"What’s next"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const post1_copy = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    compiledContent,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    images,
    rawContent,
    url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MarkdownPostLayout as $, post1_copy as p };
