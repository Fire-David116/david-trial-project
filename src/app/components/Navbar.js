"use client"
import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FiMoreVertical } from "react-icons/fi";

import NavLogo from './logo.svg'
import buttonlogo from './button-logo.svg';
const Nav = () => {
    let name;
    const [open, setOpen] = useState(false)
    const [seo, setSeo] = useState("Test")
    const [flag, setFlag] = useState(false);
    return (
        <>
            <header className=" py-2 bg-custom-color">
                <div className="flex justify-between items-center xl:mx-auto px-[8%] flex-wrap">
                    <Link href="/">
                        <Image
                            src={NavLogo}
                            alt='logo'
                            width={152}
                            height={42}
                            className='cursor-pointer'
                        />
                    </Link>
                    <FiMoreVertical className="lg:hidden block h-6 w-6 cursor-pointer text-white" onClick={() => setOpen(!open)} />
                    <nav className={`${open ? "block " : "hidden"} lg:flex lg:items-center lg:w-auto w-full `}>
                        <ul className="text-base text-white lg:flex lg:justify-between   font-[HankenGroteskRegular]">
                            <li className="lg:px-5 py-2 text-right">
                                <b className='rounded hover:border-b-4  hover:text-border-color border-border-color '  style={{ fontSize: "0.9rem" }}>
                                    <Link href="/">Swap</Link>
                                </b>

                            </li>
                            <li className="lg:px-5 py-2 text-right">
                                <b className='rounded hover:border-b-4  hover:text-border-color border-border-color' style={{ fontSize: "0.9rem" }}>
                                    <Link href="/">Bridge</Link>
                                </b>


                            </li>
                            <li className="lg:px-5 py-2 text-right">
                                <b className='rounded border-b-4 text-border-color hover:border-b-4  hover:text-border-color border-border-color' style={{ fontSize: "0.9rem" }}>
                                    <Link href="/">Dashboard</Link>
                                </b>

                            </li>
                            <li className="lg:px-5 py-2 text-right">
                                <b className='rounded hover:border-b-4  hover:text-border-color border-border-color' style={{ fontSize: "0.9rem" }}>
                                    <Link href="/">Analytics</Link>
                                </b>
                            </li>
                            <li>
                            </li>
                        </ul>

                    </nav>
                    <div className="flex sm:flex items-center ml-5" style={{ marginTop: "-3px" }}>
                        {open ?
                            <button
                                className="flex items-center rounded-full py-1 px-1 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:from-orange-500 hover:to-orange-600 hover:bg-gradient-to-tr mt-[-363px] md:mt-[0px] ml-[270px] md:ml-[0px]"
                                style={{ maxWidth: "170px" }} // Adjust the max width of the button
                            >
                                {/* Conditionally render button content based on screen size */}
                                <div className="w-6 md:w-16 overflow-hidden border-solid border-dark dark:border-gray ">
                                    <Image
                                        style={{ height: "25px", width: "25px" }}
                                        src={buttonlogo}
                                        alt="CodeBucks logo"
                                        className="w-full"
                                        priority
                                    />
                                </div>
                                {/* Render button text only on non-mobile devices */}
                                <span className="hidden sm:inline ml-2">degentrades.lens</span>
                            </button> :
                            <button
                                className="flex items-center rounded-full py-1 px-1 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:from-orange-500 hover:to-orange-600 hover:bg-gradient-to-tr mt-[-43px] md:mt-[0px] ml-[270px] md:ml-[0px]"
                                style={{ maxWidth: "170px" }} // Adjust the max width of the button
                            >
                                {/* Conditionally render button content based on screen size */}
                                <div className="w-6 md:w-16 overflow-hidden border-solid border-dark dark:border-gray ">
                                    <Image
                                        style={{ height: "25px", width: "25px" }}
                                        src={buttonlogo}
                                        alt="CodeBucks logo"
                                        className="w-full"
                                        priority
                                    />
                                </div>
                                {/* Render button text only on non-mobile devices */}
                                <span className="hidden sm:inline ml-2">degentrades.lens</span>
                            </button>
                        }
                    </div>
                </div>
            </header>

        </>

    )
}

export default Nav