import { TestimonialContext } from "@/util/contextItem";
import {useRef} from 'react'; 
import type { ReactNode } from 'react'; 

const Wrapper = ({children} : {children : ReactNode} )=>{
    const CarouselRef = useRef(null)
    const context = {
        CarouselRef, 
        test: 5, 
    }
    return(
        <TestimonialContext.Provider value = {context}>
            {children}
        </TestimonialContext.Provider>
    )
}

export default Wrapper; 