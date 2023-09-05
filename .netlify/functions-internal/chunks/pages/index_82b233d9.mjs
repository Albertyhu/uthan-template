/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro_d427acf6.mjs';
import 'clsx';
import { S as SiteData, B as BackImg, b as ServicesDemo, c as SelectedCategory, A as AllCategories, C as CarouselPosition, T as TestimonialSideDirection, d as $$PreviewLink, R as RecentPostsStore, $ as $$BaseLayout } from './_page__35530602.mjs';
/* empty css                           */import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useEffect, useState, createElement } from 'react';
import uuid from 'react-uuid';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@nanostores/react';
/* empty css                           */import { $ as $$ContentWrapper } from './error_b7b461d6.mjs';
/* empty css                                 *//* empty css                           *//* empty css                           */
const $$Astro$s = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${maybeRenderHead()}<div id="Experience" class=""><div class="content_block_1"><div class="content-box relative block mr-[70px]"><div class="sec-title mb-[35px]"><span class="sub-title">About</span><h2>20 Years of <br>Great Experience.</h2></div><div class="text relative block mb-[40px]"><p>At Natural Patterns Landscaping, we are more than just a landscaping business – we are the stewards of your outdoor dreams. With a deep-rooted passion for nature's beauty and a commitment to crafting breathtaking landscapes, we transform ordinary spaces into living works of art that seamlessly blend with the environment.</p></div><div class="btn-box relative block"><a href="about.html" class="theme-btn btn-one">Read More</a></div></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/Home/about_section/experience.astro", void 0);

const Shape3 = {"src":"/_astro/shape-3.aa3c4621.png","width":204,"height":284,"format":"png"};

const Shape4 = {"src":"/_astro/shape-4.45619530.png","width":150,"height":219,"format":"png"};

const $$Astro$r = createAstro();
const $$SellingSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$SellingSection;
  return renderTemplate`${maybeRenderHead()}<div id="SellingPoints" class="relative w-full p-[15px] flex mb-[60px]"><div class="inner-content text-center relative w-full"><div class="pattern-layer hidden sm:block" id="Graphic_patterns"><div class="pattern-1 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[210px] h-[210px] rounded-[50%] opacity-10"></div><div class="pattern-2 absolute animated" data-wow-delay="00ms" data-wow-duration="1500ms"${addAttribute(`background-image: url(${Shape3});`, "style")}></div><div class="pattern-3 absolute animated" data-wow-delay="00ms" data-wow-duration="1500ms"${addAttribute(`background-image: url(${Shape4});`, "style")}></div></div><div class="items-center grid sm:grid-cols-2 gap-10 mx-[-15px]"><div class="feature-block"><div id="SellExperience-1" class="feature-block-one wow min-height-[30px] transition-all fadeOutDown SellExperience" data-wow-delay="00ms" data-wow-duration="1500ms"><div id="block1" class="inner-box text-5xl mb-8 z-10 b_shadow_6"><div class="icon-box relative inline-block rounded-lg text-5xl mb-8 z-10 transition duration-300"><i class="icon-4"></i></div><h3 class="text-base leading-7 font-medium">100% Guarantee Services</h3></div></div><div id="SellExperience-2" class="feature-block-one wow min-height-[30px] transition-all fadeOutDown SellExperience" data-wow-delay="200ms" data-wow-duration="1500ms"><div id="block2" class="inner-box text-5xl mb-8 z-10 b_shadow_6"><div class="icon-box relative inline-block rounded-lg text-5xl mb-8 z-10 transition duration-300"><i class="icon-5"></i></div><h3 class="text-base leading-7 font-medium">Environmental Friendly</h3></div></div></div><div class="col-lg-6 col-md-6 col-sm-12 feature-block"><div id="SellExperience-3" class="feature-block-one wow min-height-[30px] transition-all fadeOutDown SellExperience" data-wow-delay="400ms" data-wow-duration="1500ms"><div id="block3" class="inner-box text-5xl mb-8 z-10 b_shadow_6"><div class="icon-box relative inline-block rounded-lg text-5xl mb-8 z-10 transition duration-300"><i class="icon-5"></i></div><h3 class="text-base leading-7 font-medium">Dedicated Support Team</h3></div></div></div></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/Home/about_section/selling_section.astro", void 0);

const $$Astro$q = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section class="about-section py-[70px] sm:py-[130px] relative"><div class="static max-w-[1200px] my-0 mx-auto py-0 px-[15px]"><div class="items-center grid sm:grid-cols-2">${renderComponent($$result, "Experience", $$Experience, {})}${renderComponent($$result, "SellingSection", $$SellingSection, {})}</div></div></section><!-- about-section end -->`;
}, "D:/Astro/uthan-site/src/components/Home/about_section/about.astro", void 0);

const $$Astro$p = createAstro();
const $$SellingPonts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$SellingPonts;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4"><div class="w-full sm:w-full"><div class="relative grid grid-cols-[20%_80%] mb-4 md:mb-0"><div class=" inline-block text-3xl"><i class="icon-7"></i></div><div><h5 class="text-lg leading-6 mb-1 font-medium">No Hidden Cost</h5><p>Transparency is the cornerstone of our commitment to you. </p></div></div></div><div class="w-full sm:w-full"><div class="relative grid grid-cols-[20%_80%] block mb-4 md:mb-0"><div class=" inline-block text-3xl"><i class="icon-8"></i></div><div><h5 class="text-lg leading-6 mb-1 font-medium">Dedicated Team</h5><p>When you envision your dream landscape, you need a team that shares your passion. </p></div></div></div><div class="w-full sm:w-full"><div class="relative grid grid-cols-[20%_80%] block mb-4 md:mb-0"><div class=" inline-block text-3xl"><i class="icon-9"></i></div><div><h5 class="text-lg leading-6 mb-1 font-medium">Fresh Environment</h5><p>Crafts outdoor spaces that breathe new life into your surroundings.</p></div></div></div><div class="w-full sm:w-full"><div class="relative grid grid-cols-[20%_80%] block mb-4 md:mb-0"><div class=" inline-block text-3xl"><i class="icon-10"></i></div><div><h5 class="text-lg leading-6 mb-1 font-medium">Available 24/7</h5><p>Landscape needs can arise at any moment. We're here to serve you around the clock. </p></div></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/Home/choose-us/selling-ponts.astro", void 0);

const Shape5 = {"src":"/_astro/shape-5.acf23970.png","width":164,"height":190,"format":"png"};

const Shape6 = {"src":"/_astro/shape-6.a632c71e.png","width":164,"height":189,"format":"png"};

