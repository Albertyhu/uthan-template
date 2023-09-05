/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, u as unescapeHTML, F as Fragment$1, e as renderHead, f as renderSlot } from '../astro_d427acf6.mjs';
import 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useRef, useEffect, useState } from 'react';
/* empty css                                 */import { BsArrowUpCircle } from 'react-icons/Bs/index.js';
import { IconContext } from 'react-icons';
import uuid from 'react-uuid';
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';
/* empty css                            *//* empty css                           */
const title = "template site";
const business_name = "Natural Patterns Landscaping";
const description = "My musings about the Astro framework";
const year_founded = 1997;
const owner_name = "TheLastSliceOfPizza";
const owner_email = "hualbert@rocketmail.com";
const address = "Chicago 13";
const city = "Melborne City";
const state = "FL";
const country = "United States";
const zip = "94511";
const business_email = "uthan@example.com";
const business_phone = "(915) 365-1515";
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

const $$Astro$k = createAstro();
const $$SocialLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$SocialLinks;
  const { customStyle } = Astro2.props;
  const { followUsText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customStyle ? customStyle : "grid sm:flex sm:flex-row"}`, "class")}>${followUsText && renderTemplate`<div><p>Follow Us:</p></div>`}<div class="text-white sm:ml-5 [&>div]:mr-5 flex">${SiteData.twitter && renderTemplate`<div><a${addAttribute(SiteData.twitter, "href")}><span class="fab fa-twitter"></span></a></div>`}${SiteData.facebook && renderTemplate`<div><a${addAttribute(SiteData.facebook, "href")}><span class="fab fa-facebook-square"></span></a></div>`}${SiteData.pinterest && renderTemplate`<div><a${addAttribute(SiteData.pinterest, "href")}><span class="fab fa-pinterest-p"></span></a></div>`}${SiteData.instagram && renderTemplate`<div><a${addAttribute(SiteData.instagram, "href")}><span class="fab fa-instagram"></span></a></div>`}${SiteData.youtube && renderTemplate`<div><a${addAttribute(SiteData.youtube, "href")}><span class="fab fa-youtube"></span></a></div>`}</div></div>`;
}, "D:/Astro/uthan-site/src/components/social-links.astro", void 0);

const $$Astro$j = createAstro();
const $$HeaderTop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$HeaderTop;
  return renderTemplate`<!-- header-top -->${maybeRenderHead()}<div class="header-top relative w-full py-0 sm:pt-[14px] sm:pb-[30px] bg-[#1d4a34]"><div class="shape bg-[url('../../src/assets/images/shape/shape-16.png')]"></div><div class="auto-container"><div class="top-inner clearfix"><div class="left-column pull-left">${renderComponent($$result, "SocialLinks", $$SocialLinks, { "followUsText": true, "customStyle": "grid sm:flex sm:flex-row text-center w-full justify-center sm:w-fit " })}</div>${(SiteData.business_phone || SiteData.business_email) && renderTemplate`<div class="right-column pull-right"><ul class="grid sm:flex sm:flex-row sm:gap-[10px] sm:w-fit sm:mx-auto">${SiteData.business_phone && renderTemplate`<li class="!mx-auto w-fit flex flex-row gap-[5px]"><div class="icon-box"><i class="fas fa-phone text-white"></i></div><p>Call: <a${addAttribute(`tel:${SiteData.business_phone}`, "href")} class="xm_414:font-bold">${SiteData.business_phone}</a></p></li>`}${SiteData.business_phone && SiteData.business_email && renderTemplate`<li class="sm:block sm:mx-5 hidden">|</li>`}${SiteData.business_email && renderTemplate`<li class="!mx-auto w-fit flex flex-row gap-[5px]"><div class="icon-box"><i class="fas fa-envelope text-white"></i></div><p>Email: <a${addAttribute(`mailto:${SiteData.business_email}`, "href")}>${SiteData.business_email}</a></p></li>`}</ul></div>`}</div></div></div>`;
}, "D:/Astro/uthan-site/src/components/HeaderComponent/header-top.astro", void 0);

const Logo = {"src":"/_astro/logo.9de84ffb.png","width":1066,"height":434,"format":"png"};

