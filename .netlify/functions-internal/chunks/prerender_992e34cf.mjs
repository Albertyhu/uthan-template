/* empty css                        */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, F as Fragment } from './astro_32dbe7d3.mjs';
import 'clsx';
import { a as $$PreviewLink, r as retrieveRecentImages, c as createStaticPathArray, $ as $$Index$g, R as RenderPagination$1, m as makeURLfriendly, D as DOTS, u as usePagination, b as createStaticPathArrayForTagsAndPage, d as createStaticPathArrayForTags, g as getImageFileName } from './pages/_page__3179a546.mjs';
import { S as SiteData, c as SelectedCategory, A as AllCategories, $ as $$BaseLayout, B as BackImg$1, a as $$ContentWrapper, p as phoneNumberToNumeric, f as formatPhoneNumber } from './pages/404_5648cda2.mjs';
/* empty css                          */import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { G as Grass, a as $$Index$d, d as data$2, b as $$ImageComponent, $ as $$Index$f } from './pages/artificial-turf_60faf532.mjs';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { $ as $$Index$e, d as data$3 } from './pages/testimonial_46b5b2a3.mjs';
/* empty css                                   *//* empty css                          *//* empty css                           *//* empty css                          *//* empty css                           *//* empty css                                  *//* empty css                        */import { L as Leaf } from './pages/contact_e353dfb8.mjs';

const $$Astro$C = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${maybeRenderHead()}<div id="Experience" class=""><div class="content_block_1"><div class="content-box relative block mr-[70px]"><div class="sec-title mb-[35px]"><span class="sub-title">About</span><h2>20 Years of <br>Great Experience.</h2></div><div class="text relative block mb-[40px]"><p>At Natural Patterns Landscaping, we are more than just a landscaping business – we are the stewards of your outdoor dreams. With a deep-rooted passion for nature's beauty and a commitment to crafting breathtaking landscapes, we transform ordinary spaces into living works of art that seamlessly blend with the environment.</p></div><div class="btn-box relative block"><a href="about.html" class="theme-btn btn-one">Read More</a></div></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/Home/about_section/experience.astro", void 0);

const Shape3 = {"src":"/_astro/shape-3.aa3c4621.png","width":204,"height":284,"format":"png"};

const Shape4 = {"src":"/_astro/shape-4.45619530.png","width":150,"height":219,"format":"png"};

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$B = createAstro();
const $$SellingSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$SellingSection;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div id="SellingPoints" class="relative w-full p-[15px] flex mb-[60px]"><div class="inner-content text-center relative w-full"><div class="pattern-layer hidden sm:block" id="Graphic_patterns"><div class="pattern-1 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[210px] h-[210px] rounded-[50%] opacity-10"></div><div class="pattern-2 absolute animated" data-wow-delay="00ms" data-wow-duration="1500ms"', '></div><div class="pattern-3 absolute animated" data-wow-delay="00ms" data-wow-duration="1500ms"', '></div></div><div class="items-center grid sm:grid-cols-2 gap-10 mx-[-15px]"><div class="feature-block"><div id="SellExperience-1" class="feature-block-one wow min-height-[30px] transition-all fadeOutDown SellExperience" data-wow-delay="00ms" data-wow-duration="1500ms"><div id="block1" class="inner-box text-5xl mb-8 z-10 b_shadow_6"><div class="icon-box relative inline-block rounded-lg text-5xl mb-8 z-10 transition duration-300"><i class="icon-4"></i></div><h3 class="text-base leading-7 font-medium">100% Guarantee Services</h3></div></div><div id="SellExperience-2" class="feature-block-one wow min-height-[30px] transition-all fadeOutDown SellExperience" data-wow-delay="200ms" data-wow-duration="1500ms"><div id="block2" class="inner-box text-5xl mb-8 z-10 b_shadow_6"><div class="icon-box relative inline-block rounded-lg text-5xl mb-8 z-10 transition duration-300"><i class="icon-5"></i></div><h3 class="text-base leading-7 font-medium">Environmental Friendly</h3></div></div></div><div class="col-lg-6 col-md-6 col-sm-12 feature-block"><div id="SellExperience-3" class="feature-block-one wow min-height-[30px] transition-all fadeOutDown SellExperience" data-wow-delay="400ms" data-wow-duration="1500ms"><div id="block3" class="inner-box text-5xl mb-8 z-10 b_shadow_6"><div class="icon-box relative inline-block rounded-lg text-5xl mb-8 z-10 transition duration-300"><i class="icon-5"></i></div><h3 class="text-base leading-7 font-medium">Dedicated Support Team</h3></div></div></div></div></div></div><script>\n    const GraphicPatterns = document.getElementById("Graphic_patterns"); \n    const PatternTwo = document.querySelector(".pattern-2")\n    const PatternThree = document.querySelector(".pattern-3")\n\n    const AboutObserver = new IntersectionObserver(entries =>{\n        PatternTwo?.classList.toggle("slideInRight", entries[0].isIntersecting)\n        PatternThree?.classList.toggle("slideInLeft", entries[0].isIntersecting)\n    })\n\n    AboutObserver.observe(GraphicPatterns)\n    const ExperienceObs = new IntersectionObserver(entries=>{\n        entries.forEach(entry =>{\n            if(entry.isIntersecting){\n                entry.target.classList.remove("fadeOutDown")\n            }\n            else{\n                entry.target.classList.add("fadeOutDown")\n            }\n        })\n    }, {threshold: 0.5})\n    document.querySelectorAll(".SellExperience").forEach(entry =>{\n        if(entry){\n            ExperienceObs.observe(entry)\n        }\n    })\n<\/script>'])), maybeRenderHead(), addAttribute(`background-image: url(${Shape3.src});`, "style"), addAttribute(`background-image: url(${Shape4.src});`, "style"));
}, "D:/Astro/uthan-site/src/components/Home/about_section/selling_section.astro", void 0);

const $$Astro$A = createAstro();
const $$About$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$About$1;
  return renderTemplate`${maybeRenderHead()}<section class="about-section py-[70px] sm:py-[130px] relative"><div class="static max-w-[1200px] my-0 mx-auto py-0 px-[15px]"><div class="items-center grid sm:grid-cols-2">${renderComponent($$result, "Experience", $$Experience, {})}${renderComponent($$result, "SellingSection", $$SellingSection, {})}</div></div></section><!-- about-section end -->`;
}, "D:/Astro/uthan-site/src/components/Home/about_section/about.astro", void 0);

const $$Astro$z = createAstro();
const $$SellingPonts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$SellingPonts;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4"><div class="w-full sm:w-full"><div class="relative grid grid-cols-[20%_80%] mb-4 md:mb-0"><div class=" inline-block text-3xl"><i class="icon-7"></i></div><div><h5 class="text-lg leading-6 mb-1 font-medium">No Hidden Cost</h5><p>Transparency is the cornerstone of our commitment to you. </p></div></div></div><div class="w-full sm:w-full"><div class="relative grid grid-cols-[20%_80%] block mb-4 md:mb-0"><div class=" inline-block text-3xl"><i class="icon-8"></i></div><div><h5 class="text-lg leading-6 mb-1 font-medium">Dedicated Team</h5><p>When you envision your dream landscape, you need a team that shares your passion. </p></div></div></div><div class="w-full sm:w-full"><div class="relative grid grid-cols-[20%_80%] block mb-4 md:mb-0"><div class=" inline-block text-3xl"><i class="icon-9"></i></div><div><h5 class="text-lg leading-6 mb-1 font-medium">Fresh Environment</h5><p>Crafts outdoor spaces that breathe new life into your surroundings.</p></div></div></div><div class="w-full sm:w-full"><div class="relative grid grid-cols-[20%_80%] block mb-4 md:mb-0"><div class=" inline-block text-3xl"><i class="icon-10"></i></div><div><h5 class="text-lg leading-6 mb-1 font-medium">Available 24/7</h5><p>Landscape needs can arise at any moment. We're here to serve you around the clock. </p></div></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/Home/choose-us/selling-ponts.astro", void 0);

const Shape5 = {"src":"/_astro/shape-5.acf23970.png","width":164,"height":190,"format":"png"};

const Shape6 = {"src":"/_astro/shape-6.a632c71e.png","width":164,"height":189,"format":"png"};

const Shape7 = {"src":"/_astro/shape-7.96a8315b.png","width":1920,"height":54,"format":"png"};

const GardenWorker$1 = {"src":"/_astro/garden-worker.487d461f.jpg","width":640,"height":960,"format":"jpg"};

const $$Astro$y = createAstro();
const $$Index$c = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$Index$c;
  return renderTemplate`<!-- chooseus-section -->${maybeRenderHead()}<section class="chooseus-section relative block"><div class="pattern-layer" id="chooseus_grass"${addAttribute(`background-image: url(${Shape7.src});`, "style")}></div><div id="Chooseus_mainContainer" class="auto-container"><div class="inner-container relative block bg-white rounded-md box_shadow mb-5"><div class="shape-layer"><div class="shape-1 absolute"${addAttribute(`background-image: url(${Shape5.src});`, "style")}></div><div class="shape-2 absolute"${addAttribute(`background-image: url(${Shape6.src});`, "style")}></div></div><div class="grid sm:grid-cols-[40%_60%]"><div class="image-column"><figure class="image-box relative block img_hover_3"><img${addAttribute(GardenWorker$1.src, "src")} loading="lazy" decoding="async" alt=""></figure></div><div class="content-column"><div class="content_block_2"><div class="content-box relative block pt-[40px] pl-[40px] pr-[70px] pb-[30px]"><div class="sec-title mb-10"><span class="sub-title">When People Want a Peace of Mind</span><h2>They Choose Us.</h2></div><div class="text relative block mb-35"><p>Discover tranquility in the beauty of nature. At ${SiteData.business_name}, we understand the significance of peace of mind. Our expert team specializes in crafting landscapes that not only captivate the senses but also create a sanctuary of serenity. When the world feels overwhelming, our harmonious designs bring solace. Choose ${SiteData.business_name} for landscapes that inspire calm and elevate your spirits.</p></div><div class="relative block bg-transparent pt-10">${renderComponent($$result, "SellingPoints", $$SellingPonts, {})}</div></div></div></div></div></div></div></section>`;
}, "D:/Astro/uthan-site/src/components/Home/choose-us/index.astro", void 0);

const Slider = (props) => {
  const { images, darkMask = true, name } = props;
  const slideRef = useRef(new Array());
  let current = 0;
  const RunSlide = async () => {
    let oldSlide = null;
    await setInterval(() => {
      if (typeof document != void 0) {
        oldSlide = slideRef.current[current];
        if (current >= images.length - 1) {
          current = 0;
        } else {
          current++;
        }
        var nextSlide = slideRef.current[current];
        oldSlide?.classList.add("slide-fade-out");
        nextSlide?.classList.remove("slide-fade-out");
        nextSlide?.classList.add("slide-pan-forward");
        setTimeout(() => {
          oldSlide?.classList.remove("slide-pan-forward");
        }, 5e3);
      }
    }, 3e3);
  };
  useEffect(function() {
    RunSlide();
  }, []);
  useEffect(() => {
    if (slideRef.current[0]) {
      slideRef.current[0].classList.remove("slide-fade-out");
      slideRef.current[0].classList.add("slide-pan-forward");
    }
  }, [slideRef.current]);
  return /* @__PURE__ */ jsx("div", { className: `absolute left-0 right-0 top-0 h-full w-full ${darkMask ? "darkMask" : ""}`, children: /* @__PURE__ */ jsx("div", { className: "relative m-0 h-full w-full", children: images && images.length > 0 && images.map((img, index) => /* @__PURE__ */ jsx(Slide, { image: img, index, current, slideRef }, uuid())) }) });
};
const Slide = (props) => {
  const { image, index, current, name, slideRef } = props;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: (element) => slideRef.current.push(element),
      id: `slide-${name}${index}`,
      className: `slideProp slide-fade-out absolute inset-0 block h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat`,
      children: /* @__PURE__ */ jsx("img", { src: image.src, className: "absolute inset-0 h-full w-full  object-cover", alt: `${name} slide` })
    }
  );
};

