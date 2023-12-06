import { useContext, useRef, useEffect, useState} from 'react'; 
import { StepContext } from "@/util/contextItem"; 
import {
    TurfOptions,
    SurfaceCondition 
} from "@/demo/artificial_turf.js"; 
import type {StepType, TurfTypes} from '@/util/interface.tsx'; 
import {DimensionComp} from './formComponents.tsx';
import uuid from 'react-uuid'; 

const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY; 
const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID; 
const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID; 

const TurfButton = (props : {Value: string, dispatch: (c : string) => void, current_selection?: string}) =>{
    const {
    Value,
    dispatch,
    current_selection, 
    } = props; 

    const BtnRef = useRef(null); 

    useEffect(()=>{
        if(current_selection === Value){
            BtnRef?.current?.classList.add("bg-slate-500"); 
            BtnRef?.current?.classList.add("text-slate-100"); 
        } 
        else{
            BtnRef?.current?.classList.remove("bg-slate-500"); 
            BtnRef?.current?.classList.remove("text-slate-100");  
        }
    }, [current_selection])

    return(
        <button
            ref = {BtnRef}
            onClick = {()=>dispatch(Value)}
            className = "rounded-lg border-2 px-10 py-5 font-bold text-center w-full hover:bg-slate-300"
        >{Value}</button>
    )
}

const TurfQuestion = (props: any) => {
    const {
        turf, 
        setType,
    } = useContext<StepType>(StepContext); 
    const [isValid, setIsValid] = useState<boolean>(true)
    const handleSubmit = () =>{
        if(turf != ""){
            setIsValid(true)
            props.nextStep()
        }
        else{
            setIsValid(false)
        }
    }

    return(
        <div className = "mt-10">
            <h1 className = "font-bold black text-center">What type of turf are you looking for?</h1>
            <div
                className = "font-bold text-center"
            >
                Turf: {turf}
                {TurfOptions &&  TurfOptions.length > 0 && 
                    <div className = "flex flex-col gap-10 w-full">
                        {TurfOptions.map(val => 
                            <TurfButton 
                                Value = {val.type} 
                                dispatch={setType} 
                                current_selection = {turf}
                                key = {uuid()} />
                            )}
                    </div>
                }
            </div>
            {!isValid && 
                <p
                    className = "text-[#F30F0F] font-bold"
                >You must select a type of turf before continuing.</p>
            }
            <p
                className ="mt-10"
            ><button onClick={handleSubmit} className = "btn-secondary">Next Step</button></p>
        </div>
    )
}

//displays UI For asking about Square Footage 
const SquareFootQuest = (props: any) => { 
    const {
        turf, 
        sqft, 
        setArea, 
        price, 
        setPrice
    } = useContext<StepType>(StepContext);  
    const [length, setLength] = useState<number | null>(null);
    const [width, setWidth] = useState<number | null>(null); 
    const [isValid, setIsValid] = useState<boolean>(true);
    const CalculatePrice = () : void=>{
        let turfData = TurfOptions.find(val => val.type === turf)
        console.log("turf: ", turf)
        console.log("turfData: ", turfData)
        setPrice(length * width * turfData.price.toFixed(2))
    } 
    useEffect(()=>{
        setArea(length * width)
        if(turf != "")
            CalculatePrice()
    },[length, width])

    const checkValue = () : void  =>{
        if(sqft === 0){
            setIsValid(false); 
        }
        else {
            props.nextStep()
        } 
    }

    return(
     <div>
        <label>Please, indicate the dimension of your lawn in square footage.</label>
        <p className = "my-5">Selected turf: {turf}</p>
        <DimensionComp 
            dimension = "Length"
            value = {length}
            setValue = {setLength}
            setIsValid={setIsValid}
        />        
        <DimensionComp 
            dimension = "Width"
            value = {width}
            setValue = {setWidth}
            setIsValid = {setIsValid}
        />
        <p>Square Footage = {sqft} square feet</p>
        <p>Price: ${price}</p>
        {!isValid && 
            <p
                className = "text-[#F30F0F] font-bold"
            >Error: Your square footage cannot be 0.</p>
        }
        <div
            className = "flex flex-row gap-10 mt-10 mx-auto justify-evenly" 
        >
            <p
                className ="mt-10"
                >
                <button onClick={props.previousStep} className = "btn-primary">Previous Step</button>
            </p>
            <p
                className ="mt-10"
                >
                <button onClick={checkValue} className = "btn-secondary">Next Step</button>
            </p>
        </div>
     </div>   
    )
}

const ConditionQuestion = (props: any) =>{
    const {
        condition,
        setCondition, 
    } = useContext<StepType>(StepContext); 
return(
        <div className = "mt-10">
            <h1 className = "font-bold black text-center">What is the current condition of your area?</h1>
            <div
                className = "font-bold text-center"
            >
                {SurfaceCondition &&  SurfaceCondition.length > 0 && 
                    <div className = "flex flex-col gap-10 w-full">
                        {SurfaceCondition.map(val => 
                            <TurfButton 
                                Value = {val} 
                                dispatch={setCondition} 
                                current_selection = {condition}
                                key = {uuid()} />
                            )}
                    </div>
                }
            </div>
            <div
                className = "flex flex-row gap-10 mt-10 mx-auto justify-evenly" 
            >
                <button onClick={props.previousStep} className = "btn-primary">Previous Step</button>
                <button onClick={props.nextStep} className = "btn-secondary">Next Step</button>
            </div>
        </div>
)
}

const ContactInfo = (props: any) =>{
    const {
        turf, 
        setType, 
        condition,
        sqft, 
        setArea,
        setCondition, 
        name,
        setName,
        phone,
        setPhone, 
        email,
        setEmail, 
        address, 
        setAddress, 
        state, 
        setState,
        zip, 
        setZip, 
        city, 
        setCity, 
    } = useContext<StepType>(StepContext);

    const [message, setMessage] = useState<string>("");
    const HandleSubmit = () =>{
        const email_message = `You have received a new request for a quote from ${name}. \n\n 
        Phone: ${phone}, \n\n
        Address: ${address}, \n\n
        ${city}, ${state} ${zip} \n\n\n
        Turf selected: ${turf}, \n\n
        Current condition of area: ${condition}, \n\n
        Square Footage: ${sqft} square foot, \n\n
        `
        var templateParams = {
                to_name: siteData.owner_name, 
                from_name: name, 
                subject_line: `There is a new request for a turf quote from ${name}`, 
                phone_number: phone, 
                message: email_message, 
                reply_to: email,
        };
    }
    return(
        <div></div>
    )
}
 

export {
    TurfQuestion,
    SquareFootQuest, 
    ConditionQuestion, 
    ContactInfo
}