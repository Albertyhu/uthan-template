
import { useEffect, useRef } from 'react'; 
import SocialLinks from "../../social-links.tsx";
import MenuLinks from "./menuLinks.tsx";
import WhiteLogo from "@/assets/images/logo-white.png"; 
import SiteData from "@/customization/siteData.json"; 


const MobileMenu = () =>{
    const MenuRef = useRef<HTMLDivElement>(null); 
    const CloseBtn= document.getElementById("close-btn")
    var MobileMenu = document.getElementById("mobile-menu")
    var BackDrop = document.getElementById('backdrop')
    //new
    const MobileToggler = document.getElementById("mobile-nav-toggler")
    const CloseMenu = () =>{
        console.log("close menu")
        if(!MobileMenu?.classList.contains("mobile-menu-close")){
            MobileMenu?.classList.add("mobile-menu-close")
            BackDrop?.classList.remove("backdrop-visible")
        }
    }

    const OpenMenu = () =>{
        if(MenuRef.current){
        if(MenuRef.current?.classList.contains("mobile-menu-close")){
            MenuRef.current?.classList.remove("mobile-menu-close")
            BackDrop?.classList.add("backdrop-visible")
        }
        else{
            MenuRef.current?.classList.add("mobile-menu-close")
            BackDrop?.classList.remove("backdrop-visible")
        }
        } 
    }

    CloseBtn?.addEventListener('mousedown', CloseMenu)
    useEffect(()=>{
        if(MenuRef.current){
            MobileMenu?.addEventListener("mousedown", OpenMenu)
        }
    }, [MenuRef.current])
    return(
    <div
        id="mobile-menu"
        className="grid h-full fixed left-auto right-0 top-0 overflow-y-auto overflow-x-hidden w-[250px] z-[999] bg-black mobile-menu-close"
        ref = {MenuRef}
    >
        <div id = "close-btn" className="h-fit"><i className="fas fa-times close-btn"></i></div>
        <nav className="">
            <div className="nav-logo w-10/12 mx-auto userselect-none">
                <a href="../../../">
                    <img 
                        src={WhiteLogo.src} 
                        alt="Logo"
                        className="h-full w-full"
                        />
                </a>
            </div>
            <div className="menu-outer mt-[25px] ">
                <MenuLinks />
            </div>
            <div className="contact-info text-white pl-[25px] border-t-[1px] border-[#d6d6d6]">
                <h4>Contact Info</h4>
                <ul>
                    {SiteData && SiteData.address && <li>{SiteData.address},</li>}
                    {SiteData && (SiteData.city || SiteData.state || SiteData.country || SiteData.zip) &&
                        <li> 
                            {SiteData.city && <span>{SiteData.city},</span>} 
                            {SiteData.state && <span>{SiteData.state},</span>} 
                            {SiteData.country && <span>{SiteData.country}</span>}
                            {SiteData.zip && <span>{SiteData.zip}</span>}
                        </li>
                    }
                    {SiteData && SiteData.business_phone && <li><a href="tel:+8801682648101">{SiteData.business_phone}</a></li>}
                    {SiteData && SiteData.business_email && <li><a href={`mailto:${SiteData.business_email}`}>{SiteData.business_email}</a></li>}
                </ul>
            </div>
            <SocialLinks customStyle = "clearfix flex flex-row [&>li]:mr-5 [&>li>a>span]:text-white my-10 pl-[25px]"/>
        </nav>
    </div>
    )
}
export default MobileMenu;
