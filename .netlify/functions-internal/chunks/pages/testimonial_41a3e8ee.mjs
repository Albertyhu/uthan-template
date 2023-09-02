/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro_d427acf6.mjs';
import 'clsx';
import { a as $$BaseLayout } from './_page__120f820b.mjs';
import { a as $$Index, T as TestimonialDemo } from './index_ebea3ace.mjs';
import 'html-escaper';
import 'react/jsx-runtime';
import 'react';
/* empty css                            */import 'svgo';
import 'react-uuid';
import 'nanostores';
import '@nanostores/react';
/* empty css                           *//* empty css                           */import 'framer-motion';
import 'react-countup';
/* empty css                           */import './error_5a762164.mjs';
/* empty css                            *//* empty css                           *//* empty css                           */
const $$Astro = createAstro();
const $$Testimonial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonial;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Testimonial" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "TestimonialSection", $$Index, { "testimonials": TestimonialDemo.data })}` })}`;
}, "D:/Astro/uthan-site/src/pages/testimonial.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/testimonial.astro";
const $$url = "/testimonial";

export { $$Testimonial as default, $$file as file, $$url as url };
