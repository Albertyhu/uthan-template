/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, i as defineScriptVars, e as renderSlot, s as spreadAttributes, u as unescapeHTML } from '../astro_c3674c5a.mjs';
import { $ as $$BaseLayout } from './404_260bc525.mjs';
import 'clsx';
/* empty css                            */import { f as formatRecentPostArray, s as setBlogPostImages, a as $$Index$2 } from './_page__c9247c9f.mjs';
import { $ as $$Index$1 } from './contact_a049f29c.mjs';
import '@astrojs/internal-helpers/path';
import './image-endpoint_f4371011.mjs';

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
    featured_image,
    title,
    pubDate,
    url
  } = Astro2.props;
  const formattedDate = new Date(pubDate);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}><div class="flex flex-row gap-5 relative min-h-[100px] text-[16px] my-5 "><div>${featured_image && renderTemplate`<figure class="rounded-lg overflow-hidden w-[80px] h-[80px]"><img${addAttribute(featured_image, "src")} alt="featured_image image" class="w-full h-full object-cover"></figure>`}</div><div class="grid"><h5 class="text-lg font-medium mb-[6px]">${title}</h5><span class="post-date relative block text-xl leading-[28px]">${formattedDate.toDateString()}</span></div></div></a>`;
}, "D:/Astro/uthan-site/src/components/blogComponents/recent_post/item.astro", void 0);

const $$Astro$2 = createAstro();
const $$PostGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostGrid;
  const { RecentPosts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col">${RecentPosts.map(
    (post, index) => renderTemplate`<div>${renderComponent($$result, "PostItem", $$Item, { ...post })}${index < RecentPosts.length - 1 && renderTemplate`<hr class="border-[1px] bg-[#dbdbdb]">`}</div>`
  )}</div>`;
}, "D:/Astro/uthan-site/src/components/blogComponents/recent_post/post_grid.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative block pt-[10px] px-[40px] rounded-lg mb-[50px] border-2 border-[#dbdbdb] h-fit"><h3 class="text-4xl mb-[15px] font-['Prata',serif]">Recent Posts</h3>${renderComponent($$result, "PostGrid", $$PostGrid, { "RecentPosts": posts })}</div>`;
}, "D:/Astro/uthan-site/src/components/blogComponents/recent_post/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  const tags = frontmatter.tags;
  var assets = [];
  try {
    assets = await Astro2.glob(/* #__PURE__ */ Object.assign({"../assets/uploads/edible-landscaping.webp": () => import('../edible-landscaping_1da9ec80.mjs'),"../assets/uploads/perma-culture.webp": () => import('../perma-culture_278338af.mjs'),"../assets/uploads/pots.jpg": () => import('../pots_9c82a4e2.mjs'),"../assets/uploads/stones.jpg": () => import('../stones_74ff20a6.mjs'),"../assets/uploads/trees.jpg": () => import('../trees_d38b2537.mjs'),"../assets/uploads/vertical_garden.webp": () => import('../vertical_garden_769cb061.mjs'),"../assets/uploads/xeriscaping.webp": () => import('../xeriscaping_1a5ae2de.mjs')}), () => "../assets/uploads/*");
  } catch (e) {
  }
  var FeaturedImage = null;
  var allPosts = [];
  try {
    allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/posts/post-1.md": () => Promise.resolve().then(() => post1),"../pages/posts/post-3.md": () => import('./post-3_ed046d5f.mjs'),"../pages/posts/post-4.md": () => import('./post-4_4dab5c74.mjs'),"../pages/posts/post-6.md": () => import('./post-6_35be9f7c.mjs'),"../pages/posts/post-7.md": () => import('./post-7_e02fb4ac.mjs'),"../pages/posts/post-8.md": () => import('./post-8_a38cb721.mjs'),"../pages/posts/post-9.md": () => import('./post-9_ae364bba.mjs')}), () => "../pages/posts/*.md");
  } catch (error) {
    console.log("error: ", error);
  }
  var formattedRecentPosts = [];
  var recentPosts = [];
  if (allPosts && allPosts.length > 0) {
    recentPosts = formatRecentPostArray(allPosts, 3);
  }
  var payload = setBlogPostImages(assets, frontmatter.featured_image, recentPosts);
  FeaturedImage = payload.main_featured_image;
  formattedRecentPosts = [...payload.recentPosts];
  const formattedDate = new Date(frontmatter.pubDate);
  return renderTemplate(_a || (_a = __template(["", "<script>(function(){", "\n\n})();<\/script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "pateTitle": frontmatter.title, "frontmatter": frontmatter, "customDescription": frontmatter.description }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$1, {})}${maybeRenderHead()}<div class="flex flex-col lg:flex-row sm:gap-10 mt-5 w-11/12 mx-auto"><div class="">${FeaturedImage && renderTemplate`<div id="FeaturedImage" class="max-h-[500px] w-full overflow-hidden justify-center mb-10"><img loading="lazy" decoding="async"${addAttribute(FeaturedImage, "src")} class="w-full h-full object-cover"></div>`}${frontmatter.pubDate && renderTemplate`<p class="relative block text-[15px] mb-[2px] text-slate-400">${formattedDate.toLocaleDateString()}</p>`}<h1 class="text-2xl font-bold">${frontmatter.title}</h1><p>Written by <a${addAttribute(`/authors/${frontmatter.author}`, "href")} class="hover:underline cursor-pointer"><b>${frontmatter.author}</b></a></p><hr class="border-2 bg-black w-full my-5">${renderSlot($$result2, $$slots["default"])}${tags && tags.length > 0 && renderTemplate`<div class="mt-10"><h3 class="font-bold text-base">Tags: </h3>${renderComponent($$result2, "TagList", $$Taglist, { "tags": tags })}</div>`}</div><div class="flex flex-col min-w-[33.33%]">${renderComponent($$result2, "SearchComponent", $$Index$2, { "allPosts": allPosts })}${renderComponent($$result2, "RecentPosts", $$Index, { "posts": formattedRecentPosts })}</div></div>` }), defineScriptVars({
    featured_image: frontmatter.featured_image,
    assets
  }));
}, "D:/Astro/uthan-site/src/layouts/MarkdownPostLayout.astro", void 0);

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Xeriscaping is a water-efficient landscaping approach that has gained popularity in regions with water scarcity and conservation concerns. The primary goal of xeriscaping is to create a beautiful and functional landscape while minimizing water usage. To achieve this, gardeners and landscapers employ a range of strategies. These include selecting drought-tolerant plants, improving soil quality to enhance water retention, and using mulch to reduce evaporation. Additionally, thoughtful landscape design, such as grouping plants with similar water needs and installing efficient irrigation systems like drip irrigation, plays a crucial role in the success of a xeriscape.\n<br>\n<br>\nOne of the key benefits of xeriscaping is its positive impact on water conservation. By implementing xeriscaping principles, homeowners can significantly reduce their outdoor water consumption, contributing to water resource preservation and lower utility bills. Moreover, xeriscaped gardens often require less maintenance than traditional landscapes, as they are designed to thrive in their local climate with minimal intervention. Xeriscaping can be adapted to various aesthetic preferences, from desert-inspired designs featuring succulents and cacti to more traditional and lush arrangements with drought-tolerant shrubs and trees. Whether you live in a dry region or simply want to reduce your environmental footprint, xeriscaping is a sustainable and visually appealing landscaping option.\n<br>\n<br>\nIn addition to water conservation, xeriscaping also supports biodiversity and wildlife habitat. Many native drought-resistant plants attract pollinators like bees and butterflies, contributing to the health of local ecosystems. Furthermore, reduced water use in xeriscaping can help prevent soil erosion and water runoff, which can carry pollutants into nearby water bodies. Overall, xeriscaping is a holistic approach to landscaping that not only conserves water but also promotes environmental sustainability and beauty in outdoor spaces.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Xeriscaping - Sustainable Landscaping for Water Conservation","pubDate":"2022-07-01T00:00:00.000Z","description":"Xeriscaping is a landscaping technique designed to conserve water and create drought-resistant gardens. Explore the principles of xeriscaping, suitable plant choices, and practical tips for reducing water usage in your landscape.","author":"John Merigold","featured_image":"/src/assets/uploads/xeriscaping.webp","images":[],"tags":[{"tag":"Xeriscaping"},{"tag":"landscaping"},{"tag":"technique"},{"tag":"drought resistant"}]};
				const file = "D:/Astro/uthan-site/src/pages/posts/post-1.md";
				const url = "/posts/post-1";
				function rawContent() {
					return "Xeriscaping is a water-efficient landscaping approach that has gained popularity in regions with water scarcity and conservation concerns. The primary goal of xeriscaping is to create a beautiful and functional landscape while minimizing water usage. To achieve this, gardeners and landscapers employ a range of strategies. These include selecting drought-tolerant plants, improving soil quality to enhance water retention, and using mulch to reduce evaporation. Additionally, thoughtful landscape design, such as grouping plants with similar water needs and installing efficient irrigation systems like drip irrigation, plays a crucial role in the success of a xeriscape.\n<br />\n<br />\nOne of the key benefits of xeriscaping is its positive impact on water conservation. By implementing xeriscaping principles, homeowners can significantly reduce their outdoor water consumption, contributing to water resource preservation and lower utility bills. Moreover, xeriscaped gardens often require less maintenance than traditional landscapes, as they are designed to thrive in their local climate with minimal intervention. Xeriscaping can be adapted to various aesthetic preferences, from desert-inspired designs featuring succulents and cacti to more traditional and lush arrangements with drought-tolerant shrubs and trees. Whether you live in a dry region or simply want to reduce your environmental footprint, xeriscaping is a sustainable and visually appealing landscaping option.\n<br />\n<br />\nIn addition to water conservation, xeriscaping also supports biodiversity and wildlife habitat. Many native drought-resistant plants attract pollinators like bees and butterflies, contributing to the health of local ecosystems. Furthermore, reduced water use in xeriscaping can help prevent soil erosion and water runoff, which can carry pollutants into nearby water bodies. Overall, xeriscaping is a holistic approach to landscaping that not only conserves water but also promotes environmental sustainability and beauty in outdoor spaces.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
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

const post1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { $$MarkdownPostLayout as $, post1 as p };
