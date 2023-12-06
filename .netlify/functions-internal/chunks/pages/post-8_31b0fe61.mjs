/* empty css                         */import { a as createComponent, s as spreadAttributes, r as renderTemplate, d as renderComponent, u as unescapeHTML } from '../astro_32dbe7d3.mjs';
import { $ as $$MarkdownPostLayout } from './post-1_e693d450.mjs';
import '@astrojs/internal-helpers/path';
import './image-endpoint_81264b76.mjs';
import 'clsx';
import 'html-escaper';
import './404_d52c293a.mjs';
import 'react/jsx-runtime';
import 'react';
import 'react-uuid';
/* empty css                            */import 'svgo';
import 'nanostores';
import '@nanostores/react';
import './_page__56169325.mjs';
/* empty css                            *//* empty css                           *//* empty css                            */import './contact_70be9fa8.mjs';
/* empty css                            *//* empty css                           */import 'mime/lite.js';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Edible landscaping is a practical and aesthetically pleasing approach to gardening that combines the beauty of ornamental plants with the productivity of edible crops. Instead of segregating your vegetable garden from your flower beds, edible landscaping integrates fruit trees, berry bushes, herbs, vegetables, and edible flowers seamlessly into your outdoor space. This approach not only adds visual interest to your garden but also provides a ready source of fresh, homegrown produce.\n<br>\n<br>\nOne of the primary benefits of edible landscaping is convenience. With fruits and vegetables readily available in your landscape, you can easily harvest ingredients for your meals, reducing trips to the grocery store and the carbon footprint associated with food transportation. Additionally, growing your own food allows you to control the use of pesticides and chemicals, ensuring that your produce is free from harmful residues. You can also experiment with heirloom and unusual varieties that may not be readily available in stores, expanding your culinary horizons.\n<br>\n<br>\nEdible landscaping can be designed to suit your preferences and available space. For example, you can create a formal fruit tree espalier along a wall, plant a colorful edible flower border, or establish raised beds for vegetables. The key is to combine plants that have similar sunlight and water requirements to ensure they thrive together. Moreover, edible landscaping is an excellent way to introduce gardening and self-sufficiency to children and beginners, as it combines the satisfaction of growing beautiful plants with the rewards of homegrown food. In summary, edible landscaping is a delightful and practical way to make your garden both visually appealing and bountiful.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Edible Landscaping - Growing Food in Your Garden","pubDate":"2022-07-01T00:00:00.000Z","description":"Edible landscaping combines aesthetics with practicality by incorporating edible plants into your garden design. Learn how to integrate fruits, vegetables, herbs, and edible flowers into your landscape, creating a beautiful and productive outdoor space.","author":"Astro Learner","featured_image":"/src/assets/uploads/edible-landscaping.webp","images":[],"tags":[{"tag":"edible landscaping"},{"tag":"crops"},{"tag":"vegitable garden"}]};
				const file = "D:/Astro/uthan-site/src/pages/posts/post-8.md";
				const url = "/posts/post-8";
				function rawContent() {
					return "Edible landscaping is a practical and aesthetically pleasing approach to gardening that combines the beauty of ornamental plants with the productivity of edible crops. Instead of segregating your vegetable garden from your flower beds, edible landscaping integrates fruit trees, berry bushes, herbs, vegetables, and edible flowers seamlessly into your outdoor space. This approach not only adds visual interest to your garden but also provides a ready source of fresh, homegrown produce.\n<br />\n<br />\nOne of the primary benefits of edible landscaping is convenience. With fruits and vegetables readily available in your landscape, you can easily harvest ingredients for your meals, reducing trips to the grocery store and the carbon footprint associated with food transportation. Additionally, growing your own food allows you to control the use of pesticides and chemicals, ensuring that your produce is free from harmful residues. You can also experiment with heirloom and unusual varieties that may not be readily available in stores, expanding your culinary horizons.\n<br />\n<br />\nEdible landscaping can be designed to suit your preferences and available space. For example, you can create a formal fruit tree espalier along a wall, plant a colorful edible flower border, or establish raised beds for vegetables. The key is to combine plants that have similar sunlight and water requirements to ensure they thrive together. Moreover, edible landscaping is an excellent way to introduce gardening and self-sufficiency to children and beginners, as it combines the satisfaction of growing beautiful plants with the rewards of homegrown food. In summary, edible landscaping is a delightful and practical way to make your garden both visually appealing and bountiful.";
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
