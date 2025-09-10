
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import HeadingCard from "@/components/HeadingCard";


export default function Hero({ data }: any) {

    return (

        <div className="w-full max-w-[1535px] flex md:flex-row flex-col-reverse lg:justify-between justify-center items-center mt-[100px] relative">
            <div className="bg-[url(/assets/Dots.png)] bg-cover opacity-10 z-[-1] inset-0 absolute "></div>
            <div className="w-full">
                <div data-delay="0" className={`opacity-0 animate-left-on-scroll flex flex-col lg:w-auto w-full lg:gap-[24px] md:gap-[16px] sm:gap-[24px] gap-[12px]`}>
                    <HeadingCard text="Best Quality" />
                    <h1 className="text-[#E1E1E1] 2xl:text-[64px] xl:text-[60px] lg:text-[56px] md:text-[40px] sm:text-[48px] text-[32px] font-bold leading-[140%]">{data?.head}</h1>
                    <p className="text-[#FFFFFFD9] 2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[20px] text-[14px] font-medium leading-[150%] 2xl:max-w-[60%] xl:max-w-[450px] lg:max-w-[380px] md:max-w-[78%]" >{data?.subHead}</p>
                    <div className="flex items-center xl:gap-[24px] md:gap-[10px] sm:gap-[18px] gap-[8px] mt-[12px]">
                        <Link href="/about-us" className="blue-gradient h-[54px] px-[32px] xl:text-[18px] md:text-[14px] sm:text-[16px] text-[14px] font-bold text-[#FFFFFF] rounded-[16px] flex items-center justify-center whitespace-nowrap">Discover More</Link>
                        <Link href="/contact-us" className="blue-gradient h-[54px] xl:text-[18px] md:text-[14px] sm:text-[16px] text-[14px] font-bold text-[#FFFFFF] rounded-[16px] p-[1px]">
                            <span className="w-full h-full bg-[#01070F] px-[30px] flex items-center justify-center rounded-[16px] whitespace-nowrap">
                                Contact Us
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="opacity-0 animate-hero-on-scroll flex flex-col self-end gap-[10px] mt-[60px] sm:w-auto w-[86%]">
                <div className="flex-1 relative xl:min-h-[300px] lg:min-h-[250px] md:min-h-[230px] sm:min-h-[250px] min-h-[39.2vw]">
                    <motion.div
                        initial={{ opacity: 0, x: "10%", y: "-8%" }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.4, delay: 2.7, ease: "easeOut" }}
                        className="absolute sm:top-0 top-[-4%] left-[50%] dark-gradient xl:w-[81px] lg:w-[71px] md:w-[60.5px] sm:w-[71px] w-[11.3vw] xl:h-[81px] lg:h-[71px] md:h-[60.5px] sm:h-[71px] h-[11.3vw] rounded-full flex justify-center items-center">
                        <div className="w-[50%] aspect-[1/1] relative">
                            <Image fill alt="software-testing" src="/assets/software-testing.png" className="" priority />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1, delay: 1.8 }}
                        className="absolute w-[1px] origin-top lg:left-[32%] md:left-[35%] sm:left-[32%] left-[32%] lg:top-[67%] md:top-[62%] sm:top-[67%] top-[67%] lg:rotate-[-138deg] md:rotate-[-143deg] sm:rotate-[-138deg] rotate-[-138deg] xl:h-[176px] lg:h-[145px] md:h-[107px] sm:h-[145px] h-[24vw]"
                        style={{
                            background: "#7BB3FF",
                            transform: `translateX(-50%) `, // 0deg = straight up
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, x: "10%", y: "8%" }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.4, delay: 2.7, ease: "easeOut" }}
                        className="dark-gradient absolute lg:bottom-[-30px] md:bottom-[-20px] sm:bottom-[-30px] bottom-[-10%] lg:left-[59.5%] md:left-[62%] sm:left-[59.5%] left-[59.5%] xl:w-[61px] lg:w-[53.5px] md:w-[45.5px] sm:w-[53.5px] w-[8.5vw] xl:h-[61px] lg:h-[53.5px] md:h-[45.5px] sm:h-[53.5px] h-[8.5vw] rounded-full flex justify-center items-center">
                        <div className="w-[50%] aspect-[1/1] relative">
                            <Image fill alt="processor" src="/assets/processor-2.png" className="" priority />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1, delay: 1.8 }}
                        className="absolute w-[1px] origin-top xl:h-[180px] lg:h-[149px] md:h-[123px] sm:h-[149px] h-[25vw] z-[-1] left-[35%] lg:top-[62%] md:top-[60%] sm:top-[62%] top-[62%] lg:rotate-[-57deg] md:rotate-[-52deg] sm:rotate-[-57deg] rotate-[-57deg]"
                        style={{
                            background: "#C6DFFF",
                            transform: `translateX(-50%) `, // 0deg = straight up
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, x: "10%", y: "0%" }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.4, delay: 2.7, ease: "easeOut" }}
                        className="dark-gradient absolute lg:bottom-[100px] md:bottom-[85px] sm:bottom-[100px] bottom-[40%] right-[20%] xl:w-[41px] lg:w-[36px] md:w-[31px] sm:w-[36px] w-[5.8vw] xl:h-[41px] lg:h-[36px] md:h-[31px] sm:h-[36px] h-[5.8vw] rounded-full flex justify-center items-center">
                        <div className="w-[50%] aspect-[1/1] relative">
                            <Image fill alt="code" src="/assets/code.png" className="" priority />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1, delay: 1.8 }}
                        className="absolute w-[1px] origin-top xl:left-[40%] left-[38%] xl:top-[59%] lg:top-[60%] md:top-[59%] sm:top-[60%] top-[60%] xl:rotate-[-89deg] lg:rotate-[-95deg] md:rotate-[-92deg] sm:rotate-[-95deg] rotate-[-95deg] xl:h-[197px] lg:h-[173px] md:h-[114px] sm:h-[173px] h-[29vw] z-[-1]"
                        style={{
                            background: "#9DC7FF",
                            transform: `translateX(-50%) `, // 0deg = straight up
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, x: "-10%", y: "-8%" }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.4, delay: 2.7, ease: "easeOut" }}
                        className="dark-gradient absolute lg:top-[20%] md:top-[30%] sm:top-[20%] top-[19%] lg:left-[-30px] md:left-[-50px] sm:left-[-30px] left-[-5.9%] xl:w-[51px] lg:w-[45px] md:w-[38.3px] sm:w-[45px] w-[7.2vw] xl:h-[51px] lg:h-[45px] md:h-[38.3px] sm:h-[45px] h-[7.2vw] rounded-full flex justify-center items-center">
                        <div className="w-[50%] aspect-[1/1] relative">
                            <Image fill alt="coding-gear" src="/assets/coding-gear.png" className="" priority />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1, delay: 1.8 }}
                        className="absolute w-[1px] origin-top left-[36%] lg:top-[62%] md:top-[60%] sm:top-[62%] top-[62%] lg:rotate-[-246deg] md:rotate-[-253deg] sm:rotate-[-246deg] rotate-[-246deg] xl:h-[216px] lg:h-[181px] md:h-[145px] sm:h-[181px] h-[31vw] z-[-1]"
                        style={{
                            background: "#92C0FF",
                            transform: `translateX(-50%) `, // 0deg = straight up
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, x: "-8%", y: "8%" }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.4, delay: 2.7, ease: "easeOut" }}
                        className="dark-gradient absolute lg:bottom-[-10px] md:bottom-[-25px] sm:bottom-[-10px] bottom-[-10px] lg:left-[-50px] md:left-[-45px] sm:left-[-50px] left-[-10%] xl:w-[91px] lg:w-[80px] md:w-[68px] sm:w-[80px] w-[12.8vw] xl:h-[91px] lg:h-[80px] md:h-[68px] sm:h-[80px] h-[12.8vw] rounded-full flex justify-center items-center">
                        <div className="w-[50%] aspect-[1/1] relative">
                            <Image fill alt="artificial-intelligence" src="/assets/artificial-intelligence.png" className="" priority />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1, delay: 1.8 }}
                        className="absolute w-[1px] origin-top left-[36%] lg:top-[61%] md:top-[58%] sm:top-[61%] top-[61%] lg:rotate-[70deg] md:rotate-[56deg] sm:rotate-[70deg] rotate-[70deg] xl:h-[189px] lg:h-[159px] md:h-[128px] sm:h-[159px] h-[27vw] z-[-1]"
                        style={{
                            background: "#BEDAFF",
                            transform: `translateX(-50%) `, // 0deg = straight up
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, x: "-8%", y: "-10%" }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.4, delay: 2.7, ease: "easeOut" }}
                        className="dark-gradient absolute lg:top-[-35px] md:top-[-27px] sm:top-[-35px] top-[-35px] lg:left-[20%] md:left-[13%] sm:left-[20%] left-[20%]  xl:w-[71px] lg:w-[62px] md:w-[51px] sm:w-[62px] w-[9.8vw] xl:h-[71px] lg:h-[62px] md:h-[51px] sm:h-[62px] h-[9.8vw] rounded-full flex justify-center items-center z-[1]">
                        <div className="w-[50%] aspect-[1/1] relative">
                            <Image fill alt="industrial" src="/assets/industrial.png" className="" priority />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1, delay: 1.8 }}
                        className="absolute w-[1px] origin-top lg:left-[36%] sm:left-[36%] md:left-[37%] left-[36%] lg:top-[67%] md:top-[63%] top-[67%]  lg:rotate-[-197deg] md:rotate-[-202deg] rotate-[-197deg] xl:h-[173px] lg:h-[145px] md:h-[130px] sm:h-[145px] h-[27vw] min-h-[100px] z-[-1]"
                        style={{
                            background: "#6EABFF",
                            transform: `translateX(-50%) `, // 0deg = straight up
                        }}
                    />

                    {/* center cir */}
                    <motion.div
                        initial={{ opacity: 0, translateY: 120 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="xl:w-[60px] lg:w-[50px] xl:h-[60px] lg:h-[50px] md:w-[40px] md:h-[40px] sm:w-[50px] sm:h-[50px]  w-[8vw] h-[8vw] light-gradient rounded-full absolute left-[30%] top-[50%] " />
                </div>

                <div

                    className="relative xl:w-[600px] lg:w-[500px] md:w-[350px] sm:w-[500px] w-full sm:aspect-[600/300] aspect-[2/1]">
                    <Image
                        src="/assets/robotH.png"
                        fill
                        alt=""
                        className="object-contain "

                    />
                </div>
            </div>
            <div className="hero-light absolute right-0 top-[-50px] md:bottom-0 bottom-[30%] lg:w-[60%] md:min-w-[450px] md:w-[50%] w-full opacity-55 z-[-1]"></div>
        </div>

    );
}
