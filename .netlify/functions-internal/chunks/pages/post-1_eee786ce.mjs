/* empty css                           */import { a as createComponent, s as spreadAttributes, r as renderTemplate, d as renderComponent, u as unescapeHTML } from '../astro_d427acf6.mjs';
import { $ as $$MarkdownPostLayout } from './post-1 copy_4a01e947.mjs';
import '@astrojs/internal-helpers/path';
import './image-endpoint_91028d3c.mjs';
import 'clsx';
import 'html-escaper';
import './_page__28fe2195.mjs';
import 'react/jsx-runtime';
import 'react';
/* empty css                                 */import 'react-icons/Bs/index.js';
import 'react-icons';
import 'react-uuid';
import 'nanostores';
import '@nanostores/react';
/* empty css                            *//* empty css                           *//* empty css                                 */import './index_feb08819.mjs';
/* empty css                           */import 'framer-motion';
/* empty css                           */import './error_bc286086.mjs';
/* empty css                                 *//* empty css                           *//* empty css                           */import 'mime/lite.js';

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
				const file = "D:/Astro/uthan-site/src/pages/posts/post-1.md";
				const url = "/posts/post-1";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
