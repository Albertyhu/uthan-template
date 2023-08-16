const SearchBar = () => {
	return (
		<div id="SearchBar" class="absolute left-[25%] z-50 bg-[#2f7955] p-[30px]">
			<div class="flex flex-nowrap bg-[#1e2434]">
				<input
					type="text"
					placeholder="Search..."
					class="block h-[50px] w-[270px] w-full rounded-[3px] py-[9px] pl-[15px] pl-[50px] leading-[24px] text-white placeholder-white"
				/>
				<i class="fas fa-search m-auto pr-[15px] text-white"></i>
			</div>
		</div>
	)
}

export default SearchBar
