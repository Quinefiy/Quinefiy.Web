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
            
            <div className="w-full relative flex justify-between items-center gap-[20px] max-w-[1535px] 2xl:mx-[96px] xl:mx-[52px] lg:mx-[36px] md:mx-[21px] sm:mx-[19px] mx-[16px] xl:!py-[32px] lg:!py-[28px] md:!py-[26px] !py-[24px] ">
                <Link href="/" className="relative xl:w-[152px] lg:w-[142px] w-[122px] h-auto aspect-[152/40]">
                    <Image
                        src="/assets/logo.svg"
                        alt="Company Logo"
                        fill
                        className="object-contain"
                        priority
                        sizes=" (max-width: 1024px) 142px, (max-width: 1280px) 152px, 122px"
                    />
                </Link>
                <div className="text-[#FFFFFFBF] 2xl:text-[16px] lg:text-[14px] md:text-[12px] text-[18px] font-medium leading-[100%] md:flex hidden items-center">
                    <Link href="/" className={`${activeNav === '/' ? "!border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} lg:!py-[8px] py-[6px] 2xl:!px-[28px] lg:!px-[24px] md:!px-[15px] !px-[18px] whitespace-nowrap`}>Home</Link>
                    <Link href="/about-us" className={`${activeNav === '/about-us' ? "!border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} lg:!py-[8px] py-[6px] 2xl:!px-[28px] lg:!px-[24px] md:!px-[15px] !px-[18px] whitespace-nowrap`}>About Us</Link>
                    <Link href="/services" className={`${activeNav === '/services' ? "!border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} lg:!py-[8px] py-[6px] 2xl:!px-[28px] lg:!px-[24px] md:!px-[15px] !px-[18px] whitespace-nowrap`}>Services</Link>
                    <Link href="/projects" className={`${activeNav === '/projects' ? "!border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} lg:!py-[8px] py-[6px] 2xl:!px-[28px] lg:!px-[24px] md:!px-[15px] !px-[18px] whitespace-nowrap`}>Projects</Link>
                    <Link href="/case-studies" className={`${activeNav === '/case-studies' ? "!border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} lg:!py-[8px] py-[6px] 2xl:!px-[28px] lg:!px-[24px] md:!px-[15px] !px-[18px] whitespace-nowrap`}>Case Studies</Link>
                    <Link href="/pricing" className={`${activeNav === '/pricing' ? "!border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} lg:!py-[8px] py-[6px] 2xl:!px-[28px] lg:!px-[24px] md:!px-[15px] !px-[18px] whitespace-nowrap`}>Pricing</Link>
                    <Link href="/contact-us" className={`${activeNav === '/contact-us' ? "!border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} lg:!py-[8px] py-[6px] 2xl:!px-[28px] lg:!px-[24px] md:!px-[15px] !px-[18px] whitespace-nowrap`}>Contact Us</Link>
                </div>
                <button className="w-[56px] h-[56px] !rounded-full !border !border-[#0B68F480] cursor-pointer md:hidden flex justify-center items-center" onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? <Image width={15} height={15} alt="close-menu" src="/assets/close-menu.svg" /> : <Image width={16} height={14} alt="menu" src="/assets/menu.svg" />}
                </button>
                <div className={`absolute !top-[100%] w-full md:hidden ${showMenu ? "flex flex-col" : "hidden"} text-[#FFFFFFBF] text-[18px] font-medium leading-[100%] gap-[20px] !backdrop-blur-xl !p-[28px] !rounded-[16px] bg-[#0D69F21A] items-center !border !border-[#0B68F480]`}>
                    <Link href="/" className={`${activeNav === '/' ? "!px-[28px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} !py-[8px] whitespace-nowrap`} onClick={() => setShowMenu(false)}>Home</Link>
                    <Link href="/about-us" className={`${activeNav === '/about-us' ? " !px-[28px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} !py-[8px] whitespace-nowrap`} onClick={() => setShowMenu(false)}>About Us</Link>
                    <Link href="/services" className={`${activeNav === '/services' ? " !px-[28px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} !py-[8px] whitespace-nowrap`} onClick={() => setShowMenu(false)}>Services</Link>
                    <Link href="/projects" className={`${activeNav === '/projects' ? " !px-[28px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} !py-[8px] whitespace-nowrap`} onClick={() => setShowMenu(false)}>Projects</Link>
                    <Link href="/case-studies" className={`${activeNav === '/case-studies' ? " !px-[28px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} !py-[8px] whitespace-nowrap`} onClick={() => setShowMenu(false)}>Case Studies</Link>
                    <Link href="/pricing" className={`${activeNav === '/pricing' ? "!px-[28px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} !py-[8px]  whitespace-nowrap`} onClick={() => setShowMenu(false)}>Pricing</Link>
                    <Link href="/contact-us" className={`${activeNav === '/contact-us' ? " !px-[28px] !border-[1px] !border-[#0B68F480] rounded-full bg-[#0D69F226] !shadow-[0px_0px_15px_0px_#0066FF80]" : ""} !py-[8px] whitespace-nowrap`} onClick={() => setShowMenu(false)}>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;