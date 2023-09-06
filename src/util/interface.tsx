export interface formattedPostType {
  title: string,
  pubDate: Date,
  description?: string,
  author: string,
  featured_image?: string, 
  images?: Array<ImageType | string>,
  tags?: Array<TagType | string>,
  body?: HTMLElement | string,
  url?: string, 
}

export interface ImageMetadata {
  src: string,
  width: number,
  height: number,
  format: string,
}

export type GalleryContextType = {
  selectCat: string,
  setSelect: (c: string) => void,
}

export type ProjectType = {
  image: string | HTMLImageElement,
  thumbnail?: string | HTMLImageElement, 
  images?: Array<string | HTMLImageElement>,
  altText: string,
  name: string,
  category: string,
}

export type CarouselItemType = {
  testimonial: string,
  name: string,
  designation: string,
  rating: 1 | 2 | 3 | 4 | 5,
  profile_image: string | HTMLImageElement,
}

export type PricingType = {
  plan: string,
  price: number,
  features?: Array<string>,
  CTA_link: string,
  main_color?: string,
  button_color?: string,
}

export type FooterColumnType = {
  label: string,
  links?: Array<FooterLinkType>,
}

export type FooterLinkType = {
  label: string,
  link?: string,
}

export interface PostType {
  frontmatter: {
    layout: string,
    title: string,
    pubDate: Date,
    description?: string,
    author: string,
    featured_image?: string,
    images?: Array<ImageType> | null | undefined,
    tags?: Array<TagType> | null | undefined,
    body?: HTMLElement | string | null | undefined,
  },
  url?: string, 
}

export type ImageType = {
  url: string,
  alt: string,
}

export type Image_Type = {
  src: string,
  width?: number,
  height?: number,
  format: string
}

export type TagType = {
  tag: string,
}

export type TagObject = {
  tag: string,
}

export type TagListType = {
  tags: Array<TagType>,
}

export type ContactSubmission = {
  email: string,
  subject: string,
  message: string,
}

export interface ImageMetadata {
  src: string,
  width: number,
  height: number,
  format: string,
}

export interface GlobObjectType {
  [key: string]: () => Promise<any>, // Change 'any' to the actual type of the image if known
}

export type UsePaginationType = {
  currentPage: number,
  totalCount: number,
  pageSize: number,
}

export type RenderPaginationType = {
  currentPage: number,
  totalCount: number,
  pageSize: number,
  totalPages: number,
  isMobile: boolean,
  search_query?: string | null | undefined,
}

export type SearchQueryType = {
  query: string,
  list: Array<any>,
}

export interface CreateStaticPathArrayType {
  allPosts: Array<PostType>,
  PAGE_SIZE: number,
  totalPages: number,
  imageFiles: object,
}

export interface TagStaticPathArrayType {
  allPosts: Array<PostType>,
  PAGE_SIZE: number,
}

export interface PathArray_TagsAndPageType {
  params: {
    tag: string,
    page: number,
  },
  props: {
    totalPages: number,
    paginatedArray: Array<PostType>,
    totalPosts: number,
  },
}


export interface ServiceType {
  thumbnail?: string,
  title: string, 
  tagline?: string,
  link: string,
  description?: string,
  promise?: string,
  features?: string,
  image1?: string | HTMLImageElement,
}

export type NavItemType = {
  url: string,
  label: string, 
  subDirectory?: Array<NavItemType>,
} 

export type AboutProcessType = {
    title: string,
    description: string, 
    index: number, 
    hidden: boolean, 
    iconNumber: number, 

} 

export type PostAssetType = {
  default: {
    src: string, 
    width: number,
    height: number,
    format: string,  
  }
} 