const Slide1 = {"src":"/_astro/slide-1.7afebc97.webp","width":1920,"height":700,"format":"webp"};

const Slide2 = {"src":"/_astro/slide-2.2ecd2d43.webp","width":1920,"height":700,"format":"webp"};

const Slide3 = {"src":"/_astro/slide-3.ee6705f3.webp","width":1920,"height":700,"format":"webp"};

const $$Astro$x = createAstro();
const $$Index$b = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$Index$b;
  var HeroImages = [];
  try {
    HeroImages.push(Slide1);
    HeroImages.push(Slide2);
    HeroImages.push(Slide3);
  } catch (error) {
    console.log("Error: ", error);
  }
  return renderTemplate`${maybeRenderHead()}<section id="BannerSection" class="relative text-center block bg-cover bg-no-repeat bg-center overflow-hidden min-h-[80vh] w-full scrollToTopIndicator"><div class="pattern-layer absolute left-0 right-0 bottom-[-1px] bg-repeat-x h-[54px] w-full z-[19]"${addAttribute(`background-image:url(${Grass.src})`, "style")}></div>${renderComponent($$result, "TitleSection", $$Index$d, { "title": "Make your vision an ideal landscape come to life", "subtitle": "We help homeowners craft beauty through nature's design", "button_label": "Hire us now", "link": "/contact", "wrapperStyle": "w-11/12 sm:max-w-[1000px] mx-auto" })}${renderComponent($$result, "Slider", Slider, { "images": HeroImages, "darkMask": true, "name": "hero", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/uthan-site/src/components/imageSlider/slider.tsx", "client:component-export": "default" })}</section>`;
}, "D:/Astro/uthan-site/src/components/Home/banner/index.astro", void 0);

const $$Astro$w = createAstro();
const $$ServiceBlock$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$ServiceBlock$1;
  const {
    thumbnail,
    title,
    tagline
  } = Astro2.props;
  const urlTitle = `./service/${title.toLowerCase().replace(/\s+/g, "_")}`;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg service-block"><div class="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms"><div class="inner-box relative block bg-white rounded-[5px] h-[550px]"><div class="image-box relative block mb-[45px]"><figure class="w-[190px] h-[190px] inline-block rounded-full img_hover_1 overflow-hidden"><img${addAttribute(thumbnail.src, "src")}${addAttribute(`${title} thumbnail`, "alt")} class="bg-center w-full h-full object-cover"></figure><div class="absolute overflow-hidden w-[70px] h-[70px] leading-[70px] bg-[#eaf1ee] left-[50%] translate-x-[-50%] bottom-[-46px] icon_overlay text-[#2f7955] rounded-[10px] z-2 mb-[30px] text-[35px] inline-block icon-block"><i class="icon-10"></i></div></div><h3 class="relative block text-[22px] mb-[17px] font-medium"><a href="service-details.html" class="inline-block">${title}</a></h3><p class="mb-[17px]">${tagline}</p><div class="link-box relative cursor-pointer"><a${addAttribute(urlTitle, "href")} class="text-[#b6b7b9] inline-block link-btn"><i class="far fa-long-arrow-right text-[20px]"></i></a><a${addAttribute(urlTitle, "href")} class="overlay-btn font-[16px] absolute font-medium inline-block whitespace-nowrap">Learn More<i class="far fa-long-arrow-right absolute text-[20px]"></i></a></div></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/Home/service-section/service-block.astro", void 0);

const $$Astro$v = createAstro();
const $$Index$a = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Index$a;
  const displayServices = data$2 && data$2.length > 0 ? data$2.slice(0, 4) : [];
  return renderTemplate`<!-- service-section -->${maybeRenderHead()}<section class="service-section relative bg-[#f0f7f7] p-[143px_0px_150px_0px] text-center"><div class="auto-container"><div class="sec-title mb-[35px]"><span class="sub-title">Services</span><h2>What Kind of Services <br>We are Offering</h2></div><div class="grid sm:grid-cols-4 gap-5">${displayServices && displayServices && displayServices.length > 0 && displayServices.map(
    (service) => renderTemplate`${renderComponent($$result, "ServiceBlock", $$ServiceBlock$1, { "thumbnail": service.thumbnail, "title": service.title, "tagline": service.tagline, "link": service.link })}`
  )}</div></div></section><!-- service-section -->`;
}, "D:/Astro/uthan-site/src/components/Home/service-section/index.astro", void 0);

const MasonaryItem = (props) => {
  const {
    image,
    thumbnail,
    altText = "",
    name = "",
    category = ""
  } = props;
  const urlTitle = name.toLowerCase().replace(/\s+/g, "_");
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      layout: true,
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.5 },
      className: "masonry-item small-column all product urban maintanance mx-auto",
      children: /* @__PURE__ */ jsx("div", { className: "project-block-one", children: /* @__PURE__ */ jsxs("div", { className: "inner-block item-center relative mb-8 block", children: [
        /* @__PURE__ */ jsx("figure", { className: "image-box relative block rounded-md w-11/12 h-auto mx-auto sm:w-[370px] sm:h-[290px] overflow-hidden", children: /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            decoding: "async",
            src: thumbnail.src,
            alt: altText,
            className: "object-cover w-full h-full"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "content-box absolute flex text-center transition duration-300", children: /* @__PURE__ */ jsxs("div", { className: "inner relative", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box relative mb-5 inline-block rounded-lg bg-white text-3xl transition-all duration-300", children: /* @__PURE__ */ jsx("i", { className: "icon-10" }) }),
          /* @__PURE__ */ jsx("h3", { className: "mb-3 block text-lg font-medium text-white transition duration-300", children: /* @__PURE__ */ jsx("a", { href: `./projects/${urlTitle}`, className: "inline-block text-white", children: name.toUpperCase() }) }),
          /* @__PURE__ */ jsx("span", { className: "relative block text-white transition duration-300", children: category })
        ] }) })
      ] }) })
    }
  );
};

const Gallery = (props) => {
  const { ProjectGallery } = props;
  const $SelectedCategory = useStore(SelectedCategory);
  var filteredProjects = [];
  if (ProjectGallery && ProjectGallery && ProjectGallery.length > 0) {
    if ($SelectedCategory.toLowerCase() === "all") {
      filteredProjects = [...ProjectGallery];
    } else {
      filteredProjects = ProjectGallery.filter((project) => project.category === $SelectedCategory);
    }
  }
  return /* @__PURE__ */ jsx(AnimatePresence, { children: filteredProjects.map((project) => /* @__PURE__ */ jsx(
    MasonaryItem,
    {
      image: project.image,
      thumbnail: project.thumbnail,
      images: project.images,
      altText: project.altText,
      name: project.name,
      category: project.category
    },
    uuid()
  )) });
};

const Selector = (props) => {
  const $AllCategories = useStore(AllCategories);
  return /* @__PURE__ */ jsx("div", { className: "md:mt-[16px]", children: /* @__PURE__ */ jsx("ul", { className: "filter-tabs filter-btns md:float-right md:mt-[16px]", children: $AllCategories && $AllCategories.length > 0 && $AllCategories.map((item, index) => /* @__PURE__ */ jsx(CategoryLink, { category: item }, uuid())) }) });
};
const CategoryLink = (props) => {
  const { category } = props;
  const $SelectedCategory = useStore(SelectedCategory);
  const ClickEvent = ({ category: category2 }) => {
    if ($SelectedCategory !== category2) {
      SelectedCategory.set(category2);
    }
  };
  return /* @__PURE__ */ jsx(
    "li",
    {
      className: `filter ${$SelectedCategory == category ? "active" : ""}`,
      onClick: () => {
        ClickEvent({ category });
      },
      children: category
    }
  );
};

