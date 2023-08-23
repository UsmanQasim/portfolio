import Image from "next/image"

const CoverSection = () => {
    return (
        <div className='h-[100dvh] flex justify-center items-center bg-black relative'>
            {/* Image */}
            <div className="bg-transparent h-[57.5%] w-[30%] rounded-[100%] ring-[35px]  transition ease-in-out delay-150 ring-inset absolute m-auto cursor-pointer flex justify-center items-center ring-[#ff0000] hover:ring-purple-400 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#F00,0_0_15px_#F00,0_0_30px_#F00]  animate-spin
            shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_2px_#F00,0_0_5px_#F00,0_0_15px_#F00]"></div>
            {/* content */}
            <Image alt="dead" src={"/assets/images/nobgmedead.png"} width={700} height={500} className="z-10 w-90 absolute bottom-0" />
        </div>
    )
}

export default CoverSection