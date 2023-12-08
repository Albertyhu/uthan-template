/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro_32dbe7d3.mjs';
import 'clsx';
import { $ as $$BaseLayout } from './404_8bf7126a.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useEffect, useState } from 'react';
import uuid from 'react-uuid';
/* empty css                            *//* empty css                           *//* empty css                            */
function makeURLfriendly(inputString) {
  return inputString.replace(/\s+/g, "_");
}

const getPaginatedArray = (allPosts, currentPage, pageSize) => {
  return allPosts.slice((currentPage - 1) * pageSize, pageSize * currentPage);
};
const createStaticPathArray = ({
  allPosts,
  PAGE_SIZE,
  totalPages,
  assets
}) => {
  var staticPaths = [];
  var i = 1;
  var assetMap = /* @__PURE__ */ new Map();
  do {
    var paginatedArray = getPaginatedArray(allPosts, i, PAGE_SIZE);
    paginatedArray = hydratePaginatedPostArray(paginatedArray, assetMap, assets);
    var path = {
      params: { page: i },
      props: {
        totalPages,
        assets,
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
  assets,
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
    var assetMap = /* @__PURE__ */ new Map();
    do {
      var paginatedArray = getPaginatedArray(filteredPosts, i, PAGE_SIZE);
      paginatedArray = hydratePaginatedPostArray(paginatedArray, assetMap, assets);
      var path = {
        params: {
          tag: makeURLfriendly(unique_tag),
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
        tag: makeURLfriendly(unique_tag)
      },
      props: {
        totalPages,
        filteredPosts
      }
    };
  });
};
const formatRecentPostArray = (allPosts, max) => {
  try {
    var recentPosts = allPosts.sort((a, b) => {
      var a_date = new Date(a.frontmatter.pubDate);
      var b_date = new Date(b.frontmatter.pubDate);
      return b_date.getTime() - a_date.getTime();
    }).slice(0, max);
    return recentPosts.map((post) => {
      return {
        featured_image: post.frontmatter.featured_image ? getImageFileName(post.frontmatter.featured_image) : null,
        title: post.frontmatter.title,
        pubDate: post.frontmatter.pubDate,
        description: post.frontmatter.description,
        author: post.frontmatter.author,
        images: post.frontmatter.images,
        tags: post.frontmatter.tags,
        body: post.frontmatter.body,
        url: post.url
      };
    });
  } catch (error) {
    console.log("formatRecentPostArray error: ", error);
    return [];
  }
};
const setBlogPostImages = (assets, main_feature, recent_posts) => {
  var formattedName = "";
  var payload = {
    main_featured_image: null,
    recentPosts: []
  };
  if (main_feature) {
    formattedName = getImageFileName(main_feature);
  }
  for (var i = 0; i < assets.length; i++) {
    var assetFileName = getImageFileName(assets[i].default.src);
    if (assetFileName === formattedName) {
      payload["main_featured_image"] = assets[i].default.src;
    }
    if (recent_posts) {
      var foundPost = recent_posts.find((val) => val.featured_image === assetFileName);
      if (foundPost) {
        var formattedFountPost = {
          ...foundPost,
          featured_image: assets[i].default.src
        };
        payload.recentPosts.push(formattedFountPost);
      }
    }
    if (main_feature && main_feature != "" && payload.main_featured_image != null && recent_posts?.length === payload.recentPosts.length) {
      return payload;
    }
  }
  return payload;
};
const retrieveRecentImages = (allPosts, assets, max) => {
  const recentPost = formatRecentPostArray(allPosts, max);
  var hydratedRecentPost = [];
  hydratedRecentPost = recentPost.map((post) => {
    var uploadedImage = assets.find((asset) => {
      return getImageFileName(asset.default.src) === post.featured_image;
    });
    return {
      ...post,
      featured_image: uploadedImage ? uploadedImage.default.src : null
    };
  });
  return hydratedRecentPost;
};
const getImageFileName = (imageFile) => {
  var pathArray = imageFile.split("/");
  var fileName = pathArray[pathArray.length - 1];
  var fileNameArray = fileName.split(".");
  return fileNameArray[0];
};
const hydratePaginatedPostArray = (paginatedArray, assetMap, assets) => {
  var hydratedArray = paginatedArray.map((item) => {
    if (item.frontmatter.featured_image) {
      var featured_image = null;
      var fileName = getImageFileName(item.frontmatter.featured_image);
      if (assetMap.get(fileName)) {
        featured_image = assetMap.get(fileName);
      } else {
        var foundAsset = assets.find((asset) => {
          var found = asset.default.src.includes(fileName);
          if (found) {
            assetMap.set(fileName, asset.default.src);
          }
          return found;
        });
        featured_image = foundAsset?.default.src;
      }
    }
    if (featured_image) {
      return {
        ...item,
        featured_image
      };
    }
    return item;
  });
  return hydratedArray;
};

const $$Astro$5 = createAstro();
const $$TagListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TagListItem;
  const {
    tag,
    url
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-fit hover:underline hover:font-bold mx-1 cursor-pointer capitalize rounded-[0.5em] border-dotted border-2 text-base border-[#a1a1a1] p-1 bg-[#F8FCFD] tagListItem"><a${addAttribute(url, "href")}>${tag}</a></div>`;
}, "D:/Astro/uthan-site/src/components/blogComponents/tagListItem.astro", void 0);

const $$Astro$4 = createAstro();
const $$TagList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TagList;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap "><p class="font-bold">Tags:</p>${tags.map((item) => renderTemplate`${renderComponent($$result, "TagListItem", $$TagListItem, { "url": `/tags/${makeURLfriendly(item.tag)}/1`, "tag": item.tag })}`)}</div>`;
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
      className: "relative h-auto max-h-[100px] w-full overflow-hidden before:absolute before:inset-0 before:z-[2]",
      children: [
        /* @__PURE__ */ jsx("b", { children: "Description: " }),
        description
      ]
    }
  );
};

