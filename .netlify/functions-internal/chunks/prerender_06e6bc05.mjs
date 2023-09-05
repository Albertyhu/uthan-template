/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, F as Fragment } from './astro_d427acf6.mjs';
import 'clsx';
import { $ as $$BaseLayout, d as $$PreviewLink, S as SiteData, f as createStaticPathArray, e as $$Index$2, g as RenderPagination$1, D as DOTS, u as usePagination, h as createStaticPathArrayForTagsAndPage, i as createStaticPathArrayForTags, p as phoneNumberToNumeric, j as formatPhoneNumber } from './pages/_page__35530602.mjs';
import { p as projects, $ as $$Index$1, S as Shape3, d as data$1 } from './pages/index_82b233d9.mjs';
/* empty css                                   */import { $ as $$ContentWrapper } from './pages/error_b7b461d6.mjs';
/* empty css                           *//* empty css                          */import { jsxs, jsx } from 'react/jsx-runtime';
import uuid from 'react-uuid';
/* empty css                           *//* empty css                                  */
const $$Astro$i = createAstro();
const prerender$9 = true;
const $$MessageSent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$MessageSent;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Message sent" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="mx-auto mt-[20px] block"><p class="text-2xl text-center font-bold">Your message has successfully been sent.</p><a href="/"><button class="fancyButton box_shadow mx-auto my-[20px]">Go Home</button></a></div>` })}`;
}, "D:/Astro/uthan-site/src/pages/message_sent.astro", void 0);

const $$file$9 = "D:/Astro/uthan-site/src/pages/message_sent.astro";
const $$url$9 = "/message_sent";

const message_sent = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$MessageSent,
    file: $$file$9,
    prerender: prerender$9,
    url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$h = createAstro();
const $$ImageComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ImageComponent;
  const {
    image,
    altText,
    customStyle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="image-component"${addAttribute(customStyle ? customStyle : "h-auto w-11/12 mx-auto md:h-[370px] md:w-[370px] overflow-hidden rounded-lg grow-[3]", "class")}><img${addAttribute(image.src, "src")}${addAttribute(altText ? altText : "projectimage", "alt")} class="object-cover w-full h-full"></div>`;
}, "D:/Astro/uthan-site/src/components/image_component.astro", void 0);

const $$Astro$g = createAstro();
const $$ImageGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ImageGrid;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="image-grid" class="flex flex-row flex-wrap gap-5 mt-10 [&>div]:w-[250px] [&>div]:h-[250px] xm:[&>div]:w-[330px] xm:[&>div]:h-[330px]">${images && images.length > 0 && images.map(
    (image, index) => renderTemplate`${renderComponent($$result, "ImageComponent", $$ImageComponent, { "image": image, "altText": `image-${index + 1}` })}`
  )}</div>`;
}, "D:/Astro/uthan-site/src/components/project_page_component/image_grid.astro", void 0);

const $$Astro$f = createAstro();
const $$DescriptionSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$DescriptionSection;
  const { description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="my-10"><h2>Project Description</h2><div>${description}</div></section>`;
}, "D:/Astro/uthan-site/src/components/project_page_component/description_section.astro", void 0);

const $$Astro$e = createAstro();
const $$ChallengeSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ChallengeSection;
  const {
    challenge,
    image
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="my-10"><h2>Project Challenge</h2><div class="flex flex-col-reverse sm:flex-row sm:gap-10"><div class="grow basis-80 justify-center">${challenge}</div>${image && renderTemplate`${renderComponent($$result, "ImageComponent", $$ImageComponent, { "image": image, "altText": "challenge project" })}`}</div></section>`;
}, "D:/Astro/uthan-site/src/components/project_page_component/challenge_section.astro", void 0);

