
import SiteData from "@/customization/siteData.json"; 

type SocialType = {
    customStyle?: string, 
    followUsText?: string, 
}

const SocialLinks = (props : SocialType) =>{
    const {
        customStyle,
        followUsText
    } = props; 
return(
<div className={`${customStyle ? customStyle : "grid sm:flex sm:flex-row"}`}>
    {followUsText && <div><p>Follow Us:</p></div>}
    <div className="text-white sm:ml-5 [&>div]:mr-5 flex">
        {SiteData.twitter && <div><a href={SiteData.twitter}><span className="fab fa-twitter"></span></a></div>}
        {SiteData.facebook && <div><a href={SiteData.facebook}><span className="fab fa-facebook-square"></span></a></div>}
        {SiteData.pinterest && <div><a href={SiteData.pinterest}><span className="fab fa-pinterest-p"></span></a></div>}
        {SiteData.instagram && <div><a href={SiteData.instagram}><span className="fab fa-instagram"></span></a></div>}
        {SiteData.youtube && <div><a href={SiteData.youtube}><span className="fab fa-youtube"></span></a></div>}    
    </div>
</div>
)
}

export default SocialLinks; 
