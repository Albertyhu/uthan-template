export interface postType {
	title: string
	pubDate: Date
	description: string
	author: string
	images: Array<ImageType | string>
	tags: Array<TagType | string>
	body: HTMLElement | string
}

export type ImageType = string

export type TagType = {
	tag: string
}

export type TagObject = {
	tag: string
}

export type TagListType = {
	tags: Array<TagType>
}

export type ContactSubmission = {
	email: string
	subject: string
	message: string
}

export interface ImageMetadata {
	src: string
	width: number
	height: number
	format: string
}


export type GalleryContextType = {
	selectCat: string, 
	setSelect: (c:string)=>void, 
}

export type ProjectType = {
        image : string | HTMLImageElement, 
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