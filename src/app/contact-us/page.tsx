'use client';

import HeadingCard from "@/components/HeadingCard";
// import StartYourJourney from "@/components/StartYourJourney";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { initScrollAnimations } from "@/utils/scrollAnimations";
import { useEffect } from "react";

// type Inputs = {
//   firstName: string,
//   lastName: string,
//   email: string,
//   message: string
// }

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    message: yup.string().optional(),
  })
  .required()

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log("data", data)
    reset()
  };

  useEffect(() => {
      initScrollAnimations();
    },[])

  const products = [
    {
      id: 1,
      img: "/assets/ic_outline-email.svg",
      title: "Email Address",
      desc: "email@gmail.com"
    },
    {
      id: 2,
      img: "/assets/Group (3).svg",
      title: "Phone Number",
      desc: "010321213512"
    },
    {
      id: 3,
      img: "/assets/outline_chat.svg",
      title: "Live Chat",
      desc: "email@gmail.com"
    }

  ];

  return (
    <div className=" w-full flex justify-center 2xl:px-[96px] xl:px-[52px] lg:px-[36px] md:px-[21px] sm:px-[19px] px-[16px] sm:overflow-x-clip">
      <div className=" w-full max-w-[1535px] flex flex-col  xl:gap-[150px] md:gap-[120px] sm:gap-[80px] gap-[40px] items-center relative  ">
        <div className="hero-light absolute lg:w-[470px] lg:h-[450px] w-[420px] h-[400px] right-[-150px] opacity-80 lg:top-[80%] top-[90%] z-[-1] md:flex hidden"></div>
        <div className="flex flex-col items-center lg:w-auto !w-full lg:gap-[24px] md:gap-[22px] gap-[20px] 2xl:mt-[200px] xl:mt-[170px] md:mt-[150px] mt-[140px] relative">
          <div className="bg-[url(/assets/contact-us-bg.svg)]  w-full bg-no-repeat  lg:bg-cover bg-contain bg-center absolute xl:top-[35%] lg:top-[45%] md:top-[55%] top-[65%] left-[0px] right-[0px] lg:bottom-[-45%] md:bottom-[-55%] bottom-[-65%] md:opacity-60 opacity-40"></div>
          <div data-delay='0.4' className="opacity-0 animate-down-on-scroll"><HeadingCard text="Contact Us" /></div>
          <h1 data-delay='0.2' className="opacity-0 animate-down-on-scroll text-[#E1E1E1] 2xl:text-[48px] xl:text-[42px] lg:text-[36px] md:text-[30px] sm:text-[24px] text-[20px] font-bold leading-[140%]">Get In Touch With</h1>
          <p data-delay='0' className="opacity-0 animate-down-on-scroll text-[#FFFFFFD9] tracking-[1.8px] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] font-medium leading-[160%] lg:max-w-[800px] sm:max-w-[85%] text-center">With seamless integrations, businesses can connect various software tools ranging from project management and CRM systems to accounting</p>
          <div className="flex sm:flex-row flex-col xl:flex-nowrap flex-wrap items-center w-full sm:gap-[24px] gap-[20px] mt-[40px] justify-center">
            {products.map((product: any, index: number) => (
              <div data-delay={index * 0.3} className={`opacity-0 animate-up-on-scroll sm:flex-1 max-w-[558px]  w-full`} key={product.id}>
                <div className={`w-full productCard-gradient py-[48px] px-[32px] rounded-[16px] relative border border-[#6BAAFF4D] overflow-hidden transition-transform hover:translate-y-[-30px] duration-500`} >
                {/* <div className="absolute top-0 left-0 bottom-0 right-0 bg-[url(/assets/dust.png)] z-10 bg-cover">
                        </div> */}
                <div className="w-[52.5px] h-[52.5px] rounded-full flex items-center justify-center mb-[32px] border-[0.75px] border-[#FFFFFF1A]">
                  <img src={product.img} />
                </div>
                <h4 className="2xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-[#E1E1E1] font-bold mb-[12px]  leading-[160%] ">{product.title}</h4>
                <p className="2xl:text-[16px] lg:text-[14.5px] sm:text-[13px] text-[12px] text-[#FFFFFFD9] font-medium leading-[160%]">{product.desc}</p>
                 </div> 
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col items-center lg:w-auto !w-full lg:gap-[24px] md:gap-[22px] gap-[20px]">
          <div data-delay='0.2' className="opacity-0 animate-down-on-scroll"><HeadingCard text="Send a Message" /></div>
          <h1 data-delay='0' className="opacity-0 animate-down-on-scroll text-[#E1E1E1] 2xl:text-[48px] 2xl:tracking-[4.8px] xl:text-[42px] xl:tracking-[4.2px] lg:text-[36px] lg:tracking-[3.6px] md:text-[30px] md:tracking-[3px] sm:text-[24px] sm:tracking-[2.4px] text-[20px] tracking-[2px] font-bold leading-[140%] sm:max-w-[70%] max-w-[95%] text-center">Get in touch with us for more information</h1>
          <form className="opacity-0 animate-up-on-scroll w-full xl:max-w-[936px] lg:max-w-[860px] max-w-[730px] flex flex-col xl:gap-[48px] lg:gap-[38px] md:gap-[28px] gap-[24px] 2xl:mt-[64px] xl:mt-[58px] lg:mt-[45px] md:mt-[36px] sm:mt-[25px] mt-[12px]" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex sm:flex-row flex-col gap-[24px] w-full">
              <div className="flex-1 flex flex-col xl:gap-[24px] md:gap-[20px] gap-[16px]">
                <label className="text-[#FFFFFFBF] md:text-[16px] text-[14px] md:tracking-[1.6px] tracking-[1.4px] leading-[100%] font-normal">First name</label>
                <input type="text" {...register("firstName")} placeholder="Enter first name" className=" placeholder:text-[#FFFFFFBF] placeholder:text-[14px] placeholder:tracking-[1.4px] md:px-[32px] px-[27px] md:py-[25px] py-[17px] rounded-[16px] border border-[#0065FF] font-medium leading-[100%] text-[#FFFFFF] placeholder:font-normal md:text-[16px] text-[14px] md:tracking-[1.6px] tracking-[1.4px] focus:outline-0 focus:shadow-[0px_0px_15px_0px_#0066FF80]" />
                {errors.firstName && <div className=' text-red-700'>First Name is required</div>}
              </div>
              <div className="flex-1 flex flex-col xl:gap-[24px] md:gap-[20px] gap-[16px]">
                <label className="text-[#FFFFFFBF] md:text-[16px] text-[14px] md:tracking-[1.6px] tracking-[1.4px] leading-[100%] font-normal">Last name</label>
                <input type="text" {...register("lastName")} placeholder="Enter last name" className=" placeholder:text-[#FFFFFFBF] placeholder:text-[14px] placeholder:tracking-[1.4px] md:px-[32px] px-[27px] md:py-[25px] py-[17px] rounded-[16px] border border-[#0065FF] font-medium leading-[100%] text-[#FFFFFF] placeholder:font-normal md:text-[16px] text-[14px] md:tracking-[1.6px] tracking-[1.4px] focus:outline-0 focus:shadow-[0px_0px_15px_0px_#0066FF80]" />
                {errors.lastName && <div className=' text-red-700'>Last Name is required</div>}
              </div>
            </div>
            <div className="flex-1 flex flex-col xl:gap-[24px] md:gap-[20px] gap-[16px]">
              <label className="text-[#FFFFFFBF] md:text-[16px] text-[14px] md:tracking-[1.6px] tracking-[1.4px] leading-[100%] font-normal">Email</label>
              <input type="email" {...register("email")} placeholder="Enter your email" className=" placeholder:text-[#FFFFFFBF] placeholder:text-[14px] placeholder:tracking-[1.4px] md:px-[32px] px-[27px] md:py-[25px] py-[17px] rounded-[16px] border border-[#0065FF] font-medium leading-[100%] text-[#FFFFFF] placeholder:font-normal md:text-[16px] text-[14px] md:tracking-[1.6px] tracking-[1.4px] focus:outline-0 focus:shadow-[0px_0px_15px_0px_#0066FF80]" />
              {errors.email && <div className=' text-red-700'>Email is required</div>}
            </div>
            <div className="flex-1 flex flex-col xl:gap-[24px] md:gap-[20px] gap-[16px]">
              <label className="text-[#FFFFFFBF] md:text-[16px] text-[14px] md:tracking-[1.6px] tracking-[1.4px] leading-[100%] font-normal">Message</label>
              <textarea cols={3} rows={10} {...register("message")} placeholder="Write your message here" className=" placeholder:text-[#FFFFFFBF] placeholder:text-[14px] placeholder:tracking-[1.4px] md:px-[32px] px-[27px] md:py-[25px] py-[17px] rounded-[16px] border border-[#0065FF] font-medium leading-[100%] text-[#FFFFFF] placeholder:font-normal md:text-[16px] text-[14px] md:tracking-[1.6px] tracking-[1.4px] focus:outline-0 focus:shadow-[0px_0px_15px_0px_#0066FF80]" />
            </div>
            <button type="submit" className="button-gradient rounded-[16px] border-0 md:h-[67px] h-[49px] flex items-center justify-center font-bold md:text-[18px] text-[16px] md:tracking-[1.8px] tracking-[1.6px] leading-[100%] text-white text-center cursor-pointer">Submit</button>
          </form>
        </div>
      </div>
      {/* <StartYourJourney /> */}
    </div>
  );
}