const $$Astro$u = createAstro();
const $$Index$9 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Index$9;
  const {
    ProjectGallery
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="project-section relative pt-[32px] pb-[32px]" id="project-section"><div class="auto-container mx-auto"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="mb-[12px] text-center sec-title leading-[65px] [&>*]:text-left"><span class="sub-title">Projects</span><h2 class="text-2xl sm:text-[55px]">Check Some Of Our <br>Recent Work.</h2></div>${renderComponent($$result, "Selector", Selector, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/project/gallery/selector.tsx", "client:component-export": "default" })}</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">${renderComponent($$result, "GalleryReact", Gallery, { "ProjectGallery": ProjectGallery, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/project/gallery/gallery-react.tsx", "client:component-export": "default" })}</div></div></section>`;
}, "D:/Astro/uthan-site/src/components/project/gallery/index.astro", void 0);

const GreenTechnologyThumbnail = {"src":"/_astro/thumbnail.ea77e47a.jpg","width":320,"height":290,"format":"jpg"};

const ZenGardenOasisThumbnail = {"src":"/_astro/thumbnail.23e89360.jpg","width":4000,"height":6000,"format":"jpg"};

const EdibleGardenDelightThumbnail = {"src":"/_astro/thumbnail.d4390d6a.jpg","width":5184,"height":3359,"format":"jpg"};

const TranquilWaterFeatureThumbnail = {"src":"/_astro/tranquil-water-feature-thumbnail.9e579de1.jpg","width":320,"height":290,"format":"jpg"};

const VerticalGardenShowcaseThumbnail = {"src":"/_astro/vertical-garden.2fd6d03b.jpg","width":640,"height":480,"format":"jpg"};

const BlossomingFlowerHavenThumbnail = {"src":"/_astro/thumbnail.1a8fb6e6.jpg","width":320,"height":290,"format":"jpg"};

const CozyGardenNookThumbnail = {"src":"/_astro/cozy-garden-thumbnail.10b6f6ca.jpg","width":640,"height":427,"format":"jpg"};

const GreenTechnologyImage1 = {"src":"/_astro/picture-1.5158a0d6.jpg","width":640,"height":426,"format":"jpg"};

const GreenTechnologyImage2 = {"src":"/_astro/picture-2.25234cff.jpg","width":640,"height":480,"format":"jpg"};

const GreenTechnologyImage3 = {"src":"/_astro/picture-3.7ff45ab6.jpg","width":640,"height":480,"format":"jpg"};

const ZenGardenOasisImage1 = {"src":"/_astro/picture-1.ff676828.jpg","width":640,"height":960,"format":"jpg"};

const ZenGardenOasisImage2 = {"src":"/_astro/picture-2.0ca4cf00.jpg","width":640,"height":960,"format":"jpg"};

const ZenGardenOasisImage3 = {"src":"/_astro/picture-3.7b84dd9d.jpg","width":640,"height":958,"format":"jpg"};

const ZenGardenOasisImage4 = {"src":"/_astro/picture-4.57232360.jpg","width":640,"height":360,"format":"jpg"};

const ZenGardenOasisImage5 = {"src":"/_astro/picture-5.66a26ba7.jpg","width":640,"height":480,"format":"jpg"};

const SustainableGardenRetreatImage1 = {"src":"/_astro/apples.ba3bd921.jpg","width":640,"height":415,"format":"jpg"};

const SustainableGardenRetreatImage2 = {"src":"/_astro/berry-branch.9f4fc5f5.jpg","width":640,"height":427,"format":"jpg"};

const SustainableGardenRetreatImage3 = {"src":"/_astro/grapes.6eb68bd9.jpg","width":640,"height":427,"format":"jpg"};

const SustainableGardenRetreatImage4 = {"src":"/_astro/planting.eacc751b.jpg","width":640,"height":427,"format":"jpg"};

const SustainableGardenRetreatImage5 = {"src":"/_astro/tangerine.5fef9a6d.jpg","width":640,"height":427,"format":"jpg"};

const BlossomingFlowerHavenImage1 = {"src":"/_astro/picture-1.2bf99805.jpg","width":640,"height":960,"format":"jpg"};

const BlossomingFlowerHavenImage2 = {"src":"/_astro/picture-2.82d21cc9.jpg","width":640,"height":960,"format":"jpg"};

const BlossomingFlowerHavenImage3 = {"src":"/_astro/picture-3.1caa462c.jpg","width":640,"height":853,"format":"jpg"};

const BlossomingFlowerHavenImage4 = {"src":"/_astro/picture-4.e10292e0.jpg","width":640,"height":960,"format":"jpg"};

const BlossomingFlowerHavenImage5 = {"src":"/_astro/picture-5.aa3e9b2c.jpg","width":640,"height":480,"format":"jpg"};

const projects = [
		{
			"name": "Green Technology",
			"category": "Planting",
			"altText": "Green Technology",
			"thumbnail": GreenTechnologyThumbnail,
            "images": [GreenTechnologyImage1, GreenTechnologyImage2, GreenTechnologyImage3],
			"description": "Immerse yourself in a modern landscape where technology and nature converge. 'Green Technology' showcases a harmonious blend of innovative eco-friendly features and lush plantings. Experience a sustainable oasis that reflects our commitment to the environment.",
			"challenge": "Integrating modern technology seamlessly with natural elements presented a unique challenge. Striking the balance between innovation and aesthetics required careful planning.",
			"solution": "Our team approached 'Green Technology' with meticulous attention, leveraging smart irrigation systems, solar-powered lighting, and sustainable materials. The result? A harmonious coexistence of technology and nature that enhances both the environment and your lifestyle.",
						"client": "TechScape Innovations",
			"startDate": "2018-05-15",
			"endDate": "2018-09-30"
		},
		{
			"name": "Zen Garden Oasis",
			"category": "Landscaping",
			"altText": "Zen Garden Oasis",
			"thumbnail": ZenGardenOasisThumbnail,
            "images": [ZenGardenOasisImage1, ZenGardenOasisImage2, ZenGardenOasisImage3, ZenGardenOasisImage4, ZenGardenOasisImage5],
			"description": "Discover tranquility in the heart of your property with our Zen Garden Oasis. This meticulously crafted space invites you to unwind and find balance amidst carefully arranged rocks, calming water features, and thoughtfully chosen plant life. Elevate your senses and embark on a journey of serenity.",
			"challenge": "Creating an authentic Zen atmosphere demanded meticulous detail, from selecting the right rocks to achieving the ideal water flow for a serene ambiance.",
			"solution": "Our experts studied traditional Zen garden principles and artfully incorporated them into 'Zen Garden Oasis.' Every rock, every pebble, and every plant was placed with intention, ensuring a tranquil haven that transports you to a state of peaceful reflection.",
			"client": "ZenLife Retreats",
			"startDate": "2017-08-10",
			"endDate": "2017-12-20"
		},
		{
			"name": "Edible Garden Delight",
			"category": "Gardening",
			"altText": "Edible Garden Delight",
			"thumbnail": EdibleGardenDelightThumbnail,
            "images": [SustainableGardenRetreatImage1, SustainableGardenRetreatImage2, SustainableGardenRetreatImage3, SustainableGardenRetreatImage4, SustainableGardenRetreatImage5],
			"description": "'Edible Garden Delight' brings the joy of homegrown goodness to your doorstep. From vibrant berry branches to juicy tangerines, this garden is a feast for the senses. Experience the satisfaction of harvesting your own produce while surrounded by beauty and nature's bounty.",
			"challenge": "Balancing the aesthetic appeal of a garden with the practicality of an edible space required careful selection and arrangement of plants.",
			"solution": "'Edible Garden Delight' was born from the synergy of beauty and function. Our team expertly blended fruit-bearing trees, bushes, and vines with vibrant ornamental plants. The result is an edible garden that's not only a feast for the eyes but also provides homegrown nourishment.",
			"client": "FreshHarvest Estates",
			"startDate": "2019-03-21",
			"endDate": "2019-07-15"
		},
		{
			"name": "Tranquil Water Feature",
			"category": "Landscaping",
			"altText": "Tranquil Water Feature",
			"thumbnail": TranquilWaterFeatureThumbnail,
			"description": "Embrace the soothing melody of flowing water with our 'Tranquil Water Feature.' This understated yet captivating addition elevates any landscape. Immerse yourself in the gentle ambiance created by the harmonious combination of water and nature.",
			"challenge": "Designing a water feature that seamlessly integrates with the existing landscape while maintaining a soothing atmosphere presented design and logistical challenges.",
			"solution": "Our team meticulously assessed the terrain and existing elements to create a water feature that complements its surroundings. The 'Tranquil Water Feature' was carefully positioned, ensuring the natural flow of water harmonizes with the overall landscape, enhancing both aesthetics and ambiance.",
			"client": "Serene Escapes",
			"startDate": "2016-06-05",
			"endDate": "2016-09-15"		
		},
		{
			"name": "Vertical Garden Showcase",
			"category": "Planting",
			"altText": "Vertical Garden Showcase",
			"thumbnail": VerticalGardenShowcaseThumbnail,
			"description":"Elevate your space to new heights with our 'Vertical Garden Showcase.' This innovative design transforms vertical surfaces into living works of art. Lush vegetation cascades from walls, merging aesthetics with nature in a unique and captivating way.",
			"challenge": "Developing a thriving vertical garden required overcoming issues such as proper irrigation, plant selection, and ensuring the health of vegetation.",
			"solution": "We took a comprehensive approach to the 'Vertical Garden Showcase.' Our team selected plants with vertical growth habits, implemented efficient irrigation systems, and paid special attention to soil quality. The result is a captivating vertical garden that flourishes in even the most unexpected spaces.",
			"client": "GreenScape Innovations",
			"startDate": "2018-09-01",
			"endDate": "2018-12-10"
		},
		{
			"name": "Sustainable Garden Retreat",
			"category": "Sustainability",
			"altText": "Sustainable Garden Retreat",
			"thumbnail": BlossomingFlowerHavenThumbnail,
            "images": [
                SustainableGardenRetreatImage1,
                SustainableGardenRetreatImage2,
                SustainableGardenRetreatImage3,
                SustainableGardenRetreatImage4,
                SustainableGardenRetreatImage5,
            ],
			"description": "'Sustainable Garden Retreat' is more than just a garden – it's a commitment to a greener future. Explore an array of thriving plantings and eco-conscious features that exemplify our dedication to sustainability. Experience the beauty of nature while leaving a smaller footprint.",
			"challenge": "Balancing sustainability with aesthetic appeal required sourcing eco-friendly materials and implementing responsible design practices.",
			"solution": "The 'Sustainable Garden Retreat' is a testament to our commitment to the environment. We sourced reclaimed materials, utilized water-saving features, and designed a landscape that thrives in its ecosystem. The garden stands as a living example of sustainable living that's beautiful, responsible, and enduring.",
			"client": "EcoHaven Retreats",
			"startDate": "2019-02-12",
			"endDate": "2019-06-30"
		},
		{
			"name": "Blossoming Flower Haven",
			"category": "Gardening",
			"altText": "Blossoming Flower Haven",
			"thumbnail": BlossomingFlowerHavenThumbnail,
            "images": [
                BlossomingFlowerHavenImage1,
                BlossomingFlowerHavenImage2,
                BlossomingFlowerHavenImage3,
                BlossomingFlowerHavenImage4,
                BlossomingFlowerHavenImage5,
            ],
			"description": "'Blossoming Flower Haven' is a symphony of colors and scents that ignite the senses. From delicate blossoms to luscious fruits, this garden is a celebration of life's vibrant beauty. Immerse yourself in a world where every corner blooms with nature's finest.",
			"challenge": "Curating a garden that showcases a diverse range of blossoming flowers while maintaining year-round appeal required careful plant selection and strategic design.",
			"solution": "'Blossoming Flower Haven' is the result of our horticultural expertise. Our team chose a mix of flowering plants with varying bloom times, ensuring a continuous display of colors and scents. By pairing annuals and perennials, we created a garden that's ever-changing yet consistently stunning.",
			"client": "BloomNest Estates",
			"startDate": "2015-07-18",
			"endDate": "2015-11-25"
		},
		{
			"name": "Cozy Garden Nook",
			"category": "Landscaping",
			"altText": "Cozy Garden Nook",
			"thumbnail": CozyGardenNookThumbnail,
			"description": "Cozy Garden Nook is a retreat designed for intimacy and relaxation. Nestled within carefully curated greenery, this inviting space offers a tranquil escape from the world. Embrace solitude or share cherished moments in this serene corner of nature.",
			"challenge": "Designing an intimate space that fosters relaxation within a larger landscape required creating a seamless transition while maintaining a sense of privacy.",
			"solution": "Our team crafted 'Cozy Garden Nook' with an artistic arrangement of vegetation and hardscape elements. Through the strategic placement of trees, shrubs, and structures, we carved out a private enclave that invites you to unwind and connect with nature.",
			"client": "Haven Retreats",
			"startDate": "2017-04-08",
			"endDate": "2017-08-15"
		}
	];

const projects$1 = projects;

const CountTo100 = (props) => {
  const { number } = props;
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < number) {
        setCount(count + 1);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [count]);
  useEffect(() => {
    return () => {
      setCount(0);
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "count-outer relative block text-4xl text-[35px] sm:text-[70px] leading-none text-white font-['Prata',serif]", children: /* @__PURE__ */ jsx(
    "span",
    {
      className: "text-white",
      children: count
    }
  ) });
};

const $$Astro$t = createAstro();
const $$CounterBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$CounterBlock;
  const {
    label,
    number,
    icon
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full md:w-1/4"><div class="counter-block-one animate__animated animate__slideInUp"><div class="rounded-[5px] block sm:pt-[70px] sm:pb-[60px] relative bg-transparent grid sm:grid-cols-2"><div class="text-[40px] text-theme-color w-[75px]  h-[75px] leading-[40px] block bg-white rounded-full relative mx-auto"><i${addAttribute(`icon-${icon} iconStyle`, "class")}></i></div><div class="CounterWrapper text-center sm:text-left pt-5 sm:pt-0">${renderComponent($$result, "Counter", CountTo100, { "number": number, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/Home/funfact_section/counter.tsx", "client:component-export": "default" })}<h6 class="relative block mt-2 text-base text-white !font-semibold whitespace-nowrap">${label}</h6></div></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/Home/funfact_section/counter-block.astro", void 0);

const BackImg = {"src":"/_astro/funfact-bg.bdbc30eb.jpg","width":1280,"height":853,"format":"jpg"};

const $$Astro$s = createAstro();
const $$Index$8 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Index$8;
  return renderTemplate`${maybeRenderHead()}<section id="FunFactSection" class="funfact-section relative py-10 sm:pt-[140px] sm:pb-[140px] block"${addAttribute(`background-image: url(${BackImg.src})`, "style")}><div class="container mx-auto"><div class="text-center mb-65"><span class="!text-white relative z-10 font-['Prata',serif] font-bold sm:text-[25px]">Fun Facts</span><h2 class="mt-3 text-white block text-[25px] sm:text-[36px] sm:text-[55px] leading-[44px] sm:leading-[65px] font-['Prata'] relative font-[400]">We have Some Number of Great <br>Achievements</h2></div><div class="flex flex-wrap">${renderComponent($$result, "CounterBlock", $$CounterBlock, { "label": "Garden Complete", "number": 90, "icon": 13 })}${renderComponent($$result, "CounterBlock", $$CounterBlock, { "label": "Satisfied Clients", "number": 216, "icon": 16 })}${renderComponent($$result, "CounterBlock", $$CounterBlock, { "label": "Experienced Staff", "number": 35, "icon": 6 })}${renderComponent($$result, "CounterBlock", $$CounterBlock, { "label": "Awards Win", "number": 6, "icon": 15 })}</div></div></section>`;
}, "D:/Astro/uthan-site/src/components/Home/funfact_section/index.astro", void 0);

