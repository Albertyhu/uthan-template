/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro_c3674c5a.mjs';
import { a as $$Icon, $ as $$BaseLayout } from './404_260bc525.mjs';
import 'clsx';
/* empty css                            *//* empty css                           */
const $$Astro$6 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$3;
  const {
    button_label,
    link,
    customStyle = ""
  } = Astro2.props;
  const BeforeStyle = "before:object-fit before:content-[''] before:h-full before:w-0 before:bg-[#21563D] before:absolute before:inset-0 before:opacity-60 hover:before:w-full before:transform-all before:z-[0]";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-fit mx-auto p-1 sm:px-5 sm:py-5 rounded-lg cursor-pointer select-none active:translate-x-[1px] active:translate-y-[1px] relative bg-[#2f7955] text-white font-bold overflow-hidden ${BeforeStyle} clippedShape ${customStyle}`, "class")}><a${addAttribute(link, "href")} class=" z-1 capitalizetext-2xl text-white text-center relative">${button_label}</a></div>`;
}, "D:/Astro/uthan-site/src/components/liquid-button/index.astro", void 0);

const $$Astro$5 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$2;
  const {
    title,
    subtitle,
    button_label,
    link,
    titleStyle,
    wrapperStyle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="TitleSection" class="absolute h-fit w-full top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[50] text-white font-['Prata', sans-serif]"><div id="TitleWrapper"${addAttribute(wrapperStyle ? wrapperStyle : "w-11/12 sm:max-w-[800px] mx-auto", "class")}><h1${addAttribute(titleStyle ? titleStyle : "text-white text-center text-2xl sm:text-[50px] leading-[50px] sm:text-[90px] sm:leading-[90px] fadeInUp font-['Prata',serif]", "class")}>${title}</h1><h2 class="text-white text-center text-sm sm:text-[20px] !block fadeInUp opacity-0 animation-delay-1 font-['Montserrat',sans-serif]">${subtitle}</h2>${button_label && renderTemplate`${renderComponent($$result, "LiquidButton", $$Index$3, { "button_label": button_label, "link": link, "customStyle": "fadeInUp opacity-0 animation-delay-2 font-['Montserrat',sans-serif] text-[17px] my-10" })}`}</div></div>`;
}, "D:/Astro/uthan-site/src/components/TitleComponent/index.astro", void 0);

const Grass = {"src":"/_astro/shape-2.f12c1ed5.png","width":1920,"height":54,"format":"png"};

const $$Astro$4 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${maybeRenderHead()}<div class="absolute left-0 right-0 bottom-[-1px] sm:bottom-0 bg-repeat-x h-[54px] w-full z-[19] animated-grass"${addAttribute(`background-image: url(${Grass.src})`, "style")}></div>`;
}, "D:/Astro/uthan-site/src/components/animated_grass/index.astro", void 0);

const defaultImage = {"src":"/_astro/japanese-garden.6b1716e5.jpg","width":1280,"height":960,"format":"jpg"};

const $$Astro$3 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    image,
    title,
    subtitle,
    button_label,
    link
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="small_banner"${addAttribute(`relative h-[250px] w-full bg-center before:absolute  before:content-[''] before:bg-[rgba(0,0,0,0.4)] before:w-full before:h-full before:z-10 scrollToTopIndicator`, "class")}><img${addAttribute(image ? image.src : defaultImage.src, "src")} class="w-full h-full object-cover" alt="banner image">${title && renderTemplate`${renderComponent($$result, "TitleComponent", $$Index$2, { "title": title, "subtitle": subtitle, "button_label": button_label, "link": link, "wrapperStyle": "w-11/12 mx-auto", "titleStyle": "whitespace-nowrap text-white text-center text-lg leading-[50px] sm:text-[45px] sm:leading-[90px] fadeInUp font-['Prata',serif]" })}`}${renderComponent($$result, "AnimatedGrass", $$Index$1, {})}</div>`;
}, "D:/Astro/uthan-site/src/components/small_banner/index.astro", void 0);

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

export { $$Index as $, Grass as G, Leaf as L, $$Index$2 as a, contact as c };
