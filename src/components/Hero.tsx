
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
// import HeadingCard from "@/components/HeadingCard";

export default function Hero({ data }: any) {

    return (
        <div className="w-full max-w-[1535px] flex md:flex-row flex-col-reverse lg:justify-between justify-center items-center lg:mt-[100px] mt-[150px] relative ">
            {/* <div className="bg-[url(/assets/Dots.png)] bg-cover opacity-10 z-[-1] inset-0 absolute "></div> */}
            <div className="w-full md:mb-[100px] mb-[40px] md:mt-0 mt-[60px]">
                <div data-delay="0" className={`opacity-0 animate-left-on-scroll flex flex-col lg:w-auto w-full xl:gap-[30px] lg:gap-[28px]  md:gap-[16px] sm:gap-[24px] gap-[12px]`}>
                    {/* <HeadingCard text="Best Quality" /> */}
                    <div className="">
                        <div className="flex flex-col gap-0">
                            <h1 className="text-[#E1E1E1] 2xl:text-[clamp(54px,3.5vw,70px)] xl:text-[clamp(48px,3.2vw,56px)] lg:text-[4vw] md:text-[clamp(28px,4.2vw,48px)] sm:text-[48px] text-[clamp(28px,8vw,48px)] font-bold 2xl:leading-[140%] leading-[130%] md:max-w-max max-w-[150px] ">With <span className="bg-gradient-to-b from-[#6BAAFF] to-[#DAEAFF] bg-clip-text text-transparent">Quniefiy</span></h1>
                            <h1 className="text-[#E1E1E1] 2xl:text-[clamp(54px,3.5vw,70px)] xl:text-[clamp(48px,3.2vw,56px)] lg:text-[4vw] md:text-[clamp(28px,4.2vw,48px)] sm:text-[48px] text-[clamp(28px,8vw,48px)] font-bold 2xl:leading-[140%] leading-[130%]">Unlock Innovation</h1>
                        </div>
                    </div>
                    <div className="relative 2xl:max-w-[355px] xl:max-w-[320px] lg:max-w-[280px] md:max-w-[220px] flex flex-col gap-[24px]">
                        <p className="text-[#a49e9ef7] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[11px] sm:text-[18px] text-[16px] font-normal leading-[140%] " >{data?.subHead}</p>
                        <Link href="/contact-us" className="absolute 2xl:bottom-[-85px] xl:bottom-[-90px] lg:bottom-[-75px] md:bottom-[-55px] 2xl:right-[-130px] xl:right-[-95px] lg:right-[-80px] md:right-[-55px] sm:right-[38%] right-[26vw] md:top-auto sm:top-[-220px] top-[-38vw] 2xl:h-[130px] xl:h-[110px] lg:h-[100px] lg:w-[100px] md:h-[75px] sm:h-[120px] h-[20vw] sm:min-h-auto min-h-[90px] 2xl:w-[130px] xl:w-[110px] md:w-[75px] sm:w-[120px] w-[20vw] sm:min-w-auto min-w-[90px] rounded-full 2xl:text-[18px] xl:text-[16.5px] lg:text-[15px] md:text-[10px] sm:text-[16px] text-[clamp(12px,3vw,16px)] font-bold text-[#FFFFFF] p-[2px] contactBtnGradient glow-on-hover glow-on-hover-hero ">
                            <span className="w-full h-full px-[30px] bg-[#01070F] flex items-center justify-center rounded-full whitespace-nowrap">
                                <p className="bg-gradient-to-l from-[#6BAAFF] to-[#DAEAFF] bg-clip-text text-transparent flex flex-col items-center justify-center">
                                    <span className="flex items-center lg:gap-[5px] gap-[3px]">Let’s 
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="/assets/contact-papper.svg" className="2xl:w-[25px] xl:w-[20px] lg:w-[18px] w-[14px]" /></span>
                                    <span>Contact</span>
                                </p>
                            </span>
                        </Link>
                        {/* <div className="flex items-center xl:gap-[24px] md:gap-[10px] sm:gap-[18px] gap-[8px] mt-[12px]">
                            <Link href="/about-us" className="blue-gradient h-[54px] p-[2px] xl:text-[18px] md:text-[14px] sm:text-[16px] text-[14px] font-bold text-[#FFFFFF] rounded-[16px] flex items-center justify-center whitespace-nowrap hover:shadow-[0px_0px_15px_0px_#0066FF80]">
                            <span className="px-[28px] w-full hover:bg-[#01070F] h-full flex justify-center items-center rounded-[16px] duration-500">Discover More</span>
                            </Link>
                            
                            </div> */}
                    </div>
                    <Link href="/about-us" className=" max-w-fit relative mt-[20px]  text-hover-shadow group inline-block z-[1]">
                        {/* <img src="/assets/curved-arrow.png" className="absolute xl:right-[-50px] lg:right-[-42px] md:right-[-32px] sm:right-[-47px] right-[-42px] lg:bottom-[-20px] md:bottom-[-17px] bottom-[-20px] z-[1] pointing cursor-pointer" /> */}
                        <Image src="/assets/curved-arrow.png" alt="Curved arrow" width={225}  height={64}   className="absolute xl:right-[-50px] lg:right-[-42px] md:right-[-32px] sm:right-[-47px] right-[-42px] lg:bottom-[-20px] md:bottom-[-17px] bottom-[-20px] z-[1] pointing cursor-pointer" />
                        <p className="relative 2xl:text-[18px] xl:text-[17px] lg:text-[15px] md:text-[11.5px] sm:text-[18px] text-[16px] bg-gradient-to-b from-[#6BAAFF] to-[#DAEAFF] bg-clip-text text-transparent pointing cursor-pointer z-10">Step inside Quniefiy vision</p>
                    </Link>
                </div>
            </div>
            <div className="opacity-0 animate-hero-on-scroll flex flex-col self-end gap-[10px] lg:mt-[60px] sm:w-auto w-[86%]">
                <div className="flex-1 relative xl:min-h-[300px] lg:min-h-[250px] md:min-h-[230px] sm:min-h-[250px] min-h-[39.2vw]">
                    <motion.div
                        initial={{ opacity: 0, x: "10%", y: "-8%" }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.4, delay: 2.7, ease: "easeOut" }}
                        className="absolute sm:top-0 top-[-4%] left-[50%]  shadow-[0px_0px_15px_0px_#13397380] bg-[linear-gradient(0deg,rgba(0,38,74,0)_0%,rgba(0,101,255,0.12)_100%)] backdrop-blur-xl xl:w-[81px] lg:w-[71px] md:w-[60.5px] sm:w-[71px] w-[11.3vw] xl:h-[81px] lg:h-[71px] md:h-[60.5px] sm:h-[71px] h-[11.3vw] rounded-full flex justify-center items-center">
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
                        className=" shadow-[0px_0px_15px_0px_#13397380] bg-[linear-gradient(0deg,rgba(0,38,74,0)_0%,rgba(0,101,255,0.12)_100%)] backdrop-blur-xl absolute lg:bottom-[-30px] md:bottom-[-20px] sm:bottom-[-30px] bottom-[-10%] lg:left-[59.5%] md:left-[62%] sm:left-[59.5%] left-[59.5%] xl:w-[61px] lg:w-[53.5px] md:w-[45.5px] sm:w-[53.5px] w-[8.5vw] xl:h-[61px] lg:h-[53.5px] md:h-[45.5px] sm:h-[53.5px] h-[8.5vw] rounded-full flex justify-center items-center">
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
                        className="shadow-[0px_0px_15px_0px_#13397380] bg-[linear-gradient(0deg,rgba(0,38,74,0)_0%,rgba(0,101,255,0.12)_100%)] backdrop-blur-xl absolute lg:bottom-[100px] md:bottom-[85px] sm:bottom-[100px] bottom-[40%] right-[20%] xl:w-[41px] lg:w-[36px] md:w-[31px] sm:w-[36px] w-[5.8vw] xl:h-[41px] lg:h-[36px] md:h-[31px] sm:h-[36px] h-[5.8vw] rounded-full flex justify-center items-center">
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
                        className="shadow-[0px_0px_15px_0px_#13397380] bg-[linear-gradient(0deg,rgba(0,38,74,0)_0%,rgba(0,101,255,0.12)_100%)] backdrop-blur-xl absolute lg:top-[20%] md:top-[30%] sm:top-[20%] top-[19%] lg:left-[-30px] md:left-[-50px] sm:left-[-30px] left-[-5.9%] xl:w-[51px] lg:w-[45px] md:w-[38.3px] sm:w-[45px] w-[7.2vw] xl:h-[51px] lg:h-[45px] md:h-[38.3px] sm:h-[45px] h-[7.2vw] rounded-full flex justify-center items-center">
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
                        className="shadow-[0px_0px_15px_0px_#13397380] bg-[linear-gradient(0deg,rgba(0,38,74,0)_0%,rgba(0,101,255,0.12)_100%)] backdrop-blur-xl absolute lg:bottom-[-10px] md:bottom-[-25px] sm:bottom-[-10px] bottom-[-10px] lg:left-[-50px] md:left-[-45px] sm:left-[-50px] left-[-10%] xl:w-[91px] lg:w-[80px] md:w-[68px] sm:w-[80px] w-[12.8vw] xl:h-[91px] lg:h-[80px] md:h-[68px] sm:h-[80px] h-[12.8vw] rounded-full flex justify-center items-center">
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
                        className="shadow-[0px_0px_15px_0px_#13397380] bg-[linear-gradient(0deg,rgba(0,38,74,0)_0%,rgba(0,101,255,0.12)_100%)] backdrop-blur-xl absolute lg:top-[-35px] md:top-[-27px] sm:top-[-35px] top-[-35px] lg:left-[20%] md:left-[13%] sm:left-[20%] left-[20%]  xl:w-[71px] lg:w-[62px] md:w-[51px] sm:w-[62px] w-[9.8vw] xl:h-[71px] lg:h-[62px] md:h-[51px] sm:h-[62px] h-[9.8vw] rounded-full flex justify-center items-center z-[1]">
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

                <div className="relative xl:w-[600px] lg:w-[500px] md:w-[350px] sm:w-[500px] w-full sm:aspect-[600/300] aspect-[2/1]">
                    <Image
                        src="/assets/robotH.png"
                        fill
                        alt=""
                        className="object-contain "

                    />
                </div>
            </div>
            {/* <motion.div
                animate={{ x: [0, -550, 0] }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }} className="hero-light absolute right-0 top-[-50px] md:bottom-0 bottom-[30%] lg:w-[60%] md:min-w-[450px] md:w-[50%] w-full opacity-55 z-[-1]"></motion.div> */}
            {/* <div className="hero-light absolute right-0 top-[-50px] md:bottom-0 bottom-[30%] lg:w-[60%] md:min-w-[450px] md:w-[50%] w-full opacity-55 z-[-1]"></div> */}
        </div>

    );
}
