 
import ProjectData from '@/demo/projects.json';
import { useState, useEffect, useRef } from 'preact/hooks';  
import { useStore } from '@nanostores/preact';
import { SelectedCategory } from "@/util/atomItems.js"; 
import type { ReactElement, ReactHTMLElement } from 'react';
import uuid from 'react-uuid'; 

type SelectorType = {}
const Selector = (props: SelectorType) =>{
    const categories : Array<string> = [...new Set(ProjectData.projects.map(project => project.category))]; 
    categories.unshift("all")
    const $SelectedCategory = useStore(SelectedCategory); 
    const catMap = new Map(); 
    const ClickEvent = ({category, catRef}:{category: string, catRef: any})=>{
        const old = catMap.get($SelectedCategory)
        console.log(old)
        old.classList.remove('active')
        if($SelectedCategory !== category){
            SelectedCategory.set(category)
            const newTarget = catMap.get(category)
            newTarget.classList.add("active")
        }
    }

    useEffect(()=>{
        const iterator1 =catMap[Symbol.iterator]();
        for (const item of iterator1) {
        console.log(item);
        }
    },[catMap])

    return(
        <div class="md:mt-[16px]">
            <ul class="filter-tabs filter-btns md:float-right md:mt-[16px]">
                {categories && categories.length > 0 && 
                    categories.map((item, index) =>
                        <CategoryLink 
                            category = {item}
                            ClickEvent = {ClickEvent}
                            SelectedCategory={$SelectedCategory as string}
                            catMap = {catMap}
                            index = {index}
                            key={uuid()}
                        />)
                }
            </ul>
        </div>
    )
}

type LinkType = {
    category: string,
    ClickEvent: (c: string, d: any)=>void, 
    SelectedCategory: string,    
    catMap: any,
    index: number, 
}

const CategoryLink = (props: LinkType) =>{
    const {
        category,
        ClickEvent, 
        SelectedCategory, 
        catMap, 
        index,
    } = props; 
    const catRef = useRef<any>(null)
    useEffect(()=>{
        if(catRef.current && !catMap.has(category)){
            catMap.set(category, catRef.current)
        }
    },[catRef.current])
    return(
        <li
            ref = {catRef}
            className = {`filter`}
            onClick = {()=>{
                ClickEvent(category, catRef)
                console.log(category)
            }}
        >{category}</li>
    )
}

const SetActive = (catRef : any, activeCategory : string) =>{

}

export default Selector; 