const $$Astro$o = createAstro();
const $$Index$j = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Index$j;
  return renderTemplate`<!-- chooseus-section -->${maybeRenderHead()}<section class="chooseus-section relative block"><div class="pattern-layer p_absolute" id="chooseus_grass" style="background-image: url(../src/assets/images/shape/shape-7.png);"></div><div id="Chooseus_mainContainer" class="auto-container"><div class="inner-container relative block bg-white rounded-md box_shadow mb-5"><div class="shape-layer"><div class="shape-1 absolute"${addAttribute(`background-image: url(${Shape5.src});`, "style")}></div><div class="shape-2 absolute"${addAttribute(`background-image: url(${Shape6.src});`, "style")}></div></div><div class="grid sm:grid-cols-[40%_60%]"><div class="image-column"><figure class="image-box relative block img_hover_3"><img src="../src/assets/images/resource/garden-worker.jpg" alt=""></figure></div><div class="content-column"><div class="content_block_2"><div class="content-box relative block pt-[40px] pl-[40px] pr-[70px] pb-[30px]"><div class="sec-title mb-10"><span class="sub-title">When People Want a Peace of Mind</span><h2>They Choose Us.</h2></div><div class="text relative block mb-35"><p>Discover tranquility in the beauty of nature. At ${SiteData.business_name}, we understand the significance of peace of mind. Our expert team specializes in crafting landscapes that not only captivate the senses but also create a sanctuary of serenity. When the world feels overwhelming, our harmonious designs bring solace. Choose ${SiteData.business_name} for landscapes that inspire calm and elevate your spirits.</p></div><div class="relative block bg-transparent pt-10">${renderComponent($$result, "SellingPoints", $$SellingPonts, {})}</div></div></div></div></div></div></div></section>`;
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
      children: /* @__PURE__ */ jsx("img", { src: image.src, className: "absolute inset-0 h-full w-full  object-cover" })
    }
  );
};

const $$Astro$n = createAstro();
const $$Index$i = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Index$i;
  const {
    button_label,
    link,
    customStyle = ""
  } = Astro2.props;
  const BeforeStyle = "before:object-fit before:content-[''] before:h-full before:w-0 before:bg-[#21563D] before:absolute before:inset-0 before:opacity-60 hover:before:w-full before:transform-all before:z-[0]";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-fit mx-auto px-5 py-5 rounded-lg cursor-pointer select-none active:translate-x-[1px] active:translate-y-[1px] relative bg-[#2f7955] text-white font-bold overflow-hidden ${BeforeStyle} clippedShape ${customStyle}`, "class")}><a${addAttribute(link, "href")} class=" z-1 capitalizetext-2xl text-white text-center relative">${button_label}</a></div>`;
}, "D:/Astro/uthan-site/src/components/liquid-button/index.astro", void 0);

