import Image from "next/image";

type Props ={
    text:string
}

const HeadingCard = ({text}:Props) => {
    return (
        <div className="flex max-w-fit items-center gap-[5px] bg-[linear-gradient(0deg,rgba(0,38,74,0)_0%,rgba(0,101,255,0.12)_100%)] backdrop-blur-xl border-t-[1px] border-t-[#00429B80] rounded-xl py-[9.5px] px-[24px] text-[#0065FF] font-bold text-[12px] leading-[100%]">
            <Image
                src="/assets/lightning-svgrepo-com.svg"
                width={16}
                height={16}
                alt=""
            />
            <span>{text}</span>
        </div>

    )
}
export default HeadingCard;