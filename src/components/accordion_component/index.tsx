import { useState, useEffect } from 'react';
import type { AccordionType } from '@/util/interface';
import "./style.css"; 
import AccordionItem from './accordionItem.tsx'; 
import uuid from 'react-uuid'; 
import {AccordionContext} from "@/util/contextItem.js"; 

const AccordionComponent = (props: {data: Array<AccordionType>}) =>{
    const { data } = props;
    const [current, setCurrent] = useState<number>(0)
    const context = {   
        current, 
    }
    useEffect(()=>{
        console.log("current: ", current)
    }, [current])
    return(
        <AccordionContext.Provider value = {context}>
            <div>
                {data && data.length > 0 &&
                    data.map((item, index: number) =>
                        <AccordionItem 
                            title = {item.question}
                            content = {item.ans}
                            index = {index}
                            key = {uuid()}
                            current = {current}
                            setCurrent = {setCurrent}
                        />)
                }
            </div>
        </AccordionContext.Provider>
    )
}

export default AccordionComponent; 