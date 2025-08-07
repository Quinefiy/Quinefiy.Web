import Image from "next/image";

type Props ={
    text:string
}

const HeadingCard = ({text}:Props) => {
    return (
        <div className="flex max-w-fit items-center gap-[5px] bg-[url(/assets/best-quality-bg.png)] bg-cover border-t-[1px] border-t-[#00429B80] rounded-xl py-[9.5px] px-[24px] text-[#0065FF] font-bold text-[12px] leading-[100%]">
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