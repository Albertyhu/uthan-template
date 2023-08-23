import './gallery.css';
import { motion, AnimatePresence} from "framer-motion"
type ProjectType = {
        image : string | HTMLImageElement, 
        altText: string,
        name: string, 
        category: string, 

}
const MasonaryItem = (props: ProjectType) =>{
    const {
        image,
        altText="",
        name = "", 
        category = "", 
    } = props; 
    return(
        <motion.div 
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: 0.5 }}
            className="masonry-item small-column all product urban maintanance"
        >
            <div className="project-block-one">
                <div className="inner-block relative block item-center mb-8">
                    <figure className="image-box relative block rounded-md">
                        <img src={image} alt={altText} />
                    </figure>
                <div className="content-box absolute flex transition duration-300 text-center">
                    <div className="inner relative">
                    <div className="icon-box relative inline-block text-3xl mb-5 rounded-lg bg-white transition-all duration-300">
                        <i className="icon-10"></i>
                    </div>
                    <h3 className="text-lg text-white font-medium mb-3 block transition duration-300">
                        <a href="project-details.html" className="inline-block text-white">{name.toUpperCase()}</a>
                    </h3>
                    <span className="relative block text-white transition duration-300">{category}</span>
                    </div>
                </div>
                </div>
            </div>
        </motion.div>
    )
}
export default MasonaryItem; 