const $$Astro$i = createAstro();
const $$LogoComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$LogoComponent;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`cursor-pointer block w-fit m-auto text-center ${customStyle ? customStyle : "h-auto w-auto"}`, "class")} id="LogoWrapper"><a href="/"><img${addAttribute(Logo.src, "src")} class="h-fit w-auto m-auto max-h-[100px]" alt="Logo"></a></div>`;
}, "D:/Astro/uthan-site/src/components/logoComponent.astro", void 0);

const ShapeOne = {"src":"/_astro/shape-1.a8fcab25.png","width":181,"height":19,"format":"png"};

const $$Astro$h = createAstro();
const $$Shape1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Shape1;
  return renderTemplate`${maybeRenderHead()}<div class="hidden sm:block absolute left-[0px] bottom-[-24px] w-[181px] h-[25px] object-cover" id="shape-1"><img${addAttribute(ShapeOne.src, "src")} class="w-full h-full"></div>`;
}, "D:/Astro/uthan-site/src/components/HeaderComponent/shape-1.astro", void 0);

const $$Astro$g = createAstro();
const $$NavItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
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
				url: '/services/lawn_returfin',
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

const $$Astro$f = createAstro();
const $$HeaderLower = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$HeaderLower;
  return renderTemplate`<!-- header-lower -->${maybeRenderHead()}<div id="header-lower" class="header-lower font-[Monserrat] box_shadow"><div class="auto-container"><div class="justify-between flex flex-nowrap"><div class="logo-box p-5 sm:py-[37.5px] my-auto">${renderComponent($$result, "ShapeOne", $$Shape1, {})}<figure class="logo"><a href="index.html">${renderComponent($$result, "LogoComponent", $$LogoComponent, {})}</a></figure></div><div class="menu-area clearfix my-auto"><div id="mobile-nav-toggler" class="mobile-nav-toggler"><i class="icon-bar"></i><i class="icon-bar"></i><i class="icon-bar"></i></div><nav class="main-menu navbar-expand-md navbar-light"><div class="" id="navbarSupportedContent"><ul class="navigation clearfix flex">${menuMap && menuMap.length > 0 && menuMap.map((item) => renderTemplate`${renderComponent($$result, "NavItem", $$NavItem, { ...item })}`)}</ul></div></nav></div><div class="hidden sm:flex relative items-center justify-center py-[30px]"><div class="btn-box"><a href="index.html" class="theme-btn btn-one">Get A Quote</a></div></div></div></div></div>`;
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
              id: "menu-arrow",
              ref: arrowRef,
              className: "fas fa-angle-down menu-arrow relative text-center"
            }
          ) })
        ]
      }
    ),
    subDirectory && subDirectory.length > 0 && /* @__PURE__ */ jsx("div", { className: "subDirectoryDiv subDirectory-closed", ref: subDirRef, children: subDirectory.map((sub, index) => /* @__PURE__ */ jsx(
      LinkItem,
      {
        url: sub.url,
        label: sub.label,
        subDirectory: sub.subDirectory
      },
      `${sub.url}-${index}`
    )) })
  ] });
};

const WhiteLogo = {"src":"/_astro/logo-white.359044a6.png","width":2000,"height":2000,"format":"png"};

const $$Astro$e = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`<!-- Mobile Menu  -->${maybeRenderHead()}<div id="mobile-menu" class="grid h-full fixed left-auto right-0 top-0 overflow-y-auto overflow-x-hidden w-[250px] z-[999] bg-black mobile-menu-close"><div id="close-btn" class="h-fit"><i class="fas fa-times close-btn"></i></div><nav class=""><div class="nav-logo w-10/12 mx-auto userselect-none"><a href="../../../"><img${addAttribute(WhiteLogo.src, "src")} alt="Logo" class="h-full w-full"></a></div><div class="menu-outer mt-[25px] ">${renderComponent($$result, "MenuLinks", MenuLinks, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/HeaderComponent/MobileMenu/menuLinks.tsx", "client:component-export": "default" })}</div><div class="contact-info text-white pl-[25px] border-t-[1px] border-[#d6d6d6]"><h4>Contact Info</h4><ul>${SiteData && SiteData.address && renderTemplate`<li>${SiteData.address},</li>`}${SiteData && (SiteData.city || SiteData.state || SiteData.country || SiteData.zip) && renderTemplate`<li>${SiteData.city && renderTemplate`<span>${SiteData.city},</span>`}${SiteData.state && renderTemplate`<span>${SiteData.state},</span>`}${SiteData.country && renderTemplate`<span>${SiteData.country}</span>`}${SiteData.zip && renderTemplate`<span>${SiteData.zip}${void 0}</span>`}</li>`}${SiteData && SiteData.business_phone && renderTemplate`<li><a href="tel:+8801682648101">${SiteData.business_phone}</a></li>`}${SiteData && SiteData.business_email && renderTemplate`<li><a${addAttribute(`mailto:${SiteData.business_email}`, "href")}>${SiteData.business_email}</a></li>`}</ul></div></nav>${renderComponent($$result, "SocialLinks", $$SocialLinks, { "customStyle": "clearfix flex flex-row [&>li]:mr-5 [&>li>a>span]:text-white my-10 pl-[25px]" })}</div><!-- End Mobile Menu -->`;
}, "D:/Astro/uthan-site/src/components/HeaderComponent/MobileMenu/index.astro", void 0);

const $$Astro$d = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`<!--sticky Header-->${maybeRenderHead()}<div class="sticky-header"><div class="auto-container"><div class="outer-box"><div class="logo-box"><figure class="logo"><a href="index.html">${renderComponent($$result, "LogoComponent", $$LogoComponent, {})}</a></figure></div><div class="menu-area clearfix"><nav class="main-menu clearfix"><!--Keep This Empty / Menu will come through Javascript--></nav></div><div class="nav-right"><div class="cart-box"><a href="shop.html"><i class="icon-1"></i></a></div><div class="btn-box"><a href="index.html" class="theme-btn btn-one">Get A Quote</a></div></div></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/HeaderComponent/StickyHeader/index.astro", void 0);

const $$Astro$c = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Header;
  const { serviceList } = Astro2.props;
  return renderTemplate`<!-- Fav Icon -->${maybeRenderHead()}<header class="main-header">${renderComponent($$result, "HeaderTop", $$HeaderTop, {})}${renderComponent($$result, "HeaderLower", $$HeaderLower, { "serviceList": serviceList })}</header>${renderComponent($$result, "MobileMenu", $$Index$3, {})}${renderComponent($$result, "StickyHeader", $$Index$2, {})}`;
}, "D:/Astro/uthan-site/src/components/HeaderComponent/header.astro", void 0);

const $$Astro$b = createAstro();
const $$CreatorComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$CreatorComponent;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="CreatorContainer"${addAttribute(`${customStyle}`, "class")}><div class="mx-auto">Developed by &nbsp;
<span class="underline cursor-pointer font-bold text-lg"><a href="http://portfolio-3b68c.web.app/" target="_blank">Albert Hu</a></span></div></div>`;
}, "D:/Astro/uthan-site/src/components/creatorComponent.astro", void 0);

