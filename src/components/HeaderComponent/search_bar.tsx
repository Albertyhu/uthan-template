const SearchBar = () =>{
    return (
        <div 
            id="SearchBar"
            class = "p-[30px] bg-[#2f7955] absolute z-50 left-[25%]"
        >
            <div
                class = "flex flex-nowrap bg-[#1e2434]"
            >
                <input 
                    type = "text"
                    placeholder = "Search..."
                    class = "w-[270px] text-white block w-full leading-[24px] py-[9px] pl-[50px] pl-[15px] h-[50px] rounded-[3px] placeholder-white"
                />
                <i class="fas fa-search m-auto pr-[15px] text-white"></i>
            </div>
        </div>
    )
}

export default SearchBar; 