const $$Astro$r = createAstro();
const $$MemberPanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$MemberPanel;
  const {
    profile_image,
    profile_alt_text = "profile_image",
    name,
    designation,
    link,
    facebook,
    twitter,
    google
  } = Astro2.props;
  const member_page = link ? link : `./team/${name.toLowerCase().replace(/\s+/g, "_")}`;
  return renderTemplate`${maybeRenderHead()}<div class=""><div class="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms"><div class="inner-box relative block pl-[30px] pt-[30px] pr-[30px] pb-[25px] team-block rounded-lg"><figure class="image-box p_relative d_block b_radius_5"><a${addAttribute(member_page, "href")}><img${addAttribute(profile_image.src, "src")}${addAttribute(profile_alt_text, "alt")}></a></figure><div class="lower-content p_relative d_block pt_30"><div class="share-box absolute text-center"><a${addAttribute(member_page, "href")} class="inline-block text-white text-[14px] rounded-[5px] bg-[#2f7955] hov_color w-[45px] h-[45px] leading-[45px]"><i class="fas fa-share-alt relative ShareIcon"></i></a>${(facebook || twitter || google) && renderTemplate`<ul class="share-links absolute clearfix">${facebook && renderTemplate`<li class="relative block mb-[10px]"><a${addAttribute(facebook, "href")} class="text-[16px] rounded-[5px] bg-white inline-block hov_bg w-[10px] h-[10px]"><i class="fab fa-facebook-f"></i></a></li>`}${twitter && renderTemplate`<li class="relative block mb-[10px]"><a${addAttribute(twitter, "href")} class="text-[16px] rounded-[5px] bg-white inline-block hov_bg w-[10px] h-[10px]"><i class="fab fa-twitter"></i></a></li>`}${google && renderTemplate`<li class="relative block mb-[10px]"><a${addAttribute(google, "href")} class="text-[16px] rounded-[5px] bg-white inline-block hov_bg w-[10px] h-[10px]"><i class="fab fa-google-plus-g"></i></a></li>`}</ul>`}</div><h3 class="p_relative d_block fs_22 fw_medium mb_5"><a${addAttribute(member_page, "href")} class="!hover:text-[#2f7955] hover:outline-none inline-block text-[22px] font-500">${name}</a></h3><span class="designation p_relative d_block fs_15">${designation}</span></div></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/Home/team_section/member_panel.astro", void 0);

const person3 = {"src":"/_astro/person-3.b6f89cdf.jpg","width":1024,"height":1024,"format":"jpg"};

const person3$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: person3
}, Symbol.toStringTag, { value: 'Module' }));

const person2 = {"src":"/_astro/person-2.ec2209c4.jpg","width":1024,"height":1024,"format":"jpg"};

const person2$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: person2
}, Symbol.toStringTag, { value: 'Module' }));

const person1 = {"src":"/_astro/person-1.df2dc66c.jpg","width":1024,"height":1024,"format":"jpg"};

const person1$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: person1
}, Symbol.toStringTag, { value: 'Module' }));

const members = [
		{
			"name": "Penny T",
			"designation": "Garden Experts",
			"phone": 1747213222, 
			"facebook": "http://www.facebook.com",
			"email": "PennyT@gmail.com", 
			"twitter": "http://wwww.twitter.com",
			"google": "http://www.google.com",
			"profile_image": person3,
			"biography": "From a tender age, Penny exhibited an unwavering fascination for the world around her. While other children played indoors, Penny could often be found exploring the nooks and crannies of her family's backyard, discovering the wonder of life in every plant, flower, and critter. It was during these formative years that her lifelong passion for gardening was kindled."
		},
		{
			"name": "Sid Wasserman",
			"designation": "Garden Experts",
			"phone": 1747512336, 
			"email": "S.Wasswerdude@gmail.com", 
			"link": "./team/sid_wasserman",
			"facebook": "http://www.facebook.com",
			"twitter": "http://wwww.twitter.com",
			"google": "http://www.google.com",
			"profile_image": person2,
			"biography": "Sid's journey led him to pursue a degree in Landscape Architecture from the prestigious Harmony University. Armed with both theoretical knowledge and a strong design sensibility, Sid's designs are more than just gardens; they are symphonies conducted with the rhythm of colors, textures, and spatial arrangements. His education equipped him not only to cultivate gardens but to craft immersive experiences that resonate with the human soul."
		},
		{
			"name": "Bob Reinstein",
			"designation": "Garden Experts",
			"email": "B.Reinstein@gmail.com", 
			"phone": 17478945567, 
			"link": "./team/bob_reintein",
			"facebook": "http://www.facebook.com",
			"twitter": "http://wwww.twitter.com",
			"google": "http://www.google.com",
			"profile_image": person1,
			"biography": "Bob's signature lies in his ability to transform even the most modest spaces into breathtaking spectacles of elegance. His designs are not just gardens; they are living works of art, carefully curated compositions of color, texture, and form. Through skillful plant selection and an innate understanding of design principles, Bob's gardens are masterpieces that enchant the senses and soothe the soul."
		}
	];

const TeamMembers = members;

const $$Astro$q = createAstro();
const $$Index$7 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Index$7;
  return renderTemplate`<!-- team-section -->${maybeRenderHead()}<section class="team-section relative sec-pad"><div class="auto-container"><div class="sec-title text-center mb-[45px]"><span class="sub-title">Experts</span><h2>We Handle Everything <br>for You!</h2></div><div class="grid sm:grid-cols-3 sm:gap-5">${TeamMembers && TeamMembers.length > 0 && TeamMembers.map(
    (member) => renderTemplate`${renderComponent($$result, "MemberPanel", $$MemberPanel, { ...member })}`
  )}</div></div></section><!-- team-section end -->`;
}, "D:/Astro/uthan-site/src/components/Home/team_section/index.astro", void 0);

const $$Astro$p = createAstro();
const $$Index$6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Index$6;
  const {
    BackImg,
    title,
    text = "We Provide Hassle-Free Garden Solutions.",
    CTA_link,
    btnText = "Learn How  We Do?"
  } = Astro2.props;
  return renderTemplate`<!-- cta-section -->${maybeRenderHead()}<section class="cta-section relative pt-[140px] pb-[140px]"${addAttribute(`background-image: url(${BackImg.src});`, "style")}><div class="auto-container"><div class="relative flex flex-col gap-1 sm:flex-row clearfix"><div class="sec-title light float-left"><span class="sub-title">${title.toUpperCase()}</span><h2 class="">${text}</h2></div><div class="btn-box float-right mt-[50px] whitespace-nowrap"><a${addAttribute(CTA_link, "href")} class="theme-btn btn-one">${btnText}<i class="far fa-long-arrow-right"></i></a></div></div></div></section><!-- cta-section end -->`;
}, "D:/Astro/uthan-site/src/components/parallax_banner/index.astro", void 0);

const $$Astro$o = createAstro();
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Index$5;
  const {
    postSelection
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="my-5 relative max-w-[1200px] mx-auto px-[15px]"><div class="sec-title mb-[55px] text-center" id="blog-section"><span class="sub-title relative block text-[18px] leading-[28px] font-['Monserrat'] font-bold mb-[16px] uppercase">Articles</span><h2 class="block text-[36px] leading-[44px] sm:text-[55px] sm:leading-[65px] font-['Prata'] relative font-medium text-[#141417] m-0">Stay Update With <br>${SiteData.business_name}</h2></div>${postSelection && postSelection.length > 0 ? renderTemplate`<div class="grid sm:grid-cols-3 gap-5">${postSelection.map(
    async (post) => {
      return renderTemplate`${renderComponent($$result, "BlogPreview", $$PreviewLink, { ...post, "thumbnail": post.featured_image })}`;
    }
  )}</div>` : renderTemplate`<p class="text-center text-base mx-auto my-10">There are currently not blog posts to show.</p>`}</div>`;
}, "D:/Astro/uthan-site/src/components/blogSection/index.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$n = createAstro();
const prerender$c = true;
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Index$4;
  var assets = [];
  var allPosts = [];
  try {
    assets = await Astro2.glob(/* #__PURE__ */ Object.assign({"../assets/uploads/edible-landscaping.webp": () => import('./edible-landscaping_1da9ec80.mjs'),"../assets/uploads/perma-culture.webp": () => import('./perma-culture_278338af.mjs'),"../assets/uploads/pots.jpg": () => import('./pots_9c82a4e2.mjs'),"../assets/uploads/stones.jpg": () => import('./stones_74ff20a6.mjs'),"../assets/uploads/trees.jpg": () => import('./trees_d38b2537.mjs'),"../assets/uploads/vertical_garden.webp": () => import('./vertical_garden_769cb061.mjs'),"../assets/uploads/xeriscaping.webp": () => import('./xeriscaping_1a5ae2de.mjs')}), () => "../assets/uploads/*");
    allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./pages/post-1_275a72cb.mjs').then(n => n.a),"./posts/post-3.md": () => import('./pages/post-3_4c59387e.mjs'),"./posts/post-4.md": () => import('./pages/post-4_073579d1.mjs'),"./posts/post-6.md": () => import('./pages/post-6_409cc3db.mjs'),"./posts/post-7.md": () => import('./pages/post-7_1a89e2e9.mjs'),"./posts/post-8.md": () => import('./pages/post-8_d2a044d1.mjs'),"./posts/post-9.md": () => import('./pages/post-9_88f34176.mjs')}), () => "./posts/*.md");
  } catch (error) {
    console.log("error: ", error);
  }
  var sortedPosts = retrieveRecentImages(allPosts, assets, 3);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<script>\n	if (window.netlifyIdentity) {\n		window.netlifyIdentity.on('init', (user) => {\n			if (!user) {\n				window.netlifyIdentity.on('login', () => {\n					document.location.href = '/admin/'\n				})\n			}\n		})\n	}\n<\/script>"])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Natural Patterns - Home Page", "customDescription": SiteData.description }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "BannerSection", $$Index$b, {})}${renderComponent($$result2, "AboutSection", $$About$1, {})}${renderComponent($$result2, "ChooseUsSection", $$Index$c, {})}${renderComponent($$result2, "ServiceSection", $$Index$a, {})}${renderComponent($$result2, "FunFactSection", $$Index$8, {})}${renderComponent($$result2, "ProjectSection", $$Index$9, { "ProjectGallery": projects$1 })}${renderComponent($$result2, "TeamSection", $$Index$7, {})}${renderComponent($$result2, "Testimonial", $$Index$e, { "testimonials": data$3 })}${renderComponent($$result2, "ParallaxBanner", $$Index$6, { "BackImg": BackImg$1, "title": "Do you have a project in mind?", "text": "We Provide Hassle-Free Garden Solutions. Let's connect!", "CTA_link": "/contact", "btnText": "Contact Us" })}${renderComponent($$result2, "BlogSection", $$Index$5, { "postSelection": sortedPosts })}` }));
}, "D:/Astro/uthan-site/src/pages/index.astro", void 0);

const $$file$c = "D:/Astro/uthan-site/src/pages/index.astro";
const $$url$c = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$4,
    file: $$file$c,
    prerender: prerender$c,
    url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$m = createAstro();
const prerender$b = true;
const $$MessageSent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$MessageSent;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Message sent" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="mx-auto mt-[20px] block"><p class="text-2xl text-center font-bold">Your message has successfully been sent.</p><a href="/"><button class="fancyButton box_shadow mx-auto my-[20px]">Go Home</button></a></div>` })}`;
}, "D:/Astro/uthan-site/src/pages/message_sent.astro", void 0);

const $$file$b = "D:/Astro/uthan-site/src/pages/message_sent.astro";
const $$url$b = "/message_sent";

const message_sent = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$MessageSent,
    file: $$file$b,
    prerender: prerender$b,
    url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$l = createAstro();
const $$ImageGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$ImageGrid;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="image-grid" class="flex flex-row flex-wrap gap-5 mt-10 [&>div]:w-[250px] [&>div]:h-[250px] xm:[&>div]:w-[330px] xm:[&>div]:h-[330px]">${images && images.length > 0 && images.map(
    (image, index) => renderTemplate`${renderComponent($$result, "ImageComponent", $$ImageComponent, { "image": image, "altText": `image-${index + 1}` })}`
  )}</div>`;
}, "D:/Astro/uthan-site/src/components/project_page_component/image_grid.astro", void 0);