const $$Astro$3 = createAstro();
const $$PreviewLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PreviewLink;
  const {
    title,
    author,
    description,
    thumbnail,
    featured_image,
    pubDate,
    tags,
    url
  } = Astro2.props;
  let datePublished = pubDate ? new Date(pubDate) : null;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg post-box-shadow bg-white blog-preview-panel mb-[20px]">${thumbnail && renderTemplate`<div class="overflow-hidden cursor-pointer h-[250px] w-auto rounded-[5px_5px_0px_0px]"><a${addAttribute(url, "href")}><img loading="lazy" decoding="async"${addAttribute(thumbnail, "src")}${addAttribute(`${title} featured image`, "alt")} class="w-full h-full object-cover transition-all duration-[2000ms]"></a></div>`}<div class="w-9/12 mx-auto py-10">${datePublished && renderTemplate`<div class="text-[#7a7b80]">${datePublished.toLocaleDateString()}</div>`}${title && renderTemplate`<a${addAttribute(url, "href")} class="cursor-pointer text-2xl"><h2 class="font-bold">${title}</h2></a>`}<p>${author && renderTemplate`<span class="font-bold">Published by <b>${author}</b></span>`}</p>${description && renderTemplate`${renderComponent($$result, "DescriptionComponent", RenderDescription, { "description": description, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/uthan-site/src/components/blogComponents/description.tsx", "client:component-export": "default" })}`}${tags && tags.length > 0 && renderTemplate`${renderComponent($$result, "TagList", $$TagList, { "tags": tags })}`}</div></div>`;
}, "D:/Astro/uthan-site/src/components/blogComponents/previewLink.astro", void 0);

const $$Astro$2 = createAstro();
const $$page$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$page$1;
  return renderTemplate``;
}, "D:/Astro/uthan-site/src/pages/authors/[name]/[page].astro", void 0);

const $$file$1 = "D:/Astro/uthan-site/src/pages/authors/[name]/[page].astro";
const $$url$1 = "/authors/[name]/[page]";