const $$Astro$a = createAstro();
const $$ColumnLabel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ColumnLabel;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3 class="text-[2.5rem] lh-[35px] color_white">${label}</h3>`;
}, "D:/Astro/uthan-site/src/components/footer/column_label.astro", void 0);

const $$Astro$9 = createAstro();
const $$FooterColumn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$FooterColumn;
  const {
    label,
    links
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="col-lg-3 col-md-6 col-sm-12 footer-column"><div class="footer-widget links-widget ml-[70px]"><div class="widget-title relative block mb-[25px]">${renderComponent($$result, "ColumnLabel", $$ColumnLabel, { "label": label })}</div><div class="widget-content"><ul class="links-list clearfix">${links && links.length > 0 && links.map(
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

const $$Astro$8 = createAstro();
const $$Contacts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Contacts;
  return renderTemplate`${maybeRenderHead()}<div class="col-lg-3 col-md-6 col-sm-12 footer-column"><div class="footer-widget contact-widget"><div class="widget-title relative block mb-[25px]">${renderComponent($$result, "ColumnLabel", $$ColumnLabel, { "label": "Contacts" })}</div><div class="widget-content"><ul class="contact-info clearfix">${SiteData.address && SiteData.address != "" && renderTemplate`<li class="relative block mb-[20px]"><p class="text-lg">${SiteData.address}</p></li>`}${(SiteData.city || SiteData.state || SiteData.country || SiteData.zip) && renderTemplate`<li class="relative block mb-[20px]"><p class="text-lg">${SiteData.city && renderTemplate`<span>${SiteData.city},</span>`}${SiteData.state && renderTemplate`<span>${SiteData.state}</span>`}${SiteData.zip && renderTemplate`<span>${SiteData.zip}</span>`}</p></li>`}${SiteData.country && renderTemplate`<li class="relative block mb-[20px]"><p class="text-lg">${SiteData.country}</p></li>`}${SiteData.business_phone && renderTemplate`<li class="relative block mb-[20px]"><p class="text-lg"><a${addAttribute(`tel:${phoneNumberToNumeric(SiteData.business_phone)}`, "href")}>${formatPhoneNumber(SiteData.business_phone)}</a></p></li>`}${SiteData.business_email && SiteData.business_email.length > 0 && renderTemplate`<li class="relative block"><p class="text-lg"><a${addAttribute(`mailto:${SiteData.business_email}`, "href")}>${SiteData.business_email}</a></p></li>`}</ul></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/footer/contacts.astro", void 0);

const BackImg = {"src":"/_astro/slide-1.a29314ea.jpg","width":1920,"height":700,"format":"jpg"};

const FooterLogo = {"src":"/_astro/footer-logo.3951c0cb.png","width":90,"height":90,"format":"png"};

const Shape13 = {"src":"/_astro/shape-13.364c4b46.png","width":291,"height":57,"format":"png"};

const Shape14 = {"src":"/_astro/shape-14.c25ef62e.png","width":178,"height":271,"format":"png"};

const Shape15 = {"src":"/_astro/shape-15.59074a54.png","width":196,"height":278,"format":"png"};

