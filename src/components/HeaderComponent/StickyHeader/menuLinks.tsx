import { useRef, useEffect } from 'react'

const MenuLinks = () => {
	const menuMap = [
		{
			url: '/',
			label: 'Home',
			subDirectory: []
		},
		{
			url: '/about/',
			label: 'About',
			subDirectory: [
				{
					url: '/about2/',
					label: 'About2',
					subDirectory: []
				}
			]
		},
		{
			url: '/blog/',
			label: 'Blog',
			subDirectory: []
		},
		{
			url: '/tags/',
			label: 'Tags',
			subDirectory: []
		},
		{
			url: '/contact/',
			label: 'Contact',
			subDirectory: []
		}
	]

	return (
		menuMap.length > 0 &&
		menuMap.map((link, index) => (
			<div className="mobile-menu-links" key={`${link.label}-${index}`}>
				<LinkItem {...link} />
			</div>
		))
	)
}

export default MenuLinks

type LinkItemType = {
	url: string
	label: string
	subDirectory?: Array<LinkItemType>
}

const LinkItem = (props: LinkItemType) => {
	const { url, label, subDirectory } = props

	const arrowRef = useRef<HTMLDivElement>(null)
	const subDirRef = useRef<HTMLDivElement>(null)
	const dirRef = useRef<HTMLDivElement>(null)
	const toggleEvent = (event: MouseEvent) => {
		if (arrowRef.current && arrowRef?.current?.contains(event.target as HTMLDivElement)) {
			if (arrowRef?.current?.classList.contains('menu-arrow-open')) {
				arrowRef?.current?.classList.remove('menu-arrow-open')
				subDirRef?.current?.classList.add('subDirectory-closed')
			} else {
				arrowRef?.current?.classList.add('menu-arrow-open')
				subDirRef?.current?.classList.remove('subDirectory-closed')
			}
		}
	}
	useEffect(() => {
		if (dirRef.current && window.location.href.includes(url)) {
			dirRef.current.classList.add('currentPage')
		}
	}, [dirRef.current])

	useEffect(() => {
		if (arrowRef.current) {
			arrowRef.current.addEventListener('mousedown', toggleEvent)
		}
		return () => {
			arrowRef?.current?.removeEventListener('mousedown', toggleEvent)
		}
	}, [arrowRef.current])

	useEffect(() => {
		if (subDirRef.current && subDirectory && subDirectory?.length > 0) {
			var maxHeight = subDirectory?.length * 45
			subDirRef.current.style.maxHeight = `${maxHeight}px`
		}
	}, [subDirRef.current])

	return (
		<>
			<div
				ref={dirRef}
				className="flex flex-row items-center justify-around border-t-[1px] border-t-[#686868] py-[10px] pl-[25px] hover:bg-slate-800"
			>
				<a href={url} className="leader-[24px] relative !my-auto block">
					{label}
				</a>
				{subDirectory && subDirectory.length > 0 && (
					<div className="leader-[32px] relative z-[5] mr-5 h-[32px] w-[32px] cursor-pointer rounded-[2px] text-center text-[16px]">
						<span
							id="menu-arrow"
							ref={arrowRef}
							className="fas fa-angle-down menu-arrow relative text-center"
						></span>
					</div>
				)}
			</div>
			{subDirectory && subDirectory.length > 0 && (
				<div className="subDirectoryDiv subDirectory-closed" ref={subDirRef}>
					{subDirectory.map((sub, index) => (
						<LinkItem
							url={sub.url}
							label={sub.label}
							subDirectory={sub.subDirectory}
							key={`${sub.url}-${index}`}
						/>
					))}
				</div>
			)}
		</>
	)
}

const SubDirectory = (props: LinkItemType) => {
	const {} = props
}