const $$Astro$m = createAstro();
const $$Index$h = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Index$h;
  const {
    title,
    subtitle,
    button_label,
    link,
    titleStyle,
    wrapperStyle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="TitleSection" class="absolute h-fit w-full top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[50] text-white font-['Prata', sans-serif]"><div id="TitleWrapper"${addAttribute(wrapperStyle ? wrapperStyle : "w-11/12 sm:max-w-[800px] mx-auto", "class")}><h1${addAttribute(titleStyle ? titleStyle : "text-white text-center text-[50px] leading-[50px] sm:text-[90px] sm:leading-[90px] fadeInUp font-['Prata',serif]", "class")}>${title}</h1><h2 class="text-white text-center text-sm sm:text-[20px] !block sm:my-10 fadeInUp opacity-0 animation-delay-1 font-['Montserrat',sans-serif]">${subtitle}</h2>${button_label && renderTemplate`${renderComponent($$result, "LiquidButton", $$Index$i, { "button_label": button_label, "link": link, "customStyle": "fadeInUp opacity-0 animation-delay-2 font-['Montserrat',sans-serif] text-[17px]" })}`}</div></div>`;
}, "D:/Astro/uthan-site/src/components/TitleComponent/index.astro", void 0);

const Slide2 = {"src":"/_astro/slide-2.e5816964.jpg","width":1920,"height":700,"format":"jpg"};

const Slide3 = {"src":"/_astro/slide-3.bd3857f5.jpg","width":1920,"height":700,"format":"jpg"};

const Grass = {"src":"/_astro/shape-2.f12c1ed5.png","width":1920,"height":54,"format":"png"};

const $$Astro$l = createAstro();
const $$Index$g = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Index$g;
  var HeroImages = [];
  try {
    HeroImages.push(BackImg);
    HeroImages.push(Slide2);
    HeroImages.push(Slide3);
  } catch (error) {
    console.log("Error: ", error);
  }
  return renderTemplate`${maybeRenderHead()}<section id="BannerSection" class="relative text-center block bg-cover bg-no-repeat bg-center overflow-hidden min-h-[80vh] w-full"><div class="pattern-layer absolute left-0 right-0 bottom-0 bg-repeat-x h-[54px] w-full z-[19]"${addAttribute(`background-image:url(${Grass.src})`, "style")}></div>${renderComponent($$result, "TitleSection", $$Index$h, { "title": "Make your vision an ideal landscape come to life", "subtitle": "We help homeowners craft beauty through nature's design", "button_label": "Hire us now", "link": "/", "wrapperStyle": "w-11/12 sm:max-w-[1000px] mx-auto" })}${renderComponent($$result, "Slider", Slider, { "images": HeroImages, "darkMask": true, "name": "hero", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/uthan-site/src/components/imageSlider/slider.tsx", "client:component-export": "default" })}</section>`;
}, "D:/Astro/uthan-site/src/components/Home/banner/index.astro", void 0);

const $$Astro$k = createAstro();
const $$ServiceBlock$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$ServiceBlock$1;
  const {
    thumbnail,
    title,
    tagline
  } = Astro2.props;
  const urlTitle = `../../services/${title.toLowerCase().replace(/\s+/g, "_")}`;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg service-block"><div class="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms"><div class="inner-box relative block bg-white rounded-[5px] h-[550px]"><div class="image-box relative block mb-[45px]"><figure class="w-[190px] h-[190px] inline-block rounded-full img_hover_1 overflow-hidden"><img${addAttribute(thumbnail, "src")}${addAttribute(`${title} thumbnail`, "alt")} class="bg-center w-full h-full object-cover"></figure><div class="absolute overflow-hidden w-[70px] h-[70px] leading-[70px] bg-[#eaf1ee] left-[50%] translate-x-[-50%] bottom-[-46px] icon_overlay text-[#2f7955] rounded-[10px] z-2 mb-[30px] text-[35px] inline-block icon-block"><i class="icon-10"></i></div></div><h3 class="relative block text-[22px] mb-[17px] font-medium"><a href="service-details.html" class="inline-block">${title}</a></h3><p class="mb-[17px]">${tagline}</p><div class="link-box relative cursor-pointer"><a${addAttribute(urlTitle, "href")} class="text-[#b6b7b9] inline-block link-btn"><i class="far fa-long-arrow-right text-[20px]"></i></a><a${addAttribute(urlTitle, "href")} class="overlay-btn font-[16px] absolute font-medium inline-block whitespace-nowrap">Learn More<i class="far fa-long-arrow-right absolute text-[20px]"></i></a></div></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/Home/service-section/service-block.astro", void 0);

const $$Astro$j = createAstro();
const $$Index$f = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Index$f;
  const displayServices = ServicesDemo && ServicesDemo.data.length > 0 ? ServicesDemo.data.slice(0, 4) : [];
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

const $$Astro$i = createAstro();
const $$Index$e = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Index$e;
  const {
    ProjectGallery
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="project-section relative pt-[32px] pb-[32px]" id="project-section"><div class="auto-container mx-auto"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="mb-[12px] text-center sec-title leading-[65px] [&>*]:text-left"><span class="sub-title">Projects</span><h2 class="text-2xl sm:text-[55px]">Check Some Of Our <br>Recent Work.</h2></div>${renderComponent($$result, "Selector", Selector, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/project/gallery/selector.tsx", "client:component-export": "default" })}</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">${renderComponent($$result, "GalleryReact", Gallery, { "ProjectGallery": ProjectGallery, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/project/gallery/gallery-react.tsx", "client:component-export": "default" })}</div></div></section>`;
}, "D:/Astro/uthan-site/src/components/project/gallery/index.astro", void 0);

const GreenTechnologyThumbnail = {"src":"/_astro/thumbnail.4fc42255.jpg","width":320,"height":290,"format":"jpg"};

const ZenGardenOasisThumbnail = {"src":"/_astro/thumbnail.f98d1232.jpg","width":4000,"height":6000,"format":"jpg"};

const EdibleGardenDelightThumbnail = {"src":"/_astro/thumbnail.ab27dc05.jpg","width":5184,"height":3359,"format":"jpg"};

const TranquilWaterFeatureThumbnail = {"src":"/_astro/tranquil-water-feature-thumbnail.3f086719.jpg","width":320,"height":290,"format":"jpg"};

const VerticalGardenShowcaseThumbnail = {"src":"/_astro/vertical-garden.181c3fa1.jpg","width":640,"height":480,"format":"jpg"};

const BlossomingFlowerHavenThumbnail = {"src":"/_astro/thumbnail.e36a21e4.jpg","width":320,"height":290,"format":"jpg"};

const CozyGardenNookThumbnail = {"src":"/_astro/cozy-garden-thumbnail.e754d048.jpg","width":640,"height":427,"format":"jpg"};

const GreenTechnologyImage1 = {"src":"/_astro/picture-1.ed9cb90a.jpg","width":640,"height":426,"format":"jpg"};

const GreenTechnologyImage2 = {"src":"/_astro/picture-2.38eb73d8.jpg","width":640,"height":480,"format":"jpg"};

const GreenTechnologyImage3 = {"src":"/_astro/picture-3.26cfe6ec.jpg","width":640,"height":480,"format":"jpg"};

const ZenGardenOasisImage1 = {"src":"/_astro/picture-1.891aa9d5.jpg","width":640,"height":960,"format":"jpg"};

const ZenGardenOasisImage2 = {"src":"/_astro/picture-2.15f05995.jpg","width":640,"height":960,"format":"jpg"};

const ZenGardenOasisImage3 = {"src":"/_astro/picture-3.d41d6be5.jpg","width":640,"height":958,"format":"jpg"};

const ZenGardenOasisImage4 = {"src":"/_astro/picture-4.ee01ad72.jpg","width":640,"height":360,"format":"jpg"};

const ZenGardenOasisImage5 = {"src":"/_astro/picture-5.fd663269.jpg","width":640,"height":480,"format":"jpg"};

const SustainableGardenRetreatImage1 = {"src":"/_astro/apples.26432d36.jpg","width":640,"height":415,"format":"jpg"};

const SustainableGardenRetreatImage2 = {"src":"/_astro/berry-branch.9a0a01bc.jpg","width":640,"height":427,"format":"jpg"};

const SustainableGardenRetreatImage3 = {"src":"/_astro/grapes.34a748d5.jpg","width":640,"height":427,"format":"jpg"};

const SustainableGardenRetreatImage4 = {"src":"/_astro/planting.ff8f0832.jpg","width":640,"height":427,"format":"jpg"};

const SustainableGardenRetreatImage5 = {"src":"/_astro/tangerine.abd517a0.jpg","width":640,"height":427,"format":"jpg"};

const BlossomingFlowerHavenImage1 = {"src":"/_astro/picture-1.5a2138db.jpg","width":640,"height":960,"format":"jpg"};

const BlossomingFlowerHavenImage2 = {"src":"/_astro/picture-2.8723fc64.jpg","width":640,"height":960,"format":"jpg"};

const BlossomingFlowerHavenImage3 = {"src":"/_astro/picture-3.68dae26c.jpg","width":640,"height":853,"format":"jpg"};

const BlossomingFlowerHavenImage4 = {"src":"/_astro/picture-4.721b00b7.jpg","width":640,"height":960,"format":"jpg"};

const BlossomingFlowerHavenImage5 = {"src":"/_astro/picture-5.17152e08.jpg","width":640,"height":480,"format":"jpg"};

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

const $$Astro$h = createAstro();
const $$MemberPanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<div class=""><div class="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms"><div class="inner-box relative block pl-[30px] pt-[30px] pr-[30px] pb-[25px] team-block rounded-lg"><figure class="image-box p_relative d_block b_radius_5"><a${addAttribute(member_page, "href")}><img${addAttribute(profile_image.src, "src")}${addAttribute(profile_alt_text, "alt")}></a></figure><div class="lower-content p_relative d_block pt_30"><div class="share-box absolute text-center"><a${addAttribute(member_page, "href")} class="inline-block text-white text-[14px] rounded-[5px] bg-[#2f7955] hov_color w-[45px] h-[45px] leading-[45px]"><i class="fas fa-share-alt relative" id="ShareIcon"></i></a>${(facebook || twitter || google) && renderTemplate`<ul class="share-links absolute clearfix">${facebook && renderTemplate`<li class="relative block mb-[10px]"><a${addAttribute(facebook, "href")} class="text-[16px] rounded-[5px] bg-white inline-block hov_bg w-[10px] h-[10px]"><i class="fab fa-facebook-f"></i></a></li>`}${twitter && renderTemplate`<li class="relative block mb-[10px]"><a${addAttribute(twitter, "href")} class="text-[16px] rounded-[5px] bg-white inline-block hov_bg w-[10px] h-[10px]"><i class="fab fa-twitter"></i></a></li>`}${google && renderTemplate`<li class="relative block mb-[10px]"><a${addAttribute(google, "href")} class="text-[16px] rounded-[5px] bg-white inline-block hov_bg w-[10px] h-[10px]"><i class="fab fa-google-plus-g"></i></a></li>`}</ul>`}</div><h3 class="p_relative d_block fs_22 fw_medium mb_5" id="team-member"><a${addAttribute(member_page, "href")} class="!hover:text-[#2f7955] hover:outline-none inline-block text-[22px] font-500">${name}</a></h3><span class="designation p_relative d_block fs_15">${designation}</span></div></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/Home/team_section/member_panel.astro", void 0);

const person3 = {"src":"/_astro/person-3.b6f89cdf.jpg","width":1024,"height":1024,"format":"jpg"};

const person2 = {"src":"/_astro/person-2.ec2209c4.jpg","width":1024,"height":1024,"format":"jpg"};

const person1 = {"src":"/_astro/person-1.df2dc66c.jpg","width":1024,"height":1024,"format":"jpg"};

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

const $$Astro$g = createAstro();
const $$Index$d = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Index$d;
  return renderTemplate`<!-- team-section -->${maybeRenderHead()}<section class="team-section relative sec-pad"><div class="auto-container"><div class="sec-title text-center mb-[45px]"><span class="sub-title">Experts</span><h2>We Handle Everything <br>for You!</h2></div><div class="grid sm:grid-cols-3 sm:gap-5">${members && members.length > 0 && members.map(
    (member) => renderTemplate`${renderComponent($$result, "MemberPanel", $$MemberPanel, { ...member })}`
  )}</div></div></section><!-- team-section end -->`;
}, "D:/Astro/uthan-site/src/components/Home/team_section/index.astro", void 0);

const RenderRating = (props) => {
  const { rating } = props;
  const renderRating = [];
  for (var i = 0; i < Math.round(rating); i++) {
    renderRating.push(i);
  }
  return /* @__PURE__ */ jsx("ul", { className: "rating relative mb-[20px] block", children: renderRating && renderRating.length > 0 && renderRating.map((star) => /* @__PURE__ */ jsx("li", { className: "relative float-left mr-[4px] inline-block text-2xl", children: /* @__PURE__ */ jsx("i", { className: "icon-25" }) }, uuid())) });
};

const ShapeEight = {"src":"/_astro/shape-8.a612a35c.png","width":50,"height":120,"format":"png"};

const Item = (props) => {
  const { testimonial, name, designation, rating, profile_image } = props;
  return /* @__PURE__ */ jsxs("div", { className: "testimonial-block-one carousel-item-shadow relative mx-auto h-full overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute z-[2] h-full w-full bg-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "inner-box relative grid h-full rounded-lg bg-white pb-[50px] pl-[50px] pr-[30px] pt-[45px]", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "shape absolute",
          style: { backgroundImage: `url(${ShapeEight})` },
          id: "Carousel-shape-8"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "text relative mb-[10px] block", children: /* @__PURE__ */ jsx("p", { children: testimonial }) }),
      /* @__PURE__ */ jsx(RenderRating, { rating }),
      /* @__PURE__ */ jsxs("div", { className: "author-box relative flex pl-[65px]", children: [
        /* @__PURE__ */ jsx("figure", { className: "author-thumb absolute", children: /* @__PURE__ */ jsx("img", { src: profile_image.src, alt: "" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h5", { className: "relative mb-[2px] block text-lg font-medium sm:text-4xl", children: name }),
          /* @__PURE__ */ jsx("span", { className: "designation relative mb-[2px] block text-base sm:text-xl", children: designation })
        ] })
      ] })
    ] })
  ] });
};

