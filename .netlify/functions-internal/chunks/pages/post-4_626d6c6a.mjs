/* empty css                           */import { a as createComponent, s as spreadAttributes, r as renderTemplate, d as renderComponent, u as unescapeHTML } from '../astro_d427acf6.mjs';
import { $ as $$MarkdownPostLayout } from './post-1 copy_dd4f8de5.mjs';
import '@astrojs/internal-helpers/path';
import './image-endpoint_91028d3c.mjs';
import 'clsx';
import 'html-escaper';
import './_page__c4cc2acb.mjs';
import 'react/jsx-runtime';
import 'react';
/* empty css                                 */import 'svgo';
import 'react-uuid';
import 'nanostores';
import '@nanostores/react';
/* empty css                            *//* empty css                           *//* empty css                                 */import './index_d896c56e.mjs';
/* empty css                           */import 'framer-motion';
import 'react-countup';
/* empty css                           */import './error_f2883a70.mjs';
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

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"post-3","pubDate":"2023-07-14T09:03:49.716Z","description":"This is a post about basketball. ","author":"Antsmasher","images":[],"tags":[{"tag":"Astro"},{"tag":"Basketball"},{"tag":"random"}]};
				const file = "D:/Astro/uthan-site/src/pages/posts/post-4.md";
				const url = "/posts/post-4";
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
