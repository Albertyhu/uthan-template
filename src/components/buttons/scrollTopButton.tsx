import { BsArrowUpCircle } from 'react-icons/Bs/index';
import {IconContext} from 'react-icons'; 
const Button = () =>{
    return(
        <div
            className ="ScrollTopButton block w-fit userselect-none" 
            onClick = {()=>{window.scrollTo({top: 0,left: 0,behavior: "smooth",})}}
        >
            <IconContext.Provider value={{size: "45px"}}>
                <BsArrowUpCircle  className = "mx-auto my-5" />
            </IconContext.Provider>
            <p
                className = "whitespace-nowrap mx-auto text-center"
            >Scroll to top</p>
        </div>
    )
}

export default Button; 

