import "./style.css";
import { useContext } from 'react'; 
import {StepContext} from '@/util/contextItem';
import {states} from '@/demo/state-abbreviations.js'; 
import {
    formatPhoneNumber, 
    phoneNumberToNumeric
} from '@/hooks/number_hooks'; 
import uuid from 'react-uuid'

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

const Input = (props: any) =>{
    const {
        label, 
        value,
        dispatch
    } = props; 
    const changeHandler = (e) =>{
        dispatch(e.target.value)
    }
    return(
        <div
            className="border-2 rounded-lg relative my-5"
        >   
            <input
                type="text" 
                id={`${label} input`}
                placeholder={label}
                onChange = {changeHandler}
                value = {value}
                className="h-8 w-full border-none bg-transparent px-1 py-1 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />  
        </div>
    )
}

const PhoneInput = (props:any)=>{
    const {
        value, 
        dispatch, 
    } = props; 

    const changeHandler = (e) =>{
        dispatch(e.target.value)
    }
    return(
         <input
            name="phone"
            type="tel" 
            id="phone input"
            placeholder="phone number"
            onChange = {changeHandler}
            value = {value}
            className="h-8 w-full border-none bg-transparent px-1 py-1 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />         
    )
}

const StateSelection = (props : any) =>{
    const {
        state, 
        setState
    } = useContext(StepContext); 
    const changeHandler = (e) =>{
        setState(e.target.value)
    }
    return(
        <div
            className="border-2 rounded-lg relative my-5"
        >   
            <select
            className="h-8 w-full border-none bg-transparent px-1 py-1 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            onChange = {changeHandler}
            value = {state}
            >
                {states && states.length &&
                    states.map(val =>
                    <option 
                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        value = {val}
                        key={uuid()}
                        >{val}</option>
                    )
                }
            </select>
        </div>
    )
}

export {
    DimensionComp,
    Input,
    PhoneInput, 
    StateSelection
}