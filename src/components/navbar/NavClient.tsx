'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState<string>('')
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setActiveNav(pathname)
    }, [pathname])

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`w-full flex justify-center fixed z-10 top-0 left-0 right-0 ${isScrolled ? "bg-[#01070F]" : "bg-transparent"}`}>
            
            <div className="w-full relative flex justify-between items-center max-w-[1535px] 2xl:mx-[96px] xl:mx-[52px] lg:mx-[36px] md:mx-[21px] sm:mx-[19px] mx-[16px] xl:!py-[32px] lg:!py-[28px] md:!py-[26px] !py-[24px] ">
                <Link href="/" className="relative xl:w-[152px] lg:w-[142px] md:w-[126px] w-[122px] h-auto aspect-[152/40]">
                    <Image
                        src="/assets/logo.svg"
                        alt="Company Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>
                <div className="text-[#FFFFFFBF] 2xl:text-[18px] lg:text-[16px] md:text-[13px] text-[18px] font-medium leading-[100%] md:flex hidden xl:gap-[48px] lg:gap-[32px] md:gap-[23px] items-center">
                    <Link href="/" className={`${activeNav === '/' ? "!py-[8px] 2xl:!px-[32px] lg:!px-[28px] md:!px-[20px] !px-[18px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} whitespace-nowrap`}>Home</Link>
                    <Link href="/about-us" className={`${activeNav === '/about-us' ? "!py-[8px] 2xl:!px-[32px] lg:!px-[28px] md:!px-[20px] !px-[18px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} whitespace-nowrap`}>About Us</Link>
                    <Link href="/services" className={`${activeNav === '/services' ? "!py-[8px] 2xl:!px-[32px] lg:!px-[28px] md:!px-[20px] !px-[18px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} whitespace-nowrap`}>Services</Link>
                    <Link href="/projects" className={`${activeNav === '/projects' ? "!py-[8px] 2xl:!px-[32px] lg:!px-[28px] md:!px-[20px] !px-[18px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} whitespace-nowrap`}>Projects</Link>
                    <Link href="/case-studies" className={`${activeNav === '/case-studies' ? "!py-[8px] 2xl:!px-[32px] lg:!px-[28px] md:!px-[20px] !px-[18px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} whitespace-nowrap`}>Case Studies</Link>
                    <Link href="/pricing" className={`${activeNav === '/pricing' ? "!py-[8px] 2xl:!px-[32px] lg:!px-[28px] md:!px-[20px] !px-[18px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} whitespace-nowrap`}>Pricing</Link>
                    <Link href="/contact-us" className={`${activeNav === '/contact-us' ? "!py-[8px] 2xl:!px-[32px] lg:!px-[28px] md:!px-[20px] !px-[18px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} whitespace-nowrap`}>Contact Us</Link>
                </div>
                <button className="w-[56px] h-[56px] !rounded-full !border !border-[#0B68F480] cursor-pointer md:hidden flex justify-center items-center" onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? <img src="/assets/close-menu.svg" /> : <img src="/assets/menu.svg" />}
                </button>
                <div className={`absolute !top-[100%] w-full md:hidden ${showMenu ? "flex flex-col" : "hidden"} text-[#FFFFFFBF] text-[18px] font-medium leading-[100%] gap-[32px] !backdrop-blur-xl !p-[28px] !rounded-[16px] bg-[#0D69F21A] items-center !border !border-[#0B68F480]`}>
                    <Link href="/" className={`${activeNav === '/' ? "!py-[8px] !px-[28px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} whitespace-nowrap`}>Home</Link>
                    <Link href="/about-us" className={`${activeNav === '/about-us' ? "!py-[8px] !px-[28px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} whitespace-nowrap`}>About Us</Link>
                    <Link href="/services" className={`${activeNav === '/services' ? "!py-[8px] !px-[28px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} whitespace-nowrap`}>Services</Link>
                    <Link href="/projects" className={`${activeNav === '/projects' ? "!py-[8px] !px-[28px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} whitespace-nowrap`}>Projects</Link>
                    <Link href="/case-studies" className={`${activeNav === '/case-studies' ? "!py-[8px] !px-[28px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} whitespace-nowrap`}>Case Studies</Link>
                    <Link href="/pricing" className={`${activeNav === '/pricing' ? "!py-[8px] !px-[28px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} whitespace-nowrap`}>Pricing</Link>
                    <Link href="/contact-us" className={`${activeNav === '/contact-us' ? "!py-[8px] !px-[28px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} whitespace-nowrap`}>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;