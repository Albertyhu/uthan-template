/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro_32dbe7d3.mjs';
import { b as $$Icon, $ as $$BaseLayout } from './404_8bf7126a.mjs';
import { $ as $$Index } from './artificial-turf_51fe04d1.mjs';

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
  return renderTemplate`${maybeRenderHead()}<form method="POST" class="formBackground w-11/12 md:w-9/12 mx-auto lg:w-6/12 rounded-lg mt-[45px] py-10 box_shadow mb-[120px] sm:mb-[160px] z-[1]" id="contactForm"><div id="Shell"${addAttribute(`w-11/12 mx-auto ${FormStyle}`, "class")}><div class="grid sm:flex">${renderComponent($$result, "EmailIcon", $$Email, { "customStyle": "mx-auto mb-5 bg-[#2F7955] text-white" })}<section class="mx-auto sm:ml-[5px]"><h2 class="text-base sm:text-2xl text-center sm:text-left font-bold my-1">Have something to say?</h2><h2 class="text-base sm:text-2xl text-center sm:text-left my-1">Share your thoughts.</h2></section></div><div class="grid w-full my-[10px]"><label class="formLabel">Email</label><input name="email" id="emailInput" type="email" class="formInput" placeholder="Type your email here" required></div><div class="grid w-full my-[10px]"><label class="formLabel">Subject Line</label><input name="subject" id="subjectInput" type="text" class="formInput" placeholder="Type your subject line here" required></div><div class="grid w-full my-[10px]"><label class="formLabel">Message</label><textarea name="message" id="messageInput" rows="5" class="outline-1 border-2 border-solid border-slate-200 resize-none p-1 rounded-lg bg-transparent placeholder:text-base placeholder:text-slate-800" placeholder="Type your message here."></textarea></div><button class="fancyButton !ml-auto !mr-0 bg-slate-300" type="submit">Send</button></div></form>`;
}, "D:/Astro/uthan-site/src/components/contact_form.astro", void 0);

const RightLeaf = {"src":"/_astro/shape-37.df0d87e8.png","width":346,"height":391,"format":"png"};

const Leaf = {"src":"/_astro/shape-33.6a6117b5.png","width":238,"height":271,"format":"png"};

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Contact", "customDescription": "Contact Page" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="h-[50vh] w-auto absolute left-[10px] top-[25%] hidden sm:block"><img id="Left Leaf Shape" decoding="async" loading="lazy" class="w-full h-full object-cover"${addAttribute(Leaf.src, "src")} alt="Leaf Shape"></div><div class="h-[50vh] w-auto absolute right-[20px] top-[25%] hidden sm:block"><img id="Right Leaf Shape" decoding="async" loading="lazy" class="w-full h-full object-cover"${addAttribute(RightLeaf.src, "src")} alt="Leaf Shape"></div>${renderComponent($$result2, "Banner", $$Index, { "title": "Have something in mind?", "subtitle": "Share your thoughts with us." })}${renderComponent($$result2, "ContactForm", $$ContactForm, {})}` })}`;
}, "D:/Astro/uthan-site/src/pages/contact.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Leaf as L, contact as c };
