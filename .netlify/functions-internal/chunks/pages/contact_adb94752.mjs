/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro_d427acf6.mjs';
import 'clsx';
import { $ as $$Icon, a as $$BaseLayout } from './_page__120f820b.mjs';
import 'html-escaper';
import 'react/jsx-runtime';
import 'react';
/* empty css                            */import 'svgo';
import 'react-uuid';
import 'nanostores';
import '@nanostores/react';
/* empty css                           */
const $$Astro$2 = createAstro();
const $$Email = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Email;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`email-icon ${customStyle}`, "class")}>${renderComponent($$result, "Icon", $$Icon, { "name": "ic:outline-attach-email", "class": "w-9/12 h-9/12 m-auto" })}</div>`;
}, "D:/Astro/uthan-site/src/components/iconComponents/email.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const FormStyle = `[&>div>label]:text-black rounded-md text-2xl`;
  return renderTemplate`${maybeRenderHead()}<form method="POST" class="formBackground w-11/12 md:w-9/12 mx-auto lg:w-6/12 rounded-lg mt-[20px] py-10 box_shadow mb-[120px] sm:mb-[160px]" id="contactForm"><div id="Shell"${addAttribute(`w-11/12 mx-auto ${FormStyle}`, "class")}><div class="grid sm:flex">${renderComponent($$result, "EmailIcon", $$Email, { "customStyle": "mx-auto mb-5" })}<section class="mx-auto sm:ml-[5px]"><h2 class="text-base sm:text-2xl text-center sm:text-left font-bold my-1">Have something to say?</h2><h2 class="text-base sm:text-2xl text-center sm:text-left my-1">Share your thoughts.</h2></section></div><div class="grid w-full my-[10px]"><label class="formLabel">Email</label><input name="email" id="emailInput" type="email" class="formInput" placeholder="Type your email here" required></div><div class="grid w-full my-[10px]"><label class="formLabel">Subject Line</label><input name="subject" id="subjectInput" type="text" class="formInput" placeholder="Type your subject line here" required></div><div class="grid w-full my-[10px]"><label class="formLabel">Message</label><textarea name="message" id="messageInput" rows="5" class="outline-1 border-2 resize-none p-1 rounded-lg bg-transparent placeholder:text-base placeholder:text-slate-800" placeholder="Type your message here."></textarea></div><button class="fancyButton !ml-auto !mr-0 bg-slate-300" type="submit">Send</button></div></form>`;
}, "D:/Astro/uthan-site/src/components/contact_form.astro", void 0);

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Contact" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContactForm", $$ContactForm, {})}` })}`;
}, "D:/Astro/uthan-site/src/pages/contact.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
