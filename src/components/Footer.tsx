"use client";

import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const footerData = {
        col1: [
            {
                id: 'p1',
                to: "/",
                name: "Home"
            },
            {
                id: 'p2',
                to: "/about-us",
                name: "About Us"
            },
            {
                id: 'p3',
                to: "/services",
                name: "Services"
            },
            {
                id: 'p4',
                to: "/projects",
                name: "Projects"
            }
        ],
        col2: [
            {
                id: 'c1',
                to: "/case-studies",
                name: "Case Studies"
            },
            {
                id: 'c2',
                to: "/pricing",
                name: "Pricing"
            },
            {
                id: 'c3',
                to: "/contact-us",
                name: "Contact Us"
            }
        ]
    }

    const getSocialMedia = async () => {
        return await api.get('/social-medias?populate=*').then(res => res.data.data)
    }
    const { data} = useQuery({ queryKey: ['social-media-list'], queryFn: getSocialMedia })

    return (
        <div className="mt-[150px] flex flex-col items-center border-t-[1px] border-[#6BAAFF1A] pt-[64px] 2xl:px-[96px] xl:px-[52px] lg:px-[36px] md:px-[24px] sm:px-[20px] px-[16px] relative overflow-hidden">
            <div className="w-full max-w-[1535px] flex md:flex-row flex-col md:justify-between md:items-center  md:gap-[20%] gap-[48px] pb-[48px] relative">
                <div data-delay='0' className="opacity-0 animate-down-on-scroll">
                    <div className="relative xl:w-[152px] lg:w-[142px] md:w-[126px] w-[122px] h-auto aspect-[152/40]">
                        <Image
                            src="/assets/logo.svg"
                            alt="Company Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    <p className="font-medium text-white leading-[150%] mt-[24px] mb-[48px] max-w-[489px] lg:text-[18px] sm:text-[16px] text-[14px]">“Your reliable partner in digital transformation , giving you confidence in comlex Quniefiy projects”</p>
                    <div className="flex items-center gap-[12px]">{data?.map((m: any) => (
                        <a href={m.URL} className="relative w-[20px] h-auto aspect-[20/20]" key={m.id}>
                            <Image
                                src={m.Icon[0].url}
                                alt={m.Icon[0].alternativeText}
                                fill
                                className="object-contain"
                                priority
                            />
                        </a>
                    ))}</div>
                </div>
                <div className="flex flex-1 max-w-[531px] gap-[32px]">
                    <div data-delay='0.3' className="opacity-0 animate-down-on-scroll flex flex-col gap-[48px] flex-1">
                        {footerData.col1.map((c: any, index: number) => (
                            <Link href={c.to} className={`${index === 0 ? "text-white font-bold" : "text-[#FFFFFFBF] font-medium"} lg:text-[18px] sm:text-[16px] text-[14px] leading-[122%] whitespace-nowrap`} key={c.id}>{c.name}</Link>
                        ))}
                    </div>
                    <div data-delay='0.6' className="opacity-0 animate-down-on-scroll flex flex-col gap-[48px] flex-1">
                        {footerData.col2.map((c: any) => (
                            <Link href={c.to} className={`text-[#FFFFFFBF] font-medium lg:text-[18px] sm:text-[16px] text-[14px] leading-[122%] whitespace-nowrap`} key={c.id}>{c.name}</Link>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[0.8px] bg-gradient-to-r from-transparent via-[#00264A] to-transparent"></div>
            </div>
            <div data-delay='0' className="opacity-0 animate-up-on-scroll w-full">
                <p className="font-medium text-white leading-[150%] my-[48px] text-center md:text-[16px] text-[14px]">© Copyright 2025, All Rights Reserved</p>
            </div>
            <div className="absolute h-full w-full bottom-[-65%] left-0 right-0  z-[-1] blue-light"></div>
        </div>
    )
}

export default Footer;