const $$Astro$7 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$1;
  const {
    columns,
    CTA_Banner
  } = Astro2.props;
  var YEAR = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="main_footer relative"><div class="footer-logo relative block pb-[50px] text-center bg-[#1d4a34]">${CTA_Banner && renderTemplate`<section class="cta-section relative pt-[140px] pb-[140px]"${addAttribute({ backgroundImage: `url(${BackImg.src})` }, "style")}><div class="auto-container"><div class="relative flex flex-col gap-1 sm:flex-row clearfix justify-between"><div class="sec-title light float-left"><span class="sub-title">Have an idea for a project?</span><h2 class="">Get in touch with us</h2></div><div class="btn-box float-right mt-[50px] whitespace-nowrap"><a href="../../contact" class="theme-btn btn-one">Make an appointment<i class="far fa-long-arrow-right"></i></a></div></div></div></section>`}<figure class="logo relative inline-block bg-[#1d4a34]"><div class="shape absolute bg-transparent !z-[1]"${addAttribute(`background-image: url(${Shape13.src})`, "style")}></div><a href="/" class="!z-10 relative"><img${addAttribute(FooterLogo.src, "src")} alt="footer logo"></a></figure></div><div class="widget-section relative pt-[65px] pb-[70px] bg-[#1d4a34]"><div class="pattern-layer"><div class="pattern-1 absolute"${addAttribute(`background-image: url(${Shape14.src})`, "style")}></div><div class="pattern-2 absolute"${addAttribute(`background-image: url(${Shape15.src})`, "style")}></div></div><div class="auto-container"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]"><div class="footer-column"><div class="footer-widget about-widget"><div class="widget-title relative block mb-[25px]">${renderComponent($$result, "ColumnLabel", $$ColumnLabel, { "label": "About" })}</div><div class="widget-content"><div class="text relative block mb-[30px]"><p>At Natural Patterns, every project begins with a conversation – a journey into your aspirations and desires. We believe that your vision is the heart of our inspiration. Our team of dedicated artisans and landscaping experts works hand in hand with you to understand your needs, preferences, and the unique characteristics of your space.</p></div><ul class="social-links clearfix"><li class="relative inline-block mr-[10px]"><a href="index.html" class="block color_white hover:bg hover:bg-[#FFFFFF1A] rounded-lg"><i class="fab fa-facebook-f"></i></a></li><li class="relative inline-block mr-[10px]"><a href="index.html" class="block color_white hover:bg hover:bg-[#FFFFFF1A] rounded-lg"><i class="fab fa-twitter"></i></a></li><li class="relative inline-block mr-[10px]"><a href="index.html" class="block color_white hover:bg hover:bg-[#FFFFFF1A] rounded-lg"><i class="fab fa-vimeo-v"></i></a></li><li class="relative inline-block"><a href="index.html" class="block color_white hover:bg hover:bg-[#FFFFFF1A] rounded-lg"><i class="fab fa-google-plus-g"></i></a></li></ul></div></div></div>${columns && columns.length > 0 && columns.map((column, index) => renderTemplate`${renderComponent($$result, "FooterColumn", $$FooterColumn, { ...column, "key": `footer-column-${index}` })}`)}${renderComponent($$result, "Contacts", $$Contacts, {})}</div></div></div><div class="footer-bottom pt-[30px] pb-[30px]"><div class="auto-container"><div class="grid"><div class="w-full min-h-[20px] text-slate-300 text-center relative"><div><span id="WebsiteName">${SiteData.business_name}</span> &copy;
<span id="CopyRight">${YEAR}</span></div><ul class=""><li class="inline-block mr-[30px]"><a href="index.html" class="text-[15px]">Terms of Service</a></li><li class="inline-block"><a href="index.html" class="text-[15px]">Privacy Policy</a></li></ul>${renderComponent($$result, "CreatorComponent", $$CreatorComponent, { "customStyle": "sm:absolute sm:right-[10px] sm:top-0" })}</div></div></div></div></footer>`;
}, "D:/Astro/uthan-site/src/components/footer/index.astro", void 0);

const Button = () => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "ScrollTopButton block w-fit userselect-none",
      onClick: () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      },
      children: [
        /* @__PURE__ */ jsx(IconContext.Provider, { value: { size: "45px" }, children: /* @__PURE__ */ jsx(BsArrowUpCircle, { className: "mx-auto my-5" }) }),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "whitespace-nowrap mx-auto text-center",
            children: "Scroll to top"
          }
        )
      ]
    }
  );
};

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

const $$Astro$6 = createAstro();
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    // url = ({}).SITE_URL,
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
  return renderTemplate`<!-- SEO --><link rel="canonical"${addAttribute(url, "href")}><!-- Open Graph --><meta property="og:site_name"${addAttribute(SiteData.business_name, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:image"${addAttribute(image?.src || SiteData.image.src, "content")}><meta property="og:image:url"${addAttribute(image?.src || SiteData.image.src, "content")}><meta property="og:image:secure_url"${addAttribute(image?.src || SiteData.image.src, "content")}><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="600"><meta property="og:image:alt"${addAttribute(image?.alt || SiteData.image.alt, "content")}><!-- Twitter --><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image"${addAttribute(image?.src || SiteData.image.src, "content")}><meta name="twitter:image:alt"${addAttribute(title, "content")}><meta name="twitter:domain"${addAttribute(({}).SITE_URL, "content")}>${robots && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<!-- JSON LD -->${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(jsonLD)}` })}`;
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
const RecentPostsStore = atom([]);

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
				link: "/"
			},
			{
				label: "Services",
				link: "/"
			},
			{
				label: "How It Works",
				link: "/"
			},
			{
				label: "Our Blog",
				link: "/blog/1"
			},
			{
				label: "Contact Us",
				link: "/contact"
			},
			{
				label: "Testimonials",
				link: "/"
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
const ServicesDemo = {
	data: data
};

const $$Astro$5 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    pageTitle,
    customDescription,
    frontmatter,
    CTA_Banner
  } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "SEO", $$SEO, { "title": pageTitle, "frontmatter": frontmatter, "description": customDescription ? customDescription : "This is a blogging site." })}<title>${pageTitle}</title>${renderHead()}</head><body>${renderComponent($$result, "Header", $$Header, { "serviceList": ServicesDemo.data })}${renderComponent($$result, "MessageComponent", MessageComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MessageComponent/messageComponent", "client:component-export": "default" })}<div id="backdrop" class="fixed left-0 top-0 w-full h-full z-[99] bg-[#2f7955] backdrop"></div><div id="SlotWrapper" class="mt-[165px] min-h-[100vh] sm:min-h-[95vh] mb-[10px] flex flex-col flex-grow overflow-x-hidden">${renderSlot($$result, $$slots["default"])}</div>${renderComponent($$result, "Footer", $$Index$1, { "columns": FooterColumns, "CTA_Banner": CTA_Banner })}${renderComponent($$result, "ScrollTopButton", Button, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/buttons/scrollTopButton.tsx", "client:component-export": "default" })}</body></html>`;
}, "D:/Astro/uthan-site/src/layouts/BaseLayout.astro", void 0);

const $$Astro$4 = createAstro();
const $$TagListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TagListItem;
  const {
    tag,
    url
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-fit hover:underline hover:font-bold mx-1 cursor-pointer capitalize rounded-[0.5em] border-dotted border-2 text-base border-[#a1a1a1] p-1 bg-[#F8FCFD] tagListItem"><a${addAttribute(url, "href")}>${tag}</a></div>`;
}, "D:/Astro/uthan-site/src/components/blogComponents/tagListItem.astro", void 0);

const $$Astro$3 = createAstro();
const $$TagList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TagList;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap "><p class="font-bold">Tags:</p>${tags.map((item) => renderTemplate`${renderComponent($$result, "TagListItem", $$TagListItem, { "url": `../tags/${item.tag}`, "tag": item.tag })}`)}</div>`;
}, "D:/Astro/uthan-site/src/components/blogComponents/tagList.astro", void 0);

