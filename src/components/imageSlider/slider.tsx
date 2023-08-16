import {
    useRef, 
    useEffect, 
    useState, 
} from 'react'; 
import uuid from 'react-uuid'; 

//takes in array of string pathways of the images
type SliderType = {
    images : Array<string>, 
    darkMask?: boolean,
}
const Slider = (props: SliderType)=>{
    const {
        images, 
        darkMask = true, 
    } = props; 
const [current, setCurrent] = useState<number>(0);

const myInterval = setInterval(()=>{
    if(current === images.length){
        setCurrent(0)
    }
    else{
        setCurrent(prev => prev + 1)
    }
}, 2000)

return(
    <div
        className = {`absolute w-full h-[200px] top-0 left-0 right-0 ${darkMask ? "darkMask" : ""}`}
    >
        {images && images.length > 0 &&
            images.map((img: string, index: number)=>
                <Slide 
                imgPath = {img} 
                key = {uuid()} 
                index = {index} 
                current = {current}
                />
            )
        }
    </div>
)
}

export default Slider; 

type SlideProps = {
    imgPath : string, 

    index: number, 
    current: number, 
}

const Slide = (props: SlideProps) =>{
    const {
        imgPath,
        index,  
        current, 
    } = props; 
    const imgRef = useRef<HTMLDivElement>(null); 
    useEffect(()=>{
        if(imgRef.current){
            imgRef.current.style.backgroundImage = `url(${imgPath})`
        }
    },[imgRef.current])
    
    useEffect(()=>{
        if(current === index){
            imgRef?.current?.classList.remove("hiddenSlide")
            imgRef?.current?.classList.remove("slide-fade-out")
        }
        else if(!imgRef?.current?.classList.contains("slide-fade-out")){
            setTimeout(()=>{
                imgRef?.current?.classList.add("hiddenSlide")
            }, 2000)
            imgRef?.current?.classList.add("slide-fade-out")
        }
    }, [current])

    return (
    <div
        ref = {imgRef}
        className = {`block bg-cover bg-no-repeat bg-center overflow-hidden min-h-[200vh] w-full hiddenSlide slideProp slide-fade-out`}
    ></div>
    )
}
