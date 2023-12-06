import { useState, useContext, useRef, useEffect } from 'react'; 
import StepWizard from 'react-step-wizard'; 
import emailjs from '@emailjs/browser';
import siteData from "@/customization/siteData.json"; 
import type {
    StepType,
    TurfTypes
} from "@/util/interface.tsx"; 
import { StepContext } from '@/util/contextItem';
import { 
    IntroStep, 
    TurfQuestion,
    SquareFootQuest, 
    ConditionQuestion,
    ContactInfo,
    LastStep,
 } from './steps';
const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY; 
const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID; 
const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID; 

const StepForm = () =>{
    const [turf, setType] = useState<TurfTypes>("")
    const [condition, setCondition] = useState<string>(""); 
    const [sqft, setArea]  = useState<number>(0)
    const [name, setName] = useState<string>(""); 
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>(""); 
    const [address, setAddress] = useState<string>(""); 
    const [city, setCity] = useState<string>("")
    const [state, setState] = useState<string>("CA")
    const [zip, setZip] = useState<number | null>(null); 
    const [price, setPrice] = useState<number>(0.0); 

    const context : StepType = {
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
        state, setState,
        zip, 
        setZip, 
        city, 
        setCity, 
        price, 
        setPrice, 
    } 

    return(
        <StepContext.Provider value = {context}>
            <StepWizard
            >
                <IntroStep />
                <TurfQuestion />
                <SquareFootQuest />
                <ConditionQuestion />
                <ContactInfo />
                <LastStep />
            </StepWizard>
        </StepContext.Provider>
    ) 
} 

export default StepForm; 

/*
const StepOne = (props: any) =>{
    const {turf} = useContext<StepType>(StepContext)
    return(
        <div className = "mt-10">
            <h1 className = "font-bold black text-center">What type of turf are you looking for?</h1>
            <div
                className = "font-bold text-center"
            >
                Turf: {turf}
            </div>
            <p
                className ="mt-10"
            ><button onClick={props.nextStep} className = "btn-secondary">Next Step</button></p>
        </div>
    )
}

const StepPhone = (props : any) =>{
    const { phone, setPhone } = useContext<StepType>(StepContext as StepType); 
    return(
        <div className = "mt-10">
            <h1 className = "font-bold black text-center">This is the first step.</h1>
            <div
                className = "font-bold text-center"
            >
                <p>{ phone } </p>
            </div>
            <p
                className ="mt-10"
            ><button onClick={props.nextStep} className = "btn-secondary">Next Step</button></p>
        </div>
    )
}

const StepTwo = (props: any) =>{
    const { phone } = props; 
    const {setName, name} = useContext(StepContext); 
    const handleNameChange = (e) =>{
        setName(e.target.value)
    }
    return(
        <div 
            className = "mt-10"
        >
            <h1 className = "font-bold black text-center">This is step two.</h1>
            <p>The number is {phone}.</p>
            <form 
                method = ""
                action = ""
            >
                <label>Name</label>
                <input 
                    onChange = {e => handleNameChange(e)}
                    value = {name}
                    className = "formInput"
                />
            </form>
            <div
                className = "flex flex-row gap-10 mt-10" 
            >
                <button onClick={props.previousStep} className = "btn-secondary">Previous Step</button>
                <button onClick={props.nextStep} className = "btn-secondary">Next Step</button>
            </div>
        </div>
    )
}

const StepThree = (props: any) =>{

    const {phone, name} = useContext(StepContext); 
    const FormRef = useRef<null | HTMLFormElement>(null); 
    const message = `The number is ${phone}. \n\n The name is ${name}`

    var templateParams = {
            to_name: siteData.owner_name, 
            from_name: name, 
            subject_line: "This is a test", 
            phone_number: "(333) 333 - 3333", 
            message, 
            reply_to: "andrew@gmail.com",
        };


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };    

    return(
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>
        <h2>Number</h2>
        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            {phone}
        </p>
        <h2>Name</h2>
        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            {name}
        </p>
        <form 
            action="" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            ref = {FormRef}
            onSubmit={sendEmail}
            >
        <p className="text-center text-lg font-medium">Sign in to your account</p>
        <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white active:translate-x-[5px] active:translate-y-[5px]"
        >
            Submit
        </button>

        </form>
    </div>
    </div>
    )
}*/