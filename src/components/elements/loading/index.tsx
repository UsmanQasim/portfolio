import Image from 'next/image'

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[100dvh] z-10'>
            <Image src={"/assets/gifs/loading_pro.gif"} width={200} height={100} alt='loading...' className='' />
        </div>
    )
}

export default Loading