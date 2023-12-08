/* empty css                         */import { a as createComponent, s as spreadAttributes, r as renderTemplate, d as renderComponent, u as unescapeHTML } from '../astro_32dbe7d3.mjs';
import { $ as $$MarkdownPostLayout } from './post-1_07fcfee5.mjs';
import '@astrojs/internal-helpers/path';
import './image-endpoint_81264b76.mjs';
import 'clsx';
import 'html-escaper';
import './404_8bf7126a.mjs';
import 'react/jsx-runtime';
import 'react';
import 'react-uuid';
/* empty css                            */import 'svgo';
import 'nanostores';
import '@nanostores/react';
import './_page__b46c19b7.mjs';
/* empty css                            *//* empty css                           *//* empty css                            */import './artificial-turf_51fe04d1.mjs';
/* empty css                            *//* empty css                           */import 'react-step-wizard';
import '@emailjs/browser';
/* empty css                                     */import 'mime/lite.js';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Permaculture, short for “permanent agriculture” or “permanent culture,” is a holistic approach to gardening and landscaping that emphasizes sustainable and regenerative practices. At its core, permaculture seeks to mimic natural ecosystems by designing landscapes that are not only productive but also self-sustaining and resilient. This approach can be applied to any scale, from a small backyard garden to a large farm, with the aim of creating harmony between humans and nature.\n<br>\n<br>\nOne of the fundamental principles of permaculture is “observe and interact.” Permaculture designers carefully study their local environment, climate, and ecosystem dynamics to make informed decisions about plant selection, layout, and maintenance. By understanding the natural patterns and processes at work, permaculturists can create landscapes that require less external inputs like water, fertilizer, and pesticides. For example, a permaculture garden might incorporate features such as swales (ditches that capture and slow water runoff), hugelkultur (raised beds filled with rotting wood and organic matter), and diverse plantings to increase soil fertility and water retention.\n<br>\n<br>\nPermaculture also places a strong emphasis on biodiversity and the creation of habitat for wildlife. By planting a diverse range of native and edible plants, permaculture gardens can attract beneficial insects, birds, and other wildlife, creating a balanced and resilient ecosystem. Additionally, permaculture design often includes the integration of animals, such as chickens for pest control or bees for pollination, further enhancing the garden’s productivity. Permaculture is a dynamic and evolving approach to gardening and landscaping that encourages continuous learning and adaptation, making it a rewarding practice for those interested in sustainable and regenerative agriculture.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Permaculture - Designing Sustainable Ecosystems in Your Backyard","pubDate":"2023-07-14T09:03:49.716Z","description":"Discover the principles of permaculture and how they can be applied to your garden to create self-sustaining ecosystems. Explore topics such as companion planting, soil improvement, and wildlife-friendly gardening to enhance the biodiversity of your landscape.","author":"Antsmasher","featured_image":"/src/assets/uploads/perma-culture.webp","images":[],"tags":[{"tag":"Permaculture"},{"tag":"permanent agriculture"},{"tag":"regenerative practice"}]};
				const file = "D:/Astro/uthan-site/src/pages/posts/post-4.md";
				const url = "/posts/post-4";
				function rawContent() {
					return "\nPermaculture, short for \"permanent agriculture\" or \"permanent culture,\" is a holistic approach to gardening and landscaping that emphasizes sustainable and regenerative practices. At its core, permaculture seeks to mimic natural ecosystems by designing landscapes that are not only productive but also self-sustaining and resilient. This approach can be applied to any scale, from a small backyard garden to a large farm, with the aim of creating harmony between humans and nature.\n<br />\n<br />\nOne of the fundamental principles of permaculture is \"observe and interact.\" Permaculture designers carefully study their local environment, climate, and ecosystem dynamics to make informed decisions about plant selection, layout, and maintenance. By understanding the natural patterns and processes at work, permaculturists can create landscapes that require less external inputs like water, fertilizer, and pesticides. For example, a permaculture garden might incorporate features such as swales (ditches that capture and slow water runoff), hugelkultur (raised beds filled with rotting wood and organic matter), and diverse plantings to increase soil fertility and water retention.\n<br />\n<br />\nPermaculture also places a strong emphasis on biodiversity and the creation of habitat for wildlife. By planting a diverse range of native and edible plants, permaculture gardens can attract beneficial insects, birds, and other wildlife, creating a balanced and resilient ecosystem. Additionally, permaculture design often includes the integration of animals, such as chickens for pest control or bees for pollination, further enhancing the garden's productivity. Permaculture is a dynamic and evolving approach to gardening and landscaping that encourages continuous learning and adaptation, making it a rewarding practice for those interested in sustainable and regenerative agriculture.";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
