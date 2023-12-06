/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, s as spreadAttributes, u as unescapeHTML, F as Fragment$1, e as renderSlot, f as renderHead } from '../astro_32dbe7d3.mjs';
import 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useRef, useEffect, createElement } from 'react';
import uuid from 'react-uuid';
/* empty css                            */import { optimize } from 'svgo';
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

const title = "template site";
const business_name = "Natural Patterns Landscaping";
const description = "Transforming Spaces with Nature's Elegance | Natural Patterns Landscaping";
const year_founded = 1997;
const owner_name = "TheLastSliceOfPizza";
const owner_email = "hualbert@rocketmail.com";
const address = "Chicago 13";
const city = "Melbourne City";
const state = "FL";
const country = "United States";
const zip = "94511";
const business_email = "uthan@example.com";
const business_phone = "(915)365-1515";
const image = {
	src: "",
	alt: ""
};
const facebook = "https://www.facebook.com";
const twitter = "https://www.x.com";
const pinterest = "https://www.pinterest.com";
const instagram = "https://www.instagram.com";
const youtube = "https://www.youtube.com";
const SiteData = {
	title: title,
	business_name: business_name,
	description: description,
	year_founded: year_founded,
	owner_name: owner_name,
	owner_email: owner_email,
	address: address,
	city: city,
	state: state,
	country: country,
	zip: zip,
	business_email: business_email,
	business_phone: business_phone,
	image: image,
	facebook: facebook,
	twitter: twitter,
	pinterest: pinterest,
	instagram: instagram,
	youtube: youtube
};

const $$Astro$n = createAstro();
const $$SocialLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$SocialLinks;
  const { customStyle } = Astro2.props;
  const { followUsText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customStyle ? customStyle : "grid sm:flex sm:flex-row"}`, "class")}>${followUsText && renderTemplate`<div><p>Follow Us:</p></div>`}<div class="text-white sm:ml-5 [&>div]:mr-5 flex">${SiteData.twitter && renderTemplate`<div><a${addAttribute(SiteData.twitter, "href")}><span class="fab fa-twitter"></span></a></div>`}${SiteData.facebook && renderTemplate`<div><a${addAttribute(SiteData.facebook, "href")}><span class="fab fa-facebook-square"></span></a></div>`}${SiteData.pinterest && renderTemplate`<div><a${addAttribute(SiteData.pinterest, "href")}><span class="fab fa-pinterest-p"></span></a></div>`}${SiteData.instagram && renderTemplate`<div><a${addAttribute(SiteData.instagram, "href")}><span class="fab fa-instagram"></span></a></div>`}${SiteData.youtube && renderTemplate`<div><a${addAttribute(SiteData.youtube, "href")}><span class="fab fa-youtube"></span></a></div>`}</div></div>`;
}, "D:/Astro/uthan-site/src/components/social-links.astro", void 0);

const Shape16 = {"src":"/_astro/shape-16.ff428bb3.png","width":76,"height":41,"format":"png"};

const $$Astro$m = createAstro();
const $$HeaderTop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$HeaderTop;
  return renderTemplate`<!-- header-top -->${maybeRenderHead()}<div class="hidden sm:block header-top relative w-full py-0 lg:pt-[14px] lg:pb-[30px] bg-[#1d4a34]"><div class="shape"${addAttribute(`background-image: url(${Shape16.src})`, "style")}></div><div class="auto-container"><div class="top-inner clearfix"><div class="left-column pull-left">${renderComponent($$result, "SocialLinks", $$SocialLinks, { "followUsText": true, "customStyle": "grid sm:flex sm:flex-row text-center mx-auto w-full justify-center sm:w-fit " })}</div>${(SiteData.business_phone || SiteData.business_email) && renderTemplate`<div class="right-column pull-right"><ul class="grid sm:flex sm:flex-row sm:gap-[10px] sm:w-fit sm:mx-auto">${SiteData.business_phone && renderTemplate`<li class="!mx-auto w-fit flex flex-row gap-[5px]"><div class="icon-box flex justify-center [&>*]:m-auto"><i class="fas fa-phone text-white"></i></div><p>Call: <a${addAttribute(`tel:${SiteData.business_phone}`, "href")} class="xm_414:font-bold">${SiteData.business_phone}</a></p></li>`}${SiteData.business_phone && SiteData.business_email && renderTemplate`<li class="sm:block sm:mx-5 hidden">|</li>`}${SiteData.business_email && renderTemplate`<li class="!mx-auto w-fit flex flex-row gap-[5px]"><div class="icon-box flex justify-center [&>*]:m-auto"><i class="fas fa-envelope text-white"></i></div><p>Email: <a${addAttribute(`mailto:${SiteData.business_email}`, "href")}>${SiteData.business_email}</a></p></li>`}</ul></div>`}</div></div></div>`;
}, "D:/Astro/uthan-site/src/components/HeaderComponent/header-top.astro", void 0);

const Logo = {"src":"/_astro/logo.9de84ffb.png","width":1066,"height":434,"format":"png"};

const $$Astro$l = createAstro();
const $$LogoComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$LogoComponent;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`cursor-pointer block w-fit m-auto text-center ${customStyle ? customStyle : "h-auto w-auto"}`, "class")} id="LogoWrapper"><a href="/"><img${addAttribute(Logo.src, "src")} class="h-fit w-auto m-auto max-h-[100px]" alt="Logo"></a></div>`;
}, "D:/Astro/uthan-site/src/components/logoComponent.astro", void 0);

const ShapeOne = {"src":"/_astro/shape-1.a8fcab25.png","width":181,"height":19,"format":"png"};

const $$Astro$k = createAstro();
const $$Shape1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Shape1;
  return renderTemplate`${maybeRenderHead()}<div class="hidden sm:block absolute left-[0px] bottom-[-21px] w-[181px] h-[25px] object-cover" id="shape-1"><img${addAttribute(ShapeOne.src, "src")} class="w-full h-full" alt="decorative shape"></div>`;
}, "D:/Astro/uthan-site/src/components/HeaderComponent/shape-1.astro", void 0);

const $$Astro$j = createAstro();
const $$NavItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$NavItem;
  const {
    label,
    url,
    subDirectory
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="current dropdown text-[#25283a] cursor-pointer !block"><a${addAttribute(url, "href")}>${label}</a>${subDirectory && subDirectory.length > 0 && renderTemplate`<ul>${subDirectory.map((item) => renderTemplate`<li class="current dropdown text-[#25283a] cursor-pointer !block"><a${addAttribute(item.url.toLowerCase(), "href")}>${item.label}</a></li>`)}</ul>`}</li>`;
}, "D:/Astro/uthan-site/src/components/HeaderComponent/NavItem.astro", void 0);