const RenderDescription = (props) => {
  const { description } = props;
  const paraRef = useRef(null);
  useEffect(() => {
    if (paraRef.current && paraRef.current.offsetHeight > 50) {
      paraRef.current.classList.add("description");
    }
  }, [paraRef.current]);
  return /* @__PURE__ */ jsxs(
    "p",
    {
      ref: paraRef,
      id: "description_p",
      className: "relative h-auto max-h-[100px] w-full overflow-hidden before:absolute before:inset-0 before:z-[2]",
      children: [
        /* @__PURE__ */ jsx("b", { children: "Description: " }),
        description
      ]
    }
  );
};

const $$Astro$2 = createAstro();
const $$PreviewLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PreviewLink;
  const {
    title,
    author,
    description,
    thumbnail,
    images,
    pubDate,
    tags,
    url
  } = Astro2.props;
  let datePublished = pubDate ? new Date(pubDate) : null;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg post-box-shadow bg-white blog-preview-panel mb-[20px]" id="blog-preview-panel">${thumbnail && renderTemplate`<div class="overflow-hidden cursor-pointer h-[250px] w-auto rounded-[5px_5px_0px_0px]"><a${addAttribute(url, "href")}><img${addAttribute(thumbnail, "src")}${addAttribute(`${title} featured image`, "alt")} class="w-full h-full object-cover"></a></div>`}<div id="preview_wrapper" class="w-9/12 mx-auto py-10">${datePublished && renderTemplate`<div class="text-[#7a7b80]">${datePublished.toLocaleDateString()}</div>`}${title && renderTemplate`<a${addAttribute(url, "href")} class="cursor-pointer text-2xl"><h2 class="font-bold">${title}</h2></a>`}<p>${author && renderTemplate`<span class="font-bold">Published by <b>${author}</b></span>`}</p>${description && renderTemplate`${renderComponent($$result, "DescriptionComponent", RenderDescription, { "description": description, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/blogComponents/description.tsx", "client:component-export": "default" })}`}${tags && tags.length > 0 && renderTemplate`${renderComponent($$result, "TagList", $$TagList, { "tags": tags })}`}</div></div>`;
}, "D:/Astro/uthan-site/src/components/blogComponents/previewLink.astro", void 0);