const $$Astro$d = createAstro();
const $$SolutionSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SolutionSection;
  const {
    solution,
    image
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="my-10"><h2>Project Solution</h2><div class="flex flex-col sm:flex-row sm:gap-10">${image && renderTemplate`${renderComponent($$result, "ImageComponent", $$ImageComponent, { "image": image, "altText": "challenge project" })}`}<div class="grow basis-80">${solution}</div></div></section>`;
}, "D:/Astro/uthan-site/src/components/project_page_component/solution_section.astro", void 0);

const $$Astro$c = createAstro();
const $$ProjectInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ProjectInfo;
  const {
    category,
    client,
    startDate,
    endDate
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg border-[1px] border-slate-300 w-full mx-auto xl:w-[400px] mt-5 sm:mt-10"><div class="w-10/12 m-auto py-10 [&>*]:mb-5 [&>*]:font-['Montserrat',sans-serif]"><h3 class="font-['Prata',serif] block text-[30px] mb-[12px]">Project Info</h3>${category && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div><b>Category : </b>${category}</div><hr class="border-[1px] bg-slate-300 w-full">` })}`}${client && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div><b>Client : </b>${client}</div><hr class="border-[1px] bg-slate-300 w-full">` })}`}${startDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div><b>Start : </b>${startDate}</div><hr class="border-[1px] bg-slate-300 w-full">` })}`}${endDate && renderTemplate`<div><b>End : </b>${endDate}</div>`}</div></div>`;
}, "D:/Astro/uthan-site/src/components/project_page_component/project_info.astro", void 0);

