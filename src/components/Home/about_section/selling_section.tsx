import { useEffect, useRef } from 'react'; 
import Shape3 from "@/assets/images/shape/shape-3.png";
import Shape4 from "@/assets/images/shape/shape-4.png"
const SellingSection = () =>{
const GraphicPatterns = useRef(null); 
const PatternTwo = useRef(null);
const PatternThree = useRef(null); 
const SellExperienceOne = useRef(null); 
const SellExperienceTwo = useRef(null); 
const SellExperienceThree = useRef(null); 

const AboutObserver = new IntersectionObserver(entries =>{
    PatternTwo?.current.classList.toggle("slideInRight", entries[0].isIntersecting)
    PatternThree?.current.classList.toggle("slideInLeft", entries[0].isIntersecting)
})
AboutObserver.observe(GraphicPatterns)
const ExperienceObs = new IntersectionObserver(entries=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.remove("fadeOutDown")
        }
        else{
            entry.target.classList.add("fadeOutDown")
        }
    })
}, {threshold: 0.5})

return(
<div 
    id ="SellingPoints"
    className="relative w-full p-[15px] flex mb-[60px]"
>
    <div 
        className="inner-content text-center relative w-full"
        >
        <div 
            className="pattern-layer hidden sm:block"
            id="Graphic_patterns"
            ref = {GraphicPatterns}
        >
            <div className="pattern-1 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[210px] h-[210px] rounded-[50%] opacity-10"></div>
            <div 
                className="pattern-2 absolute animated" 
                data-wow-delay="00ms" data-wow-duration="1500ms" 
                style={{backgroundImage: `url(${Shape3})`}}></div>
            <div 
                className="pattern-3 absolute animated" 
                data-wow-delay="00ms" 
                data-wow-duration="1500ms" 
                style={{backgroundImage: `url(${Shape4})`}}></div>
        </div>
        <div className="items-center grid sm:grid-cols-2 gap-10 mx-[-15px]">
            <div className="feature-block">
                <div
                    id="SellExperience-1" 
                    className="feature-block-one wow min-height-[30px] transition-all fadeOutDown SellExperience" 
                    data-wow-delay="00ms" data-wow-duration="1500ms"
                    >
                    <div 
                        id ="block1"
                        className="inner-box text-5xl mb-8 z-10 b_shadow_6"
                        >
                        <div className="icon-box relative inline-block rounded-lg text-5xl mb-8 z-10 transition duration-300"><i className="icon-4"></i></div>
                        <h3 className="text-base leading-7 font-medium">100% Guarantee Services</h3>
                    </div>
                </div>
                <div 
                    id="SellExperience-2" 
                    className="feature-block-one wow min-height-[30px] transition-all fadeOutDown SellExperience" 
                    data-wow-delay="200ms" 
                    data-wow-duration="1500ms"
                    >
                    <div
                        id ="block2" 
                        className="inner-box text-5xl mb-8 z-10 b_shadow_6">
                        <div 
                            className="icon-box relative inline-block rounded-lg text-5xl mb-8 z-10 transition duration-300">
                            <i className="icon-5"></i>
                        </div>
                        <h3 className="text-base leading-7 font-medium">Environmental Friendly</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 feature-block">
                <div 
                    id="SellExperience-3" 
                    className="feature-block-one wow min-height-[30px] transition-all fadeOutDown SellExperience" 
                    data-wow-delay="400ms" 
                    data-wow-duration="1500ms">
                    <div 
                        id ="block3"
                        className="inner-box text-5xl mb-8 z-10 b_shadow_6"
                        >
                        <div 
                            className="icon-box relative inline-block rounded-lg text-5xl mb-8 z-10 transition duration-300">
                            <i className="icon-5"></i>
                        </div>
                        <h3 className="text-base leading-7 font-medium">Dedicated Support Team</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
) 
}

export default SellingSection; 