const Carousel$1 = (props) => {
  const { testimonials } = props;
  const $CarouselPosition = useStore(CarouselPosition);
  const $TestimonialSideDirection = useStore(TestimonialSideDirection);
  var displaySize = 2;
  const [displayed, setDisplayed] = useState(
    testimonials.slice(0, displaySize)
  );
  const slideRef = useRef(null);
  const setPosition = (position) => {
    if (position === testimonials.length - 1) {
      var displayArray = [];
      displayArray.push(testimonials[testimonials.length - 1]);
      displayArray.push(testimonials[0]);
      return displayArray;
    }
    return testimonials.slice(position, position + displaySize);
  };
  const animateSlide = () => {
    if (slideRef.current) {
      slideRef.current.style.animationPlayState = "paused";
      if ($TestimonialSideDirection === "right") {
        slideRef.current.classList.add("slideFromRight");
      } else if ($TestimonialSideDirection === "left") {
        slideRef.current.classList.add("slideFromLeft");
      }
      slideRef.current.style.animationPlayState = "running";
    }
  };
  useEffect(() => {
    if (typeof $CarouselPosition != "undefined" && $CarouselPosition != null) {
      const newArray = setPosition($CarouselPosition);
      setDisplayed([...newArray]);
    }
  }, [$CarouselPosition]);
  const unbindListener = TestimonialSideDirection.subscribe(animateSlide);
  const resetAnimation = () => {
    slideRef?.current?.classList.remove("slideFromLeft");
    slideRef?.current?.classList.remove("slideFromRight");
  };
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.addEventListener("animationend", resetAnimation);
    }
  }, [slideRef.current]);
  useEffect(() => {
    return () => {
      unbindListener();
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: slideRef,
      id: "CarouselSlide",
      className: "carousel-grid xm:grid-cols-[repeat(auto-fill,300px)] mx-auto grid grid-cols-[repeat(auto-fill,250px)] gap-10 sm:grid-cols-[repeat(auto-fill,350px)]",
      children: testimonials && testimonials.length > 0 && displayed.map((testimonial) => /* @__PURE__ */ createElement(Item, { ...testimonial, key: uuid() }))
    }
  );
};