const $$Astro$b = createAstro();
const prerender$8 = true;
async function getStaticPaths$7() {
  return projects.map((project) => {
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
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": name, "CTA_Banner": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$1, { "title": name })}${maybeRenderHead()}<div class="w-11/12 mx-auto">${images && images.length >= 3 && renderTemplate`${renderComponent($$result2, "ImageGrid", $$ImageGrid, { "images": gridImages })}`}<div class="flex flex-col-reverse grow xl:flex-row gap-10"><div id="Project-left-column">${renderComponent($$result2, "DescriptionSection", $$DescriptionSection, { "description": description })}${renderComponent($$result2, "ChallengeSection", $$ChallengeSection, { "challenge": challenge, "image": challenge_image ? challenge_image : null })}${renderComponent($$result2, "SolutionSection", $$SolutionSection, { "solution": solution, "image": solution_image ? solution_image : null })}</div><div id="project-right-column relative">${renderComponent($$result2, "ProjectInfo", $$ProjectInfo, { "category": category, "client": client, "startDate": startDate, "endDate": endDate })}<div class="hidden xl:block overflow-hidden h-auto w-11/12 mt-10 z-1"><img${addAttribute(Shape3.src, "src")} class="w-full h-full object-cover" alt="shape-23"></div></div></div></div>` })}`;
}, "D:/Astro/uthan-site/src/pages/projects/[project_name].astro", void 0);

const $$file$8 = "D:/Astro/uthan-site/src/pages/projects/[project_name].astro";
const $$url$8 = "/projects/[project_name]";

const _project_name_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$projectName,
    file: $$file$8,
    getStaticPaths: getStaticPaths$7,
    prerender: prerender$8,
    url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro();
const prerender$7 = true;
async function getStaticPaths$6() {
  return data$1.map((service) => {
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
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": title, "CTA_Banner": true, "data-astro-cid-dd6q6tbv": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$1, { "title": title, "subtitle": tagline, "data-astro-cid-dd6q6tbv": true })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, { "data-astro-cid-dd6q6tbv": true }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col sm:flex-row sm:gap-10" data-astro-cid-dd6q6tbv><div class="grow-0" data-astro-cid-dd6q6tbv>${description && renderTemplate`<section class="my-10" data-astro-cid-dd6q6tbv><h3 class="text-[30px] mb-5" data-astro-cid-dd6q6tbv>Description</h3><div data-astro-cid-dd6q6tbv>${description}</div></section>`}${features && renderTemplate`<section class="my-10" data-astro-cid-dd6q6tbv><h3 class="text-[30px] mb-5" data-astro-cid-dd6q6tbv>Features</h3><ul class="list-disc list-inside" data-astro-cid-dd6q6tbv>${features.map((feature) => renderTemplate`<li class="list-disc list-inside" data-astro-cid-dd6q6tbv>${feature}</li>`)}</ul></section>`}</div>${image1 && renderTemplate`${renderComponent($$result3, "ImageComponent", $$ImageComponent, { "image": image1.src, "altText": title, "customStyle": "w-auto h-auto overflow-hidden my-10 rounded-lg mx-auto grow", "data-astro-cid-dd6q6tbv": true })}`}</div>${promise && renderTemplate`<section class="my-10" data-astro-cid-dd6q6tbv><h3 class="text-[30px] mb-5" data-astro-cid-dd6q6tbv>What we promise to deliver</h3><div data-astro-cid-dd6q6tbv>${promise}</div></section>`}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/services/[type].astro", void 0);

const $$file$7 = "D:/Astro/uthan-site/src/pages/services/[type].astro";
const $$url$7 = "/services/[type]";

const _type_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$type,
    file: $$file$7,
    getStaticPaths: getStaticPaths$6,
    prerender: prerender$7,
    url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro();
const Astro$4 = $$Astro$9;
const prerender$6 = true;
async function getStaticPaths$5() {
  var allPosts = [];
  try {
    allPosts = await Astro$4.glob(/* #__PURE__ */ Object.assign({"../posts/post-1 copy.md": () => import('./pages/post-1 copy_f717e2e3.mjs').then(n => n.p),"../posts/post-1.md": () => import('./pages/post-1_d4dbf775.mjs'),"../posts/post-3.md": () => import('./pages/post-3_241f2377.mjs'),"../posts/post-4.md": () => import('./pages/post-4_17a3d21b.mjs'),"../posts/post-6.md": () => import('./pages/post-6_d7d3732a.mjs'),"../posts/post-7.md": () => import('./pages/post-7_0713cf6a.mjs'),"../posts/this-is-the-7th-blog.md": () => import('./pages/this-is-the-7th-blog_032a464d.mjs')}), () => "../posts/*.md");
  } catch (error) {
    console.log(error);
  }
  const allTags = allPosts.map((post) => post.frontmatter.tags).flat().map((item) => item.tag);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags.map((tag) => {
    var filteredPosts = allPosts.filter((post) => post.frontmatter.tags?.some((item) => item.tag === tag));
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$tag$1;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  posts.filter((val) => val.frontmatter.tags?.some((item) => item.tag == tag));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<p>Posts tagged with ${tag}</p><ul class="[&>li]:my-5">${posts && posts.length > 0 && posts.map((item) => renderTemplate`<li class="hover:font-bold hover:underline"><a${addAttribute(item.url, "href")}>${item.frontmatter.title}</a></li>`)}</ul>` })}`;
}, "D:/Astro/uthan-site/src/pages/tags_old/[tag].astro", void 0);

const $$file$6 = "D:/Astro/uthan-site/src/pages/tags_old/[tag].astro";
const $$url$6 = "/tags_old/[tag]";

const _tag_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$tag$1,
    file: $$file$6,
    getStaticPaths: getStaticPaths$5,
    prerender: prerender$6,
    url: $$url$6
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

const $$Astro$8 = createAstro();
const Astro$3 = $$Astro$8;
const prerender$5 = true;
async function getStaticPaths$4() {
  const allPosts = await Astro$3.glob(/* #__PURE__ */ Object.assign({"../posts/post-1 copy.md": () => import('./pages/post-1 copy_f717e2e3.mjs').then(n => n.p),"../posts/post-1.md": () => import('./pages/post-1_d4dbf775.mjs'),"../posts/post-3.md": () => import('./pages/post-3_241f2377.mjs'),"../posts/post-4.md": () => import('./pages/post-4_17a3d21b.mjs'),"../posts/post-6.md": () => import('./pages/post-6_d7d3732a.mjs'),"../posts/post-7.md": () => import('./pages/post-7_0713cf6a.mjs'),"../posts/this-is-the-7th-blog.md": () => import('./pages/this-is-the-7th-blog_032a464d.mjs')}), () => "../posts/*.md");
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
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$author;
  const { author } = Astro2.params;
  const { posts } = Astro2.props;
  const pageTitle = `Blog posts by ${author}`;
  const imageFiles = /* #__PURE__ */ Object.assign({"../../assets/uploads/pots.jpg": () => import('./pots_1d2b4c0b.mjs'),"../../assets/uploads/stones.jpg": () => import('./stones_c53fa1d3.mjs'),"../../assets/uploads/trees.jpg": () => import('./trees_6752fe8a.mjs')});
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "SmallBanner", $$Index$1, {})}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div id="wrapper" class="mb-[150px]"><h1 class="text-3xl font-bold text-center mt-10">${pageTitle}</h1>${posts ? renderTemplate`<div class="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-5">${posts.map(async (post) => {
    if (post.frontmatter.images && post.frontmatter.images.length > 0) {
      const thumbnail = await RetrieveImageFromGlob(post.frontmatter.images[0].url, imageFiles);
      return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url, "thumbnail": thumbnail })}`;
    }
    return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url })}`;
  })}</div>` : renderTemplate`<p>This author hasn't published any posts yet.</p>`}</div>` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/authors/[author].astro", void 0);

const $$file$5 = "D:/Astro/uthan-site/src/pages/authors/[author].astro";
const $$url$5 = "/authors/[author]";

const _author_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$author,
    file: $$file$5,
    getStaticPaths: getStaticPaths$4,
    prerender: prerender$5,
    url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro();
const $$WorkBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$WorkBlock;
  const {
    title,
    description,
    index,
    hidden,
    iconNumber
  } = Astro2.props;
  var number = index > 10 ? index : `0${index}`;
  return renderTemplate`${maybeRenderHead()}<div class="w-11/12 sm:w-[300px] mx-auto"><div class="working-block-one wow fadeInUp animated animated" data-wow-delay="0ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;"><div class="inner-box relative block pl-[15px] pr-[15px]">${!hidden && renderTemplate`<div class="top-[66px] right-[-22%] translate-x-[-50%] w-[66px] h-[36px] bg-no-repeat absolute hidden sm:block" style="background-image: url(../src/assets/images/icons/arrow-2.png);"></div>`}<div class="icon-box relative inline-block mb-[35px] transition-[5s]"><div class="shape absolute transition-[5s]" style="background-image: url(../src/assets/images/shape/shape-20.png);"></div><div class="icon relative inline-block text-[70px] theme-color z-[1]"><i${addAttribute(`icon-${iconNumber}`, "class")}></i></div><span class="absolute text-[22px] font-medium text-white bg-[#2f7955] w-fit h-fit rounded-lg transition-[5s]">${number}</span></div><h3 class="block text-[24px] leading-[30px] font-medium mb-[20px]">${title}</h3><p class="block text-[15px] leading-[26px]">${description}</p></div></div></div>`;
}, "D:/Astro/uthan-site/src/components/about_page/process_section/work-block.astro", void 0);

const $$Astro$6 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    process
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="working-section alternat-2 relative pb-[140px] text-center"><div class="auto-container"><div class="sec-title mb-[65px]"><span class="sub-title">Process</span><h2>We Always Work by The <br>Following Process</h2></div><div class="flex flex-col sm:flex-row">${process && process && process.length > 0 && process.map(
    (item, index) => renderTemplate`${renderComponent($$result, "WorkBlock", $$WorkBlock, { "title": item.title, "description": item.description, "iconNumber": item.iconNumber, "index": index + 1, "hidden": index >= process.length - 1 })}`
  )}</div></div></section>`;
}, "D:/Astro/uthan-site/src/components/about_page/process_section/index.astro", void 0);

