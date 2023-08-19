import './gallery.css';

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
        <div class="masonry-item small-column all product urban maintanance">
            <div class="project-block-one">
                <div class="inner-block relative block item-center mb-8">
                    <figure class="image-box relative block rounded-md">
                        <img src={image} alt={altText} />
                    </figure>
                <div class="content-box absolute flex transition duration-300 text-center">
                    <div class="inner relative">
                    <div class="icon-box relative inline-block text-3xl mb-5 rounded-lg bg-white transition-all duration-300">
                        <i class="icon-10"></i>
                    </div>
                    <h3 class="text-lg text-white font-medium mb-3 block transition duration-300">
                        <a href="project-details.html" class="inline-block text-white">{name.toUpperCase()}</a>
                    </h3>
                    <span class="relative block text-white transition duration-300">{category}</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default MasonaryItem; 

