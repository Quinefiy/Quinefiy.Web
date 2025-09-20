import Link from "next/link";

const StartYourJourney = () => {

    return (
        <div className="opacity-0 animate-up-on-scroll w-full max-w-[1535px] md:py-[96px] py-[72px] 2xl:text-[96px] xl:px-[82px] lg:px-[70px] md:px-[58px] sm:px-[46px] px-[32px] flex flex-col items-center md:gap-[74px] gap-[54px] startCard-gradient  border border-[#6BAAFF4D] rounded-[16px] relative overflow-hidden">
            <h3 data-delay='0.6' className="opacity-0 animate-down-on-scroll font-bold text-[#E1E1E1] leading-[140%] 2xl:text-[48px] xl:text-[44px] lg:text-[39px] md:text-[34px] sm:text-[29px] text-[24px] text-center max-w-[1100px]">Start your journey now transform your business with AI solutions.</h3>
            <Link data-delay='0.3' href="/contact-us" className="opacity-0 animate-down-on-scroll contactBtnGradient p-[1px] rounded-[12px] glow-on-hover relative">
                <div className=" px-[32px] py-[16px] bg-[#01132C] rounded-[12px] font-bold text-[#FFFF] leading-[100%] xl:text-[22px] md:text-[18px] text-[14px] flex justify-center items-center gap-[20px]"> 
                    Contact Us
                </div>
            </Link>
            {/* <Link
                data-delay="0.3"
                href="/contact-us"
                className="opacity-0 animate-down-on-scroll button-gradient p-[1px] rounded-[12px] group relative"
            >
                <div className="px-[32px] py-[16px] bg-[#01132C] rounded-[12px] font-bold text-white leading-[100%] xl:text-[22px] md:text-[18px] text-[14px] flex justify-center items-center overflow-hidden transition-all duration-500 xl:w-[184px] xl:hover:w-[232px] md:w-[162px] md:hover:w-[210px] w-[140px] hover:w-[188px]">
                    <Image
                        src="/assets/contact-phone-talking-svgrepo-com.svg"
                        width={28}
                        height={28}
                        alt=""
                        className=" w-0 group-hover:w-[28px] translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100  shake-scale "
                    />
                    <p className="transition-transform duration-500 group-hover:translate-x-4">
                        Contact Us
                    </p>
                </div>
            </Link> */}
            <div className="absolute sm:h-[70%] h-[88%] w-full bottom-0 left-0 right-0 z-[-1] bg-[url(/assets/start-journey-bg.svg)] bg-cover bg-center bg-no-repeat"></div>
        </div>
    )
}

export default StartYourJourney;