const $$Astro$5 = createAstro();
const $$HistorySection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HistorySection;
  return renderTemplate`${maybeRenderHead()}<section id="top-section" class="flex" data-astro-cid-mhqtycv7><div id="person_block" class="relative w-full h-fit block sm:mb-[100px]" data-astro-cid-mhqtycv7><div class="w-[270px] h-[270px] mx-auto relative rounded-full bg-[#2f7955] sm:w-[470px] sm:h-[470px]" data-astro-cid-mhqtycv7></div><div class="absolute top-[153px] hidden sm: block right-[-75px] w-[150px] h-[219px] bg-no-repeat bg-[url('../src/assets/images/shape/shape-19.png')]" data-astro-cid-mhqtycv7></div><figure class="absolute w-[200px] sm:w-[350px] left-[50%] translate-x-[-50%] bottom-0 z-30 block sm:w-[375px] h-auto" data-astro-cid-mhqtycv7><img src="../src/assets/images/resource/about-1.png" alt="about-us-image" class="object-cover w-full h-full mx-auto" data-astro-cid-mhqtycv7></figure><div id="circle_info" class="hidden sm:block absolute flex sm:rounded-full about-box-shadow z-[31] centered bg-white z-10 sm:w-[270px] sm:h-[270px] bottom-0 justify-center" data-astro-cid-mhqtycv7><div class="grid !m-auto w-fit h-fit text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] relative" data-astro-cid-mhqtycv7><div class="relative text-6xl theme_color leading-[60px] mb-[12px]" data-astro-cid-mhqtycv7><i class="icon-16" data-astro-cid-mhqtycv7></i></div><h4 class="text-xl leading-[32px] font-medium" data-astro-cid-mhqtycv7>5K+ People Choose ${SiteData.business_name}</h4></div></div></div><div id="brief-company-description" class="w-11/12 mx-auto sm:ml-16" data-astro-cid-mhqtycv7><h1 class="text-center sm:left relative block text-[18px] leading0[28px] font-['Montserrat',sans-serif] font-[600] mb-[16px] uppercase text-[#2f7955]" data-astro-cid-mhqtycv7>About</h1><h2 class="text-center sm:left block font-['Prata',serif] font-[400] text-[#141417] text-6xl mb-10" data-astro-cid-mhqtycv7>20 years of great service</h2><div id="brief-description" class="font-['Montserrat',sans-serif] [&>*]:mb-10" data-astro-cid-mhqtycv7><p data-astro-cid-mhqtycv7>At ${SiteData.business_name}, we believe that the beauty of nature can be harnessed to transform ordinary spaces into extraordinary outdoor sanctuaries. With a passion for creating captivating landscapes, we have established ourselves as a leading landscaping company dedicated to bringing the splendor of nature closer to your doorstep.</p><p data-astro-cid-mhqtycv7>
Our Journey
                Founded ${SiteData.year_founded}, ${SiteData.business_name} embarked on a journey with a simple yet profound vision: to seamlessly blend human creativity with the elegance of nature. Over the years, our team of seasoned landscapers, horticulturists, and designers have transformed this vision into a tangible reality. We take pride in our rich portfolio of projects that showcase our commitment to innovation, sustainability, and craftsmanship.
</p></div></div><div class="block sm:hidden text-center w-[275px] h-[275px] mx-auto rounded-full about-box-shadow " data-astro-cid-mhqtycv7><div class="grid !m-auto w-fit h-fit text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] relative" data-astro-cid-mhqtycv7><div class="relative text-6xl theme_color leading-[60px] mb-[12px]" data-astro-cid-mhqtycv7><i class="icon-16" data-astro-cid-mhqtycv7></i></div><h4 class="text-xl leading-[32px] font-medium" data-astro-cid-mhqtycv7>5K+ People Choose ${SiteData.business_name}</h4></div></div></section>`;
}, "D:/Astro/uthan-site/src/components/about_page/history-section.astro", void 0);