const RenderRecentSearch = (props) => {
  const {
    setQuery,
    historyResults,
    setSearchHistory
  } = props;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "w-full h-fit py-10 bg-white z-10 mt-5",
      id: "HistoryResults",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "w-11/12 lg:w-8/12 mx-auto",
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                id: "HistoryWrapper",
                className: "flex flex-col",
                children: /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "text-slate-400",
                    children: "Recent searches"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "ul",
              {
                className: "list-none list-indented RecentSearches",
                children: historyResults && historyResults.length > 0 && historyResults.map((result, index) => /* @__PURE__ */ jsx(
                  RenderItem,
                  {
                    historyResults,
                    result,
                    setQuery,
                    setSearchHistory,
                    index
                  },
                  uuid()
                ))
              }
            )
          ]
        }
      )
    }
  );
};
const RenderItem = (props) => {
  const {
    historyResults,
    result,
    setQuery,
    setSearchHistory,
    index
  } = props;
  const deleteValue = () => {
    var arr = [...historyResults];
    arr.splice(index, 1);
    setSearchHistory(arr);
    localStorage.setItem("searchHistory", JSON.stringify(arr));
  };
  return /* @__PURE__ */ jsxs(
    "li",
    {
      className: "my-5 mx-auto cursor-pointer justify-between w-full flex",
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "hover:font-bold ",
            onClick: async () => {
              await setQuery(result);
              setSearchHistory([]);
            },
            children: result
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "text-[#ff0000] hover:font-bold",
            onClick: deleteValue,
            children: "clear"
          }
        )
      ]
    }
  );
};

const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  const [historyResults, setSearchHistory] = useState([]);
  const inputRef = useRef(null);
  const onChangeHandler = (event) => {
    setQuery(event.target?.value);
  };
  const submitSearch = () => {
    const data = localStorage.getItem("searchHistory");
    var arr = data ? JSON.parse(data) : [];
    if (query != "") {
      arr.push(query);
      arr = [...new Set(arr)];
      localStorage.setItem("searchHistory", JSON.stringify(arr));
    }
    setSearchHistory([]);
    window.location.href = `/blog/search/${query}/1`;
  };
  const enterEvent = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitSearch();
    }
  };
  useEffect(() => {
    if (query && query.length > 0) {
      SearchHistory(query, setSearchHistory);
    }
    if (query.length === 0) {
      setSearchHistory([]);
    }
  }, [query]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-row",
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              id: "QueryWrapper",
              className: "flex bg-[#ffffff] rounded-lg mx-auto w-full border-2 border-black mr-5",
              children: /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Type here to search a blog post",
                  value: query,
                  id: "QueryInput",
                  className: "rounded-lg w-full px-5 SearchInput",
                  onChange: (event) => onChangeHandler(event),
                  onKeyDown: enterEvent,
                  ref: inputRef
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              id: "SearchButton",
              className: "btn-primary",
              onClick: submitSearch,
              children: "Search"
            }
          )
        ]
      }
    ),
    historyResults && historyResults.length > 0 && /* @__PURE__ */ jsx(
      RenderRecentSearch,
      {
        setQuery,
        historyResults,
        setSearchHistory
      }
    )
  ] });
};
const SearchHistory = (query, setSearchHistory) => {
  const jsonData = localStorage.getItem("searchHistory");
  const searchHistory = jsonData ? JSON.parse(jsonData) : [];
  var arr = searchHistory.filter((item) => item.includes(query));
  setSearchHistory(arr);
};