const Carousel = (props) => {
  const { testimonials } = props;
  const $CarouselPosition = useStore(CarouselPosition);
  const $TestimonialSideDirection = useStore(TestimonialSideDirection);
  var displaySize = 1;
  const [displayed, setDisplayed] = useState(
    testimonials.slice(0, displaySize)
  );
  const slideRef = useRef(null);
  const setPosition = (position) => {
    if (position === testimonials.length - 1) {
      var displayArray = [];
      displayArray.push(testimonials[testimonials.length - 1]);
      displayArray.push(testimonials[0]);
      return displayArray;
    }
    return testimonials.slice(position, position + displaySize);
  };
  const animateSlide = () => {
    if (slideRef.current) {
      slideRef.current.style.animationPlayState = "paused";
      if ($TestimonialSideDirection === "right") {
        slideRef.current.classList.add("slideFromRight");
      } else if ($TestimonialSideDirection === "left") {
        slideRef.current.classList.add("slideFromLeft");
      }
      slideRef.current.style.animationPlayState = "running";
    }
  };
  useEffect(() => {
    if (typeof $CarouselPosition != "undefined" && $CarouselPosition != null) {
      const newArray = setPosition($CarouselPosition);
      setDisplayed([...newArray]);
    }
  }, [$CarouselPosition]);
  const unbindListener = TestimonialSideDirection.subscribe(animateSlide);
  const resetAnimation = () => {
    slideRef?.current?.classList.remove("slideFromLeft");
    slideRef?.current?.classList.remove("slideFromRight");
  };
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.addEventListener("animationend", resetAnimation);
    }
  }, [slideRef.current]);
  useEffect(() => {
    return () => {
      unbindListener();
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { ref: slideRef, id: "CarouselSlide", className: "carousel-grid mx-auto grid", children: testimonials && testimonials.length > 0 && displayed.map((testimonial) => /* @__PURE__ */ createElement(Item, { ...testimonial, key: uuid() })) });
};

const CarouselNav = (props) => {
  const { size } = props;
  const $CarouselPosition = useStore(CarouselPosition);
  const SlideLeft = () => {
    var nextPosition = $CarouselPosition + 1 < size ? $CarouselPosition + 1 : 0;
    CarouselPosition.set(nextPosition);
    TestimonialSideDirection.set("left");
  };
  const SlideRight = () => {
    var nextPosition = $CarouselPosition - 1 > 0 ? $CarouselPosition - 1 : size - 1;
    CarouselPosition.set(nextPosition);
    TestimonialSideDirection.set("right");
  };
  return /* @__PURE__ */ jsxs("div", { id: "carousel-nav-buttons", className: "bottom-[100px]disabled hidden sm:block", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        role: "presentation",
        className: "owl-prev nav_box_shadow relative mr-[10px] inline-block h-[60px] w-[60px] cursor-pointer rounded-md bg-[#fff] text-center text-[20px] leading-[60px] text-[#2f7955] transition-all active:translate-x-1 active:translate-y-1",
        onClick: SlideRight,
        children: /* @__PURE__ */ jsx("span", { className: "far fa-long-arrow-left" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        role: "presentation",
        className: "owl-next nav_box_shadow relative inline-block h-[60px] w-[60px] cursor-pointer rounded-md bg-[#fff] text-center text-[20px] leading-[60px] text-[#2f7955] transition-all active:translate-x-1 active:translate-y-1",
        onClick: SlideLeft,
        children: /* @__PURE__ */ jsx("span", { className: "far fa-long-arrow-right" })
      }
    )
  ] });
};

const TestimonialBG = {"src":"/_astro/testimonial-bg.21ad76b0.jpg","width":930,"height":620,"format":"jpg","orientation":1};

const ShapeNine = {"src":"/_astro/shape-9.0d66612f.png","width":341,"height":385,"format":"png"};