const data = [
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
	data: data
};

const $$Astro$4 = createAstro();
const prerender$4 = true;
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "About Us", "CTA_Banner": true, "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$1, { "image": "../../src/assets/images/banner/garden-worker.jpg", "title": "About Us", "subtitle": "Serving clients in US for over 20 years", "data-astro-cid-kh7btl4r": true })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "HistorySection", $$HistorySection, { "data-astro-cid-kh7btl4r": true })}${renderComponent($$result3, "ProcessSection", $$Index, { "process": Process.data, "data-astro-cid-kh7btl4r": true })}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/about.astro", void 0);

const $$file$4 = "D:/Astro/uthan-site/src/pages/about.astro";
const $$url$4 = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file$4,
    prerender: prerender$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const Astro$2 = $$Astro$3;
const prerender$3 = true;
async function getStaticPaths$3() {
  const PAGE_SIZE = 6;
  var allPosts = [];
  var totalPages = 0;
  try {
    allPosts = await Astro$2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1 copy.md": () => import('./pages/post-1 copy_f717e2e3.mjs').then(n => n.p),"../posts/post-1.md": () => import('./pages/post-1_d4dbf775.mjs'),"../posts/post-3.md": () => import('./pages/post-3_241f2377.mjs'),"../posts/post-4.md": () => import('./pages/post-4_17a3d21b.mjs'),"../posts/post-6.md": () => import('./pages/post-6_d7d3732a.mjs'),"../posts/post-7.md": () => import('./pages/post-7_0713cf6a.mjs'),"../posts/this-is-the-7th-blog.md": () => import('./pages/this-is-the-7th-blog_032a464d.mjs')}), () => "../posts/*.md");
    totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
  } catch (error) {
    allPosts = [];
  }
  var imageFiles = {};
  try {
    imageFiles = /* #__PURE__ */ Object.assign({"../../assets/uploads/pots.jpg": () => import('./pots_1d2b4c0b.mjs'),"../../assets/uploads/stones.jpg": () => import('./stones_c53fa1d3.mjs'),"../../assets/uploads/trees.jpg": () => import('./trees_6752fe8a.mjs')});
  } catch (error) {
    imageFiles = {};
  }
  return createStaticPathArray({
    allPosts,
    PAGE_SIZE,
    totalPages,
    imageFiles
  });
}
const $$page$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$page$1;
  const { page } = Astro2.params;
  const {
    totalPages,
    imageFiles,
    paginatedArray,
    totalPosts,
    PAGE_SIZE
  } = Astro2.props;
  let inBound = page && typeof parseInt(page) === "number" && parseInt(page) <= totalPages;
  if (!inBound && totalPages != 0) {
    return Astro2.redirect("/error");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Blog posts" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="mb-[100px] w-11/12 mx-auto" id="content-wrapper"><h1 class="font-bold text-2xl text-center mt-10">Blog posts</h1>${renderComponent($$result2, "Searchbar", $$Index$2, {})}${totalPosts === 0 && renderTemplate`<h2 class="text-center text-2xl my-5">There are currently no blog posts published at the moment.</h2>`}${totalPages > 1 && renderTemplate`${renderComponent($$result2, "RenderPagination", RenderPagination$1, { "pageSize": PAGE_SIZE, "totalCount": totalPosts, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/uthan-site/src/components/paginatedBlog/renderPagination.tsx", "client:component-export": "default" })}`}${paginatedArray && paginatedArray.length > 0 && renderTemplate`<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">${paginatedArray.map(async (post) => {
    if (post.frontmatter.featured_image) {
      return renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url, "thumbnail": post.frontmatter.featured_image })}`;
    }
    return renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url })}`;
  })}</div>`}${totalPages > 1 && renderTemplate`<div class="w-full h-auto">${renderComponent($$result2, "RenderPagination", RenderPagination$1, { "pageSize": PAGE_SIZE, "totalCount": totalPosts, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/uthan-site/src/components/paginatedBlog/renderPagination.tsx", "client:component-export": "default" })}</div>`}</div>` })}`;
}, "D:/Astro/uthan-site/src/pages/blog/[page].astro", void 0);

const $$file$3 = "D:/Astro/uthan-site/src/pages/blog/[page].astro";
const $$url$3 = "/blog/[page]";

const _page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page$1,
    file: $$file$3,
    getStaticPaths: getStaticPaths$3,
    prerender: prerender$3,
    url: $$url$3
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

const $$Astro$2 = createAstro();
const Astro$1 = $$Astro$2;
const prerender$2 = true;
async function getStaticPaths$2() {
  const PAGE_SIZE = 6;
  var allPosts = [];
  try {
    allPosts = await Astro$1.glob(/* #__PURE__ */ Object.assign({"../../posts/post-1 copy.md": () => import('./pages/post-1 copy_f717e2e3.mjs').then(n => n.p),"../../posts/post-1.md": () => import('./pages/post-1_d4dbf775.mjs'),"../../posts/post-3.md": () => import('./pages/post-3_241f2377.mjs'),"../../posts/post-4.md": () => import('./pages/post-4_17a3d21b.mjs'),"../../posts/post-6.md": () => import('./pages/post-6_d7d3732a.mjs'),"../../posts/post-7.md": () => import('./pages/post-7_0713cf6a.mjs'),"../../posts/this-is-the-7th-blog.md": () => import('./pages/this-is-the-7th-blog_032a464d.mjs')}), () => "../../posts/*.md");
  } catch (error) {
    allPosts = [];
  }
  return createStaticPathArrayForTagsAndPage({ allPosts, PAGE_SIZE });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, { "customStyle": "w-11/12 h-auto mx-auto mb-[100px] sm:mb[0px]" }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<h1 class="font-bold text-center text-2xl mt-5">Posts tagged with ${tag}</h1>${renderComponent($$result3, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": totalPosts, "}": true, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/uthan-site/src/components/paginatedBlog/renderTagPagination.tsx", "client:component-export": "default" })}${paginatedArray && paginatedArray.length > 0 ? renderTemplate`<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">${paginatedArray.map((post) => {
    if (post.frontmatter.featured_image) {
      return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url, "thumbnail": post.frontmatter.featured_image })}`;
    }
    return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url })}`;
  })}</div>` : renderTemplate`<div></div>`}${renderComponent($$result3, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": totalPosts, "}": true, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/uthan-site/src/components/paginatedBlog/renderTagPagination.tsx", "client:component-export": "default" })}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/tags/[tag]/[page].astro", void 0);