const menuMap = [
	{
		url: '/',
		label: 'Home',
		subDirectory: []
	},
	{
		url: '/about/',
		label: 'About',
		subDirectory: []
	},
	{
		url: '/services',
		label: 'Services',
		subDirectory: [
			{
				url: '/services/landscape_design',
				label: 'Landscape Design',
				subDirectory: []
			},
			{
				url: '/services/tree_removal',
				label: 'Tree Removal',
				subDirectory: []
			},
			{
				url: '/services/lawn_returfing',
				label: 'Lawn Returfing',
				subDirectory: []
			},
			{
				url: '/services/artifical_turf_installation',
				label: 'Artifical Turf',
				subDirectory: []
			}
		]
	},
	{
		url: '/#project-section',
		label: 'Projects',
		subDirectory: [
			{
				url: '/projects/green_technology',
				label: 'Green Technology',
				subDirectory: []
			},
						{
				url: '/projects/Zen_Garden_Oasis',
				label: 'Zen Garden Oasis',
				subDirectory: []
			},
						{
				url: '/projects/Edible_Garden_Delight',
				label: 'Edible Garden Delight',
				subDirectory: []
			},
						{
				url: '/projects/Tranquil_Water_Feature',
				label: 'Tranquil Water Feature',
				subDirectory: []
			},
						{
				url: '/projects/Vertical_Garden_Showcase',
				label: 'Vertical Garden',
				subDirectory: []
			},
						{
				url: '/projects/Sustainable_Garden_Retreat',
				label: 'Sustainable Garden',
				subDirectory: []
			},
						{
				url: '/projects/Blossoming_Flower_Haven',
				label: 'Flower Haven',
				subDirectory: []
			},
						{
				url: '/projects/Cozy_Garden_Nook',
				label: 'Cozy Garden Nook',
				subDirectory: []
			}
		]
	},
	{
		url: '/blog/1',
		label: 'Blog',
		subDirectory: []
	}, 
	{
		url: '/contact/',
		label: 'Contact',
		subDirectory: []
	}
];