const $$Astro$f = createAstro();
const $$Index$c = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Index$c;
  const {
    testimonials
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="testimonial-section relative sec-pad mb-[10px]"><div class="bg-layer absolute bg-center" id="testimonial-background"${addAttribute(`background-image: url(${TestimonialBG.src})`, "style")}></div><div id="shape-9" class="slideOutLeft absolute left-[0px] bottom-[0px] w-[341px] h-[385px] bg-norepeat"${addAttribute(`background-image: url(${ShapeNine.src})`, "style")}></div><div class="auto-container"><div class="flex flex-wrap"><div class="w-full lg:w-4/12 md:w-full sm:w-full title-column"><div class="sec-title"><span class="sub-title">Testimonials</span><h2>Trusted by 10K Customer</h2>${renderComponent($$result, "NavButtons", CarouselNav, { "client:visible": true, "size": testimonials.length, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/Testimonial/carousel-nav.tsx", "client:component-export": "default" })}</div></div><div class="w-full md:w-full sm:w-full inner-column"><div class="inner-content desktop_carousel">${renderComponent($$result, "Carousel", Carousel$1, { "testimonials": testimonials, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/Testimonial/carousel.tsx", "client:component-export": "default" })}</div><div class="inner-content mobile_carousel">${renderComponent($$result, "MobileCarousel", Carousel, { "testimonials": testimonials, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/Testimonial/carousel-mobile.tsx", "client:component-export": "default" })}</div></div></div></div></section>`;
}, "D:/Astro/uthan-site/src/components/Testimonial/index.astro", void 0);

const Nicolas = {"src":"/_astro/nicolas.12c9d411.jpg","width":1024,"height":1024,"format":"jpg"};

const Charlotte = {"src":"/_astro/charlotte.ff83923a.jpg","width":1024,"height":1024,"format":"jpg"};

const Rob = {"src":"/_astro/rob.c5e9f311.jpg","width":1024,"height":1024,"format":"jpg"};

const Lara = {"src":"/_astro/lara.42e93f69.jpg","width":1024,"height":1024,"format":"jpg"};

const Sarah = {"src":"/_astro/sarah.11c0e4dd.jpg","width":1024,"height":1024,"format":"jpg"};

const data$2 = [
		{
			"name": "Nicolas Lawson",
			"designation": "Designer",
			"rating": 5,
			"testimonial": "Natural Patterns turned our vague ideas into an awe-inspiring reality. Their design team crafted a paradise that exceeded our wildest dreams!",
			"profile_image": Nicolas
		},
		{
			"name": "Charlotte McGreggor",
			"designation": "Manager",
			"rating": 4,
			"testimonial": "We were blown away by the attention to detail in our landscape design. Every corner feels like a work of art. Thank you, Natural Patterns!",
			"profile_image": Charlotte
		},
		{
			"name": "Rob Townsend",
			"designation": "Real Estate Agent",
			"rating": 5,
			"testimonial": "The Natural Patterns team truly captured the essence of our home in their design. Our outdoor space has become an extension of who we are.",
			"profile_image": Rob 
		},
		{
			"name": "Lara Tsar",
			"designation": "Pricinpal administrator",
			"rating": 5,
			"testimonial": "From concept to completion, the process was smooth and collaborative. Their designers brought creativity and expertise that made our project seamless.",
			"profile_image": Lara
		},
		{
			"name": "Sarah Jenkins",
			"designation": "Project coordinator",
			"rating": 5,
			"testimonial": "Natural Patterns transformed our backyard into a haven of tranquility. We now spend more time outdoors, surrounded by the beauty they created.",
			"profile_image": Sarah
		}
	];

const data$1 = [
	{
		plan: "Basic",
		price: 29.99,
		features: [
			"Garden Service",
			"Preparing Landscape",
			"Forest Planning",
			"Tree Plantation",
			"Garden Fence"
		],
		CTA_link: "/",
		main_color: "#ffffff",
		button_color: "#ffffff"
	},
	{
		plan: "Standard",
		price: 49.99,
		features: [
			"Garden Service",
			"Preparing Landscape",
			"Forest Planning",
			"Tree Plantation",
			"Garden Fence"
		],
		CTA_link: "/",
		main_color: "#ffffff",
		button_color: "#ffffff"
	},
	{
		plan: "Ultimate",
		price: 69.99,
		features: [
			"Garden Service",
			"Preparing Landscape",
			"Forest Planning",
			"Tree Plantation",
			"Garden Fence"
		],
		CTA_link: "/",
		main_color: "#ffffff",
		button_color: "#ffffff"
	}
];
const PricingDemo = {
	data: data$1
};

const $$Astro$e = createAstro();
const $$RenderFeatures = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$RenderFeatures;
  const {
    features
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="feature-list relative mb-[40px] clearfix">${features && features.length > 0 && features.map((feature, index) => {
    if (index === features.length - 1) {
      return renderTemplate`<li class="relative block text-[17px]">${feature}</li>`;
    }
    return renderTemplate`<li class="relative block text-[17px] mb-[14px]">${feature}</li>`;
  })}</ul>`;
}, "D:/Astro/uthan-site/src/components/pricing_section/render_features.astro", void 0);

const $$Astro$d = createAstro();
const $$PricingPanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$PricingPanel;
  const {
    plan,
    price,
    features,
    CTA_link,
    main_color,
    button_color
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="pricing-block"><div class="pricing-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms"><div class="pricing-table relative block rounded-lg pricing_shadow"><div class="table-header pt-[60px] pb-[60px] pl-[15px] pr-[15px] relative block"><div class="shape-1 absolute" style="background-image: url(../src/assets/images/shape/shape-11.png);"></div><div class="shape-2 absolute" style="background-image: url(../src/assets/images/shape/shape-12.png);"></div><h4 class="relative block text-xl font-medium mb-[7px]">${plan.toUpperCase()}</h4><h2 class="relative block text-2xl font-semibold theme_color mb-[7px]">$${price.toFixed(2)}</h2></div><div class="pricing-content relative block pt-[45px] pr-[15px] pb-[50px] pl-[15px]"><div class="list-inner relative"><div class="shape-3 absolute" style="background-image: url(../src/assets/images/shape/shape-10.png);"></div>${renderComponent($$result, "RenderFeatures", $$RenderFeatures, { "features": features })}</div><div class="btn-box"><a${addAttribute(CTA_link, "href")} class="theme-btn btn-two">Select Now<i class="far fa-long-arrow-right"></i></a></div></div></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/pricing_section/pricing_panel.astro", void 0);

const $$Astro$c = createAstro();
const $$Index$b = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Index$b;
  const {
    pricing_models
  } = Astro2.props;
  return renderTemplate`<!-- pricing-section -->${maybeRenderHead()}<section class="pricing-section relative sec-pad text-center mb-[20px]"><div class="auto-container"><div class="sec-title mb-[45px]"><span class="sub-title">Pricing Table</span><h2>Not Any Hidden Charge <br>Choose Your Price</h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">${pricing_models && pricing_models.length > 0 && pricing_models.map((model) => renderTemplate`${renderComponent($$result, "PricingPanel", $$PricingPanel, { ...model })}`)}</div></div></section><!-- pricing-section end -->`;
}, "D:/Astro/uthan-site/src/components/pricing_section/index.astro", void 0);

const $$Astro$b = createAstro();
const $$Index$a = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$a;
  const {
    BackImg,
    title,
    text = "We Provide Hassle-Free Garden Solutions.",
    CTA_link,
    btnText = "Learn How  We Do?"
  } = Astro2.props;
  return renderTemplate`<!-- cta-section -->${maybeRenderHead()}<section class="cta-section relative pt-[140px] pb-[140px]"${addAttribute(`background-image: url(${BackImg.src});`, "style")}><div class="auto-container"><div class="relative flex flex-col gap-1 sm:flex-row clearfix"><div class="sec-title light float-left"><span class="sub-title">${title.toUpperCase()}</span><h2 class="">${text}</h2></div><div class="btn-box float-right mt-[50px] whitespace-nowrap"><a${addAttribute(CTA_link, "href")} class="theme-btn btn-one">${btnText}<i class="far fa-long-arrow-right"></i></a></div></div></div></section><!-- cta-section end -->`;
}, "D:/Astro/uthan-site/src/components/parallax_banner/index.astro", void 0);