const $$Astro$k = createAstro();
const $$DescriptionSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$DescriptionSection;
  const { description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="my-10"><h2>Project Description</h2><div>${description}</div></section>`;
}, "D:/Astro/uthan-site/src/components/project_page_component/description_section.astro", void 0);

const $$Astro$j = createAstro();
const $$ChallengeSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$ChallengeSection;
  const {
    challenge,
    image
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="my-10"><h2>Project Challenge</h2><div class="flex flex-col-reverse sm:flex-row sm:gap-10"><div class="grow basis-80 justify-center">${challenge}</div>${image && renderTemplate`${renderComponent($$result, "ImageComponent", $$ImageComponent, { "image": image, "altText": "challenge project" })}`}</div></section>`;
}, "D:/Astro/uthan-site/src/components/project_page_component/challenge_section.astro", void 0);

const $$Astro$i = createAstro();
const $$SolutionSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$SolutionSection;
  const {
    solution,
    image
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="my-10"><h2>Project Solution</h2><div class="flex flex-col sm:flex-row sm:gap-10">${image && renderTemplate`${renderComponent($$result, "ImageComponent", $$ImageComponent, { "image": image, "altText": "challenge project" })}`}<div class="grow basis-80">${solution}</div></div></section>`;
}, "D:/Astro/uthan-site/src/components/project_page_component/solution_section.astro", void 0);

const $$Astro$h = createAstro();
const $$ProjectInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ProjectInfo;
  const {
    category,
    client,
    startDate,
    endDate
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg border-[1px] border-slate-300 w-full mx-auto xl:w-[400px] mt-5 sm:mt-10"><div class="w-10/12 m-auto py-10 [&>*]:mb-5 [&>*]:font-['Montserrat',sans-serif]"><h3 class="font-['Prata',serif] block text-[30px] mb-[12px]">Project Info</h3>${category && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div><b>Category : </b>${category}</div><hr class="border-[1px] bg-slate-300 w-full">` })}`}${client && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div><b>Client : </b>${client}</div><hr class="border-[1px] bg-slate-300 w-full">` })}`}${startDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div><b>Start : </b>${startDate}</div><hr class="border-[1px] bg-slate-300 w-full">` })}`}${endDate && renderTemplate`<div><b>End : </b>${endDate}</div>`}</div></div>`;
}, "D:/Astro/uthan-site/src/components/project_page_component/project_info.astro", void 0);

const $$Astro$g = createAstro();
const prerender$a = true;
async function getStaticPaths$6() {
  return projects$1.map((project) => {
    const urlTitle = project.name.toLowerCase().replace(/\s+/g, "_");
    return {
      params: {
        project_name: urlTitle
      },
      props: {
        name: project.name,
        category: project.category,
        altText: project.altText,
        thumbnail: project.thumbnail,
        images: project.images,
        description: project.description,
        client: project.client,
        challenge: project.challenge,
        solution: project.solution,
        startDate: project.startDate,
        endDate: project.endDate
      }
    };
  });
}
const $$projectName = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$projectName;
  Astro2.params;
  const {
    name,
    category,
    altText,
    thumbnail,
    images,
    description,
    client,
    challenge,
    solution,
    startDate,
    endDate
  } = Astro2.props;
  var imageArr = images && images.length > 0 ? [...images] : [];
  var gridImages = images ? images.slice(0, 3) : [];
  const challenge_image = imageArr.pop();
  const solution_image = imageArr.pop();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": name, "CTA_Banner": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$f, { "title": name })}${maybeRenderHead()}<div class="w-11/12 mx-auto">${images && images.length >= 3 && renderTemplate`${renderComponent($$result2, "ImageGrid", $$ImageGrid, { "images": gridImages })}`}<div class="flex flex-col-reverse grow xl:flex-row gap-10"><div id="Project-left-column">${renderComponent($$result2, "DescriptionSection", $$DescriptionSection, { "description": description })}${renderComponent($$result2, "ChallengeSection", $$ChallengeSection, { "challenge": challenge, "image": challenge_image ? challenge_image : null })}${renderComponent($$result2, "SolutionSection", $$SolutionSection, { "solution": solution, "image": solution_image ? solution_image : null })}</div><div id="project-right-column relative">${renderComponent($$result2, "ProjectInfo", $$ProjectInfo, { "category": category, "client": client, "startDate": startDate, "endDate": endDate })}<div class="hidden xl:block overflow-hidden h-auto w-11/12 mt-10 z-1"><img${addAttribute(Shape3.src, "src")} class="w-full h-full object-cover" alt="shape-23"></div></div></div></div>` })}`;
}, "D:/Astro/uthan-site/src/pages/projects/[project_name].astro", void 0);

const $$file$a = "D:/Astro/uthan-site/src/pages/projects/[project_name].astro";
const $$url$a = "/projects/[project_name]";

const _project_name_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$projectName,
    file: $$file$a,
    getStaticPaths: getStaticPaths$6,
    prerender: prerender$a,
    url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro();
const $$ServiceBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ServiceBlock;
  const {
    thumbnail,
    title,
    tagline,
    link
  } = Astro2.props;
  const urlTitle = `../../services/${title.toLowerCase().replace(/\s+/g, "_")}`;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg service-block h-full"><div class="service-block-one wow fadeInUp h-full animated" data-wow-delay="00ms" data-wow-duration="1500ms"><div class="inner-box relative block bg-white rounded-[5px] h-full py-[30px] px-1 sm:px-10 box_shadow grow"><div class="image-box relative block mb-[45px]"><figure class="w-[190px] h-[190px] inline-block rounded-full img_hover_1 overflow-hidden"><img loading="lazy" decoding="async"${addAttribute(thumbnail.src, "src")}${addAttribute(`${title} thumbnail`, "alt")} class="bg-center w-full h-full object-cover"></figure><div class="absolute overflow-hidden w-[70px] h-[70px] leading-[70px] bg-[#eaf1ee] left-[50%] translate-x-[-50%] bottom-[-46px] icon_overlay text-[#2f7955] rounded-[10px] z-2 mb-[30px] text-[35px] inline-block icon-block"><i class="icon-10"></i></div></div><h3 class="relative block text-[22px] mb-[17px] font-medium"><a${addAttribute(urlTitle, "href")} class="inline-block">${title}</a></h3><p class="mb-[17px]">${tagline}</p><div class="link-box cursor-pointer bottom-[15px] left-[50%] translate-x-[-50%] absolute"><a${addAttribute(link, "href")} class="text-[#b6b7b9] inline-block link-btn"><i class="far fa-long-arrow-right text-[20px]"></i></a><a${addAttribute(link, "href")} class="overlay-btn font-[16px] absolute font-medium inline-block whitespace-nowrap">Learn More<i class="far fa-long-arrow-right absolute text-[20px]"></i></a></div></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/serviceComponent/service-block.astro", void 0);

const LeftLeaf = {"src":"/_astro/shape-35.901717a1.png","width":107,"height":100,"format":"png"};

const RightLeaf = {"src":"/_astro/shape-34.aadd7b1f.png","width":107,"height":100,"format":"png"};

const $$Astro$e = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Index$3;
  const {
    serviceList,
    title,
    subtitle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="service-section relative p-[100px_0px_150px_0px] text-center"><div class="auto-container"><img loading="lazy" decoding="async"${addAttribute(LeftLeaf.src, "src")} alt="left leaf" class="hidden sm:block absolute left-0 right-auto z-0 sm:w-[150px] h-auto"><img loading="lazy" decoding="async"${addAttribute(RightLeaf.src, "src")} alt="right leaf" class="hidden sm:block absolute right-0 left-auto z-0 sm:w-[150px] h-auto"><div class="sec-title mb-[35px]">${title && renderTemplate`<span class="sub-title">${title}</span>`}<h2>What Kind of Services <br>We are Offering</h2></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 h-fit">${serviceList && serviceList.length > 0 && serviceList.map(
    (service) => renderTemplate`${renderComponent($$result, "ServiceBlock", $$ServiceBlock, { "thumbnail": service.thumbnail, "title": service.title, "tagline": service.tagline, "link": service.link })}`
  )}</div></div></section>`;
}, "D:/Astro/uthan-site/src/components/serviceComponent/index.astro", void 0);

const $$Astro$d = createAstro();
const prerender$9 = true;
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Services", "CTA_Banner": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$f, { "title": "Services" })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "ServiceSection", $$Index$3, { "title": "Transforming Outdoor Dreams into Breathtaking Realities", "subtitle": "Your Landscape, Our Expertise", "serviceList": data$2 })}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/services/index.astro", void 0);

const $$file$9 = "D:/Astro/uthan-site/src/pages/services/index.astro";
const $$url$9 = "/services";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$9,
    prerender: prerender$9,
    url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro();
const prerender$8 = true;
async function getStaticPaths$5() {
  return data$2.map((service) => {
    const urlTitle = service.title.toLowerCase().replace(/\s+/g, "_");
    return {
      params: {
        type: urlTitle
      },
      props: {
        title: service.title,
        tagline: service.tagline,
        description: service.description,
        promise: service.promise,
        features: service.features,
        image1: service.image1
      }
    };
  });
}
const $$type = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$type;
  Astro2.params;
  const {
    title,
    tagline,
    description,
    promise,
    features,
    image1
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": title, "CTA_Banner": true, "data-astro-cid-dd6q6tbv": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$f, { "title": title, "subtitle": tagline, "data-astro-cid-dd6q6tbv": true })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, { "data-astro-cid-dd6q6tbv": true }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col sm:flex-row sm:gap-10" data-astro-cid-dd6q6tbv><div class="grow-0" data-astro-cid-dd6q6tbv>${description && renderTemplate`<section class="my-10" data-astro-cid-dd6q6tbv><h3 class="text-[30px] mb-5" data-astro-cid-dd6q6tbv>Description</h3><div data-astro-cid-dd6q6tbv>${description}</div></section>`}${features && renderTemplate`<section class="my-10" data-astro-cid-dd6q6tbv><h3 class="text-[30px] mb-5" data-astro-cid-dd6q6tbv>Features</h3><ul class="list-disc list-inside" data-astro-cid-dd6q6tbv>${features.map((feature) => renderTemplate`<li class="list-disc list-inside" data-astro-cid-dd6q6tbv>${feature}</li>`)}</ul></section>`}</div>${image1 && renderTemplate`${renderComponent($$result3, "ImageComponent", $$ImageComponent, { "image": image1, "altText": title, "customStyle": "w-auto h-auto overflow-hidden my-10 rounded-lg mx-auto grow", "data-astro-cid-dd6q6tbv": true })}`}</div>${promise && renderTemplate`<section class="my-10" data-astro-cid-dd6q6tbv><h3 class="text-[30px] mb-5" data-astro-cid-dd6q6tbv>What we promise to deliver</h3><div data-astro-cid-dd6q6tbv>${promise}</div></section>`}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/services/[type].astro", void 0);

const $$file$8 = "D:/Astro/uthan-site/src/pages/services/[type].astro";
const $$url$8 = "/services/[type]";

const _type_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$type,
    file: $$file$8,
    getStaticPaths: getStaticPaths$5,
    prerender: prerender$8,
    url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const RetrieveImageFromGlob = async (imagePath, globObject, post) => {
  try {
    const imageFilename = retrieveFileName(imagePath);
    for (var property in globObject) {
      if (property.includes(imageFilename)) {
        const image = await globObject[property]();
        return image;
      }
    }
  } catch (error) {
    console.log("RetrieveImageFromGlob error: ", error);
  }
};
const retrieveFileName = (name, post) => {
  try {
    if (name?.length === 0)
      return "";
    const arr = name.split("/");
    return arr[arr.length - 1];
  } catch (error) {
    console.log("retrieveFileName error: ", error);
    console.log("post: ", post);
    return "";
  }
};

const $$Astro$b = createAstro();
const Astro$4 = $$Astro$b;
const prerender$7 = true;
async function getStaticPaths$4() {
  const allPosts = await Astro$4.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./pages/post-1_275a72cb.mjs').then(n => n.a),"../posts/post-3.md": () => import('./pages/post-3_4c59387e.mjs'),"../posts/post-4.md": () => import('./pages/post-4_073579d1.mjs'),"../posts/post-6.md": () => import('./pages/post-6_409cc3db.mjs'),"../posts/post-7.md": () => import('./pages/post-7_1a89e2e9.mjs'),"../posts/post-8.md": () => import('./pages/post-8_d2a044d1.mjs'),"../posts/post-9.md": () => import('./pages/post-9_88f34176.mjs')}), () => "../posts/*.md");
  const uniqueAuthors = [...new Set(allPosts.map((post) => post.frontmatter.author))];
  return uniqueAuthors.map((author) => {
    const filteredPosts = allPosts.filter((post) => post.frontmatter.author === author);
    return {
      params: { author },
      props: {
        posts: filteredPosts
      }
    };
  });
}
const $$author = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$author;
  const { author } = Astro2.params;
  const { posts } = Astro2.props;
  const pageTitle = `Blog posts by ${author}`;
  const imageFiles = /* #__PURE__ */ Object.assign({"../../assets/uploads/edible-landscaping.webp": () => import('./edible-landscaping_1da9ec80.mjs'),"../../assets/uploads/perma-culture.webp": () => import('./perma-culture_278338af.mjs'),"../../assets/uploads/pots.jpg": () => import('./pots_9c82a4e2.mjs'),"../../assets/uploads/stones.jpg": () => import('./stones_74ff20a6.mjs'),"../../assets/uploads/trees.jpg": () => import('./trees_d38b2537.mjs'),"../../assets/uploads/vertical_garden.webp": () => import('./vertical_garden_769cb061.mjs'),"../../assets/uploads/xeriscaping.webp": () => import('./xeriscaping_1a5ae2de.mjs')});
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "SmallBanner", $$Index$f, {})}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div id="wrapper" class="mb-[150px]"><h1 class="text-3xl font-bold text-center mt-10">${pageTitle}</h1>${posts ? renderTemplate`<div class="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-5">${posts.map(async (post) => {
    if (post.frontmatter.images && post.frontmatter.images.length > 0) {
      const thumbnail = await RetrieveImageFromGlob(post.frontmatter.images[0].url, imageFiles);
      return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url, "thumbnail": thumbnail })}`;
    }
    return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url })}`;
  })}</div>` : renderTemplate`<p>This author hasn't published any posts yet.</p>`}</div>` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/authors/[author].astro", void 0);