const $$Astro$i = createAstro();
const $$HeaderLower = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$HeaderLower;
  return renderTemplate`<!-- header-lower -->${maybeRenderHead()}<div id="header-lower" class="header-lower font-[Monserrat] box_shadow"><div class="auto-container"><div class="justify-between flex flex-nowrap"><div class="logo-box p-5 sm:py-[37.5px] my-auto">${renderComponent($$result, "ShapeOne", $$Shape1, {})}<figure class="logo">${renderComponent($$result, "LogoComponent", $$LogoComponent, {})}</figure></div><div class="menu-area clearfix my-auto"><div id="mobile-nav-toggler" class="mobile-nav-toggler"><i class="icon-bar"></i><i class="icon-bar"></i><i class="icon-bar"></i></div><nav class="main-menu navbar-expand-md navbar-light"><div class="" id="navbarSupportedContent"><ul class="navigation clearfix flex">${menuMap && menuMap.length > 0 && menuMap.map((item) => renderTemplate`${renderComponent($$result, "NavItem", $$NavItem, { ...item })}`)}</ul></div></nav></div><div class="hidden sm:flex relative items-center justify-center py-[30px]"><div class="btn-box"><a href="/contact" class="theme-btn btn-one">Get A Quote</a></div></div></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/HeaderComponent/header-lower.astro", void 0);

const MenuLinks = () => {
  return menuMap.length > 0 && menuMap.map((link, index) => /* @__PURE__ */ jsx("div", { className: "mobile-menu-links", children: /* @__PURE__ */ jsx(LinkItem, { ...link }) }, `${link.label}-${index}`));
};
const LinkItem = (props) => {
  const { url, label, subDirectory } = props;
  const arrowRef = useRef(null);
  const subDirRef = useRef(null);
  const dirRef = useRef(null);
  const toggleEvent = (event) => {
    if (arrowRef.current && arrowRef?.current?.contains(event.target)) {
      if (arrowRef?.current?.classList.contains("menu-arrow-open")) {
        arrowRef?.current?.classList.remove("menu-arrow-open");
        subDirRef?.current?.classList.add("subDirectory-closed");
      } else {
        arrowRef?.current?.classList.add("menu-arrow-open");
        subDirRef?.current?.classList.remove("subDirectory-closed");
      }
    }
  };
  useEffect(() => {
    if (dirRef.current && window.location.pathname == url) {
      dirRef.current.classList.add("currentPage");
    } else {
      if (dirRef.current && dirRef?.current.classList.contains("currentPage"))
        dirRef.current.classList.remove("currentPage");
    }
  }, [dirRef.current]);
  useEffect(() => {
    if (arrowRef.current) {
      arrowRef.current.addEventListener("mousedown", toggleEvent);
    }
    return () => {
      arrowRef?.current?.removeEventListener("mousedown", toggleEvent);
    };
  }, [arrowRef.current]);
  useEffect(() => {
    if (subDirRef.current && subDirectory && subDirectory?.length > 0) {
      var maxHeight = subDirectory?.length * 45;
      subDirRef.current.style.maxHeight = `${maxHeight}px`;
    }
  }, [subDirRef.current]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: dirRef,
        className: "relative flex flex-row items-center justify-around border-t-[1px] border-t-[#686868] py-[10px] pl-[25px] hover:bg-slate-800",
        children: [
          /* @__PURE__ */ jsx("a", { href: url, className: "leader-[24px] relative !my-auto block", children: label }),
          subDirectory && subDirectory.length > 0 && /* @__PURE__ */ jsx("div", { className: "leader-[32px] absolute right-[-15px] z-[5] mr-5 h-[32px] w-[32px] cursor-pointer rounded-[2px] text-center text-[16px]", children: /* @__PURE__ */ jsx(
            "span",
            {
              ref: arrowRef,
              className: "fas fa-angle-down menu-arrow relative text-center"
            }
          ) })
        ]
      }
    ),
    subDirectory && subDirectory.length > 0 && /* @__PURE__ */ jsx("div", { className: "subDirectoryDiv subDirectory-closed", ref: subDirRef, children: subDirectory.map((sub, index) => /* @__PURE__ */ createElement(
      LinkItem,
      {
        ...sub,
        key: uuid()
      }
    )) })
  ] });
};

const WhiteLogo = {"src":"/_astro/logo-white.359044a6.png","width":2000,"height":2000,"format":"png"};

const $$Astro$h = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${maybeRenderHead()}<div id="mobile-menu" class="grid h-full fixed left-auto right-0 top-0 overflow-y-auto overflow-x-hidden w-[250px] z-[999] bg-black mobile-menu-close"><div id="close-btn" class="h-fit"><i class="fas fa-times close-btn"></i></div><nav class=""><div class="nav-logo w-10/12 mx-auto userselect-none"><a href="../../../"><img loading="lazy" decoding="async"${addAttribute(WhiteLogo.src, "src")} alt="Logo" class="h-full w-full"></a></div><div class="menu-outer mt-[25px]">${renderComponent($$result, "MenuLinks", MenuLinks, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/HeaderComponent/MobileMenu/menuLinks.tsx", "client:component-export": "default" })}</div><div class="contact-info text-white pl-[25px] border-t-[1px] border-[#d6d6d6]"><h4>Contact Info</h4><ul>${SiteData && SiteData.address && renderTemplate`<li>${SiteData.address},</li>`}${SiteData && (SiteData.city || SiteData.state || SiteData.country || SiteData.zip) && renderTemplate`<li>${SiteData.city && renderTemplate`<span>${SiteData.city},</span>`}${SiteData.state && renderTemplate`<span>${SiteData.state},</span>`}${SiteData.country && renderTemplate`<span>${SiteData.country}</span>`}${SiteData.zip && renderTemplate`<span>${SiteData.zip}</span>`}</li>`}${SiteData && SiteData.business_phone && renderTemplate`<li><a href="tel:+8801682648101">${SiteData.business_phone}</a></li>`}${SiteData && SiteData.business_email && renderTemplate`<li><a${addAttribute(`mailto:${SiteData.business_email}`, "href")}>${SiteData.business_email}</a></li>`}</ul></div>${renderComponent($$result, "SocialLinks", $$SocialLinks, { "customStyle": "clearfix flex flex-row [&>li]:mr-5 [&>li>a>span]:text-white my-10 pl-[25px]" })}</nav></div>`;
}, "D:/Astro/uthan-site/src/components/HeaderComponent/MobileMenu/index.astro", void 0);

const $$Astro$g = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Header;
  const { serviceList } = Astro2.props;
  return renderTemplate`<!-- Fav Icon -->${maybeRenderHead()}<header class="main-header">${renderComponent($$result, "HeaderTop", $$HeaderTop, {})}${renderComponent($$result, "HeaderLower", $$HeaderLower, { "serviceList": serviceList })}</header>${renderComponent($$result, "MobileMenu", $$Index$2, {})}`;
}, "D:/Astro/uthan-site/src/components/HeaderComponent/header.astro", void 0);

const $$Astro$f = createAstro();
const $$CreatorComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$CreatorComponent;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="CreatorContainer"${addAttribute(`${customStyle}`, "class")}><div class="mx-auto">Developed by &nbsp;
<span class="underline cursor-pointer font-bold text-lg"><a href="http://portfolio-3b68c.web.app/" target="_blank">Albert Hu</a></span></div></div>`;
}, "D:/Astro/uthan-site/src/components/creatorComponent.astro", void 0);

const $$Astro$e = createAstro();
const $$ColumnLabel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ColumnLabel;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3 class="text-[2.5rem] lh-[35px] color_white">${label}</h3>`;
}, "D:/Astro/uthan-site/src/components/footer/column_label.astro", void 0);

