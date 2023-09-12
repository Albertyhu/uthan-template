import { useState } from 'react';
import type { AccordionType } from '@/util/interface';
import "./style.css"; 
import AccordionItem from './accordionItem.tsx'; 
import uuid from 'react-uuid'; 

const AccordionComponent = (props: {data: Array<AccordionType>}) =>{
    const { data } = props;
    const [current, setCurrent] = useState<number>(0)

    return(
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
    )
}

export default AccordionComponent; 