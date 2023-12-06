import "./style.css";

const DimensionComp = (props: {
    length: number, 
    value: number, 
    setValue: (c:number)=>void, 
    setIsValid: (c:boolean)=>void}) => {
    const {
        dimension, 
        value, 
        setValue, 
        setIsValid, 
    } = props; 

    const changeHandler = (e) => {
        setValue(e.target.value)
        setIsValid(true)
     }

    return(
        <div
            className="border-2 rounded-lg relative my-5"
        >   
            <input
                type="number" 
                id={`${dimension} value`}
                placeholder={`${dimension} (foot)`}
                onChange = {changeHandler}
                value = {value}
                className="peer h-8 w-full border-none bg-transparent px-1 py-1 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />            
        </div>
    )
} 

export {DimensionComp}