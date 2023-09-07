import type {
	formattedPostType,
	PostType,
	CreateStaticPathArrayType,
	TagStaticPathArrayType,
	PathArray_TagsAndPageType,
	PostAssetType
} from '@/util/interface'

//This function creates and returns an array containing posts to be displayed based on the page number
const getPaginatedArray = (
	allPosts: Array<PostType>,
	currentPage: number,
	pageSize: number
): Array<PostType> => {
	return allPosts.slice((currentPage - 1) * pageSize, pageSize * currentPage)
}

//This function creates and returns the array necessary for getStaticPaths
const createStaticPathArray = ({
	allPosts,
	PAGE_SIZE,
	totalPages,
	imageFiles
}: CreateStaticPathArrayType): Array<any> => {
	var staticPaths: Array<any> = []
	var i = 1
	do {
		var paginatedArray = getPaginatedArray(allPosts, i, PAGE_SIZE)
		var path = {
			params: { page: i },
			props: {
				totalPages,
				imageFiles,
				paginatedArray,
				totalPosts: allPosts.length,
				PAGE_SIZE
			}
		}
		staticPaths.push(path)
		i++
	} while (i <= totalPages)
	return staticPaths
}

const createStaticPathArrayForTagsAndPage = ({
	allPosts,
	PAGE_SIZE
}: TagStaticPathArrayType): Array<any> => {
	//Get all tags
	var allTags = allPosts
		.map((post: any) => post.frontmatter.tags)
		.flat()
		.map((item) => item.tag)
	//Get rid of redundant tags
	const uniqueTags: Array<string> = [...new Set(allTags)]
	//initialize array
	var staticPaths: Array<PathArray_TagsAndPageType> = []
	uniqueTags.forEach((unique_tag: string) => {
		//find posts that contains the tag
		var filteredPosts = allPosts.filter(
			(post: any) => post.frontmatter.tags?.some((item: { tag: string }) => item.tag === unique_tag)
		)
		var totalPages: number = Math.ceil(filteredPosts.length / PAGE_SIZE)
		var i = 0
		do {
			var paginatedArray: Array<PostType> = getPaginatedArray(filteredPosts, i, PAGE_SIZE)
			var path = {
				params: {
					tag: unique_tag,
					page: i
				},
				props: {
					totalPages,
					paginatedArray,
					totalPosts: filteredPosts.length,
					PAGE_SIZE
				}
			}
			staticPaths.push(path)
			i++
		} while (i <= totalPages)
	})

	return staticPaths
}

const createStaticPathArrayForTags = ({
	allPosts,
	PAGE_SIZE
}: TagStaticPathArrayType): Array<any> => {
	var allTags = allPosts
		.map((post: any) => post.frontmatter.tags)
		.flat()
		.map((item) => item.tag)
	const uniqueTags = [...new Set(allTags)]

	return uniqueTags.map((unique_tag: string) => {
		var filteredPosts = allPosts.filter(
			(post: any) => post.frontmatter.tags?.some((item: { tag: string }) => item.tag === unique_tag)
		)
		var totalPages: number = Math.ceil(filteredPosts.length / PAGE_SIZE)
		return {
			params: {
				tag: unique_tag
			},
			props: {
				totalPages,
				filteredPosts
			}
		}
	})
}

//Do not use this one.
//It's inefficient because it forces the app to go through more than one loop
const getFeaturedImage = (pathway: string, assets: Array<any>) =>{
	var pathArray = pathway.split("/");
	var fileName = pathArray[pathArray.length - 1]
	var fileNameArray = fileName.split(".");
	var formattedName = fileNameArray[fileNameArray.length - 1]; 
	return assets.find((asset: PostAssetType) =>{
		if(!asset || !asset.default.src)
			return false 
		if(asset.default.src.includes(formattedName))
			return asset.default.src
		return false 
	}) 
}

const formatRecentPostArray = (allPosts: Array<PostType>, max: number) => {
	try{
		var recentPosts = allPosts.sort((a, b)=> {
            var a_date : Date = new Date(a.frontmatter.pubDate)
            var b_date : Date = new Date(b.frontmatter.pubDate)
            return b_date.getTime() - a_date.getTime();
            }).slice(0,max)
		return recentPosts.map((post: PostType) =>{
			return {
				featured_image: post.frontmatter.featured_image ? formatImageFileName(post.frontmatter.featured_image): null, 
				title : post.frontmatter.title,
                pubDate : post.frontmatter.pubDate,
				description: post.frontmatter.description, 
				author: post.frontmatter.author,
				images: post.frontmatter.images, 
				tags: post.frontmatter.tags, 
				body: post.frontmatter.body, 
                url : post.url
			}
		})
	}
	catch(error){
		console.log("formatRecentPostArray error: ", error)
		return []
	}
}

//This function is used when rendering a single blog post
//main_feature is the pathway of the main image of the blog post
//recent_posts is an array of recent posts in their formmatted version 
//function needs to loop one time
//returns object containing the featured images on all posts to be displayed 
const setBlogPostImages = ( 
		assets: Array<any>, 
		main_feature?: string,
		recent_posts?: Array<formattedPostType> 
	) => {
	var formattedName : string = ""; 
	var payload : {
		main_featured_image: string | HTMLImageElement | null, 
		recentPosts: Array<formattedPostType>, 
	} = {
		main_featured_image: null, 
		recentPosts: [], 
	}
	if(main_feature){
		formattedName =formatImageFileName (main_feature);  
	}
	for(var i = 0; i < assets.length; i++){
		var assetFileName = formatImageFileName(assets[i].default.src); 
		if(assetFileName === formattedName){
			payload["main_featured_image"] = assets[i].default.src
		}
		if(recent_posts ){
			var foundPost = recent_posts.find(val => val.featured_image === assetFileName)
			if(foundPost){
				var formattedFountPost = {
					...foundPost,
					featured_image: assets[i].default.src,
				}
				payload.recentPosts.push(formattedFountPost)
			}
		}

		//break point 
		if((main_feature && main_feature != "") 
			&& payload.main_featured_image != null  
			&& recent_posts?.length === payload.recentPosts.length
		){
			return payload; 
		}
	}
	return payload; 
}

const retriveRecentImages = (allPosts: Array<PostType>, assets: Array<PostAssetType>, max: number)  =>{
	//recentPost is formmatted
	const recentPost = formatRecentPostArray(allPosts, max)
	var hydratedRecentPost = [] 
	hydratedRecentPost = recentPost.map(post => {
		var uploadedImage = assets.find(asset => {
			 return formatImageFileName(asset.default.src) === post.featured_image; 
		})
		return{
			...post, 
			featured_image: uploadedImage ? uploadedImage.default.src : null, 

		}
	})
	return hydratedRecentPost; 
}

//This function extracts the file name from the file path excluding the extension 
//For example, './src/asset/uploads.sample.jpg' becomes 'sample'
const formatImageFileName = (imageFile : string) =>{
		var pathArray = imageFile.split("/");
		var fileName = pathArray[pathArray.length - 1]
		var fileNameArray = fileName.split(".");
		return fileNameArray[0]; 
} 

export {
	getPaginatedArray,
	createStaticPathArray,
	createStaticPathArrayForTagsAndPage,
	createStaticPathArrayForTags,
	getFeaturedImage,
	setBlogPostImages,
	formatRecentPostArray,
	retriveRecentImages , 
	formatImageFileName
}