const $$file$7 = "D:/Astro/uthan-site/src/pages/authors/[author].astro";
const $$url$7 = "/authors/[author]";

const _author_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$author,
    file: $$file$7,
    getStaticPaths: getStaticPaths$4,
    prerender: prerender$7,
    url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const Arrow = {"src":"/_astro/arrow-2.7d01ccb4.png","width":66,"height":36,"format":"png"};

const $$Astro$a = createAstro();
const $$WorkBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$WorkBlock;
  const {
    title,
    description,
    index,
    hidden,
    iconNumber
  } = Astro2.props;
  var number = index > 10 ? index : `0${index}`;
  return renderTemplate`${maybeRenderHead()}<div class="w-11/12 sm:w-[300px] mx-auto"><div class="working-block-one wow fadeInUp animated animated" data-wow-delay="0ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;"><div class="inner-box relative block pl-[15px] pr-[15px]">${!hidden && renderTemplate`<div class="hidden sm:block top-[66px] right-[-22%] translate-x-[-50%] w-[66px] h-[36px] bg-no-repeat absolute hidden sm:block"${addAttribute(`background-image: url(${Arrow.src});`, "style")}></div>`}<div class="icon-box relative inline-block mb-[35px] transition-[5s]"><div class="icon relative inline-block text-[70px] theme-color z-[1]"><i${addAttribute(`icon-${iconNumber}`, "class")}></i></div><span class="absolute text-[22px] font-medium text-white bg-[#2f7955] w-fit h-fit rounded-lg transition-[5s]">${number}</span></div><h3 class="block text-[24px] leading-[30px] font-medium mb-[20px]">${title}</h3><p class="block text-[15px] leading-[26px]">${description}</p></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/about_page/process_section/work-block.astro", void 0);

const $$Astro$9 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$1;
  const {
    process
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="working-section alternat-2 relative pb-[140px] text-center" id="ProcessSection"><div class="auto-container"><div class="sec-title mb-[65px]"><span class="sub-title">Process</span><h2>We Always Work by The <br>Following Process</h2></div><div class="flex flex-col sm:flex-row">${process && process && process.length > 0 && process.map(
    (item, index) => renderTemplate`${renderComponent($$result, "WorkBlock", $$WorkBlock, { "title": item.title, "description": item.description, "iconNumber": item.iconNumber, "index": index + 1, "hidden": index >= process.length - 1 })}`
  )}</div></div></section>`;
}, "D:/Astro/uthan-site/src/components/about_page/process_section/index.astro", void 0);

const GardenerImage = {"src":"/_astro/about-1.0bb6adec.png","width":573,"height":858,"format":"png"};

const $$Astro$8 = createAstro();
const $$HistorySection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HistorySection;
  return renderTemplate`${maybeRenderHead()}<section id="top-section" class="flex"><div id="person_block" class="relative w-full h-fit block sm:mb-[100px]"><div class="w-[250px] h-[250px] mx-auto relative rounded-full bg-[#2f7955] sm:w-[470px] sm:h-[470px]"></div><div class="absolute top-[153px] hidden sm: block right-[-75px] w-[150px] h-[219px] bg-no-repeat bg-[url('../src/assets/images/shape/shape-19.png')]"></div><figure class="absolute w-[200px] sm:w-[350px] left-[50%] translate-x-[-50%] bottom-0 z-30 block sm:w-[375px] h-auto"><img${addAttribute(GardenerImage.src, "src")} alt="about-us-image" class="object-cover w-full h-full mx-auto"></figure><div id="circle_info" class="hidden sm:block absolute flex sm:rounded-full about-box-shadow z-[31] centered bg-white z-10 sm:w-[270px] sm:h-[270px] bottom-0 justify-center"><div class="grid !m-auto w-fit h-fit text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] relative"><div class="relative text-6xl theme_color leading-[60px] mb-[12px]"><i class="icon-16"></i></div><h4 class="text-xl leading-[32px] font-medium">5K+ People Choose ${SiteData.business_name}</h4></div></div></div><div id="brief-company-description" class="w-11/12 mx-auto sm:ml-16"><h1 class="text-center sm:left relative block text-[18px] leading0[28px] font-['Montserrat',sans-serif] font-[600] mb-[16px] uppercase text-[#2f7955]">About</h1><h2 class="text-center sm:left block font-['Prata',serif] font-[400] text-[#141417] text-6xl mb-10">20 years of great service</h2><div id="brief-description" class="font-['Montserrat',sans-serif] [&>*]:mb-10"><p>At ${SiteData.business_name}, we believe that the beauty of nature can be harnessed to transform ordinary spaces into extraordinary outdoor sanctuaries. With a passion for creating captivating landscapes, we have established ourselves as a leading landscaping company dedicated to bringing the splendor of nature closer to your doorstep.</p><p>
Our Journey
                Founded ${SiteData.year_founded}, ${SiteData.business_name} embarked on a journey with a simple yet profound vision: to seamlessly blend human creativity with the elegance of nature. Over the years, our team of seasoned landscapers, horticulturists, and designers have transformed this vision into a tangible reality. We take pride in our rich portfolio of projects that showcase our commitment to innovation, sustainability, and craftsmanship.
</p></div></div><div class="block sm:hidden text-center w-[250px] h-[250px] mx-auto rounded-full about-box-shadow "><div class="grid !m-auto w-fit h-fit text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] relative"><div class="relative text-6xl theme_color leading-[60px] mb-[12px]"><i class="icon-16"></i></div><h4 class="text-xl leading-[32px] font-medium">5K+ People Choose ${SiteData.business_name}</h4></div></div></section>`;
}, "D:/Astro/uthan-site/src/components/about_page/history-section.astro", void 0);

const data$1 = [
	{
		title: "Easy Online Booking",
		description: "Can be done in a few minutes.",
		iconNumber: 17
	},
	{
		title: "Set Gardening Service",
		description: "To assist, we provide excellent onsite consulting free of charge.",
		iconNumber: 18
	},
	{
		title: "Generate Unique Ideas",
		description: "We help to identify the best solution tailored to your needs.",
		iconNumber: 19
	},
	{
		title: "Final Delivery",
		description: "We guarantee excellent service.",
		iconNumber: 20
	}
];
const Process = {
	data: data$1
};

const GardenWorker = {"src":"/_astro/garden-worker.519527c7.jpg","width":1280,"height":853,"format":"jpg"};

const $$Astro$7 = createAstro();
const prerender$6 = true;
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "About Us", "CTA_Banner": true, "customDescription": `About ${SiteData.business_name}` }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$f, { "image": GardenWorker, "title": "About Us", "subtitle": "Serving clients in US for over 20 years" })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "HistorySection", $$HistorySection, {})}${renderComponent($$result3, "ProcessSection", $$Index$1, { "process": Process.data })}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/about.astro", void 0);

const $$file$6 = "D:/Astro/uthan-site/src/pages/about.astro";
const $$url$6 = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file$6,
    prerender: prerender$6,
    url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const Astro$3 = $$Astro$6;
