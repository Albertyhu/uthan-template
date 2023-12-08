/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro_32dbe7d3.mjs';
import 'clsx';
import { S as SiteData, a as $$ContentWrapper, $ as $$BaseLayout } from './404_8bf7126a.mjs';
/* empty css                            *//* empty css                           */import { jsx, jsxs } from 'react/jsx-runtime';
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import StepWizard from 'react-step-wizard';
import emailjs from '@emailjs/browser';
/* empty css                                     */import uuid from 'react-uuid';

const $$Astro$6 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$4;
  const {
    button_label,
    link,
    customStyle = ""
  } = Astro2.props;
  const BeforeStyle = "before:object-fit before:content-[''] before:h-full before:w-0 before:bg-[#21563D] before:absolute before:inset-0 before:opacity-60 hover:before:w-full before:transform-all before:z-[0]";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-fit mx-auto p-1 sm:px-5 sm:py-5 rounded-lg cursor-pointer select-none active:translate-x-[1px] active:translate-y-[1px] relative bg-[#2f7955] text-white font-bold overflow-hidden ${BeforeStyle} clippedShape ${customStyle}`, "class")}><a${addAttribute(link, "href")} class=" z-1 capitalizetext-2xl text-white text-center relative">${button_label}</a></div>`;
}, "D:/Astro/uthan-site/src/components/liquid-button/index.astro", void 0);