const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    allPosts
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form id="SearchBar" class="relative block py-[30px] px-[40px] rounded-lg mb-[50px] border-2 border-[#dbdbdb] h-fit">${renderComponent($$result, "SearchBar", SearchBar, { "allPosts": allPosts, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/search/searchbar", "client:component-export": "default" })}</form>`;
}, "D:/Astro/uthan-site/src/components/search/index.astro", void 0);

const DOTS = '...';

function usePagination({ currentPage, totalCount, pageSize }) {
  const consecPage = 1;
  const createRange = (first, last) => {
    var pageRange = [];
    for (var i = first; i <= last; i++) {
      pageRange.push(i);
    }
    return pageRange;
  };
  const Pagination = () => {
    const totalPages = Math.ceil(totalCount / pageSize);
    const firstPage = 1;
    if (totalPages < consecPage + 5) {
      const range = createRange(firstPage, totalPages);
      return [...range];
    }
    var leftMostPage = 0;
    var rightMostPage = 0;
    var addLeftPage = 0;
    var addRightPage = 0;
    if (currentPage - consecPage - 2 > 0) {
      leftMostPage = currentPage - consecPage;
    } else {
      leftMostPage = firstPage;
      addRightPage = consecPage - (currentPage - 2);
    }
    if (currentPage + consecPage + 1 < totalPages) {
      rightMostPage = currentPage + consecPage;
    } else {
      rightMostPage = totalPages;
      addLeftPage = consecPage - (totalPages - currentPage - 1);
    }
    if (leftMostPage !== firstPage) {
      leftMostPage -= addLeftPage;
    }
    if (rightMostPage !== totalPages) {
      rightMostPage += addRightPage;
    }
    const displayLeftDots = currentPage - consecPage - 1 > 1 ? true : false;
    const displayRightDots = currentPage + consecPage + 1 < totalPages ? true : false;
    const midRange = createRange(leftMostPage, rightMostPage);
    if (displayLeftDots && displayRightDots) {
      return [firstPage, DOTS, ...midRange, DOTS, totalPages];
    }
    if (!displayLeftDots && displayRightDots) {
      return [...midRange, DOTS, totalPages];
    }
    if (displayLeftDots && !displayRightDots) {
      return [firstPage, DOTS, ...midRange];
    }
  };
  return Pagination();
}

const RenderPagination = (props) => {
  const { pageSize, totalCount, currentPage, totalPages, isMobile, search_query } = props;
  const onPageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      if (search_query != null && typeof search_query != void 0) {
        return window.location.href = `/blog/search/${search_query}/${newPage}`;
      }
      return window.location.href = `/blog/${newPage}`;
    }
  };
  const Pagination = usePagination({ currentPage, totalCount, pageSize });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "PaginationContainer",
      className: `my-10 block list-none text-center ${isMobile ? "sm:hidden" : ""} [&>li]:cursor-pointer`,
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

const getPaginatedArray = (allPosts, currentPage, pageSize) => {
  return allPosts.slice((currentPage - 1) * pageSize, pageSize * currentPage);
};
const createStaticPathArray = ({
  allPosts,
  PAGE_SIZE,
  totalPages,
  imageFiles
}) => {
  var staticPaths = [];
  var i = 1;
  do {
    var paginatedArray = getPaginatedArray(allPosts, i, PAGE_SIZE);
    var path = {
      params: { page: i },
      props: {
        totalPages,
        imageFiles,
        paginatedArray,
        totalPosts: allPosts.length,
        PAGE_SIZE
      }
    };
    staticPaths.push(path);
    i++;
  } while (i <= totalPages);
  return staticPaths;
};
const createStaticPathArrayForTagsAndPage = ({
  allPosts,
  PAGE_SIZE
}) => {
  var allTags = allPosts.map((post) => post.frontmatter.tags).flat().map((item) => item.tag);
  const uniqueTags = [...new Set(allTags)];
  var staticPaths = [];
  uniqueTags.forEach((unique_tag) => {
    var filteredPosts = allPosts.filter(
      (post) => post.frontmatter.tags?.some((item) => item.tag === unique_tag)
    );
    var totalPages = Math.ceil(filteredPosts.length / PAGE_SIZE);
    var i = 0;
    do {
      var paginatedArray = getPaginatedArray(filteredPosts, i, PAGE_SIZE);
      var path = {
        params: {
          tag: unique_tag,
          page: i
        },
        props: {
          totalPages,
          paginatedArray,
          totalPosts: filteredPosts.length,
          PAGE_SIZE
        }
      };
      staticPaths.push(path);
      i++;
    } while (i <= totalPages);
  });
  return staticPaths;
};
const createStaticPathArrayForTags = ({
  allPosts,
  PAGE_SIZE
}) => {
  var allTags = allPosts.map((post) => post.frontmatter.tags).flat().map((item) => item.tag);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags.map((unique_tag) => {
    var filteredPosts = allPosts.filter(
      (post) => post.frontmatter.tags?.some((item) => item.tag === unique_tag)
    );
    var totalPages = Math.ceil(filteredPosts.length / PAGE_SIZE);
    return {
      params: {
        tag: unique_tag
      },
      props: {
        totalPages,
        filteredPosts
      }
    };
  });
};

