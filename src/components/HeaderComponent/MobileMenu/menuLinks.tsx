import { useRef, useEffect } from 'react'; 

const MenuLinks = () =>{
    const menuMap = [
        {
            url: "/",
            label: "Home", 
            subDirectory: [], 
        },  
        {
            url: "/about/",
            label: "About",
            subDirectory: [{
                url: "/about2/",
                label: "About2",
                subDirectory:[],
            }], 
        }, 
                {
            url: "/blog/",
            label: "Blog",
            subDirectory: [], 
        }, 
        {
            url: "/tags/",
            label: "Tags",
            subDirectory: [], 
        },
        {
            url: "/contact/",
            label: "Contact",
            subDirectory: [], 
        },  
    ]

    return menuMap.length > 0 && 
    menuMap.map(link =><div class="mobile-menu-links"><LinkItem {...link} /></div>)
}

export default MenuLinks; 

type LinkItemType = {
        url : string,
        label : string, 
        subDirectory?: Array<LinkItemType>, 
} 

const LinkItem = (props: LinkItemType) =>{
    const {
        url,
        label, 
        subDirectory, 
    } = props; 

    const arrowRef = useRef<HTMLDivElement>(null); 
    const subDirRef = useRef<HTMLDivElement>(null); 

    const toggleEvent = (event : MouseEvent ) =>{
        if(arrowRef.current && arrowRef?.current?.contains(event.target as HTMLDivElement)){
            if(arrowRef?.current?.classList.contains("menu-arrow-open")){
                arrowRef?.current?.classList.remove("menu-arrow-open")
                subDirRef?.current?.classList.add("subDirectory-closed")
            }
            else{
                arrowRef?.current?.classList.add("menu-arrow-open")
                subDirRef?.current?.classList.remove("subDirectory-closed")
            }
        }
    }
    useEffect(()=>{
        if(arrowRef.current){
            arrowRef.current.addEventListener("mousedown", toggleEvent)
        }
        return()=>{
             arrowRef?.current?.removeEventListener("mousedown", toggleEvent)
        }

    }, [arrowRef.current])
    
    useEffect(()=>{
        if(subDirRef.current && subDirectory && subDirectory?.length > 0){
            var maxHeight = subDirectory?.length * 65;
            console.log("maxHeight: ", maxHeight)
            //subDirRef.current.classList.add(`max-h-[${maxHeight}px]`)
            subDirRef.current.style.maxHeight = `${maxHeight}px`
        }
    },[subDirRef.current])

    return (
        <>
            <div 
                class = "flex flex-row justify-around items-center border-t-[1px] border-t-[#d6d6d6] py-5 pl-[25px]"
            >
                <a href={url} class="!my-auto">{label}</a>
                {subDirectory && subDirectory.length > 0 && 
                    <div
                        class = "w-[32px] h-[32px] rounded-[2px] z-[5] text-center text-[16px] leader-[32px] cursor-pointer mr-5 relative"
                    >
                        <span 
                            id="menu-arrow"
                            ref = {arrowRef}
                            class="fas fa-angle-down menu-arrow relative text-center"
                        ></span>
                    </div>
                }
            </div>
            {subDirectory && subDirectory.length > 0 && 
            <div
                class = "subDirectoryDiv subDirectory-closed"
                ref = {subDirRef}
            >
                {subDirectory.map((sub) => 
                    <LinkItem 
                        url = {sub.url} 
                        label = {sub.label}
                        subDirectory = {sub.subDirectory}
                        />
                    )}
            </div>
            }
        </>
    )
}

const SubDirectory = (props: LinkItemType) =>{
    const {} = props; 
}