const $$Astro$5 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$3;
  const {
    title,
    subtitle,
    button_label,
    link,
    titleStyle,
    wrapperStyle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="TitleSection" class="absolute h-fit w-full top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[50] text-white font-['Prata', sans-serif]"><div id="TitleWrapper"${addAttribute(wrapperStyle ? wrapperStyle : "w-11/12 sm:max-w-[800px] mx-auto", "class")}><h1${addAttribute(titleStyle ? titleStyle : "text-white text-center text-2xl sm:text-[50px] leading-[50px] sm:text-[90px] sm:leading-[90px] fadeInUp font-['Prata',serif]", "class")}>${title}</h1><h2 class="text-white text-center text-sm sm:text-[20px] !block fadeInUp opacity-0 animation-delay-1 font-['Montserrat',sans-serif]">${subtitle}</h2>${button_label && renderTemplate`${renderComponent($$result, "LiquidButton", $$Index$4, { "button_label": button_label, "link": link, "customStyle": "fadeInUp opacity-0 animation-delay-2 font-['Montserrat',sans-serif] text-[17px] my-10" })}`}</div></div>`;
}, "D:/Astro/uthan-site/src/components/TitleComponent/index.astro", void 0);

const Grass = {"src":"/_astro/shape-2.f12c1ed5.png","width":1920,"height":54,"format":"png"};

const LandscapeDesign = {"src":"/_astro/landscape-design.9a78990e.jpg","width":190,"height":190,"format":"jpg"};

const TreeRemoval = {"src":"/_astro/tree-removal-small.d403e7bf.jpg","width":6000,"height":4000,"format":"jpg"};

const LawnReturfing = {"src":"/_astro/lawn-2-small.9405c10b.jpg","width":4000,"height":3000,"format":"jpg"};

const ArtificalTurfInstallation = {"src":"/_astro/lawn-small.21a03bd0.jpg","width":292,"height":190,"format":"jpg"};

const LandscapeDesignImg1 = {"src":"/_astro/landscape-design-2.bd59a22c.jpg","width":1920,"height":1281,"format":"jpg","orientation":1};

const TreeRemovalImg1 = {"src":"/_astro/tree-removal.0e1f420b.jpg","width":1280,"height":853,"format":"jpg"};

const LawnReturfingImg1 = {"src":"/_astro/lawn-2.b3ccaec3.jpg","width":1280,"height":960,"format":"jpg"};

const ArtificalTurfInstallationImg1 = {"src":"/_astro/lawn.9169d497.jpg","width":1280,"height":833,"format":"jpg"};

const Services = [
        {
            "thumbnail": LandscapeDesign,
            "title": "Landscape Design", 
            "tagline": "Transforming visions into breathtaking outdoor realities, our landscape designs weave nature's beauty with your dreams.",
            "link": "/services/landscape-design",
            "description" : "Our Landscape Design service is the gateway to transforming your outdoor space into a breathtaking masterpiece. Our expert designers combine their creativity with your vision to craft landscapes that seamlessly blend nature's beauty with your dreams.",
            "promise" : "Experience the evolution of your ideas into captivating outdoor realities. Your space will be carefully planned, taking into account elements like functionality, aesthetics, and sustainability.",
            "features": ["Customized design plans", "Plant selection for diverse landscapes", "Hardscape integration (pathways, patios, etc.)", "Drainage and irrigation solutions", "Visual mock-ups for a clear vision"],
            "image1": LandscapeDesignImg1
        },
        {
            "thumbnail": TreeRemoval,
            "title": "Tree Removal", 
            "tagline": "Safely and sensitively removing trees to preserve your landscape's harmony and safety.",
            "link": "/services/tree-removal",
            "description" : "Our Tree Removal service ensures the safe and considerate removal of trees to maintain the harmony and safety of your landscape. We prioritize the health of your environment and execute removal with precision and care.",
            "promise": "Your landscape will remain harmonious and safe, free from potentially hazardous or overgrown trees. Our experts will handle removal without disrupting the balance of your outdoor space.",
            "features": ["Certified arborists for safe removal", "Eco-friendly disposal practices", "Preservation of surrounding vegetation", "Site cleanup post-removal"],
            "image1": TreeRemovalImg1
        },
        {
            "thumbnail": LawnReturfing,
            "title": "Lawn Returfing", 
            "tagline": "From patchy to pristine, we revive lawns into lush, inviting carpets of green.",
            "link": "/services/lawn-returfing",
            "description": "Revive your patchy and worn-out lawn with our Lawn Returfing service. We rejuvenate your green space into a lush and inviting carpet of vibrant green, perfect for relaxation and outdoor activities.",
            "promise": "Witness the transformation of your dull and uneven lawn into a vibrant and smooth expanse of lush greenery, creating an inviting ambiance for outdoor enjoyment.",
            "features": ["Removal of old turf", "Grading and soil preparation", "Premium quality turf installation", "Post-installation care guidelines", "Regular maintenance options"],
            "image1": LawnReturfingImg1
        },
        {
            "thumbnail": ArtificalTurfInstallation,
            "title": "Artifical Turf Installation", 
            "tagline": "Enjoy the look of real grass without the upkeep – artificial turf that's always perfectly manicured.",
            "link": "/services/artifical-turf-installation",
            "description": "Say goodbye to lawn maintenance woes with our Artificial Turf Installation service. Enjoy the look and feel of real grass without the upkeep, as our artificial turf always remains impeccably manicured.",
            "promise": "Experience the convenience of a pristine lawn that requires minimal maintenance, while adding a touch of green luxury to your outdoor space.",
            "features": ["High-quality artificial turf selection", "Realistic appearance and texture", "UV-resistant and durable materials", "Efficient drainage system", "No need for mowing or watering"],
            "image1": ArtificalTurfInstallationImg1
        }
    ];
const data = Services;

const $$Astro$4 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${maybeRenderHead()}<div class="absolute left-0 right-0 bottom-[-1px] sm:bottom-0 bg-repeat-x h-[54px] w-full z-[19] animated-grass"${addAttribute(`background-image: url(${Grass.src})`, "style")}></div>`;
}, "D:/Astro/uthan-site/src/components/animated_grass/index.astro", void 0);

const defaultImage = {"src":"/_astro/japanese-garden.6b1716e5.jpg","width":1280,"height":960,"format":"jpg"};