const SearchQuery = (query, list) => {
  const lowercase_query = query.toLowerCase().trim();
  return list.filter((item) => SearchFrontmatter(lowercase_query, item));
};
const SearchFrontmatter = (query, post) => {
  const author = post.frontmatter.author.toLowerCase().trim();
  if (author.includes(query)) {
    return true;
  }
  const title = post.frontmatter.title.toLowerCase().trim();
  if (title.includes(query)) {
    return true;
  }
  const description = post.frontmatter.description.toLowerCase().trim();
  if (description.includes(query)) {
    return true;
  }
  if (QueryTags(query, post)) {
    return true;
  }
  return false;
};
const QueryTags = (query, post) => {
  return post.frontmatter.tags?.some((item) => item.tag.toLowerCase().trim() === query);
};

const $$Astro = createAstro();
const prerender = false;
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const {
    page,
    search_query
  } = Astro2.params;
  const PAGE_SIZE = 6;
  var allPosts = [];
  var totalPages = 0;
  var searchResults = [];
  var imageFiles = {};
  try {
    allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../../posts/post-1 copy.md": () => import('./post-1 copy_4a01e947.mjs').then(n => n.p),"../../../posts/post-1.md": () => import('./post-1_eee786ce.mjs'),"../../../posts/post-3.md": () => import('./post-3_9c1c6c0d.mjs'),"../../../posts/post-4.md": () => import('./post-4_6b40871c.mjs'),"../../../posts/post-6.md": () => import('./post-6_d579f591.mjs'),"../../../posts/post-7.md": () => import('./post-7_9c569a65.mjs'),"../../../posts/this-is-the-7th-blog.md": () => import('./this-is-the-7th-blog_b3c7c815.mjs')}), () => "../../../posts/*.md");
  } catch (error) {
    allPosts = [];
  }
  try {
    imageFiles = /* #__PURE__ */ Object.assign({"../../../../assets/uploads/pots.jpg": () => import('../pots_1d2b4c0b.mjs'),"../../../../assets/uploads/stones.jpg": () => import('../stones_c53fa1d3.mjs'),"../../../../assets/uploads/trees.jpg": () => import('../trees_6752fe8a.mjs')});
  } catch (error) {
  }
  searchResults = SearchQuery(search_query, allPosts);
  totalPages = Math.ceil(searchResults.length / PAGE_SIZE);
  const pageNumber = page ? parseInt(page) : null;
  let inBound = page && typeof pageNumber === "number" && pageNumber <= totalPages;
  if (!inBound && totalPages != 0) {
    return Astro2.redirect("/error");
  }
  var paginatedArray = pageNumber && searchResults.length > 0 ? getPaginatedArray(searchResults, pageNumber, PAGE_SIZE) : [];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Blog posts" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="mb-[100px] w-11/12 mx-auto" id="content-wrapper"><h1 class="font-bold text-2xl text-center mt-10">Blog posts</h1>${renderComponent($$result2, "Searchbar", $$Index, {})}<div class="block mx-auto w-fit sm:[&>*]:inline-block justify-between"><p class="font-bold text-base my-5 text-center">Search query: "${search_query}"</p><a href="/blog/1" class="mx-auto text-center"><p class="underline hover:font-bold rounded-lg hover:bg-slate-300 p-1">Reset search</p></a></div>${totalPages === 0 && renderTemplate`<h2 class="text-center text-2xl">No blog posts are found with your search query.</h2>`}${totalPages > 1 && renderTemplate`${renderComponent($$result2, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": searchResults.length, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": true, "search_query": search_query, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/uthan-site/src/components/paginatedBlog/renderPagination.tsx", "client:component-export": "default" })}`}${paginatedArray && paginatedArray.length > 0 && renderTemplate`<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">${paginatedArray.map(async (post) => {
    if (post.frontmatter.featured_image) {
      return renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url, "thumbnail": post.frontmatter.featured_image })}`;
    }
    return renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url })}`;
  })}</div>`}${totalPages > 1 && renderTemplate`<div class="w-full h-auto">${renderComponent($$result2, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": searchResults.length, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": false, "search_query": search_query, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/uthan-site/src/components/paginatedBlog/renderPagination.tsx", "client:component-export": "default" })}</div>`}</div>` })}`;
}, "D:/Astro/uthan-site/src/pages/blog/search/[search_query]/[page].astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/blog/search/[search_query]/[page].astro";
const $$url = "/blog/search/[search_query]/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, AllCategories as A, BackImg as B, CarouselPosition as C, DOTS as D, RecentPostsStore as R, SiteData as S, TestimonialSideDirection as T, _page_ as _, $$LogoComponent as a, ServicesDemo as b, SelectedCategory as c, $$PreviewLink as d, $$Index as e, createStaticPathArray as f, RenderPagination as g, createStaticPathArrayForTagsAndPage as h, createStaticPathArrayForTags as i, formatPhoneNumber as j, phoneNumberToNumeric as p, usePagination as u };
