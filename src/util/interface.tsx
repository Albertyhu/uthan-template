export interface postType {
    title: string, 
    pubDate: Date, 
    description: string, 
    author: string, 
    images: Array<ImageType | string>, 
    tags: Array<TagType | string>, 
    body: HTMLElement | string, 
}

export type ImageType = string; 

export type TagType = {
    tag: string, 
};

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
  src: string;
  width: number;
  height: number;
  format: string;
}