/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro_c3674c5a.mjs';
import 'clsx';
import { $ as $$BaseLayout } from './404_260bc525.mjs';
import { $ as $$Index$1, d as data } from './index_0ea93017.mjs';
import { $ as $$Index } from './contact_a049f29c.mjs';
import 'html-escaper';
import 'react/jsx-runtime';
import 'react';
/* empty css                            */import 'svgo';
import 'react-uuid';
import 'nanostores';
import '@nanostores/react';
import './_page__c9247c9f.mjs';
/* empty css                            *//* empty css                           *//* empty css                           */import 'framer-motion';
/* empty css                           *//* empty css                           *//* empty css                            *//* empty css                           */
const $$Astro = createAstro();
const $$Testimonial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonial;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Testimonial", "customDescription": "Testimonials", "CTA_Banner": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index, { "title": "Testimonials", "subtitle": "See what people have been saying about us." })}${renderComponent($$result2, "TestimonialSection", $$Index$1, { "testimonials": data })}` })}`;
}, "D:/Astro/uthan-site/src/pages/testimonial.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/testimonial.astro";
const $$url = "/testimonial";

export { $$Testimonial as default, $$file as file, $$url as url };
