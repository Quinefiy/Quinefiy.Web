import HeadingCard from "./HeadingCard";

type Props = {
    showHeader:boolean
}

const SoftwareProduct = ({showHeader}: Props) => {
    const products = [
        {
            id: 1,
            img: "/assets/web-programming.png",
            title: "Custom Software Development",
            desc: "Building tailored solutions for businesses."
        },
        {
            id: 2,
            img: "/assets/erp.png",
            title: "Enterprise Software Solutions",
            desc: "ERP, CRM, and other business software."
        },
        {
            id: 3,
            img: "/assets/saas.png",
            title: "SaaS Development",
            desc: "Developing cloud-based software as a service."
        },
        {
            id: 4,
            img: "/assets/development.png",
            title: "Web Development",
            desc: "Our web development services deliver fast, secure, and user-friendly websites and applications."
        },
        {
            id: 5,
            img: "/assets/mobile-development.png",
            title: "Mobile App Development",
            desc: "We offer custom mobile app development services, specializing in iOS and Android platforms, creating user-friendly native, hybrid, and progressive web apps that cater to business needs and engage users."
        }

    ];

    return (
        <div className=" w-full max-w-[1535px] relative overflow-x-clip">
            <div className="opacity-0 animate-down-on-scroll flex flex-col xl:gap-[24px] lg:gap-[22px] md:gap-[20px] sm:gap-[18px] gap-[16px] items-center">
                {showHeader && <HeadingCard text="What Do We Offer?" />}
                <h2 className="text-[#E1E1E1] 2xl:text-[36px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] font-bold leading-[160%]">Software Product Development</h2>
                <p className="text-[#FFFFFFD9] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] font-medium leading-[160%] max-w-[890px] text-center">We create scalable and high-performing software products tailored to your business needs. From MVPs for startups to full-scale enterprise applications, our solutions are designed to drive growth, enhance efficiency, and meet market demands.</p>
            </div>
            <div className=" w-full grid grid-cols-6 2xl:mt-[64px] xl:mt-[58px] lg:mt-[50px] md:mt-[44px] sm:mt-[38px] mt-[32px] 2xl:gap-[24px] lg:gap-[20px] sm:gap-[18px] gap-[16px]">
                {products.map((product: any, index: number) => (
                     <div data-delay={`${index * 0.3}`} className={`${index === 0 || index === 1 ? "xl:col-span-2 md:col-span-3 col-span-6 " : index === 2 ? "xl:col-span-2 md:col-span-3 col-span-6" : index === 3 ? "md:col-span-3 col-span-6" : "xl:col-span-3 col-span-6"}  opacity-0 animate-left-on-scroll animate-down-on-scroll !h-full`} key={product.id}>
                        <div className="transition-transform hover:translate-y-[-30px] duration-500 rounded-[16px] relative border border-[#6BAAFF4D]  productCard-gradient py-[48px] px-[32px]  overflow-hidden !h-full" >
                            {/* <div className="absolute top-0 left-0 bottom-0 right-0 bg-[url(/assets/dust.png)] z-10 bg-cover">
                        </div> */}
                            <div className="w-[52.5px] h-[52.5px] rounded-full flex items-center justify-center mb-[32px] border-[0.75px] border-[#FFFFFF1A]">
                                <img src={product.img} className="w-[32px]" />
                            </div>
                            <h4 className="2xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-[#E1E1E1] font-bold mb-[12px]  leading-[160%] ">{product.title}</h4>
                            <p className="2xl:text-[16px] lg:text-[14.5px] sm:text-[13px] text-[12px] text-[#FFFFFFD9] font-medium leading-[160%]">{product.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="blue-light opacity-65 absolute w-[550px] h-[200px] right-[0px] bottom-[-100px] z-[-1]"></div>
            <div className="blue-light opacity-65 absolute w-[550px] h-[200px] left-[0px] top-[50%] z-[-1]"></div>
        </div>
    )
}

export default SoftwareProduct



