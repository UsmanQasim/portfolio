import Head from 'next/head';
import Image from 'next/image';

const Header = () => {
    return (
        <div className="flex justify-end items-center w-full gap-3">
            <div className="">
                <Image src={"/assets/images/user.jpg"} alt='user' width={50} height={50} className='rounded-[50px] border-[1px] border-[#363636]' />
            </div>
            <span className="text-white font-semibold select-none">Usman Qasim</span>
        </div>
    )
}

export default Header;
