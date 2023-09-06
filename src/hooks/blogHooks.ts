import type {
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

export {
	getPaginatedArray,
	createStaticPathArray,
	createStaticPathArrayForTagsAndPage,
	createStaticPathArrayForTags,
	getFeaturedImage
}
