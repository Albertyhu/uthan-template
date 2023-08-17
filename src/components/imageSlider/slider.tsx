import {
    useRef, 
    useEffect, 
} from 'react'; 
import uuid from 'react-uuid'; 

//takes in array of string pathways of the images
type SliderType = {
    images: Array<string>, 
    darkMask?: boolean,
    name?: string, 
}
const Slider = (props: SliderType)=>{
    const {
        images, 
        darkMask = true, 
        name, 
    } = props; 
const slideRef = useRef<Array<HTMLDivElement>>(new Array())
let current = 0; 
const RunSlide = async () =>{
    let oldSlide : HTMLDivElement | null = null; 
    const myInterval = await setInterval(()=>{
        if(typeof document != undefined){
            oldSlide = slideRef.current[current]
            if(current >= images.length - 1){
                current=0; 
            }
            else{
                current++;
            }
            var nextSlide = slideRef.current[current]
            oldSlide?.classList.add("slide-fade-out")
            nextSlide?.classList.remove("slide-fade-out")
            nextSlide?.classList.add("slide-pan-forward")
            setTimeout(()=>{
                oldSlide?.classList.remove("slide-pan-forward"); 
            }, 5000); 
        }
    }, 3000)  
}

useEffect(()=>{
    RunSlide();
},[])

useEffect(()=>{
    if(slideRef.current[0]){
        slideRef.current[0].classList.remove("slide-fade-out")
        slideRef.current[0].classList.add("slide-pan-forward")
    }
},[slideRef.current])

return(
    <div
        className = {`absolute w-full h-full top-0 left-0 right-0 ${darkMask ? "darkMask" : ""}`}
    >
        <div
            className = "relative w-full h-full m-0"
        >
        {images && images.length > 0 &&
            images.map((img: string, index: number)=>
                <Slide 
                image = {img} 
                key = {uuid()} 
                index = {index} 
                current = {current}
                slideRef={slideRef}
                />
            )
        }
        </div>
    </div>
)
}

export default Slider; 

type SlideProps = {
    image : string, 
    index: number, 
    current: number, 
    name?: string, 
    slideRef: {
        current: Array<HTMLDivElement>}
        , 
}

const Slide = (props: SlideProps) =>{
    const {
        image,
        index,  
        current, 
        name, 
        slideRef, 
    } = props; 

    return (
    <div
        ref = {element => slideRef.current.push(element as HTMLDivElement)}
        id = {`slide-${name}${index}`}
        className = {`absolute inset-0 block bg-cover bg-no-repeat bg-center overflow-hidden w-full h-full slideProp slide-fade-out`}
    >
        <img 
            src ={image}
            className ="w-full h-full object-cover bg-[url(${image})] absolute inset-0"
        />
    </div>
    )
}
