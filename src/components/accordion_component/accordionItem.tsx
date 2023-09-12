import { useState, useRef, useEffect, useContext } from 'react'; 
import UpArrow from "@/assets/images/shape/up_arrow.png"; 
import "./style.css"; 
import { AccordionContext } from '@/util/contextItem';

const Accordion = (props: 
    {
        title: string, 
        content: string, 
        index: number, 
        current: number, 
        setCurrent: Function 
    }) =>{
    const {
        title, 
        content, 
        index,
        current, 
        setCurrent
    } = props; 
    const [opened, setHeight] = useState<boolean>(false)
    const ArrowRef = useRef(null); 

    const Open = () =>{
            ArrowRef?.current?.classList.remove("downArrow")

    }

    const Close = () =>{
        if(ArrowRef?.current.classList.contains("downArrow") && ArrowRef.current)
            ArrowRef?.current.classList.add("downArrow")
    }

    useEffect(()=>{
        if(current && ArrowRef.current && current === index + 1){
            Open(); 
        }
        else{
            Close();
        }
    }, [current])

    return(
        <div
            className = "box_shadow w-full font-['Prata',serif] bg-white my-10 py-10"
        >
            <div    
                id = "accordion-wrapper"
                className = "w-11/12 mx-auto"
            >
                <div 
                    id="accordion top element"
                    className = "flex flex-row w-full justify-between cursor-pointer"
                    onClick = {()=>{
                        setCurrent(index + 1)}}
                >
                    <h4
                        className = "font-bold"
                    >{title}</h4>
                    <img 
                        src = {UpArrow.src}
                        ref = {ArrowRef}
                        className = "w-[20px] h-[20px] arrowStyle downArrow"
                    />
                </div>
                <div
                    id="Collapsible-content"

                >
                    <p
                        className = "mt-5 font-light"
                    >{content}</p>
                </div>
            </div>  
        </div>
    )
}

export default Accordion; 