const $$Astro$d = createAstro();
const $$FooterColumn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$FooterColumn;
  const {
    label,
    links
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="footer-column text-left"><div class="footer-widget links-widget"><div class="widget-title relative block mb-[25px]">${renderComponent($$result, "ColumnLabel", $$ColumnLabel, { "label": label })}</div><div class="widget-content"><ul class="links-list clearfix">${links && links.length > 0 && links.map(
    (item, index) => renderTemplate`<li class="relative block mb-[7px]"><a${addAttribute(item.link, "href")} class="relative text-lg inline-block !text-base">${item.label}</a></li>`
  )}</ul></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/footer/footer-column.astro", void 0);

const formatPhoneNumber = (input) => {
  if (!input) {
    return "";
  }
  var digits = input.toString().replace(/\D/g, "");
  if (digits.length < 10) {
    return "Invalid phone number";
  }
  let countryCode = "+1";
  if (digits.length > 10) {
    countryCode = `+${digits.slice(0, digits.length - 10)}`;
    digits = digits.slice(digits.length - 10);
  }
  const formattedNumber = `${countryCode} (${digits.slice(0, 3)}) ${digits.slice(
    3,
    6
  )}-${digits.slice(6)}`;
  return formattedNumber;
};
function phoneNumberToNumeric(input) {
  if (!input) {
    return NaN;
  }
  const digits = input.toString().replace(/\D/g, "");
  let numericValue;
  if (digits.length <= 10) {
    numericValue = parseInt(`1${digits}`, 10);
  } else {
    numericValue = parseInt(digits, 10);
  }
  return numericValue;
}

const $$Astro$c = createAstro();
const $$Contacts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Contacts;
  return renderTemplate`${maybeRenderHead()}<div class="col-lg-3 col-md-6 col-sm-12 footer-column"><div class="footer-widget contact-widget"><div class="widget-title relative block mb-[25px]">${renderComponent($$result, "ColumnLabel", $$ColumnLabel, { "label": "Contacts" })}</div><div class="widget-content"><ul class="contact-info clearfix">${SiteData.address && SiteData.address != "" && renderTemplate`<li class="relative block mb-[20px]"><p class="text-lg">${SiteData.address}</p></li>`}${(SiteData.city || SiteData.state || SiteData.country || SiteData.zip) && renderTemplate`<li class="relative block mb-[20px]"><p class="text-lg">${SiteData.city && renderTemplate`<span>${SiteData.city},</span>`}${SiteData.state && renderTemplate`<span>${SiteData.state}</span>`}${SiteData.zip && renderTemplate`<span>${SiteData.zip}</span>`}</p></li>`}${SiteData.country && renderTemplate`<li class="relative block mb-[20px]"><p class="text-lg">${SiteData.country}</p></li>`}${SiteData.business_phone && renderTemplate`<li class="relative block mb-[20px]"><p class="text-lg"><a${addAttribute(`tel:${phoneNumberToNumeric(SiteData.business_phone)}`, "href")}>${formatPhoneNumber(SiteData.business_phone)}</a></p></li>`}${SiteData.business_email && SiteData.business_email.length > 0 && renderTemplate`<li class="relative block"><p class="text-lg"><a${addAttribute(`mailto:${SiteData.business_email}`, "href")}>${SiteData.business_email}</a></p></li>`}</ul></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/footer/contacts.astro", void 0);

const BackImg = {"src":"/_astro/slide-1.6f37c558.jpg","width":1920,"height":700,"format":"jpg"};

const FooterLogo = {"src":"/_astro/footer-logo.3951c0cb.png","width":90,"height":90,"format":"png"};

const Shape13 = {"src":"/_astro/shape-13.364c4b46.png","width":291,"height":57,"format":"png"};

const Shape14 = {"src":"/_astro/shape-14.c25ef62e.png","width":178,"height":271,"format":"png"};

const Shape15 = {"src":"/_astro/shape-15.59074a54.png","width":196,"height":278,"format":"png"};

const $$Astro$b = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$1;
  const {
    columns,
    CTA_Banner
  } = Astro2.props;
  var YEAR = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="main_footer relative"><div class="footer-logo relative block pb-[50px] text-center bg-[#1d4a34]">${CTA_Banner && renderTemplate`<section class="cta-section relative pt-[140px] pb-[140px]"${addAttribute({ backgroundImage: `url(${BackImg.src})` }, "style")}><div class="auto-container"><div class="relative flex flex-col gap-1 sm:flex-row clearfix justify-between"><div class="sec-title light float-left"><span class="sub-title">Have an idea for a project?</span><h2 class="">Get in touch with us</h2></div><div class="btn-box float-right mt-[50px] sm:whitespace-nowrap"><a href="/contact" class="theme-btn btn-one">Make an appointment<i class="far fa-long-arrow-right"></i></a></div></div></div></section>`}<figure class="logo relative inline-block bg-[#1d4a34]"><div class="shape absolute bg-transparent !z-[1] max-w-[280px] [@media(min-width:290px)]:max-w-none"${addAttribute(`background-image: url(${Shape13.src})`, "style")}></div><a href="/" class="!z-10 relative"><img${addAttribute(FooterLogo.src, "src")} alt="footer logo"></a></figure></div><div class="widget-section relative pt-[65px] pb-[70px] bg-[#1d4a34]"><div class="pattern-layer"><div class="pattern-1 absolute"${addAttribute(`background-image: url(${Shape14.src})`, "style")}></div><div class="pattern-2 absolute"${addAttribute(`background-image: url(${Shape15.src})`, "style")}></div></div><div class="auto-container"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]"><div class="footer-column"><div class="footer-widget about-widget"><div class="widget-title relative block mb-[25px]">${renderComponent($$result, "ColumnLabel", $$ColumnLabel, { "label": "About" })}</div><div class="widget-content"><div class="text relative block mb-[30px]"><p>At Natural Patterns, every project begins with a conversation – a journey into your aspirations and desires. We believe that your vision is the heart of our inspiration. Our team of dedicated artisans and landscaping experts works hand in hand with you to understand your needs, preferences, and the unique characteristics of your space.</p></div><ul class="social-links clearfix"><li class="relative inline-block mr-[10px]"><a href="https://www.facebook.com" class="block color_white hover:bg hover:bg-[#FFFFFF1A] rounded-lg"><i class="fab fa-facebook-f"></i></a></li><li class="relative inline-block mr-[10px]"><a href="https://www.twitter.com" class="block color_white hover:bg hover:bg-[#FFFFFF1A] rounded-lg"><i class="fab fa-twitter"></i></a></li><li class="relative inline-block mr-[10px]"><a href="https://www.vimeo.com" class="block color_white hover:bg hover:bg-[#FFFFFF1A] rounded-lg"><i class="fab fa-vimeo-v"></i></a></li><li class="relative inline-block"><a href="https://www.google.com" class="block color_white hover:bg hover:bg-[#FFFFFF1A] rounded-lg"><i class="fab fa-google-plus-g"></i></a></li></ul></div></div></div>${columns && columns.length > 0 && columns.map((column, index) => renderTemplate`${renderComponent($$result, "FooterColumn", $$FooterColumn, { ...column, "key": `footer-column-${index}` })}`)}${renderComponent($$result, "Contacts", $$Contacts, {})}</div></div></div><div class="footer-bottom pt-[30px] pb-[30px]"><div class="auto-container"><div class="grid"><div class="w-full min-h-[20px] text-slate-300 text-center relative"><div><span id="WebsiteName">${SiteData.business_name}</span> &copy;
<span id="CopyRight">${YEAR}</span></div><ul class=""><li class="inline-block mr-[30px]"><a href="index.html" class="text-[15px]">Terms of Service</a></li><li class="inline-block"><a href="index.html" class="text-[15px]">Privacy Policy</a></li></ul>${renderComponent($$result, "CreatorComponent", $$CreatorComponent, { "customStyle": "sm:absolute sm:right-[10px] sm:top-0" })}</div></div></div></div></footer>`;
}, "D:/Astro/uthan-site/src/components/footer/index.astro", void 0);

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$a = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "D:/Astro/uthan-site/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$9 = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}</svg>`;
}, "D:/Astro/uthan-site/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$8 = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "D:/Astro/uthan-site/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$7 = createAstro();
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>${title ? renderTemplate`<title>${title}</title>` : ""}<use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use></svg>`;
}, "D:/Astro/uthan-site/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$6 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div id="ScrollTopButton" class="ScrollTopButton w-[3rem] h-[3rem] rounded-full fixed bottom-[6rem] right-[2rem] z-20 cursor-pointer block w-fit userselect-none transition-all duration-1000 buttonHidden invisible bg-[#2f7955]">', '</div><script>\n    const indicator = document.querySelector(".scrollToTopIndicator"); \n    const ScrollTopButton = document.querySelector("#ScrollTopButton");\n    ScrollTopButton?.addEventListener("mousedown", ()=>window.scrollTo({top: 0,left: 0,behavior: "smooth",}))\n    const ButtonScrollEvent = (evt) =>{\n        if(indicator.getBoundingClientRect().top  < 0){\n            ScrollTopButton?.classList.remove("invisible")\n            ScrollTopButton?.classList.remove("buttonHidden");\n        }\n        else{\n            ScrollTopButton?.classList.add("invisible")\n            ScrollTopButton?.classList.add("buttonHidden");                   \n        }\n    }\n    window.addEventListener("scroll", ButtonScrollEvent)\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "class": "mx-auto w-[3rem] h-[3rem] userselect-none text-[#dbdbdb]", "name": "ic:sharp-arrow-circle-up" }));
}, "D:/Astro/uthan-site/src/components/buttons/ScrollTopButton/index.astro", void 0);

function slugify(text) {
  return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}

function jsonLDGenerator({ type, post, url }) {
	if (type === 'post') {
		return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title ? post.title : 'website'}",
        "description": "${post.description ? post.description : ''}",
        "image": "${post.images.length > 0 ? post.images[0].image[0].url : ''}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "/author/${slugify(post.author)}"
        },
        "datePublished": "${post.date ? post.date : ''}"
      }
    </script>`
	}
	return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${SiteData.title}",
      "url": "${({}).SITE_URL}"
      }
    </script>`
}

const $$Astro$5 = createAstro();
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    url = Astro2.url,
    image,
    frontmatter,
    robots
  } = Astro2.props;
  const jsonLD = jsonLDGenerator({
    type: frontmatter ? "post" : "website",
    post: frontmatter,
    url
  });
  return renderTemplate`<!-- SEO --><link rel="canonical"${addAttribute(url, "href")}><!-- Open Graph --><meta property="og:site_name"${addAttribute(SiteData.business_name, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:image"${addAttribute(image?.src || SiteData.image.src, "content")}><meta property="og:image:url"${addAttribute(image?.src || SiteData.image.src, "content")}><meta property="og:image:secure_url"${addAttribute(image?.src || SiteData.image.src, "content")}><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="600"><meta property="og:image:alt"${addAttribute(image?.alt || SiteData.image.alt, "content")}><!-- Twitter --><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image"${addAttribute(image?.src || SiteData.image.src, "content")}><meta name="twitter:image:alt"${addAttribute(title, "content")}>${SiteData.twitter && renderTemplate`<meta name="twitter:domain"${addAttribute(SiteData.twitter, "content")}>`}${robots && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<!-- JSON LD -->${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(jsonLD)}` })}`;
}, "D:/Astro/uthan-site/src/components/SEO.astro", void 0);

const projects = [
	{
		name: "Green Technology",
		category: "Planting",
		altText: "Green Technology",
		thumbnail: "../src/assets/images/project/green-technology/thumbnail.jpg",
		images: [
			"../src/assets/images/project/green-technology/picture-1.jpg",
			"../src/assets/images/project/green-technology/picture-2.jpg",
			"../src/assets/images/project/green-technology/picture-3.jpg"
		],
		description: "Immerse yourself in a modern landscape where technology and nature converge. 'Green Technology' showcases a harmonious blend of innovative eco-friendly features and lush plantings. Experience a sustainable oasis that reflects our commitment to the environment.",
		challenge: "Integrating modern technology seamlessly with natural elements presented a unique challenge. Striking the balance between innovation and aesthetics required careful planning.",
		solution: "Our team approached 'Green Technology' with meticulous attention, leveraging smart irrigation systems, solar-powered lighting, and sustainable materials. The result? A harmonious coexistence of technology and nature that enhances both the environment and your lifestyle.",
		client: "TechScape Innovations",
		startDate: "2018-05-15",
		endDate: "2018-09-30"
	},
	{
		name: "Zen Garden Oasis",
		category: "Landscaping",
		altText: "Zen Garden Oasis",
		thumbnail: "../src/assets/images/project/zen-garden-oasis/thumbnail.jpg",
		images: [
			"../src/assets/images/project/zen-garden-oasis/picture-1.jpg",
			"../src/assets/images/project/zen-garden-oasis/picture-2.jpg",
			"../src/assets/images/project/zen-garden-oasis/picture-3.jpg",
			"../src/assets/images/project/zen-garden-oasis/picture-4.jpg",
			"../src/assets/images/project/zen-garden-oasis/picture-5.jpg"
		],
		description: "Discover tranquility in the heart of your property with our Zen Garden Oasis. This meticulously crafted space invites you to unwind and find balance amidst carefully arranged rocks, calming water features, and thoughtfully chosen plant life. Elevate your senses and embark on a journey of serenity.",
		challenge: "Creating an authentic Zen atmosphere demanded meticulous detail, from selecting the right rocks to achieving the ideal water flow for a serene ambiance.",
		solution: "Our experts studied traditional Zen garden principles and artfully incorporated them into 'Zen Garden Oasis.' Every rock, every pebble, and every plant was placed with intention, ensuring a tranquil haven that transports you to a state of peaceful reflection.",
		client: "ZenLife Retreats",
		startDate: "2017-08-10",
		endDate: "2017-12-20"
	},
	{
		name: "Edible Garden Delight",
		category: "Gardening",
		altText: "Edible Garden Delight",
		thumbnail: "../src/assets/images/project/edible-garden-delight/thumbnail.jpg",
		images: [
			"../src/assets/images/project/edible-garden-delight/apples.jpg",
			"../src/assets/images/project/edible-garden-delight/berry-branch.jpg",
			"../src/assets/images/project/edible-garden-delight/grapes.jpg",
			"../src/assets/images/project/edible-garden-delight/planting.jpg",
			"../src/assets/images/project/edible-garden-delight/tangerine.jpg"
		],
		description: "'Edible Garden Delight' brings the joy of homegrown goodness to your doorstep. From vibrant berry branches to juicy tangerines, this garden is a feast for the senses. Experience the satisfaction of harvesting your own produce while surrounded by beauty and nature's bounty.",
		challenge: "Balancing the aesthetic appeal of a garden with the practicality of an edible space required careful selection and arrangement of plants.",
		solution: "'Edible Garden Delight' was born from the synergy of beauty and function. Our team expertly blended fruit-bearing trees, bushes, and vines with vibrant ornamental plants. The result is an edible garden that's not only a feast for the eyes but also provides homegrown nourishment.",
		client: "FreshHarvest Estates",
		startDate: "2019-03-21",
		endDate: "2019-07-15"
	},
	{
		name: "Tranquil Water Feature",
		category: "Landscaping",
		altText: "Tranquil Water Feature",
		thumbnail: "../src/assets/images/project/tranquil-water-feature-thumbnail.jpg",
		description: "Embrace the soothing melody of flowing water with our 'Tranquil Water Feature.' This understated yet captivating addition elevates any landscape. Immerse yourself in the gentle ambiance created by the harmonious combination of water and nature.",
		challenge: "Designing a water feature that seamlessly integrates with the existing landscape while maintaining a soothing atmosphere presented design and logistical challenges.",
		solution: "Our team meticulously assessed the terrain and existing elements to create a water feature that complements its surroundings. The 'Tranquil Water Feature' was carefully positioned, ensuring the natural flow of water harmonizes with the overall landscape, enhancing both aesthetics and ambiance.",
		client: "Serene Escapes",
		startDate: "2016-06-05",
		endDate: "2016-09-15"
	},
	{
		name: "Vertical Garden Showcase",
		category: "Planting",
		altText: "Vertical Garden Showcase",
		thumbnail: "../src/assets/images/project/vertical-garden.jpg",
		description: "Elevate your space to new heights with our 'Vertical Garden Showcase.' This innovative design transforms vertical surfaces into living works of art. Lush vegetation cascades from walls, merging aesthetics with nature in a unique and captivating way.",
		challenge: "Developing a thriving vertical garden required overcoming issues such as proper irrigation, plant selection, and ensuring the health of vegetation.",
		solution: "We took a comprehensive approach to the 'Vertical Garden Showcase.' Our team selected plants with vertical growth habits, implemented efficient irrigation systems, and paid special attention to soil quality. The result is a captivating vertical garden that flourishes in even the most unexpected spaces.",
		client: "GreenScape Innovations",
		startDate: "2018-09-01",
		endDate: "2018-12-10"
	},
	{
		name: "Sustainable Garden Retreat",
		category: "Sustainability",
		altText: "Sustainable Garden Retreat",
		thumbnail: "../src/assets/images/project/blossoming-flower-haven/thumbnail.jpg",
		images: [
			"../src/assets/images/project/edible-garden-delight/apples.jpg",
			"../src/assets/images/project/edible-garden-delight/berry-branch.jpg",
			"../src/assets/images/project/edible-garden-delight/grapes.jpg",
			"../src/assets/images/project/edible-garden-delight/planting.jpg",
			"../src/assets/images/project/edible-garden-delight/tangerine.jpg"
		],
		description: "'Sustainable Garden Retreat' is more than just a garden – it's a commitment to a greener future. Explore an array of thriving plantings and eco-conscious features that exemplify our dedication to sustainability. Experience the beauty of nature while leaving a smaller footprint.",
		challenge: "Balancing sustainability with aesthetic appeal required sourcing eco-friendly materials and implementing responsible design practices.",
		solution: "The 'Sustainable Garden Retreat' is a testament to our commitment to the environment. We sourced reclaimed materials, utilized water-saving features, and designed a landscape that thrives in its ecosystem. The garden stands as a living example of sustainable living that's beautiful, responsible, and enduring.",
		client: "EcoHaven Retreats",
		startDate: "2019-02-12",
		endDate: "2019-06-30"
	},
	{
		name: "Blossoming Flower Haven",
		category: "Gardening",
		altText: "Blossoming Flower Haven",
		thumbnail: "../src/assets/images/project/blossoming-flower-haven/thumbnail.jpg",
		images: [
			"../src/assets/images/project/blossoming-flower-haven/apples.jpg",
			"../src/assets/images/project/blossoming-flower-haven/berry-branch.jpg",
			"../src/assets/images/project/blossoming-flower-haven/grapes.jpg",
			"../src/assets/images/project/blossoming-flower-haven/planting.jpg",
			"../src/assets/images/project/blossoming-flower-haven/tangerine.jpg"
		],
		description: "'Blossoming Flower Haven' is a symphony of colors and scents that ignite the senses. From delicate blossoms to luscious fruits, this garden is a celebration of life's vibrant beauty. Immerse yourself in a world where every corner blooms with nature's finest.",
		challenge: "Curating a garden that showcases a diverse range of blossoming flowers while maintaining year-round appeal required careful plant selection and strategic design.",
		solution: "'Blossoming Flower Haven' is the result of our horticultural expertise. Our team chose a mix of flowering plants with varying bloom times, ensuring a continuous display of colors and scents. By pairing annuals and perennials, we created a garden that's ever-changing yet consistently stunning.",
		client: "BloomNest Estates",
		startDate: "2015-07-18",
		endDate: "2015-11-25"
	},
	{
		name: "Cozy Garden Nook",
		category: "Landscaping",
		altText: "Cozy Garden Nook",
		thumbnail: "../src/assets/images/project/cozy-garden-thumbnail.jpg",
		description: "Cozy Garden Nook is a retreat designed for intimacy and relaxation. Nestled within carefully curated greenery, this inviting space offers a tranquil escape from the world. Embrace solitude or share cherished moments in this serene corner of nature.",
		challenge: "Designing an intimate space that fosters relaxation within a larger landscape required creating a seamless transition while maintaining a sense of privacy.",
		solution: "Our team crafted 'Cozy Garden Nook' with an artistic arrangement of vegetation and hardscape elements. Through the strategic placement of trees, shrubs, and structures, we carved out a private enclave that invites you to unwind and connect with nature.",
		client: "Haven Retreats",
		startDate: "2017-04-08",
		endDate: "2017-08-15"
	}
];
const ProjectData = {
	projects: projects
};

const categories = [...new Set(ProjectData.projects.map((project) => project.category))];
categories.unshift('all');

//stores recent blog posts
atom(false);

const MessageArray = atom([]);

const SelectedCategory = atom('all');

const AllCategories = atom(categories);

const CarouselPosition = atom(0);

const TestimonialSideDirection = atom('');

const MessageComponent = () => {
  const $MessageArray = useStore(MessageArray);
  function AnimateMessage(DivElem) {
    setTimeout(() => {
      DivElem?.classList.remove("MessageFadeOut");
      DivElem?.classList.add("MessageFadeIn");
    }, 1);
    setTimeout(() => {
      MessageArray.set([]);
    }, 6e3);
    setTimeout(() => {
      DivElem?.classList.remove("MessageFadeIn");
      DivElem?.classList.add("MessageFadeOut");
    }, 5e3);
  }
  function RenderMessage() {
    return $MessageArray.map((item, index) => {
      const ID = `${item}-${index}`;
      return /* @__PURE__ */ jsx("p", { id: ID, className: ``, children: item }, uuid());
    });
  }
  const messageRef = useRef(null);
  useEffect(() => {
    if ($MessageArray && $MessageArray.length > 0) {
      AnimateMessage(messageRef.current);
    }
  }, [$MessageArray]);
  return /* @__PURE__ */ jsx("div", { id: "MessageArray", className: "Message box_shadow MessageFadeOut", ref: messageRef, children: $MessageArray != null && $MessageArray.length > 0 && RenderMessage() });
};

const FooterColumns = [
	{
		label: "Links",
		links: [
			{
				label: "About Company",
				link: "/about"
			},
			{
				label: "Services",
				link: "/services"
			},
			{
				label: "How It Works",
				link: "/about/#ProcessSection"
			},
			{
				label: "Testimonials",
				link: "/testimonial"
			},
			{
				label: "FAQ",
				link: "/FAQ"
			},
			{
				label: "Our Blog",
				link: "/blog/1"
			},
			{
				label: "Contact Us",
				link: "/contact"
			}
		]
	},
	{
		label: "Services",
		links: [
			{
				label: "Donate",
				link: "/"
			},
			{
				label: "Sponsor",
				link: "/"
			},
			{
				label: "Fundraise",
				link: "/"
			},
			{
				label: "Volunteer",
				link: "/"
			},
			{
				label: "Partner",
				link: "/"
			},
			{
				label: "Jobs",
				link: "/"
			}
		]
	}
];

const data = [
	{
		thumbnail: "../../src/assets/images/service/landscape-design.jpg",
		title: "Landscape Design",
		tagline: "Transforming visions into breathtaking outdoor realities, our landscape designs weave nature's beauty with your dreams.",
		link: "/services/landscape-design",
		description: "Our Landscape Design service is the gateway to transforming your outdoor space into a breathtaking masterpiece. Our expert designers combine their creativity with your vision to craft landscapes that seamlessly blend nature's beauty with your dreams.",
		promise: "Experience the evolution of your ideas into captivating outdoor realities. Your space will be carefully planned, taking into account elements like functionality, aesthetics, and sustainability.",
		features: [
			"Customized design plans",
			"Plant selection for diverse landscapes",
			"Hardscape integration (pathways, patios, etc.)",
			"Drainage and irrigation solutions",
			"Visual mock-ups for a clear vision"
		],
		image1: "landscape-design-2.jpg"
	},
	{
		thumbnail: "../../src/assets/images/service/tree-removal-small.jpg",
		title: "Tree Removal",
		tagline: "Safely and sensitively removing trees to preserve your landscape's harmony and safety.",
		link: "/services/tree-removal",
		description: "Our Tree Removal service ensures the safe and considerate removal of trees to maintain the harmony and safety of your landscape. We prioritize the health of your environment and execute removal with precision and care.",
		promise: "Your landscape will remain harmonious and safe, free from potentially hazardous or overgrown trees. Our experts will handle removal without disrupting the balance of your outdoor space.",
		features: [
			"Certified arborists for safe removal",
			"Eco-friendly disposal practices",
			"Preservation of surrounding vegetation",
			"Site cleanup post-removal"
		],
		image1: "tree-removal.jpg"
	},
	{
		thumbnail: "../../src/assets/images/service/lawn-2-small.jpg",
		title: "Lawn Returfing",
		tagline: "From patchy to pristine, we revive lawns into lush, inviting carpets of green.",
		link: "/services/lawn-returfing",
		description: "Revive your patchy and worn-out lawn with our Lawn Returfing service. We rejuvenate your green space into a lush and inviting carpet of vibrant green, perfect for relaxation and outdoor activities.",
		promise: "Witness the transformation of your dull and uneven lawn into a vibrant and smooth expanse of lush greenery, creating an inviting ambiance for outdoor enjoyment.",
		features: [
			"Removal of old turf",
			"Grading and soil preparation",
			"Premium quality turf installation",
			"Post-installation care guidelines",
			"Regular maintenance options"
		],
		image1: "lawn-2.jpg"
	},
	{
		thumbnail: "../../src/assets/images/service/lawn-small.jpg",
		title: "Artifical Turf Installation",
		tagline: "Enjoy the look of real grass without the upkeep – artificial turf that's always perfectly manicured.",
		link: "/services/artifical-turf-installation",
		description: "Say goodbye to lawn maintenance woes with our Artificial Turf Installation service. Enjoy the look and feel of real grass without the upkeep, as our artificial turf always remains impeccably manicured.",
		promise: "Experience the convenience of a pristine lawn that requires minimal maintenance, while adding a touch of green luxury to your outdoor space.",
		features: [
			"High-quality artificial turf selection",
			"Realistic appearance and texture",
			"UV-resistant and durable materials",
			"Efficient drainage system",
			"No need for mowing or watering"
		],
		image1: "lawn.jpg"
	}
];
const ServiceDemo = {
	data: data
};

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    pageTitle,
    customDescription,
    frontmatter,
    CTA_Banner
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="viewport" content="width=device-width"><meta name="generator"', ">", "<title>", "</title>", "</head><body>", "", '<div id="backdrop" class="fixed left-0 top-0 w-full h-full z-[99] bg-[#2f7955] backdrop"></div><div id="SlotWrapper" class="mt-[100px] sm:mt-[185px] [@media(min-width:992px)]:mt-[180px] min-h-[100vh] sm:min-h-[95vh] mb-[10px] flex flex-col flex-grow overflow-x-hidden">', "</div>", "", `<script>
            const MobileToggler = document.getElementById("mobile-nav-toggler")
            const CloseBtn= document.getElementById("close-btn")
            const MobileMenu = document.getElementById("mobile-menu")
            const Backdrop = document.getElementById('backdrop')
            const OpenMenu = () =>{
                if(MobileMenu?.classList.contains("mobile-menu-close")){
                    MobileMenu?.classList.remove("mobile-menu-close")
                    Backdrop?.classList.add("backdrop-visible")
                }
                else{
                    MobileMenu?.classList.add("mobile-menu-close")
                    Backdrop?.classList.remove("backdrop-visible")
                }
            }

            MobileToggler?.addEventListener('mousedown', OpenMenu)

            const CloseMenu = () =>{
                if(!MobileMenu?.classList.contains("mobile-menu-close")){
                    MobileMenu?.classList.add("mobile-menu-close")
                    Backdrop?.classList.remove("backdrop-visible")
                }
            }
            CloseBtn?.addEventListener('mousedown', CloseMenu)
            const CheckIfClickedOutside = (event) =>{
                if(!MobileMenu?.classList.contains("mobile-menu-close") 
                    && !MobileToggler?.contains(event.target)
                    && !MobileMenu?.contains(event.target)
                ){
                    MobileMenu?.classList.add("mobile-menu-close")
                    Backdrop?.classList.remove("backdrop-visible")
                }
            }
            window.addEventListener("mousedown", CheckIfClickedOutside)     
        <\/script></body></html>`])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$SEO, { "title": pageTitle, "frontmatter": frontmatter, "description": customDescription ? customDescription : "This is a blogging site." }), pageTitle, renderHead(), renderComponent($$result, "Header", $$Header, { "serviceList": ServiceDemo.data }), renderComponent($$result, "MessageComponent", MessageComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MessageComponent/messageComponent", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Index$1, { "columns": FooterColumns, "CTA_Banner": CTA_Banner }), renderComponent($$result, "ScrollTopButton", $$Index, {}));
}, "D:/Astro/uthan-site/src/layouts/BaseLayout.astro", void 0);

const $$Astro$3 = createAstro();
const $$ContentWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContentWrapper;
  return renderTemplate`${maybeRenderHead()}<div id="ContentWrapper" class="w-11/12 mx-auto">${renderSlot($$result, $$slots["default"])}</div>`;
}, "D:/Astro/uthan-site/src/layouts/ContentWrapper.astro", void 0);

const $$Astro$2 = createAstro();
const $$HomeButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HomeButton;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`btn-primary ${customStyle}`, "class")} id="HomeButton">Go Home</div>`;
}, "D:/Astro/uthan-site/src/components/buttons/home_button.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$BackButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BackButton;
  const { customStyle } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<div", ' id="BackButton">Go Back</div><script>\n    const button = document.getElementById("BackButton")\n    button?.addEventListener("mousedown", ()=>{history.back()})\n<\/script>'])), maybeRenderHead(), addAttribute(`btn-secondary cursor-pointer ${customStyle}`, "class"));
}, "D:/Astro/uthan-site/src/components/buttons/back_button.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "404 Error Page", "customDescription": "404 error page" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "LogoComponent", $$LogoComponent, { "customStyle": "w-fit h-auto mx-auto mt-10" })}${maybeRenderHead()}<div class="w-full h-auto"><h2 class="font-bold text-center">404 Error: The page you are looking for does not exits.</h2></div>${renderComponent($$result3, "HomeButton", $$HomeButton, { "customStyle": "my-10" })}${renderComponent($$result3, "BackButton", $$BackButton, { "customStyle": "my-10" })}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/404.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, AllCategories as A, BackImg as B, CarouselPosition as C, SiteData as S, TestimonialSideDirection as T, _404 as _, $$Icon as a, $$ContentWrapper as b, SelectedCategory as c, formatPhoneNumber as f, phoneNumberToNumeric as p };
