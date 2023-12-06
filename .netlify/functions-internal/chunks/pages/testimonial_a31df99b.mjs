/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, b as addAttribute, m as maybeRenderHead } from '../astro_32dbe7d3.mjs';
import 'clsx';
import { C as CarouselPosition, T as TestimonialSideDirection, $ as $$BaseLayout } from './404_d52c293a.mjs';
/* empty css                           */import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect, createElement } from 'react';
import uuid from 'react-uuid';
import { useStore } from '@nanostores/react';
import { $ as $$Index$1 } from './contact_70be9fa8.mjs';

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
          style: { backgroundImage: `url(${ShapeEight.src})` }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "text relative mb-[10px] block", children: /* @__PURE__ */ jsx("p", { children: testimonial }) }),
      /* @__PURE__ */ jsx(RenderRating, { rating }),
      /* @__PURE__ */ jsxs("div", { className: "author-box relative flex pl-[65px]", children: [
        /* @__PURE__ */ jsx("figure", { className: "author-thumb absolute", children: /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            decoding: "async",
            src: profile_image.src,
            alt: ""
          }
        ) }),
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
      className: "carousel-grid xm:grid-cols-[repeat(auto-fill,300px)] mx-auto grid grid-cols-[repeat(auto-fill,250px)] gap-10 sm:grid-cols-[repeat(auto-fill,350px)] justify-evenly",
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
  return /* @__PURE__ */ jsx("div", { ref: slideRef, className: "carousel-grid mx-auto grid", children: testimonials && testimonials.length > 0 && displayed.map((testimonial) => /* @__PURE__ */ createElement(Item, { ...testimonial, key: uuid() })) });
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
        className: "owl-prev nav_box_shadow relative mr-[10px] inline-block h-[60px] w-[60px] cursor-pointer rounded-md bg-[#fff] text-center text-[20px] leading-[60px] text-[#2f7955] transition-all active:translate-x-1 active:translate-y-1",
        onClick: SlideRight,
        children: /* @__PURE__ */ jsx("span", { className: "far fa-long-arrow-left" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "owl-next nav_box_shadow relative inline-block h-[60px] w-[60px] cursor-pointer rounded-md bg-[#fff] text-center text-[20px] leading-[60px] text-[#2f7955] transition-all active:translate-x-1 active:translate-y-1",
        onClick: SlideLeft,
        children: /* @__PURE__ */ jsx("span", { className: "far fa-long-arrow-right" })
      }
    )
  ] });
};

const TestimonialBG = {"src":"/_astro/testimonial-bg.1c284a1c.jpg","width":930,"height":620,"format":"jpg"};

const ShapeNine = {"src":"/_astro/shape-9.0d66612f.png","width":341,"height":385,"format":"png"};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    testimonials
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<section class="testimonial-section relative sec-pad mb-[10px]"><div class="bg-layer absolute bg-center" id="testimonial-background"', '></div><div id="shape-9" class="slideOutLeft absolute left-[0px] bottom-[0px] w-[341px] h-[385px] bg-norepeat"', '></div><div class="auto-container"><div class="flex flex-wrap lg:flex-nowrap justify-between"><div class="w-full lg:w-4/12 md:w-full sm:w-full title-column"><div class="sec-title"><span class="sub-title">Testimonials</span><h2>Trusted by 10K Customer</h2>', '</div></div><div class="w-full md:w-full sm:w-full inner-column"><div class="inner-content desktop_carousel">', '</div><div class="inner-content mobile_carousel">', '</div></div></div></div></section><script>\n    const ShapeNine = document.getElementById("shape-9")\n    let options = {\n        threshold: 1.0,\n    }\n    const ShapeNineObserver = new IntersectionObserver((entries)=>{\n        if(entries[0].isIntersecting){\n            entries[0].target.classList.remove("slideOutLeft")\n        }\n        else{\n            entries[0].target.classList.add("slideOutLeft")\n        }\n    })\n    if(ShapeNine)\n        ShapeNineObserver.observe(ShapeNine); \n<\/script>'])), maybeRenderHead(), addAttribute(`background-image: url(${TestimonialBG.src})`, "style"), addAttribute(`background-image: url(${ShapeNine.src})`, "style"), renderComponent($$result, "NavButtons", CarouselNav, { "client:visible": true, "size": testimonials.length, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/Testimonial/carousel-nav.tsx", "client:component-export": "default" }), renderComponent($$result, "Carousel", Carousel$1, { "testimonials": testimonials, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/Testimonial/carousel.tsx", "client:component-export": "default" }), renderComponent($$result, "MobileCarousel", Carousel, { "testimonials": testimonials, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/Testimonial/carousel-mobile.tsx", "client:component-export": "default" }));
}, "D:/Astro/uthan-site/src/components/Testimonial/index.astro", void 0);

const Nicolas = {"src":"/_astro/nicolas.ea242a60.jpg","width":1024,"height":1024,"format":"jpg"};

const Charlotte = {"src":"/_astro/charlotte.fe5065e7.jpg","width":1024,"height":1024,"format":"jpg"};

const Rob = {"src":"/_astro/rob.0a18b3c9.jpg","width":1024,"height":1024,"format":"jpg"};

const Lara = {"src":"/_astro/lara.4df654e0.jpg","width":1024,"height":1024,"format":"jpg"};

const Sarah = {"src":"/_astro/sarah.40578301.jpg","width":1024,"height":1024,"format":"jpg"};

const data = [
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

const $$Astro = createAstro();
const $$Testimonial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonial;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Testimonial", "customDescription": "Testimonials", "CTA_Banner": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$1, { "title": "Testimonials", "subtitle": "See what people have been saying about us." })}${renderComponent($$result2, "TestimonialSection", $$Index, { "testimonials": data })}` })}`;
}, "D:/Astro/uthan-site/src/pages/testimonial.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/testimonial.astro";
const $$url = "/testimonial";

const testimonial = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Testimonial,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, data as d, testimonial as t };
