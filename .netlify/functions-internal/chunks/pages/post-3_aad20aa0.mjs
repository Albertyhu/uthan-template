/* empty css                           */import { a as createComponent, s as spreadAttributes, r as renderTemplate, d as renderComponent, u as unescapeHTML } from '../astro_d427acf6.mjs';
import { $ as $$MarkdownPostLayout } from './post-1 copy_b334e37d.mjs';
import '@astrojs/internal-helpers/path';
import './image-endpoint_91028d3c.mjs';
import 'clsx';
import 'html-escaper';
import './_page__a15086b9.mjs';
import 'react/jsx-runtime';
import 'react';
/* empty css                                 */import 'react-icons/Bs/index.esm.js';
import 'react-icons';
import 'react-uuid';
import 'nanostores';
import '@nanostores/react';
/* empty css                            *//* empty css                           *//* empty css                                 */import './index_94d3129d.mjs';
/* empty css                           */import 'framer-motion';
/* empty css                           */import './error_7f932b42.mjs';
/* empty css                                 *//* empty css                           *//* empty css                           */import 'mime/lite.js';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>This is a chat.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"post-3","pubDate":"2022-07-31T21:09:12.000Z","description":"This is a post about basketball.","author":"Antsmasher","featured_image":"/src/assets/uploads/stones.jpg","images":[],"tags":[{"tag":"Astro"},{"tag":"Basketball"}]};
				const file = "D:/Astro/uthan-site/src/pages/posts/post-3.md";
				const url = "/posts/post-3";
				function rawContent() {
					return "\nThis is a chat.\n";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