const $$Astro$3 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  const {
    image,
    title,
    subtitle,
    button_label,
    link
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="small_banner"${addAttribute(`relative h-[250px] w-full bg-center before:absolute  before:content-[''] before:bg-[rgba(0,0,0,0.4)] before:w-full before:h-full before:z-10 scrollToTopIndicator`, "class")}><img${addAttribute(image ? image.src : defaultImage.src, "src")} class="w-full h-full object-cover" alt="banner image">${title && renderTemplate`${renderComponent($$result, "TitleComponent", $$Index$3, { "title": title, "subtitle": subtitle, "button_label": button_label, "link": link, "wrapperStyle": "w-11/12 mx-auto overflow-hidden max-w-[270px] xm:max-w-[360px] sm:max-w-[636px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]", "titleStyle": "md:whitespace-nowrap text-white text-center text-3xl leading-[50px] sm:text-[45px] sm:leading-[90px] fadeInUp font-['Prata',serif]" })}`}${renderComponent($$result, "AnimatedGrass", $$Index$2, {})}</div>`;
}, "D:/Astro/uthan-site/src/components/small_banner/index.astro", void 0);

const $$Astro$2 = createAstro();
const $$ImageComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ImageComponent;
  const {
    image,
    altText,
    customStyle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="image-component"${addAttribute(customStyle ? customStyle : "h-auto w-11/12 mx-auto md:h-[370px] md:w-[370px] overflow-hidden rounded-lg grow-[3]", "class")}><img loading="lazy" decoding="async"${addAttribute(image.src, "src")}${addAttribute(altText ? altText : "projectimage", "alt")} class="object-cover w-full h-full"></div>`;
}, "D:/Astro/uthan-site/src/components/image_component.astro", void 0);

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
      className: "border-2 rounded-lg relative my-5",
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
      className: "border-2 rounded-lg relative my-5",
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
      className: "rounded-lg border-2 px-10 py-5 font-bold text-center w-full hover:bg-slate-300",
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

const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->${maybeRenderHead()}<section class="relative flex flex-wrap lg:h-screen lg:items-center"><div class="w-full py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24" id="ATFormContainer">${renderComponent($$result, "StepWizard", StepForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/uthan-site/src/components/artifical_turf_calc/step-wizard.tsx", "client:component-export": "default" })}</div><div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2"><img alt="Welcome" src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="absolute inset-0 h-full w-full object-cover"></div></section>`;
}, "D:/Astro/uthan-site/src/components/artifical_turf_calc/index.astro", void 0);

const $$Astro = createAstro();
const $$ArtificialTurf = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArtificialTurf;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Turf Calculator", "CTA_Banner": true, "customSlotStyle": "mt-[100px] sm:mt-[185px] [@media(min-width:992px)]:mt-[180px] min-h-[100vh] sm:min-h-[300vh] mb-[10px] flex flex-col flex-grow overflow-x-hidden" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$1, { "title": "Artificial Turf Installation", "subtitle": "Enjoy the look of real grass without the upkeep \u2013 artificial turf that's always perfectly manicured." })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col sm:flex-row sm:gap-10 grow-[3]"><div class="grow-0"><section class="my-10"><h3 class="text-[30px] mb-5">Description</h3><div>${data[3].description}</div></section>${data[3].features && renderTemplate`<section class="my-10"><h3 class="text-[30px] mb-5">Features</h3><ul class="list-disc list-inside">${data[3].features.map((feature) => renderTemplate`<li class="list-disc list-inside">${feature}</li>`)}</ul></section>`}</div>${data[3].image1 && renderTemplate`${renderComponent($$result3, "ImageComponent", $$ImageComponent, { "image": data[3].image1, "altText": "Artificial Turf", "customStyle": "w-auto h-auto overflow-hidden my-10 rounded-lg mx-auto grow" })}`}</div>${data[3].promise && renderTemplate`<section class="my-10"><h3 class="text-[30px] mb-5">What we promise to deliver</h3><div>${data[3].promise}</div></section>`}${renderComponent($$result3, "Form", $$Index, {})}` })}` })}`;
}, "D:/Astro/uthan-site/src/pages/services/artificial-turf.astro", void 0);

const $$file = "D:/Astro/uthan-site/src/pages/services/artificial-turf.astro";
const $$url = "/services/artificial-turf";

const artificialTurf = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ArtificialTurf,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index$1 as $, Grass as G, StepForm as S, $$Index$3 as a, $$ImageComponent as b, artificialTurf as c, data as d };
