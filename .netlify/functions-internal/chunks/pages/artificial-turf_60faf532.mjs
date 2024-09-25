/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro_32dbe7d3.mjs';
import 'clsx';
import { a as $$ContentWrapper, $ as $$BaseLayout } from './404_5648cda2.mjs';
/* empty css                            *//* empty css                           */
const $$Astro$6 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$4;
  const {
    button_label,
    link,
    customStyle = ""
  } = Astro2.props;
  const BeforeStyle = "before:object-fit before:content-[''] before:h-full before:w-0 before:bg-[#21563D] before:absolute before:inset-0 before:opacity-60 hover:before:w-full before:transform-all before:z-[0]";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class=" z-1 capitalizetext-2xl text-white text-center relative"><div${addAttribute(`w-fit mx-auto p-1 sm:px-5 sm:py-5 rounded-lg cursor-pointer select-none active:translate-x-[1px] active:translate-y-[1px] relative bg-[#2f7955] text-white font-bold overflow-hidden ${BeforeStyle} clippedShape ${customStyle}`, "class")}>${button_label}</div></a>`;
}, "D:/Astro/uthan-site/src/components/liquid-button/index.astro", void 0);

const $$Astro$5 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$3;
  const {
    title,
    subtitle,
    button_label,
    link,
    titleStyle,
    wrapperStyle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="TitleSection" class="absolute h-fit w-full top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[50] text-white font-['Prata', sans-serif]"><div id="TitleWrapper"${addAttribute(wrapperStyle ? wrapperStyle : "w-11/12 sm:max-w-[800px] mx-auto", "class")}><h1${addAttribute(titleStyle ? titleStyle : "text-white text-center text-2xl sm:text-[50px] leading-[50px] sm:text-[90px] sm:leading-[90px] fadeInUp font-['Prata',serif]", "class")}>${title}</h1><h2 class="text-white text-center text-sm sm:text-[20px] !block fadeInUp opacity-0 animation-delay-1 font-['Montserrat',sans-serif]">${subtitle}</h2>${button_label && renderTemplate`${renderComponent($$result, "LiquidButton", $$Index$4, { "button_label": button_label, "link": link, "customStyle": "fadeInUp opacity-0 animation-delay-2 font-['Montserrat',sans-serif] text-[17px] my-10" })}`}</div></div>`;
}, "D:/Astro/uthan-site/src/components/TitleComponent/index.astro", void 0);

const Grass = {"src":"/_astro/shape-2.f12c1ed5.png","width":1920,"height":54,"format":"png"};

const LandscapeDesign = {"src":"/_astro/landscape-design.9a78990e.jpg","width":190,"height":190,"format":"jpg"};

const TreeRemoval = {"src":"/_astro/tree-removal-small.d403e7bf.jpg","width":6000,"height":4000,"format":"jpg"};

const LawnReturfing = {"src":"/_astro/lawn-2-small.9405c10b.jpg","width":4000,"height":3000,"format":"jpg"};

const ArtificalTurfInstallation = {"src":"/_astro/lawn-small.21a03bd0.jpg","width":292,"height":190,"format":"jpg"};

const LandscapeDesignImg1 = {"src":"/_astro/landscape-design-2.bd59a22c.jpg","width":1920,"height":1281,"format":"jpg","orientation":1};

const TreeRemovalImg1 = {"src":"/_astro/tree-removal.0e1f420b.jpg","width":1280,"height":853,"format":"jpg"};

const LawnReturfingImg1 = {"src":"/_astro/lawn-2.b3ccaec3.jpg","width":1280,"height":960,"format":"jpg"};

const ArtificalTurfInstallationImg1 = {"src":"/_astro/lawn.9169d497.jpg","width":1280,"height":833,"format":"jpg"};

const Services = [
        {
            "thumbnail": LandscapeDesign,
            "title": "Landscape Design", 
            "tagline": "Transforming visions into breathtaking outdoor realities, our landscape designs weave nature's beauty with your dreams.",
            "link": "/services/landscape_design",
            "description" : "Our Landscape Design service is the gateway to transforming your outdoor space into a breathtaking masterpiece. Our expert designers combine their creativity with your vision to craft landscapes that seamlessly blend nature's beauty with your dreams.",
            "promise" : "Experience the evolution of your ideas into captivating outdoor realities. Your space will be carefully planned, taking into account elements like functionality, aesthetics, and sustainability.",
            "features": ["Customized design plans", "Plant selection for diverse landscapes", "Hardscape integration (pathways, patios, etc.)", "Drainage and irrigation solutions", "Visual mock-ups for a clear vision"],
            "image1": LandscapeDesignImg1
        },
        {
            "thumbnail": TreeRemoval,
            "title": "Tree Removal", 
            "tagline": "Safely and sensitively removing trees to preserve your landscape's harmony and safety.",
            "link": "/services/tree_removal",
            "description" : "Our Tree Removal service ensures the safe and considerate removal of trees to maintain the harmony and safety of your landscape. We prioritize the health of your environment and execute removal with precision and care.",
            "promise": "Your landscape will remain harmonious and safe, free from potentially hazardous or overgrown trees. Our experts will handle removal without disrupting the balance of your outdoor space.",
            "features": ["Certified arborists for safe removal", "Eco-friendly disposal practices", "Preservation of surrounding vegetation", "Site cleanup post-removal"],
            "image1": TreeRemovalImg1
        },
        {
            "thumbnail": LawnReturfing,
            "title": "Lawn Returfing", 
            "tagline": "From patchy to pristine, we revive lawns into lush, inviting carpets of green.",
            "link": "/services/lawn_returfing",
            "description": "Revive your patchy and worn-out lawn with our Lawn Returfing service. We rejuvenate your green space into a lush and inviting carpet of vibrant green, perfect for relaxation and outdoor activities.",
            "promise": "Witness the transformation of your dull and uneven lawn into a vibrant and smooth expanse of lush greenery, creating an inviting ambiance for outdoor enjoyment.",
            "features": ["Removal of old turf", "Grading and soil preparation", "Premium quality turf installation", "Post-installation care guidelines", "Regular maintenance options"],
            "image1": LawnReturfingImg1
        },
        {
            "thumbnail": ArtificalTurfInstallation,
            "title": "Artifical Turf Installation", 
            "tagline": "Enjoy the look of real grass without the upkeep – artificial turf that's always perfectly manicured.",
            "link": "/services/artificial-turf",
            "description": "Say goodbye to lawn maintenance woes with our Artificial Turf Installation service. Enjoy the look and feel of real grass without the upkeep, as our artificial turf always remains impeccably manicured.",
            "promise": "Experience the convenience of a pristine lawn that requires minimal maintenance, while adding a touch of green luxury to your outdoor space.",
            "features": ["High-quality artificial turf selection", "Realistic appearance and texture", "UV-resistant and durable materials", "Efficient drainage system", "No need for mowing or watering"],
            "image1": ArtificalTurfInstallationImg1
        }
    ];
const data = Services;

const $$Astro$4 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${maybeRenderHead()}<div class="absolute left-0 right-0 bottom-[-1px] sm:bottom-0 bg-repeat-x h-[54px] w-full z-[19] animated-grass"${addAttribute(`background-image: url(${Grass.src})`, "style")}></div>`;
}, "D:/Astro/uthan-site/src/components/animated_grass/index.astro", void 0);

const defaultImage = {"src":"/_astro/japanese-garden.6b1716e5.jpg","width":1280,"height":960,"format":"jpg"};

const $$Astro$3 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  const {
    image,
    title,
    subtitle,
    button_label,
    link
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="small_banner"${addAttribute(`relative h-[250px] w-full bg-center before:absolute  before:content-[''] before:bg-[rgba(0,0,0,0.4)] before:w-full before:h-full before:z-10 scrollToTopIndicator`, "class")}><img${addAttribute(image ? image.src : defaultImage.src, "src")} class="w-full h-full object-cover" alt="banner image">${title && renderTemplate`${renderComponent($$result, "TitleComponent", $$Index$3, { "title": title, "subtitle": subtitle, "button_label": button_label, "link": link, "wrapperStyle": "w-11/12 mx-auto overflow-hidden max-w-[270px] xm:max-w-[360px] sm:max-w-[636px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]", "titleStyle": "md:whitespace-nowrap text-white text-center text-3xl leading-[50px] sm:text-[45px] sm:leading-[90px] fadeInUp font-['Prata',serif]" })}`}${renderComponent($$result, "AnimatedGrass", $$Index$2, {})}</div>`;
}, "D:/Astro/uthan-site/src/components/small_banner/index.astro", void 0);

const $$Astro$2 = createAstro();
const $$ImageComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ImageComponent;
  const {
    image,
    altText,
    customStyle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="image-component"${addAttribute(customStyle ? customStyle : "h-auto w-11/12 mx-auto md:h-[370px] md:w-[370px] overflow-hidden rounded-lg grow-[3]", "class")}><img loading="lazy" decoding="async"${addAttribute(image.src, "src")}${addAttribute(altText ? altText : "projectimage", "alt")} class="object-cover w-full h-full"></div>`;
}, "D:/Astro/uthan-site/src/components/image_component.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->${maybeRenderHead()}<section class="relative flex flex-wrap lg:h-screen lg:items-center"><div class="w-full py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24" id="ATFormContainer">${renderComponent($$result, "StepWizard", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Astro/uthan-site/src/components/artifical_turf_calc/step-wizard.tsx", "client:component-export": "default" })}</div><div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2"><img alt="Welcome" src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="absolute inset-0 h-full w-full object-cover"></div></section>`;
}, "D:/Astro/uthan-site/src/components/artifical_turf_calc/index.astro", void 0);

const $$Astro = createAstro();
const $$ArtificialTurf = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArtificialTurf;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Turf Calculator", "CTA_Banner": true, "customSlotStyle": "mt-[100px] sm:mt-[185px] [@media(min-width:992px)]:mt-[180px] min-h-[100vh] sm:min-h-[300vh] mb-[10px] flex flex-col flex-grow overflow-x-hidden" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$1, { "title": "Artificial Turf Installation", "subtitle": "Enjoy the look of real grass without the upkeep \u2013 artificial turf that's always perfectly manicured." })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col sm:flex-row sm:gap-10 grow-[3]"><div class="grow-0"><section class="my-10"><h3 class="text-[30px] mb-5">Description</h3><div>${data[3].description}</div></section>${data[3].features && renderTemplate`<section class="my-10"><h3 class="text-[30px] mb-5">Features</h3><ul class="list-disc list-inside">${data[3].features.map((feature) => renderTemplate`<li class="list-disc list-inside">${feature}</li>`)}</ul></section>`}</div>${data[3].image1 && renderTemplate`${renderComponent($$result3, "ImageComponent", $$ImageComponent, { "image": data[3].image1, "altText": "Artificial Turf", "customStyle": "w-auto h-auto overflow-hidden my-10 rounded-lg mx-auto grow" })}`}</div>${data[3].promise && renderTemplate`<section class="my-10"><h3 class="text-[30px] mb-5">What we promise to deliver</h3><div>${data[3].promise}</div></section>`}${renderComponent($$result3, "Form", $$Index, {})}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/services/artificial-turf.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/services/artificial-turf.astro";
const $$url = "/services/artificial-turf";

const artificialTurf = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ArtificialTurf,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index$1 as $, Grass as G, $$Index$3 as a, $$ImageComponent as b, artificialTurf as c, data as d };
