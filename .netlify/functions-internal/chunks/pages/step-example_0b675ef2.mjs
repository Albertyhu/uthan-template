/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro_32dbe7d3.mjs';
import 'clsx';
import { S as StepForm } from './artificial-turf_51fe04d1.mjs';
import { a as $$ContentWrapper, $ as $$BaseLayout } from './404_8bf7126a.mjs';
import 'html-escaper';
/* empty css                            *//* empty css                           */import 'react/jsx-runtime';
import 'react';
import 'react-step-wizard';
import '@emailjs/browser';
/* empty css                                     */import 'react-uuid';
/* empty css                            */import 'svgo';
import 'nanostores';
import '@nanostores/react';

const $$Astro = createAstro();
const $$StepExample = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StepExample;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "StepForm", StepForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/artifical_turf_calc/step-wizard", "client:component-export": "default" })}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/services/step-example.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/services/step-example.astro";
const $$url = "/services/step-example";

export { $$StepExample as default, $$file as file, $$url as url };