const $$file$2 = "D:/Astro/uthan-site/src/pages/tags/[tag]/[page].astro";
const $$url$2 = "/tags/[tag]/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file$2,
    getStaticPaths: getStaticPaths$2,
    prerender: prerender$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const Astro = $$Astro$1;
const prerender$1 = true;
async function getStaticPaths$1() {
  const PAGE_SIZE = 6;
  var allPosts = [];
  try {
    allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../posts/post-1 copy.md": () => import('./pages/post-1 copy_f717e2e3.mjs').then(n => n.p),"../posts/post-1.md": () => import('./pages/post-1_d4dbf775.mjs'),"../posts/post-3.md": () => import('./pages/post-3_241f2377.mjs'),"../posts/post-4.md": () => import('./pages/post-4_17a3d21b.mjs'),"../posts/post-6.md": () => import('./pages/post-6_d7d3732a.mjs'),"../posts/post-7.md": () => import('./pages/post-7_0713cf6a.mjs'),"../posts/this-is-the-7th-blog.md": () => import('./pages/this-is-the-7th-blog_032a464d.mjs')}), () => "../posts/*.md");
  } catch (error) {
    allPosts = [];
  }
  var staticArray = createStaticPathArrayForTags({ allPosts, PAGE_SIZE });
  return staticArray;
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$tag;
  const {
    tag
  } = Astro2.params;
  const {
    totalPages,
    filteredPosts
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<h1 class="text-2xl font-bold text-center mt-10">Posts tagged with ${tag}</h1>${filteredPosts && filteredPosts.length > 0 ? renderTemplate`<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">${filteredPosts.map((post) => {
    if (post.frontmatter.featured_image) {
      return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url, "thumbnail": post.frontmatter.featured_image })}`;
    }
    return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url })}`;
  })}</div>` : renderTemplate`<div></div>`}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/tags/[tag].astro", void 0);

const $$file$1 = "D:/Astro/uthan-site/src/pages/tags/[tag].astro";
const $$url$1 = "/tags/[tag]";

const _tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$tag,
    file: $$file$1,
    getStaticPaths: getStaticPaths$1,
    prerender: prerender$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const members = [
	{
		name: "Penny T",
		designation: "Garden Experts",
		phone: 1747213222,
		facebook: "http://www.facebook.com",
		email: "PennyT@gmail.com",
		twitter: "http://wwww.twitter.com",
		google: "http://www.google.com",
		profile_image: "../src/assets/images/team/person-3.jpg",
		biography: "From a tender age, Penny exhibited an unwavering fascination for the world around her. While other children played indoors, Penny could often be found exploring the nooks and crannies of her family's backyard, discovering the wonder of life in every plant, flower, and critter. It was during these formative years that her lifelong passion for gardening was kindled."
	},
	{
		name: "Sid Wasserman",
		designation: "Garden Experts",
		phone: 1747512336,
		email: "S.Wasswerdude@gmail.com",
		link: "./team/sid_wasserman",
		facebook: "http://www.facebook.com",
		twitter: "http://wwww.twitter.com",
		google: "http://www.google.com",
		profile_image: "../src/assets/images/team/person-2.jpg",
		biography: "Sid's journey led him to pursue a degree in Landscape Architecture from the prestigious Harmony University. Armed with both theoretical knowledge and a strong design sensibility, Sid's designs are more than just gardens; they are symphonies conducted with the rhythm of colors, textures, and spatial arrangements. His education equipped him not only to cultivate gardens but to craft immersive experiences that resonate with the human soul."
	},
	{
		name: "Bob Reinstein",
		designation: "Garden Experts",
		email: "B.Reinstein@gmail.com",
		phone: 17478945567,
		link: "./team/bob_reintein",
		facebook: "http://www.facebook.com",
		twitter: "http://wwww.twitter.com",
		google: "http://www.google.com",
		profile_image: "../src/assets/images/team/person-1.jpg",
		biography: "Bob's signature lies in his ability to transform even the most modest spaces into breathtaking spectacles of elegance. His designs are not just gardens; they are living works of art, carefully curated compositions of color, texture, and form. Through skillful plant selection and an innate understanding of design principles, Bob's gardens are masterpieces that enchant the senses and soothe the soul."
	}
];
const TeamMembers = {
	members: members
};

const $$Astro = createAstro();
const prerender = true;
const getStaticPaths = async () => {
  return TeamMembers.members.map((member) => {
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
        profile_image: member.profile_image,
        biography: member.biography
      }
    };
  });
};
const $$teamMember = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": TeamMembers.name, "data-astro-cid-xksyzjet": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$1, { "title": name, "subtitle": designation, "data-astro-cid-xksyzjet": true })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, { "data-astro-cid-xksyzjet": true }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div id="team-layout" class="flex flex-col sm:flex-row" data-astro-cid-xksyzjet><div id="left-column" data-astro-cid-xksyzjet>${profile_image && renderTemplate`<div class="w-11/12 h-auto mx-auto sm:ml-0 rounded-lg my-10 overflow-hidden" data-astro-cid-xksyzjet><img id="profile_image"${addAttribute(profile_image, "src")}${addAttribute(name, "alt")} class="h-full w-full object-cover transition-all hover:scale-125" data-astro-cid-xksyzjet></div>`}<ul data-astro-cid-xksyzjet>${phone && renderTemplate`<li class="relative block mb-[20px]" data-astro-cid-xksyzjet><p class="text-lg" data-astro-cid-xksyzjet><a${addAttribute(`tel:${phoneNumberToNumeric(phone)}`, "href")} data-astro-cid-xksyzjet><b data-astro-cid-xksyzjet>Phone number: </b>${formatPhoneNumber(phone)}</a></p></li>`}${email && renderTemplate`<li class="relative block" data-astro-cid-xksyzjet><p class="text-lg" data-astro-cid-xksyzjet><a${addAttribute(`mailto:${email}`, "href")} data-astro-cid-xksyzjet><b data-astro-cid-xksyzjet>Email: </b>${email}</a></p></li>`}</ul></div><div id="right-column" class="sm:max-w-[60%]" data-astro-cid-xksyzjet><h1 class="font-bold text-3xl font-['Montserrat',sans-serif] mt-8" data-astro-cid-xksyzjet>${name}</h1>${designation && renderTemplate`<h3 class="text-slate-400" data-astro-cid-xksyzjet>${designation}</h3>`}${biography && renderTemplate`<p class="my-10 text-slate-500" data-astro-cid-xksyzjet>${biography}</p>`}<h3 class="text-slate-800 font-['Monserrat',sans-serif] text-2xl mb-5" data-astro-cid-xksyzjet>Follow Me On: </h3><ul class="[&>li]:rounded-full [&>li]:border-[#dbdbdb] [&>li]:border-[1px] [&>li]:p-1 [&>li]:w-[44px] [&>li]:h-[44px] [&>li]:text-center [&>li>a>*]:m-auto" data-astro-cid-xksyzjet>${facebook && renderTemplate`<li class="relative inline-block mr-[10px]" data-astro-cid-xksyzjet><a${addAttribute(facebook, "href")} class="block black hover:bg hover:bg-[#FFFFFF1A] text-center" data-astro-cid-xksyzjet><i class="fab fa-facebook-f iconStyle" data-astro-cid-xksyzjet></i></a></li>`}${twitter && renderTemplate`<li class="relative inline-block mr-[10px]" data-astro-cid-xksyzjet><a${addAttribute(twitter, "href")} class="block black hover:bg hover:bg-[#FFFFFF1A]" data-astro-cid-xksyzjet><i class="fab fa-twitter iconStyle" data-astro-cid-xksyzjet></i></a></li>`}${google && renderTemplate`<li class="relative inline-block" data-astro-cid-xksyzjet><a${addAttribute(google, "href")} class="block black hover:bg hover:bg-[#FFFFFF1A]" data-astro-cid-xksyzjet><i class="fab fa-google-plus-g iconStyle" data-astro-cid-xksyzjet></i></a></li>`}</ul></div></div>` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/team/[team_member].astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/team/[team_member].astro";
const $$url = "/team/[team_member]";

const _team_member_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$teamMember,
    file: $$file,
    getStaticPaths,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _project_name_ as _, _type_ as a, _tag_$1 as b, _author_ as c, about as d, _page_$1 as e, _page_ as f, _tag_ as g, _team_member_ as h, message_sent as m };