const $$Astro$a = createAstro();
const $$Index$9 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index$9;
  const {
    postSelection
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="my-5 relative max-w-[1200px] mx-auto px-[15px]"><div class="sec-title mb-[55px] text-center"><span class="sub-title relative block text-[18px] leading-[28px] font-['Monserrat'] font-bold mb-[16px] uppercase">Articles</span><h2 class="block text-[36px] leading-[44px] sm:text-[55px] sm:leading-[65px] font-['Prata'] relative font-medium text-[#141417] m-0">Stay Update With <br>${SiteData.business_name}</h2></div>${postSelection && postSelection.length > 0 ? renderTemplate`<div class="grid sm:grid-cols-3 gap-5">${postSelection.map(
    async (post) => {
      if (post.frontmatter.featured_image) {
        return renderTemplate`${renderComponent($$result, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url, "thumbnail": post.frontmatter.featured_image })}`;
      }
      return renderTemplate`${renderComponent($$result, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url })}`;
    }
  )}</div>` : renderTemplate`<p class="text-center text-base mx-auto my-10">There are currently not blog posts to show.</p>`}</div>`;
}, "D:/Astro/uthan-site/src/components/blogSection/index.astro", void 0);

const $$Astro$9 = createAstro();
const $$Index$8 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$8;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1 copy.md": () => import('./post-1 copy_f717e2e3.mjs').then(n => n.p),"./posts/post-1.md": () => import('./post-1_d4dbf775.mjs'),"./posts/post-3.md": () => import('./post-3_241f2377.mjs'),"./posts/post-4.md": () => import('./post-4_17a3d21b.mjs'),"./posts/post-6.md": () => import('./post-6_d7d3732a.mjs'),"./posts/post-7.md": () => import('./post-7_0713cf6a.mjs'),"./posts/this-is-the-7th-blog.md": () => import('./this-is-the-7th-blog_032a464d.mjs')}), () => "./posts/*.md");
  const sortedPosts = allPosts.sort((a, b) => {
    var a_date = new Date(a.frontmatter.pubDate);
    var b_date = new Date(b.frontmatter.pubDate);
    return b_date.getTime() - a_date.getTime();
  }).slice(0, 3);
  RecentPostsStore.set(sortedPosts);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Home" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "BannerSection", $$Index$g, {})}${renderComponent($$result2, "AboutSection", $$About, {})}${renderComponent($$result2, "ChooseUsSection", $$Index$j, {})}${renderComponent($$result2, "ServiceSection", $$Index$f, {})}${renderComponent($$result2, "ProjectSection", $$Index$e, { "ProjectGallery": projects$1 })}${renderComponent($$result2, "TeamSection", $$Index$d, {})}${renderComponent($$result2, "Testimonial", $$Index$c, { "testimonials": data$2 })}${renderComponent($$result2, "PricingSection", $$Index$b, { "pricing_models": PricingDemo.data })}${renderComponent($$result2, "ParallaxBanner", $$Index$a, { "BackImg": BackImg, "title": "Artistic solutions", "text": "We Provide Hassle-Free Garden Solutions.", "CTA_link": "/about" })}${renderComponent($$result2, "BlogSection", $$Index$9, { "postSelection": sortedPosts })}` })}`;
}, "D:/Astro/uthan-site/src/pages/index.astro", void 0);

const $$file$5 = "D:/Astro/uthan-site/src/pages/index.astro";
const $$url$5 = "";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$8,
    file: $$file$5,
    url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$Index$7 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$7;
  return renderTemplate`${maybeRenderHead()}<div class="absolute left-0 right-0 bottom-[-1px] sm:bottom-0 bg-repeat-x h-[54px] w-full z-[19] bg-[url('../../../src/assets/images/shape/shape-2.png')] animated-grass"></div>`;
}, "D:/Astro/uthan-site/src/components/animated_grass/index.astro", void 0);

const $$Astro$7 = createAstro();
const $$Index$6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$6;
  const {
    image = "../../src/assets/images/banner/japanese-garden.jpg",
    title,
    subtitle,
    button_label,
    link
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="small_banner"${addAttribute(`relative h-[250px] w-full bg-center before:absolute  before:content-[''] before:bg-[rgba(0,0,0,0.4)] before:w-full before:h-full before:z-10`, "class")}><img${addAttribute(image, "src")} class="w-full h-full object-cover" alt="banner image">${title && renderTemplate`${renderComponent($$result, "TitleComponent", $$Index$h, { "title": title, "subtitle": subtitle, "button_label": button_label, "link": link, "wrapperStyle": "w-11/12 mx-auto", "titleStyle": "whitespace-nowrap text-white text-center text-[50px] leading-[50px] sm:text-[90px] sm:leading-[90px] fadeInUp font-['Prata',serif]" })}`}${renderComponent($$result, "AnimatedGrass", $$Index$7, {})}</div>`;
}, "D:/Astro/uthan-site/src/components/small_banner/index.astro", void 0);

const $$Astro$6 = createAstro();
const $$ServiceBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ServiceBlock;
  const {
    thumbnail,
    title,
    tagline
  } = Astro2.props;
  const urlTitle = `../../services/${title.toLowerCase().replace(/\s+/g, "_")}`;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg service-block h-full"><div class="service-block-one wow fadeInUp h-full animated" data-wow-delay="00ms" data-wow-duration="1500ms"><div class="inner-box relative block bg-white rounded-[5px] h-full py-[30px] px-1 sm:px-10 box_shadow grow"><div class="image-box relative block mb-[45px]"><figure class="w-[190px] h-[190px] inline-block rounded-full img_hover_1 overflow-hidden"><img${addAttribute(thumbnail.src, "src")}${addAttribute(`${title} thumbnail`, "alt")} class="bg-center w-full h-full object-cover"></figure><div class="absolute overflow-hidden w-[70px] h-[70px] leading-[70px] bg-[#eaf1ee] left-[50%] translate-x-[-50%] bottom-[-46px] icon_overlay text-[#2f7955] rounded-[10px] z-2 mb-[30px] text-[35px] inline-block icon-block"><i class="icon-10"></i></div></div><h3 class="relative block text-[22px] mb-[17px] font-medium"><a${addAttribute(urlTitle, "href")} class="inline-block">${title}</a></h3><p class="mb-[17px]">${tagline}</p><div class="link-box relative cursor-pointer"><a${addAttribute(urlTitle, "href")} class="text-[#b6b7b9] inline-block link-btn"><i class="far fa-long-arrow-right text-[20px]"></i></a><a${addAttribute(urlTitle, "href")} class="overlay-btn font-[16px] absolute font-medium inline-block whitespace-nowrap">Learn More<i class="far fa-long-arrow-right absolute text-[20px]"></i></a></div></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/serviceComponent/service-block.astro", void 0);

const LeftLeaf = {"src":"/_astro/shape-35.901717a1.png","width":107,"height":100,"format":"png"};

const RightLeaf = {"src":"/_astro/shape-34.aadd7b1f.png","width":107,"height":100,"format":"png"};

const $$Astro$5 = createAstro();
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$5;
  const {
    serviceList,
    title,
    subtitle
  } = Astro2.props;
  console.log("serviceList: ", serviceList);
  return renderTemplate`${maybeRenderHead()}<section class="service-section relative p-[100px_0px_150px_0px] text-center"><div class="auto-container"><img${addAttribute(LeftLeaf.src, "src")} alt="left leaf" class="hidden sm:block absolute left-0 right-auto z-0 sm:w-[150px] h-auto"><img${addAttribute(RightLeaf.src, "src")} alt="right leaf" class="hidden sm:block absolute right-0 left-auto z-0 sm:w-[150px] h-auto"><div class="sec-title mb-[35px]">${title && renderTemplate`<span class="sub-title">${title}</span>`}<h2>What Kind of Services <br>We are Offering</h2></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 h-fit">${serviceList && serviceList.length > 0 && serviceList.map(
    (service) => renderTemplate`${renderComponent($$result, "ServiceBlock", $$ServiceBlock, { "thumbnail": service.thumbnail, "title": service.title, "tagline": service.tagline, "link": service.link })}`
  )}</div></div></section>`;
}, "D:/Astro/uthan-site/src/components/serviceComponent/index.astro", void 0);

