import type { 
    PostAssetType, 
    MemberType, 
} from "@/util/interface.tsx";
import {
    getImageFileName
} from './blogHooks.ts'; 

const getTeamStaticPathArray = (
        member: MemberType, 
        assets: Array<PostAssetType>
    ) =>{
    const assetMap = new Map(); 
    var profile_image = null;
    if(member && member.profile_image){
        var fileName = getImageFileName(member.profile_image.src)
        if(assetMap.get(fileName)){
            profile_image = assetMap.get(fileName); 
        }
        else{
            var foundAsset = assets.find(asset => {
						var found : boolean = asset.default.src.includes(fileName); 
						if(found){
							assetMap.set(fileName, asset.default.src)
						}
						return found; 
					})
            profile_image = foundAsset?.default.src; 
        }
    }
    const urlName = (member.name.toLowerCase()).replace(/\s+/g, '_')
            return{
            params: {team_member: urlName}, 
            props: {
                name: member.name, 
                designation: member.designation,
                phone: member.phone,
                email: member.email,  
                link: member.link,
                facebook: member.facebook,
                twitter: member.twitter,
                google: member.google,
                profile_image: profile_image, 
                biography: member.biography,
            }
        }
}

export {
    getTeamStaticPathArray, 
}