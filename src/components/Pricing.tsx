import HeadingCard from "./HeadingCard";
import { motion } from "motion/react";


type Props = {
    showHeader: boolean;
    data:any;
}

const Pricing = ({data, showHeader }: Props) => {

    // const getPricingPlans = async () => {
    //     return await api.get('/pricing-plans?populate=*').then(res => res.data.data)
    // }
    // const { data, isSuccess, isLoading } = useQuery({ queryKey: ['pricing-plans-list'], queryFn: getPricingPlans })
    // console.log("plans",data)
    return (
        <div className="w-full max-w-[1535px] relative">
            {showHeader &&
                <div className="flex flex-col items-center gap-[24px] 2xl:mb-[64px] xl:mb-[58px] lg:mb-[50px] md:mb-[44px] sm:mb-[38px] mb-[32px]">
                    <div data-delay='0.2' className="opacity-0 animate-down-on-scroll"><HeadingCard text="Pricing" /></div>
                    <h2 className="opacity-0 animate-down-on-scroll text-[#E1E1E1] 2xl:text-[36px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] font-bold leading-[160%]">Flexible Pricing for Every Business</h2>
                </div>
            }
            {showHeader &&
            <motion.div 
                animate={{ y: [0, 150, 0] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",  
                    ease: "easeInOut",  
                }} className="hero-light absolute lg:top-[50px] inset-y-1/3 bottom-auto h-full md:w-[70%] w-full md:inset-x-[15%] inset-x-0 md:max-h-[740px] sm:max-h-[600px]  max-h-[500px] z-[-1]">
            </motion.div>}
            <div className="w-full  flex lg:flex-row flex-col  justify-center items-center gap-[24px] flex-wrap ">
                {data?.map((plan: any, index: number) => (
                    <div key={plan.id} data-delay={`${index * 0.4}`} className="sm:w-auto w-full xl:flex-1  xl:min-w-fit sm:min-w-[420px] sm:max-w-[670px] max-w-[404px]  opacity-0 animate-up-on-scroll">

                    <div className={`w-full priceCard-gradient xl:py-[48px] lg:py-[44px] md:py-[40px] sm:py-[36px] py-[32px] 2xl:px-[64px] xl:px-[40px] lg:px-[48px] md:px-[44px] sm:px-[38px] px-[32px] rounded-[16px] border ${index === 1 ? "border-[#6BAAFFB2] " : "border-[#6BAAFF4D]"} ${index === 1 ? "xl:order-2 lg:order-3" : index === 0 ? "xl:order-1 lg:order-1" : "xl:order-3 lg:order-2"} flex flex-col gap-[48px] relative overflow-hidden transition-transform hover:translate-y-[-30px] hover:border-[#00429B80] duration-500`} >
                        <div className="">
                            <h4 className="font-bold text-[#E1E1E1] leading-[140%] xl:text-[20px] md:text-[19px] text-[18px]">{plan.name}</h4>
                            <div className="flex items-center gap-[8px] mt-[16px] mb-[32px]">
                                <p className={`font-bold text-[#E1E1E1] leading-[140%] ${index === 1 ? "xl:text-[36px] md:text-[34px] text-[30px]" : "xl:text-[16px] md:text-[15px] text-[14px]"} `}>$ {plan.price}</p>
                                <span className="font-meduim text-[#FFFFFFB2] leading-[140%] xl:text-[16px] md:text-[15px] text-[14px]">/month</span>
                            </div>
                            <div className="relative w-full">
                                <div className="absolute bottom-0 left-0 w-full h-[0.8px] bg-gradient-to-r from-transparent via-[#FFFFFF33] to-transparent"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            {plan.feature?.map((benefit: any) => (
                                <p className="font-normal text-[#E1E1E1] leading-[140%] 2xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] flex items-center gap-[8px]" key={benefit.id}><span>✓</span> {benefit.text}</p>
                            ))}
                        </div>
                        <button className={`w-full sm:h-[54px] h-[49px] rounded-[12px] ${index === 1 ? "blue-gradient border-0" : "bg-[#66666633] border border-[#FFFFFF33]"} sm:text-[18px]  text-[14px] font-bold text-white cursor-pointer`}>Select Plan</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing;