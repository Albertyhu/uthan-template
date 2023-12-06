/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro_32dbe7d3.mjs';
import 'clsx';
import { b as $$ContentWrapper, $ as $$BaseLayout } from './404_d52c293a.mjs';
import { $ as $$Index } from './contact_70be9fa8.mjs';

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
            "link": "/services/landscape-design",
            "description" : "Our Landscape Design service is the gateway to transforming your outdoor space into a breathtaking masterpiece. Our expert designers combine their creativity with your vision to craft landscapes that seamlessly blend nature's beauty with your dreams.",
            "promise" : "Experience the evolution of your ideas into captivating outdoor realities. Your space will be carefully planned, taking into account elements like functionality, aesthetics, and sustainability.",
            "features": ["Customized design plans", "Plant selection for diverse landscapes", "Hardscape integration (pathways, patios, etc.)", "Drainage and irrigation solutions", "Visual mock-ups for a clear vision"],
            "image1": LandscapeDesignImg1
        },
        {
            "thumbnail": TreeRemoval,
            "title": "Tree Removal", 
            "tagline": "Safely and sensitively removing trees to preserve your landscape's harmony and safety.",
            "link": "/services/tree-removal",
            "description" : "Our Tree Removal service ensures the safe and considerate removal of trees to maintain the harmony and safety of your landscape. We prioritize the health of your environment and execute removal with precision and care.",
            "promise": "Your landscape will remain harmonious and safe, free from potentially hazardous or overgrown trees. Our experts will handle removal without disrupting the balance of your outdoor space.",
            "features": ["Certified arborists for safe removal", "Eco-friendly disposal practices", "Preservation of surrounding vegetation", "Site cleanup post-removal"],
            "image1": TreeRemovalImg1
        },
        {
            "thumbnail": LawnReturfing,
            "title": "Lawn Returfing", 
            "tagline": "From patchy to pristine, we revive lawns into lush, inviting carpets of green.",
            "link": "/services/lawn-returfing",
            "description": "Revive your patchy and worn-out lawn with our Lawn Returfing service. We rejuvenate your green space into a lush and inviting carpet of vibrant green, perfect for relaxation and outdoor activities.",
            "promise": "Witness the transformation of your dull and uneven lawn into a vibrant and smooth expanse of lush greenery, creating an inviting ambiance for outdoor enjoyment.",
            "features": ["Removal of old turf", "Grading and soil preparation", "Premium quality turf installation", "Post-installation care guidelines", "Regular maintenance options"],
            "image1": LawnReturfingImg1
        },
        {
            "thumbnail": ArtificalTurfInstallation,
            "title": "Artifical Turf Installation", 
            "tagline": "Enjoy the look of real grass without the upkeep – artificial turf that's always perfectly manicured.",
            "link": "/services/artifical-turf-installation",
            "description": "Say goodbye to lawn maintenance woes with our Artificial Turf Installation service. Enjoy the look and feel of real grass without the upkeep, as our artificial turf always remains impeccably manicured.",
            "promise": "Experience the convenience of a pristine lawn that requires minimal maintenance, while adding a touch of green luxury to your outdoor space.",
            "features": ["High-quality artificial turf selection", "Realistic appearance and texture", "UV-resistant and durable materials", "Efficient drainage system", "No need for mowing or watering"],
            "image1": ArtificalTurfInstallationImg1
        }
    ];
const data = Services;

const $$Astro$1 = createAstro();
const $$ImageComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ImageComponent;
  const {
    image,
    altText,
    customStyle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="image-component"${addAttribute(customStyle ? customStyle : "h-auto w-11/12 mx-auto md:h-[370px] md:w-[370px] overflow-hidden rounded-lg grow-[3]", "class")}><img loading="lazy" decoding="async"${addAttribute(image.src, "src")}${addAttribute(altText ? altText : "projectimage", "alt")} class="object-cover w-full h-full"></div>`;
}, "D:/Astro/uthan-site/src/components/image_component.astro", void 0);

const $$Astro = createAstro();
const $$TurfCalculator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TurfCalculator;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Turf Calculator", "CTA_Banner": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index, { "title": "Artificial Turf Installation", "subtitle": "Enjoy the look of real grass without the upkeep \u2013 artificial turf that's always perfectly manicured." })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col sm:flex-row sm:gap-10"><div class="grow-0"><section class="my-10"><h3 class="text-[30px] mb-5">Description</h3><div>${data[3].description}</div></section>${data[3].features && renderTemplate`<section class="my-10"><h3 class="text-[30px] mb-5">Features</h3><ul class="list-disc list-inside">${data[3].features.map((feature) => renderTemplate`<li class="list-disc list-inside">${feature}</li>`)}</ul></section>`}</div>${data[3].image1 && renderTemplate`${renderComponent($$result3, "ImageComponent", $$ImageComponent, { "image": data[3].image1, "altText": "Artificial Turf", "customStyle": "w-auto h-auto overflow-hidden my-10 rounded-lg mx-auto grow" })}`}</div>${data[3].promise && renderTemplate`<section class="my-10"><h3 class="text-[30px] mb-5">What we promise to deliver</h3><div>${data[3].promise}</div></section>`}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/services/turf-calculator.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/services/turf-calculator.astro";
const $$url = "/services/turf-calculator";

const turfCalculator = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$TurfCalculator,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ImageComponent as $, data as d, turfCalculator as t };
