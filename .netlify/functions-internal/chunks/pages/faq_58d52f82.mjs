/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro_c3674c5a.mjs';
import 'clsx';
import { S as SiteData, $ as $$BaseLayout, b as $$ContentWrapper } from './404_260bc525.mjs';
import { L as Leaf, $ as $$Index } from './contact_a049f29c.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { createContext, useRef, useEffect, useState } from 'react';
/* empty css                         */import uuid from 'react-uuid';
import 'html-escaper';
/* empty css                            */import 'svgo';
import 'nanostores';
import '@nanostores/react';
/* empty css                            *//* empty css                           */
const UpArrow = {"src":"/_astro/up_arrow.eaa9c1ff.png","width":80,"height":80,"format":"png"};

const AccordionContext = createContext();

const Accordion = (props) => {
  const {
    title,
    content,
    index,
    current,
    setCurrent
  } = props;
  const ArrowRef = useRef(null);
  const paraRef = useRef(null);
  const toggleEvent = () => {
    if (current && ArrowRef.current && current === index + 1) {
      setCurrent(0);
    } else {
      setCurrent(index + 1);
    }
  };
  const Open = () => {
    ArrowRef?.current?.classList.remove("downArrow");
    paraRef?.current?.classList.remove("collapsed");
  };
  const Close = () => {
    if (ArrowRef.current && !ArrowRef?.current.classList.contains("downArrow"))
      ArrowRef?.current.classList.add("downArrow");
    if (paraRef.current && !paraRef?.current?.classList.contains("collapsed"))
      paraRef?.current?.classList.add("collapsed");
  };
  useEffect(() => {
    if (current && ArrowRef.current && current === index + 1) {
      Open();
    } else {
      Close();
    }
  }, [current]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "box_shadow w-full font-['Prata',serif] bg-white my-10 py-10",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          id: "accordion-wrapper",
          className: "w-11/12 mx-auto",
          children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                id: "accordion top element",
                className: "flex flex-row w-full justify-between cursor-pointer",
                onClick: () => {
                  toggleEvent();
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "h4",
                    {
                      className: "font-bold",
                      children: title
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: UpArrow.src,
                      ref: ArrowRef,
                      className: "w-[20px] h-[20px] arrowStyle downArrow"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                id: "Collapsible-content",
                className: "collapsibleDiv collapsed overflow-hidden",
                ref: paraRef,
                children: /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "mt-5 font-light",
                    children: content
                  }
                )
              }
            )
          ]
        }
      )
    }
  );
};

const AccordionComponent = (props) => {
  const { data } = props;
  const [current, setCurrent] = useState(0);
  const context = {
    current
  };
  return /* @__PURE__ */ jsx(AccordionContext.Provider, { value: context, children: /* @__PURE__ */ jsx("div", { children: data && data.length > 0 && data.map((item, index) => /* @__PURE__ */ jsx(
    Accordion,
    {
      title: item.question,
      content: item.ans,
      index,
      current,
      setCurrent
    },
    uuid()
  )) }) });
};

const FAQ_data = [
    {
        question: "What services does Natural Patterns Landscaping offer?",
        ans: "Natural Patterns Landscaping offers a wide range of services including landscape design, lawn maintenance, hardscape installation, irrigation system installation, tree and shrub care, and seasonal cleanups."
    },
    {
        question: "How do I request a quote for landscaping services?",
        ans: `You can request a quote by visiting our website and filling out the online contact form, or you can give us a call at ${SiteData.business_phone} to schedule an appointment for a consultation.`
    },
    {
        question: "Do you provide free consultations?",
        ans: "Yes, we offer free consultations to discuss your landscaping needs, assess your property, and provide you with a customized plan and estimate."
    },
    {
        question: "Is Natural Patterns Landscaping licensed and insured?",
        ans: "Yes, we are fully licensed and insured to protect both our team and your property during all landscaping projects."
    },
    {
        question: "Can you help with sustainable and eco-friendly landscaping designs?",
        ans: "Absolutely! We specialize in eco-friendly landscaping solutions and can incorporate sustainable practices into your design, such as drought-tolerant plants and efficient irrigation systems."
    },
    {
        question: "What is the typical timeline for completing a landscaping project?",
        ans: "The timeline varies depending on the scope of the project. Smaller projects may take a few days, while larger projects may take several weeks. We'll provide you with a detailed timeline during the consultation."
    },
    {
        question: "Do you offer maintenance packages for ongoing lawn care?",
        ans: "Yes, we offer comprehensive maintenance packages to keep your landscape looking its best year-round. These packages can be customized to suit your specific needs."
    },
    {
        question: "What types of payment methods do you accept?",
        ans: "We accept various payment methods, including credit cards, checks, and electronic transfers. Payment options will be discussed during the project planning phase."
    },
    {
        question: "Can you provide references or examples of past projects?",
        ans: "Certainly! We have a portfolio of past projects, and we can provide references from satisfied customers upon request."
    },
    {
        question: "What sets Natural Patterns Landscaping apart from other landscaping companies?",
        ans: "What sets us apart is our commitment to creating landscapes that mimic natural beauty and harmony. We combine artistic design with sustainable practices, ensuring your outdoor space is not only stunning but also environmentally friendly."
    }
];

const Potted_Plants = {"src":"/_astro/potted-plt.1064ae47.webp","width":290,"height":420,"format":"webp"};

const Apples = {"src":"/_astro/apples.13e57d7b.webp","width":427,"height":640,"format":"webp"};

const $$Astro$1 = createAstro();
const $$GraphicsWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GraphicsWrapper;
  return renderTemplate`${maybeRenderHead()}<div class="w-full sm:w-6/12 mx-auto justify-center"><div class="sm:h-fit relative top-[25%] hidden sm:block"><div id="PottedPlants" class="overflow-hidden w-[325px] h-auto absolute parallaxProp z-[2] sm:right-[-150px] box_shadow"><img decoding="async" loading="lazy"${addAttribute(Potted_Plants.src, "src")} class="w-full h-full object-cover m-auto" alt="Potted Plants"></div><div id="Apples" class="overflow-hidden w-11/12 h-auto absolute parallaxProp z-[1] sm:left-[-75px] box_shadow"><img decoding="async" loading="lazy"${addAttribute(Apples.src, "src")} class="w-full h-full object-cover m-auto" alt="Apples"></div><div class="overflow-hidden w-[300px] h-auto absolute parallaxProp z-[0]"><img decoding="async" loading="lazy"${addAttribute(Leaf.src, "src")} class="w-full h-full object-cover m-auto" alt="Apples"></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/faq-page/graphicsWrapper.astro", void 0);

const $$Astro = createAstro();
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "FAQ", "CTA_Banner": true, "customDescription": `Frequently Asked Questions about ${SiteData.business_name}` }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index, { "title": "FAQ" })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="mt-10"><h2 class="text-[#2f7955]">FAQ's</h2><h1 class="text-left text-[36px] leading-[44px] block font-['Prata',serif] text-black font-400">Frequently Asked Questions</h1></div><div class="grid sm:grid-cols-2">${renderComponent($$result3, "Accordion", AccordionComponent, { "data": FAQ_data, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/accordion_component/index.tsx", "client:component-export": "default" })}${renderComponent($$result3, "Graphics", $$GraphicsWrapper, {})}</div>` })}` })}a`;
}, "D:/Astro/uthan-site/src/pages/faq.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/faq.astro";
const $$url = "/faq";

export { $$Faq as default, $$file as file, $$url as url };
