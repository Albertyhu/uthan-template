import { useState } from 'react'; 
import StepWizard from 'react-step-wizard'; 

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
