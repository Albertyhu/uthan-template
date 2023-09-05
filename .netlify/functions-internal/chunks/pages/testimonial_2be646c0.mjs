/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro_d427acf6.mjs';
import 'clsx';
import { $ as $$BaseLayout } from './_page__28fe2195.mjs';
import { a as $$Index } from './index_feb08819.mjs';
import 'html-escaper';
import 'react/jsx-runtime';
import 'react';
/* empty css                                 */import 'react-icons/Bs/index.js';
import 'react-icons';
import 'react-uuid';
import 'nanostores';
import '@nanostores/react';
/* empty css                            *//* empty css                           *//* empty css                           */import 'framer-motion';
/* empty css                           */import './error_bc286086.mjs';
/* empty css                                 *//* empty css                           *//* empty css                           */
const data = [
	{
		name: "Nicolas Lawson",
		designation: "Designer",
		rating: 5,
		testimonial: "Natural Patterns turned our vague ideas into an awe-inspiring reality. Their design team crafted a paradise that exceeded our wildest dreams!",
		profile_image: "../src/assets/images/resource/nicolas.jpg"
	},
	{
		name: "Charlotte McGreggor",
		designation: "Manager",
		rating: 4,
		testimonial: "We were blown away by the attention to detail in our landscape design. Every corner feels like a work of art. Thank you, Natural Patterns!",
		profile_image: "../src/assets/images/resource/charlotte.jpg"
	},
	{
		name: "Rob Townsend",
		designation: "Real Estate Agent",
		rating: 5,
		testimonial: "The Natural Patterns team truly captured the essence of our home in their design. Our outdoor space has become an extension of who we are.",
		profile_image: "../src/assets/images/resource/rob.jpg"
	},
	{
		name: "Lara Tsar",
		designation: "Pricinpal administrator",
		rating: 5,
		testimonial: "From concept to completion, the process was smooth and collaborative. Their designers brought creativity and expertise that made our project seamless.",
		profile_image: "../src/assets/images/resource/lara.jpg"
	},
	{
		name: "Sarah Jenkins",
		designation: "Project coordinator",
		rating: 5,
		testimonial: "Natural Patterns transformed our backyard into a haven of tranquility. We now spend more time outdoors, surrounded by the beauty they created.",
		profile_image: "../src/assets/images/resource/sarah.jpg"
	}
];
const TestimonialDemo = {
	data: data
};

const $$Astro = createAstro();
const $$Testimonial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonial;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Testimonial" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "TestimonialSection", $$Index, { "testimonials": TestimonialDemo.data })}` })}`;
}, "D:/Astro/uthan-site/src/pages/testimonial.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/testimonial.astro";
const $$url = "/testimonial";

export { $$Testimonial as default, $$file as file, $$url as url };
