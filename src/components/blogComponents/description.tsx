import { useRef, useEffect } from 'react'; 
import "./style.css"

const RenderDescription = ( props  : {description: string}) =>{
  const {description} = props; 
  const paraRef = useRef<HTMLParagraphElement>(null)

  useEffect(()=>{
    if(paraRef.current && paraRef.current.offsetHeight > 50){
        paraRef.current.classList.add("description")
    }

  },[paraRef.current]) 


return(
    <p 
        ref = {paraRef}
        id = "description_p"
        className = "h-auto w-full overflow-hidden relative before:absolute before:inset-0 before:z-[2] max-h-[100px]"
    >
        <b>Description: </b>{description}
    </p>
)
}


export default RenderDescription; 