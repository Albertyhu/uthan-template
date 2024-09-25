/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro_32dbe7d3.mjs';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import StepWizard from 'react-step-wizard';
import { S as SiteData, a as $$ContentWrapper, $ as $$BaseLayout } from './404_5648cda2.mjs';
/* empty css                                  */import uuid from 'react-uuid';
import emailjs from '@emailjs/browser';
import 'html-escaper';
/* empty css                            */import 'svgo';
import 'nanostores';
import '@nanostores/react';

const StepContext = createContext(null);

const TurfOptions = [
  {
    type: "Landscape Turf",
    price: 2.75,
    unit: "sq ft",
  },
  {
    type: "Pet Turf (padded)",
    price: 3.75,
    unit: "sq ft",
  },
  {
    type: "Pet Turf (unpadded)",
    price: 2.75,
    unit: "sq ft",
  },
  {
    type: "ProCage Turf (padded)",
    price: 3.65,
    unit: "sq ft",
  },
  {
    type: "ProCage Turf (unpadded)",
    price: 2.70,
    unit: "sq ft",
  },
  {
    type: "ProPlay Turf",
    price: 2.35,
    unit: "sq ft",
  },
  {
    type: "SportsPlay Infill Turf",
    price: 2.45,
    unit: "sq ft",
  },
];

const SurfaceCondition = [
"Remove Turf & more soil",
"Remove Turf",
"Ready (Nothing to remove)"
];

const states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

const DimensionComp = (props) => {
  const {
    dimension,
    value,
    setValue,
    setIsValid
  } = props;
  const changeHandler = (e) => {
    setValue(e.target.value);
    setIsValid(true);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "border-2 border-solid rounded-lg relative my-5",
      children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          id: `${dimension} value`,
          placeholder: `${dimension} (foot)`,
          onChange: changeHandler,
          value,
          className: "peer h-8 w-full border-none bg-transparent px-1 py-1 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        }
      )
    }
  );
};
const Input = (props) => {
  const {
    label,
    value,
    dispatch
  } = props;
  const changeHandler = (e) => {
    dispatch(e.target.value);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "border-2 border-solid rounded-lg relative my-5",
      children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: `${label} input`,
          placeholder: label,
          onChange: changeHandler,
          value,
          className: "h-8 w-full border-none bg-transparent px-1 py-1 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        }
      )
    }
  );
};
const StateSelection = (props) => {
  const {
    state,
    setState
  } = useContext(StepContext);
  const changeHandler = (e) => {
    setState(e.target.value);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "border-2 rounded-lg relative my-5",
      children: /* @__PURE__ */ jsx(
        "select",
        {
          className: "h-8 w-full border-none bg-transparent px-1 py-1 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm",
          onChange: changeHandler,
          value: state,
          children: states && states.length && states.map(
            (val) => /* @__PURE__ */ jsx(
              "option",
              {
                className: "block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700",
                value: val,
                children: val
              },
              uuid()
            )
          )
        }
      )
    }
  );
};

