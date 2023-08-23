import MasonryItem from './masonry-item.tsx';
import { SelectedCategory} from '@/util/atomItems.js';
import { useStore } from '@nanostores/react';
import { motion, AnimatePresence } from "framer-motion"
import uuid from 'react-uuid'
type GalleryType = {
    ProjectGallery: Array<ProjectType>, 
}

type ProjectType = {
        image : string | HTMLImageElement, 
        altText: string,
        name: string, 
        category: string, 
}

const Gallery = (props : GalleryType)=>{
    const {
        ProjectGallery
    } = props; 
    const $SelectedCategory = useStore(SelectedCategory); 
    var filteredProjects : Array<ProjectType> = [];
    if(ProjectGallery && ProjectGallery && ProjectGallery.length > 0){
            if($SelectedCategory.toLowerCase() === "all"){
                filteredProjects = [...ProjectGallery]; 
            }
            else{

                filteredProjects = ProjectGallery.filter(project =>project.category === $SelectedCategory)
            }
    }
    return (
        <AnimatePresence>
        {filteredProjects.map((project: ProjectType) =>
                            <MasonryItem 
                                image = {project.image}
                                altText={project.altText}
                                name = {project.name}
                                category = {project.category}
                                key = {uuid()}
                            />
                            )}
        </AnimatePresence>
    )
    
}
export default Gallery;