const LandscapeDesign = {"src":"/_astro/landscape-design.2005bfeb.jpg","width":190,"height":190,"format":"jpg"};

const TreeRemoval = {"src":"/_astro/tree-removal-small.d403e7bf.jpg","width":6000,"height":4000,"format":"jpg"};

const LawnReturfing = {"src":"/_astro/lawn-2-small.d58fbb36.jpg","width":4000,"height":3000,"format":"jpg"};

const ArtificalTurfInstallation = {"src":"/_astro/lawn-small.4986cadd.jpg","width":292,"height":190,"format":"jpg"};

const LandscapeDesignImg1 = {"src":"/_astro/landscape-design-2.bd59a22c.jpg","width":1920,"height":1281,"format":"jpg","orientation":1};

const TreeRemovalImg1 = {"src":"/_astro/tree-removal.ca8cc50a.jpg","width":1280,"height":853,"format":"jpg"};

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

const $$Astro$4 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$4;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Services", "CTA_Banner": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$6, { "title": "Services" })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "ServiceSection", $$Index$5, { "title": "Transforming Outdoor Dreams into Breathtaking Realities", "subtitle": "Your Landscape, Our Expertise", "serviceList": data })}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/services/index.astro", void 0);

const $$file$4 = "D:/Astro/uthan-site/src/pages/services/index.astro";
const $$url$4 = "/services";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$4,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1 copy.md": () => import('./post-1 copy_f717e2e3.mjs').then(n => n.p),"../posts/post-1.md": () => import('./post-1_d4dbf775.mjs'),"../posts/post-3.md": () => import('./post-3_241f2377.mjs'),"../posts/post-4.md": () => import('./post-4_17a3d21b.mjs'),"../posts/post-6.md": () => import('./post-6_d7d3732a.mjs'),"../posts/post-7.md": () => import('./post-7_0713cf6a.mjs'),"../posts/this-is-the-7th-blog.md": () => import('./this-is-the-7th-blog_032a464d.mjs')}), () => "../posts/*.md");
  var allTags = allPosts.map((post) => post.frontmatter.tags).flat().map((item) => item.tag);
  const tags = [...new Set(allTags)];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Search Posts By Index" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 class="font-bold text-2xl">Search posts by index</h1><ul>${tags && tags.length > 0 && tags.map((tag) => renderTemplate`<li class="hover:underline hover:font-bold my-5 cursor-pointer capitalize rounded-[0.5em] border-dotted border-2 text-[1.5rem] border-[#a1a1a1] p-1 bg-[#F8FCFD] tagListItem"><a${addAttribute(`../tags/${tag}`, "href")}>${tag}</a></li>`)}</ul>` })}`;
}, "D:/Astro/uthan-site/src/pages/tags_old/index.astro", void 0);

const $$file$3 = "D:/Astro/uthan-site/src/pages/tags_old/index.astro";
const $$url$3 = "/tags_old";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$3,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1 copy.md": () => import('./post-1 copy_f717e2e3.mjs').then(n => n.p),"../posts/post-1.md": () => import('./post-1_d4dbf775.mjs'),"../posts/post-3.md": () => import('./post-3_241f2377.mjs'),"../posts/post-4.md": () => import('./post-4_17a3d21b.mjs'),"../posts/post-6.md": () => import('./post-6_d7d3732a.mjs'),"../posts/post-7.md": () => import('./post-7_0713cf6a.mjs'),"../posts/this-is-the-7th-blog.md": () => import('./this-is-the-7th-blog_032a464d.mjs')}), () => "../posts/*.md");
  const allAuthors = [...new Set(allPosts.map((post) => post.frontmatter.author))];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Authors" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<h1 class="font-bold">Authors</h1>${allAuthors ? renderTemplate`<ul>${allAuthors.map((author) => renderTemplate`<a${addAttribute(`/authors/${author}`, "href")}><li>${author}</li></a>`)}</ul>` : renderTemplate`<p>There are currently no authors on the site yet.</p>`}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/authors/index.astro", void 0);

const $$file$2 = "D:/Astro/uthan-site/src/pages/authors/index.astro";
const $$url$2 = "/authors";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1 copy.md": () => import('./post-1 copy_f717e2e3.mjs').then(n => n.p),"../posts/post-1.md": () => import('./post-1_d4dbf775.mjs'),"../posts/post-3.md": () => import('./post-3_241f2377.mjs'),"../posts/post-4.md": () => import('./post-4_17a3d21b.mjs'),"../posts/post-6.md": () => import('./post-6_d7d3732a.mjs'),"../posts/post-7.md": () => import('./post-7_0713cf6a.mjs'),"../posts/this-is-the-7th-blog.md": () => import('./this-is-the-7th-blog_032a464d.mjs')}), () => "../posts/*.md");
  var allTags = allPosts.map((post) => post.frontmatter.tags).flat().map((item) => item.tag);
  const tags = [...new Set(allTags)];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Search Posts By Index" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<h1 class="font-bold text-2xl text-center mt-10">Search posts by index</h1><ul>${tags && tags.length > 0 && tags.map((tag) => renderTemplate`<li class="hover:underline hover:font-bold my-5 cursor-pointer capitalize rounded-[0.5em] border-dotted border-2 text-[1.5rem] border-[#a1a1a1] p-1 bg-[#F8FCFD] tagListItem"><a${addAttribute(`../tags/${tag}/1`, "href")}>${tag}</a></li>`)}</ul>` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/tags/index.astro", void 0);

const $$file$1 = "D:/Astro/uthan-site/src/pages/tags/index.astro";
const $$url$1 = "/tags";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate``;
}, "D:/Astro/uthan-site/src/pages/team/index.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/team/index.astro";
const $$url = "/team";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index$6 as $, Shape3 as S, $$Index$c as a, index$4 as b, index$3 as c, data as d, index$2 as e, index$1 as f, index as g, index$5 as i, projects$1 as p };