const prerender$5 = true;
async function getStaticPaths$3() {
  const PAGE_SIZE = 6;
  var allPosts = [];
  var totalPages = 0;
  try {
    allPosts = await Astro$3.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./pages/post-1_275a72cb.mjs').then(n => n.a),"../posts/post-3.md": () => import('./pages/post-3_4c59387e.mjs'),"../posts/post-4.md": () => import('./pages/post-4_073579d1.mjs'),"../posts/post-6.md": () => import('./pages/post-6_409cc3db.mjs'),"../posts/post-7.md": () => import('./pages/post-7_1a89e2e9.mjs'),"../posts/post-8.md": () => import('./pages/post-8_d2a044d1.mjs'),"../posts/post-9.md": () => import('./pages/post-9_88f34176.mjs')}), () => "../posts/*.md");
    totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
  } catch (error) {
    allPosts = [];
  }
  var assets = [];
  try {
    assets = await Astro$3.glob(/* #__PURE__ */ Object.assign({"../../assets/uploads/edible-landscaping.webp": () => import('./edible-landscaping_1da9ec80.mjs'),"../../assets/uploads/perma-culture.webp": () => import('./perma-culture_278338af.mjs'),"../../assets/uploads/pots.jpg": () => import('./pots_9c82a4e2.mjs'),"../../assets/uploads/stones.jpg": () => import('./stones_74ff20a6.mjs'),"../../assets/uploads/trees.jpg": () => import('./trees_d38b2537.mjs'),"../../assets/uploads/vertical_garden.webp": () => import('./vertical_garden_769cb061.mjs'),"../../assets/uploads/xeriscaping.webp": () => import('./xeriscaping_1a5ae2de.mjs')}), () => "../../assets/uploads/*");
  } catch (error) {
    assets = [];
  }
  return createStaticPathArray({
    allPosts,
    PAGE_SIZE,
    totalPages,
    assets
  });
}
const $$page$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$page$1;
  const { page } = Astro2.params;
  const {
    totalPages,
    assets,
    paginatedArray,
    totalPosts,
    PAGE_SIZE
  } = Astro2.props;
  let inBound = page && typeof parseInt(page) === "number" && parseInt(page) <= totalPages;
  if (!inBound && totalPages != 0) {
    return Astro2.redirect("/error");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Blog posts" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$f, { "title": "Blog Posts" })}${maybeRenderHead()}<div class="mb-[100px] w-11/12 mx-auto mt-10" id="content-wrapper">${renderComponent($$result2, "Searchbar", $$Index$g, {})}${totalPosts === 0 && renderTemplate`<h2 class="text-center text-2xl my-5">There are currently no blog posts published at the moment.</h2>`}${totalPages > 1 && renderTemplate`${renderComponent($$result2, "RenderPagination", RenderPagination$1, { "pageSize": PAGE_SIZE, "totalCount": totalPosts, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/uthan-site/src/components/paginatedBlog/renderPagination.tsx", "client:component-export": "default" })}`}${paginatedArray && paginatedArray.length > 0 && renderTemplate`<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">${paginatedArray.map(async (post) => {
    return renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url, "thumbnail": post.featured_image })}`;
  })}</div>`}${totalPages > 1 && renderTemplate`<div class="w-full h-auto">${renderComponent($$result2, "RenderPagination", RenderPagination$1, { "pageSize": PAGE_SIZE, "totalCount": totalPosts, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/uthan-site/src/components/paginatedBlog/renderPagination.tsx", "client:component-export": "default" })}</div>`}</div>` })}`;
}, "D:/Astro/uthan-site/src/pages/blog/[page].astro", void 0);

const $$file$5 = "D:/Astro/uthan-site/src/pages/blog/[page].astro";
const $$url$5 = "/blog/[page]";

const _page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page$1,
    file: $$file$5,
    getStaticPaths: getStaticPaths$3,
    prerender: prerender$5,
    url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const prerender$4 = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./pages/post-1_275a72cb.mjs').then(n => n.a),"../posts/post-3.md": () => import('./pages/post-3_4c59387e.mjs'),"../posts/post-4.md": () => import('./pages/post-4_073579d1.mjs'),"../posts/post-6.md": () => import('./pages/post-6_409cc3db.mjs'),"../posts/post-7.md": () => import('./pages/post-7_1a89e2e9.mjs'),"../posts/post-8.md": () => import('./pages/post-8_d2a044d1.mjs'),"../posts/post-9.md": () => import('./pages/post-9_88f34176.mjs')}), () => "../posts/*.md");
  var allTags = allPosts.map((post) => post.frontmatter.tags).flat().map((item) => item.tag);
  const tags = [...new Set(allTags)];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Search Posts By Index" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$f, { "title": "Search posts by tags" })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<ul class="flex flex-row flex-wrap [&>li]:ml-5 justify-evenly">${tags && tags.length > 0 && tags.map((tag) => renderTemplate`<li class="hover:underline hover:font-bold my-5 cursor-pointer capitalize rounded-[0.5em] border-dotted border-2 text-[1.5rem] border-[#a1a1a1] p-1 bg-[#F8FCFD] tagListItem"><a${addAttribute(`../tags/${makeURLfriendly(tag)}/1`, "href")}>${tag}</a></li>`)}</ul>` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/tags/index.astro", void 0);

const $$file$4 = "D:/Astro/uthan-site/src/pages/tags/index.astro";
const $$url$4 = "/tags";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$4,
    prerender: prerender$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const RenderPagination = (props) => {
  const { pageSize, totalCount, currentPage, totalPages, isMobile } = props;
  const onPageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      return window.location.href = `/blog/${newPage}`;
    }
  };
  const Pagination = usePagination({ currentPage, totalCount, pageSize });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "PaginationContainer",
      className: `my-10 block list-none text-center ${isMobile ? "sm:hidden" : ""}`,
      children: [
        /* @__PURE__ */ jsx(
          "li",
          {
            id: "leftArrow",
            className: "PaginatedListItem PaginatedArrow",
            onClick: () => onPageChange(currentPage - 1),
            children: "˂ Prev"
          }
        ),
        Pagination?.map((page) => {
          const uniqueKey = uuid();
          if (page === DOTS) {
            return /* @__PURE__ */ jsx("li", { className: "PaginatedListItem", children: "…" }, uniqueKey);
          }
          if (page === currentPage) {
            return /* @__PURE__ */ jsx(
              "li",
              {
                className: "selected PaginatedListItem",
                onClick: () => onPageChange(page),
                children: page
              },
              uniqueKey
            );
          }
          return /* @__PURE__ */ jsx(
            "li",
            {
              className: "PaginatedListItem",
              onClick: () => onPageChange(page),
              children: page
            },
            uniqueKey
          );
        }),
        /* @__PURE__ */ jsx(
          "li",
          {
            id: "rightArrow",
            className: "PaginatedListItem PaginatedArrow",
            onClick: () => {
              onPageChange(currentPage + 1);
            },
            children: "Next ˃"
          }
        )
      ]
    }
  );
};

const $$Astro$4 = createAstro();
const Astro$2 = $$Astro$4;
const prerender$3 = true;
async function getStaticPaths$2() {
  const PAGE_SIZE = 6;
  var allPosts = [];
  try {
    allPosts = await Astro$2.glob(/* #__PURE__ */ Object.assign({"../../posts/post-1.md": () => import('./pages/post-1_275a72cb.mjs').then(n => n.a),"../../posts/post-3.md": () => import('./pages/post-3_4c59387e.mjs'),"../../posts/post-4.md": () => import('./pages/post-4_073579d1.mjs'),"../../posts/post-6.md": () => import('./pages/post-6_409cc3db.mjs'),"../../posts/post-7.md": () => import('./pages/post-7_1a89e2e9.mjs'),"../../posts/post-8.md": () => import('./pages/post-8_d2a044d1.mjs'),"../../posts/post-9.md": () => import('./pages/post-9_88f34176.mjs')}), () => "../../posts/*.md");
  } catch (error) {
    allPosts = [];
  }
  var assets = [];
  try {
    assets = await Astro$2.glob(/* #__PURE__ */ Object.assign({"../../../assets/uploads/edible-landscaping.webp": () => import('./edible-landscaping_1da9ec80.mjs'),"../../../assets/uploads/perma-culture.webp": () => import('./perma-culture_278338af.mjs'),"../../../assets/uploads/pots.jpg": () => import('./pots_9c82a4e2.mjs'),"../../../assets/uploads/stones.jpg": () => import('./stones_74ff20a6.mjs'),"../../../assets/uploads/trees.jpg": () => import('./trees_d38b2537.mjs'),"../../../assets/uploads/vertical_garden.webp": () => import('./vertical_garden_769cb061.mjs'),"../../../assets/uploads/xeriscaping.webp": () => import('./xeriscaping_1a5ae2de.mjs')}), () => "../../../assets/uploads/*");
  } catch (error) {
    assets = [];
  }
  return createStaticPathArrayForTagsAndPage({ allPosts, assets, PAGE_SIZE });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$page;
  const {
    tag,
    page
  } = Astro2.params;
  const {
    totalPages,
    paginatedArray,
    totalPosts,
    PAGE_SIZE
  } = Astro2.props;
  const BannerTitle = `Posts tagged with ${tag}`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$f, { "title": BannerTitle })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, { "customStyle": "w-11/12 h-auto mx-auto mb-[100px] sm:mb[0px]" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": totalPosts, "}": true, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/paginatedBlog/renderTagPagination.tsx", "client:component-export": "default" })}${paginatedArray && paginatedArray.length > 0 ? renderTemplate`${maybeRenderHead()}<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">${paginatedArray.map((post) => {
    if (post.frontmatter.featured_image) {
      return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url, "thumbnail": post.featured_image })}`;
    }
    return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url })}`;
  })}</div>` : renderTemplate`<div></div>`}${renderComponent($$result3, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": totalPosts, "}": true, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/paginatedBlog/renderTagPagination.tsx", "client:component-export": "default" })}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/tags/[tag]/[page].astro", void 0);

const $$file$3 = "D:/Astro/uthan-site/src/pages/tags/[tag]/[page].astro";
const $$url$3 = "/tags/[tag]/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file$3,
    getStaticPaths: getStaticPaths$2,
    prerender: prerender$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const Astro$1 = $$Astro$3;
const prerender$2 = true;
async function getStaticPaths$1() {
  const PAGE_SIZE = 6;
  var allPosts = [];
  try {
    allPosts = await Astro$1.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./pages/post-1_275a72cb.mjs').then(n => n.a),"../posts/post-3.md": () => import('./pages/post-3_4c59387e.mjs'),"../posts/post-4.md": () => import('./pages/post-4_073579d1.mjs'),"../posts/post-6.md": () => import('./pages/post-6_409cc3db.mjs'),"../posts/post-7.md": () => import('./pages/post-7_1a89e2e9.mjs'),"../posts/post-8.md": () => import('./pages/post-8_d2a044d1.mjs'),"../posts/post-9.md": () => import('./pages/post-9_88f34176.mjs')}), () => "../posts/*.md");
  } catch (error) {
    allPosts = [];
  }
  var assets = [];
  try {
    assets = await Astro$1.glob(/* #__PURE__ */ Object.assign({"../../assets/uploads/edible-landscaping.webp": () => import('./edible-landscaping_1da9ec80.mjs'),"../../assets/uploads/perma-culture.webp": () => import('./perma-culture_278338af.mjs'),"../../assets/uploads/pots.jpg": () => import('./pots_9c82a4e2.mjs'),"../../assets/uploads/stones.jpg": () => import('./stones_74ff20a6.mjs'),"../../assets/uploads/trees.jpg": () => import('./trees_d38b2537.mjs'),"../../assets/uploads/vertical_garden.webp": () => import('./vertical_garden_769cb061.mjs'),"../../assets/uploads/xeriscaping.webp": () => import('./xeriscaping_1a5ae2de.mjs')}), () => "../../assets/uploads/*");
  } catch (error) {
    assets = [];
  }
  var staticArray = createStaticPathArrayForTags({ allPosts, assets, PAGE_SIZE });
  return staticArray;
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$tag;
  const {
    tag
  } = Astro2.params;
  const {
    totalPages,
    filteredPosts
  } = Astro2.props;
  const BannerTitle = `Posts tagged with ${tag}`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$f, { "title": BannerTitle })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<h1 class="text-2xl font-bold text-center mt-10">Posts tagged with ${tag}</h1>${filteredPosts && filteredPosts.length > 0 ? renderTemplate`<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">${filteredPosts.map((post) => {
    if (post.frontmatter.featured_image) {
      return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url, "thumbnail": post.featured_image })}`;
    }
    return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url })}`;
  })}</div>` : renderTemplate`<div></div>`}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/tags/[tag].astro", void 0);