const publicKey = "QnllaIF1JfocsyzUQ";
const serviceId = "service_cp7k9ma";
const templateId = "template_7i76k47";
const TurfButton = (props) => {
  const {
    Value,
    dispatch,
    current_selection
  } = props;
  const BtnRef = useRef(null);
  useEffect(() => {
    if (current_selection === Value) {
      BtnRef?.current?.classList.add("bg-slate-500");
      BtnRef?.current?.classList.add("text-slate-100");
    } else {
      BtnRef?.current?.classList.remove("bg-slate-500");
      BtnRef?.current?.classList.remove("text-slate-100");
    }
  }, [current_selection]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref: BtnRef,
      onClick: () => dispatch(Value),
      className: "rounded-lg border-2 border-solid px-10 py-5 font-bold text-center w-full hover:bg-slate-300",
      children: Value
    }
  );
};
const ScrollTop = () => {
  document.getElementById("ATFormContainer")?.scrollIntoView({
    behavior: "smooth"
  });
};
const IntroStep = (props) => {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-lg text-left sm:text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold sm:text-3xl", children: "Request a quote today!" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-gray-500", children: "We can tailor the best solution to meet your needs based on your preferences." }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: props.nextStep,
        className: "btn-primary mt-10",
        type: "button",
        children: "Calculate your quote"
      }
    )
  ] });
};
const TurfQuestion = (props) => {
  const {
    turf,
    setType
  } = useContext(StepContext);
  const [isValid, setIsValid] = useState(true);
  const handleSubmit = () => {
    if (turf != "") {
      setIsValid(true);
      props.nextStep();
      ScrollTop();
    } else {
      setIsValid(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "mt-10", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold black text-center", children: "What type of turf are you looking for?" }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "font-bold text-center",
        children: [
          "Turf: ",
          turf,
          TurfOptions && TurfOptions.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-10 w-full", children: TurfOptions.map(
            (val) => /* @__PURE__ */ jsx(
              TurfButton,
              {
                Value: val.type,
                dispatch: setType,
                current_selection: turf
              },
              uuid()
            )
          ) })
        ]
      }
    ),
    !isValid && /* @__PURE__ */ jsx(
      "p",
      {
        className: "text-[#F30F0F] font-bold",
        children: "You must select a type of turf before continuing."
      }
    ),
    /* @__PURE__ */ jsx(
      "p",
      {
        className: "mt-10",
        children: /* @__PURE__ */ jsx("button", { onClick: handleSubmit, className: "btn-secondary", children: "Next Step" })
      }
    )
  ] });
};
const SquareFootQuest = (props) => {
  const {
    turf,
    sqft,
    setArea,
    price,
    setPrice
  } = useContext(StepContext);
  const [length, setLength] = useState(void 0);
  const [width, setWidth] = useState(void 0);
  const [isValid, setIsValid] = useState(true);
  const CalculatePrice = () => {
    let turfData = TurfOptions.find((val) => val.type === turf);
    if (length != void 0 && width != void 0)
      setPrice((length * width * turfData.price).toFixed(2));
  };
  useEffect(() => {
    if (length != void 0 && width != void 0)
      setArea(length * width);
    if (turf != "")
      CalculatePrice();
  }, [length, width]);
  const checkValue = () => {
    if (sqft === 0) {
      setIsValid(false);
    } else {
      props.nextStep();
      ScrollTop();
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { children: "Please, indicate the dimension of your lawn in square footage." }),
    /* @__PURE__ */ jsxs("p", { className: "my-5", children: [
      "Selected turf: ",
      turf
    ] }),
    /* @__PURE__ */ jsx(
      DimensionComp,
      {
        dimension: "Length",
        value: length,
        setValue: setLength,
        setIsValid
      }
    ),
    /* @__PURE__ */ jsx(
      DimensionComp,
      {
        dimension: "Width",
        value: width,
        setValue: setWidth,
        setIsValid
      }
    ),
    /* @__PURE__ */ jsxs("p", { children: [
      "Square Footage = ",
      sqft,
      " square feet"
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Price: $",
      price
    ] }),
    !isValid && /* @__PURE__ */ jsx(
      "p",
      {
        className: "text-[#F30F0F] font-bold",
        children: "Error: Your square footage cannot be 0."
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-row gap-10 mt-10 mx-auto justify-evenly",
        children: [
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "mt-10",
              children: /* @__PURE__ */ jsx("button", { onClick: props.previousStep, className: "btn-primary", children: "Previous Step" })
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "mt-10",
              children: /* @__PURE__ */ jsx("button", { onClick: checkValue, className: "btn-secondary", children: "Next Step" })
            }
          )
        ]
      }
    )
  ] });
};
const ConditionQuestion = (props) => {
  const {
    condition,
    setCondition
  } = useContext(StepContext);
  return /* @__PURE__ */ jsxs("div", { className: "mt-10", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-bold black text-center", children: "What is the current condition of your area?" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "font-bold text-center",
        children: SurfaceCondition && SurfaceCondition.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-10 w-full", children: SurfaceCondition.map(
          (val) => /* @__PURE__ */ jsx(
            TurfButton,
            {
              Value: val,
              dispatch: setCondition,
              current_selection: condition
            },
            uuid()
          )
        ) })
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-row gap-10 mt-10 mx-auto justify-evenly",
        children: [
          /* @__PURE__ */ jsx("button", { onClick: props.previousStep, className: "btn-primary", children: "Previous Step" }),
          /* @__PURE__ */ jsx("button", { onClick: () => {
            props.nextStep();
            ScrollTop();
          }, className: "btn-secondary", children: "Next Step" })
        ]
      }
    )
  ] });
};
const ContactInfo = (props) => {
  const {
    turf,
    condition,
    sqft,
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    address,
    setAddress,
    state,
    zip,
    setZip,
    city,
    setCity,
    price
  } = useContext(StepContext);
  const [message, setMessage] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    const email_message = `You have received a new request for a quote from ${name}. 

 
        Phone: ${phone}, 


        Address: ${address}, 


        ${city}, ${state} ${zip} 



        Turf selected: ${turf}, 


        Current condition of area: ${condition}, 


        Square Footage: ${sqft} square foot, 


        Price: $${price}


        Client's additional comment: ${message} 


        `;
    var templateParams = {
      to_name: SiteData.owner_name,
      from_name: name,
      subject_line: `There is a new request for a turf quote from ${name}`,
      phone_number: phone,
      message: email_message,
      reply_to: email
    };
    emailjs.send(serviceId, templateId, templateParams, publicKey).then((result) => {
      props.nextStep();
      console.log(result.text);
      ScrollTop();
    }, (error) => {
      console.log(error.text);
    });
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: HandleSubmit,
      children: [
        /* @__PURE__ */ jsx(
          "h2",
          {
            className: "font-bold text-center",
            children: "Give us your contact info"
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: name,
            dispatch: setName,
            label: "Full name"
          }
        ),
        /* @__PURE__ */ jsx(Input, { value: email, dispatch: setEmail, label: "Email" }),
        /* @__PURE__ */ jsx(Input, { value: phone, dispatch: setPhone, label: "Phone" }),
        /* @__PURE__ */ jsx(Input, { value: address, dispatch: setAddress, label: "Address" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "block sm:flex flex-row justify-evenly gap-x-5",
            children: [
              /* @__PURE__ */ jsx(Input, { value: city, dispatch: setCity, label: "City" }),
              /* @__PURE__ */ jsx(StateSelection, {}),
              /* @__PURE__ */ jsx(Input, { value: zip, dispatch: setZip, label: "ZIP Code" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            name: "message",
            id: "messageInput",
            rows: 5,
            className: "text-base outline-1 border-2 border-solid border-slate-200 resize-none p-1 rounded-lg bg-transparent placeholder:text-base placeholder:text-slate-400 w-full",
            placeholder: "Let us know about any special requests that you may have",
            value: message,
            onChange: (e) => setMessage(e.target.value)
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex flex-row gap-10 mt-10 mx-auto justify-evenly",
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: props.previousStep,
                  className: "btn-primary",
                  type: "button",
                  children: "Previous Step"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "rounded-[15px] p-[10px] active:translate-x-[5px] active:translate-y-[5px] cursor-pointer border-black border-2 text-center w-fit select-none text-white mx-auto hover:bg-[#535353] bg-[#333333] box_shadow whitespace-nowrap [&>*]:inline-flex block",
                  type: "submit",
                  children: "Submit"
                }
              )
            ]
          }
        )
      ]
    }
  );
};
const LastStep = (props) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "text-center [&>*]:my-5",
      children: [
        /* @__PURE__ */ jsx("h2", { children: "Thank you. Your request for a quote has been submitted." }),
        /* @__PURE__ */ jsx("p", { children: "We will contact you shortly." }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: props.firstStep,
            className: "btn-primary",
            type: "button",
            children: "Start over"
          }
        )
      ]
    }
  );
};

const StepForm = () => {
  const [turf, setType] = useState("");
  const [condition, setCondition] = useState("");
  const [sqft, setArea] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("CA");
  const [zip, setZip] = useState(null);
  const [price, setPrice] = useState(0);
  const context = {
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
    price,
    setPrice
  };
  return /* @__PURE__ */ jsx(StepContext.Provider, { value: context, children: /* @__PURE__ */ jsxs(
    StepWizard,
    {
      children: [
        /* @__PURE__ */ jsx(IntroStep, {}),
        /* @__PURE__ */ jsx(TurfQuestion, {}),
        /* @__PURE__ */ jsx(SquareFootQuest, {}),
        /* @__PURE__ */ jsx(ConditionQuestion, {}),
        /* @__PURE__ */ jsx(ContactInfo, {}),
        /* @__PURE__ */ jsx(LastStep, {})
      ]
    }
  ) });
};

const $$Astro = createAstro();
const $$StepExample = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StepExample;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "StepForm", StepForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/artifical_turf_calc/step-wizard", "client:component-export": "default" })}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/services/step-example.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/services/step-example.astro";
const $$url = "/services/step-example";

export { $$StepExample as default, $$file as file, $$url as url };
