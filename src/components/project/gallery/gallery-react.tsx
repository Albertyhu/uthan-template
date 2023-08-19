import ProjectDemo from '@/demo/projects.json'; 
import MasonryItem from './masonry-item.tsx';

type GalleryType = {

}

type ProjectType = {
        image : string | HTMLImageElement, 
        altText: string,
        name: string, 
        category: string, 

}

const Gallery = (props : GalleryType)=>{

    return ProjectDemo && ProjectDemo.projects && ProjectDemo.projects.length > 0 &&
                ProjectDemo.projects.map((project: ProjectType) =>
                            <MasonryItem 
                                image = {project.image}
                                altText={project.altText}
                                name = {project.name}
                                category = {project.category}
                            />
                )
}
export default Gallery;