const _page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

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
      window.location.href = `/blog/search/${query}/1`;
    }
    setSearchHistory([]);
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
        className: "flex flex-col xm:flex-row gap-y-5 xm:gap-y-[0px]",
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              id: "QueryWrapper",
              className: "flex bg-[#ffffff] rounded-lg mx-auto w-full border-2 border-solid border-black mr-5",
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
  return renderTemplate`${maybeRenderHead()}<form id="SearchBar" class="relative block py-[30px] px-[40px] rounded-lg mb-[50px] border-2 border-[#dbdbdb] h-fit border-solid">${renderComponent($$result, "SearchBar", SearchBar, { "allPosts": allPosts, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/uthan-site/src/components/search/searchbar", "client:component-export": "default" })}</form>`;
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
  var assets = [];
  var assetMap = /* @__PURE__ */ new Map();
  try {
    allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../../posts/post-1.md": () => import('./post-1_07fcfee5.mjs').then(n => n.p),"../../../posts/post-3.md": () => import('./post-3_f6ebffdd.mjs'),"../../../posts/post-4.md": () => import('./post-4_3b15ac64.mjs'),"../../../posts/post-6.md": () => import('./post-6_d67972cc.mjs'),"../../../posts/post-7.md": () => import('./post-7_29b62b00.mjs'),"../../../posts/post-8.md": () => import('./post-8_9589f831.mjs'),"../../../posts/post-9.md": () => import('./post-9_0963acda.mjs')}), () => "../../../posts/*.md");
  } catch (error) {
    allPosts = [];
  }
  try {
    assets = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../../../assets/uploads/edible-landscaping.webp": () => import('../edible-landscaping_1da9ec80.mjs'),"../../../../assets/uploads/perma-culture.webp": () => import('../perma-culture_278338af.mjs'),"../../../../assets/uploads/pots.jpg": () => import('../pots_9c82a4e2.mjs'),"../../../../assets/uploads/stones.jpg": () => import('../stones_74ff20a6.mjs'),"../../../../assets/uploads/trees.jpg": () => import('../trees_d38b2537.mjs'),"../../../../assets/uploads/vertical_garden.webp": () => import('../vertical_garden_769cb061.mjs'),"../../../../assets/uploads/xeriscaping.webp": () => import('../xeriscaping_1a5ae2de.mjs')}), () => "../../../../assets/uploads/*");
  } catch (error) {
    console.log(error);
  }
  searchResults = SearchQuery(search_query, allPosts);
  totalPages = Math.ceil(searchResults.length / PAGE_SIZE);
  const pageNumber = page ? parseInt(page) : null;
  let inBound = page && typeof pageNumber === "number" && pageNumber <= totalPages;
  if (!inBound && totalPages != 0) {
    return Astro2.redirect("/error");
  }
  var paginatedArray = pageNumber && searchResults.length > 0 ? getPaginatedArray(searchResults, pageNumber, PAGE_SIZE) : [];
  paginatedArray = paginatedArray.length > 0 ? hydratePaginatedPostArray(paginatedArray, assetMap, assets) : [];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Blog posts" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="mb-[100px] w-11/12 mx-auto" id="content-wrapper"><h1 class="font-bold text-2xl text-center mt-10">Blog posts</h1>${renderComponent($$result2, "Searchbar", $$Index, {})}<div class="block mx-auto w-fit sm:[&>*]:inline-block justify-between"><p class="font-bold text-base my-5 text-center">Search query: "${search_query}"</p><a href="/blog/1" class="mx-auto text-center"><p class="underline hover:font-bold rounded-lg hover:bg-slate-300 p-1">Reset search</p></a></div>${totalPages === 0 && renderTemplate`<h2 class="text-center text-2xl">No blog posts are found with your search query.</h2>`}${totalPages > 1 && renderTemplate`${renderComponent($$result2, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": searchResults.length, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": true, "search_query": search_query, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/uthan-site/src/components/paginatedBlog/renderPagination.tsx", "client:component-export": "default" })}`}${paginatedArray && paginatedArray.length > 0 && renderTemplate`<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">${paginatedArray.map(async (post) => {
    if (post.frontmatter.featured_image) {
      return renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url, "thumbnail": post.featured_image })}`;
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

export { $$Index as $, DOTS as D, RenderPagination as R, _page_$1 as _, $$PreviewLink as a, createStaticPathArrayForTagsAndPage as b, createStaticPathArray as c, createStaticPathArrayForTags as d, _page_ as e, formatRecentPostArray as f, getImageFileName as g, makeURLfriendly as m, retrieveRecentImages as r, setBlogPostImages as s, usePagination as u };