const $$file$2 = "D:/Astro/uthan-site/src/pages/tags/[tag].astro";
const $$url$2 = "/tags/[tag]";

const _tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$tag,
    file: $$file$2,
    getStaticPaths: getStaticPaths$1,
    prerender: prerender$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const getTeamStaticPathArray = (member, assets) => {
  const assetMap = /* @__PURE__ */ new Map();
  var profile_image = null;
  if (member && member.profile_image) {
    var fileName = getImageFileName(member.profile_image.src);
    if (assetMap.get(fileName)) {
      profile_image = assetMap.get(fileName);
    } else {
      var foundAsset = assets.find((asset) => {
        var found = asset.default.src.includes(fileName);
        if (found) {
          assetMap.set(fileName, asset.default.src);
        }
        return found;
      });
      profile_image = foundAsset?.default.src;
    }
  }
  const urlName = member.name.toLowerCase().replace(/\s+/g, "_");
  return {
    params: { team_member: urlName },
    props: {
      name: member.name,
      designation: member.designation,
      phone: member.phone,
      email: member.email,
      link: member.link,
      facebook: member.facebook,
      twitter: member.twitter,
      google: member.google,
      profile_image,
      biography: member.biography
    }
  };
};

const $$Astro$2 = createAstro();
const Astro = $$Astro$2;
const prerender$1 = true;
const getStaticPaths = async () => {
  var assets = [];
  try {
    assets = await Astro.glob(/* #__PURE__ */ Object.assign({"../../assets/images/team/person-1.jpg": () => Promise.resolve().then(() => person1$1),"../../assets/images/team/person-2.jpg": () => Promise.resolve().then(() => person2$1),"../../assets/images/team/person-3.jpg": () => Promise.resolve().then(() => person3$1)}), () => "../../assets/images/team/*");
  } catch (error) {
    console.log(error);
  }
  return TeamMembers.map((member) => getTeamStaticPathArray(member, assets));
};
const $$teamMember = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$teamMember;
  Astro2.params;
  const {
    name,
    designation,
    phone,
    email,
    link,
    facebook,
    twitter,
    google,
    profile_image,
    biography
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": TeamMembers.name, "data-astro-cid-xksyzjet": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$f, { "title": name, "subtitle": designation, "data-astro-cid-xksyzjet": true })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, { "data-astro-cid-xksyzjet": true }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div id="team-layout" class="flex flex-col sm:flex-row" data-astro-cid-xksyzjet><div id="left-column" data-astro-cid-xksyzjet>${profile_image && renderTemplate`<div class="w-11/12 h-auto mx-auto sm:ml-0 rounded-lg my-10 overflow-hidden" data-astro-cid-xksyzjet><img loading="lazy" decoding="async" id="profile_image"${addAttribute(profile_image, "src")}${addAttribute(name, "alt")} class="h-full w-full object-cover transition-all hover:scale-125" data-astro-cid-xksyzjet></div>`}<ul data-astro-cid-xksyzjet>${phone && renderTemplate`<li class="relative block mb-[20px]" data-astro-cid-xksyzjet><p class="text-lg" data-astro-cid-xksyzjet><a${addAttribute(`tel:${phoneNumberToNumeric(phone)}`, "href")} data-astro-cid-xksyzjet><b data-astro-cid-xksyzjet>Phone number: </b>${formatPhoneNumber(phone)}</a></p></li>`}${email && renderTemplate`<li class="relative block" data-astro-cid-xksyzjet><p class="text-lg" data-astro-cid-xksyzjet><a${addAttribute(`mailto:${email}`, "href")} data-astro-cid-xksyzjet><b data-astro-cid-xksyzjet>Email: </b>${email}</a></p></li>`}</ul></div><div id="right-column" class="sm:max-w-[60%]" data-astro-cid-xksyzjet><h1 class="font-bold text-3xl font-['Montserrat',sans-serif] mt-8" data-astro-cid-xksyzjet>${name}</h1>${designation && renderTemplate`<h3 class="text-slate-400" data-astro-cid-xksyzjet>${designation}</h3>`}${biography && renderTemplate`<p class="my-10 text-slate-500" data-astro-cid-xksyzjet>${biography}</p>`}<h3 class="text-slate-800 font-['Monserrat',sans-serif] text-2xl mb-5" data-astro-cid-xksyzjet>Follow Me On: </h3><ul class="[&>li]:rounded-full [&>li]:border-[#dbdbdb] [&>li]:border-[1px] [&>li]:p-1 [&>li]:w-[44px] [&>li]:h-[44px] [&>li]:text-center [&>li>a>*]:m-auto" data-astro-cid-xksyzjet>${facebook && renderTemplate`<li class="relative inline-block mr-[10px]" data-astro-cid-xksyzjet><a${addAttribute(facebook, "href")} class="block black hover:bg hover:bg-[#FFFFFF1A] text-center" data-astro-cid-xksyzjet><i class="fab fa-facebook-f iconStyle" data-astro-cid-xksyzjet></i></a></li>`}${twitter && renderTemplate`<li class="relative inline-block mr-[10px]" data-astro-cid-xksyzjet><a${addAttribute(twitter, "href")} class="block black hover:bg hover:bg-[#FFFFFF1A]" data-astro-cid-xksyzjet><i class="fab fa-twitter iconStyle" data-astro-cid-xksyzjet></i></a></li>`}${google && renderTemplate`<li class="relative inline-block" data-astro-cid-xksyzjet><a${addAttribute(google, "href")} class="block black hover:bg hover:bg-[#FFFFFF1A]" data-astro-cid-xksyzjet><i class="fab fa-google-plus-g iconStyle" data-astro-cid-xksyzjet></i></a></li>`}</ul></div></div>` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/team/[team_member].astro", void 0);

const $$file$1 = "D:/Astro/uthan-site/src/pages/team/[team_member].astro";
const $$url$1 = "/team/[team_member]";

const _team_member_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$teamMember,
    file: $$file$1,
    getStaticPaths,
    prerender: prerender$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const UpArrow = {"src":"/_astro/up_arrow.eaa9c1ff.png","width":80,"height":80,"format":"png"};

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
          className: "w-11/12 mx-auto",
          children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
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
                      className: "w-[20px] h-[20px] arrowStyle downArrow transition-all"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
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
  return /* @__PURE__ */ jsx("div", { children: data && data.length > 0 && data.map((item, index) => /* @__PURE__ */ jsx(
    Accordion,
    {
      title: item.question,
      content: item.ans,
      index,
      current,
      setCurrent
    },
    `${index}-${item.question}`
  )) });
};

const data = [
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

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$GraphicsWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GraphicsWrapper;
  return renderTemplate(_a || (_a = __template(["", '<div class="w-full sm:w-6/12 mx-auto justify-center"><div class="sm:h-fit relative top-[25%] hidden sm:block"><div id="PottedPlants" class="overflow-hidden w-[325px] h-auto absolute parallaxProp z-[2] sm:right-[-150px] box_shadow"><img decoding="async" loading="lazy"', ' class="w-full h-full object-cover m-auto" alt="Potted Plants"></div><div id="Apples" class="overflow-hidden w-11/12 h-auto absolute parallaxProp z-[1] sm:left-[-75px] box_shadow"><img decoding="async" loading="lazy"', ' class="w-full h-full object-cover m-auto" alt="Apples"></div><div class="overflow-hidden w-[300px] h-auto absolute parallaxProp z-[0]"><img decoding="async" loading="lazy"', ' class="w-full h-full object-cover m-auto" alt="Apples"></div></div></div><script>\n    const PottedPlants = document.getElementById("PottedPlants")\n    const Apples = document.getElementById("Apples")\n    const scrollEvent = () =>{\n        if(PottedPlants)\n            PottedPlants.style.transform = `translateY(${-window.scrollY}px)`\n        if(Apples)\n            Apples.style.transform = `translateY(${-window.scrollY/2}px)`\n    }\n    window.addEventListener("scroll", scrollEvent);\n<\/script>'], ["", '<div class="w-full sm:w-6/12 mx-auto justify-center"><div class="sm:h-fit relative top-[25%] hidden sm:block"><div id="PottedPlants" class="overflow-hidden w-[325px] h-auto absolute parallaxProp z-[2] sm:right-[-150px] box_shadow"><img decoding="async" loading="lazy"', ' class="w-full h-full object-cover m-auto" alt="Potted Plants"></div><div id="Apples" class="overflow-hidden w-11/12 h-auto absolute parallaxProp z-[1] sm:left-[-75px] box_shadow"><img decoding="async" loading="lazy"', ' class="w-full h-full object-cover m-auto" alt="Apples"></div><div class="overflow-hidden w-[300px] h-auto absolute parallaxProp z-[0]"><img decoding="async" loading="lazy"', ' class="w-full h-full object-cover m-auto" alt="Apples"></div></div></div><script>\n    const PottedPlants = document.getElementById("PottedPlants")\n    const Apples = document.getElementById("Apples")\n    const scrollEvent = () =>{\n        if(PottedPlants)\n            PottedPlants.style.transform = \\`translateY(\\${-window.scrollY}px)\\`\n        if(Apples)\n            Apples.style.transform = \\`translateY(\\${-window.scrollY/2}px)\\`\n    }\n    window.addEventListener("scroll", scrollEvent);\n<\/script>'])), maybeRenderHead(), addAttribute(Potted_Plants.src, "src"), addAttribute(Apples.src, "src"), addAttribute(Leaf.src, "src"));
}, "D:/Astro/uthan-site/src/components/faq-page/graphicsWrapper.astro", void 0);

const $$Astro = createAstro();
const prerender = true;
const $$FAQ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQ;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "FAQ", "CTA_Banner": true, "customDescription": `Frequently Asked Questions about ${SiteData.business_name}` }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$f, { "title": "FAQ" })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="mt-10"><h2 class="text-[#2f7955]">FAQ's</h2><h1 class="text-left text-[36px] leading-[44px] block font-['Prata',serif] text-black font-400">Frequently Asked Questions</h1></div><div class="grid sm:grid-cols-2">${renderComponent($$result3, "Accordion", AccordionComponent, { "data": data, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/accordion_component/index.tsx", "client:component-export": "default" })}${renderComponent($$result3, "Graphics", $$GraphicsWrapper, {})}</div>` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/FAQ.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/FAQ.astro";
const $$url = "/FAQ";

const FAQ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$FAQ,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { FAQ as F, _project_name_ as _, index$1 as a, _type_ as b, _author_ as c, about as d, _page_$1 as e, index as f, _page_ as g, _tag_ as h, index$2 as i, _team_member_ as j, message_sent as m };
