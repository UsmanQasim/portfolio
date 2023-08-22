import React, { ReactNode } from 'react'
import Footer from './components/footer';
import Header from './components/header';

interface ILayoutProps {
    children?: ReactNode;
}

const Layout = (props: ILayoutProps) => {
    const { children } = props
    return (
        <div className='relative min-h-screen'>
            {/* Header content */}
            <div className='flex justify-center items-center fixed top-0 w-full z-50 p-4 bg-opacity-90 bg-gradient-to-b from-gray-800'><Header /></div>

            {/* Main content */}
            <div className="pt-[height_of_header] z-10">
                {children}
            </div>

            {/* Footer */}
            <div className="z-10 w-full mt-auto"><Footer /></div>
        </div>
    )
}

export default Layout