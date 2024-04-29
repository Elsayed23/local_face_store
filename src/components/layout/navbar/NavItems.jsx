import React from 'react'
import { Link } from "react-router-dom";
import { navItems } from '../../../constants'
import bg from '../../../assets/images/ourValuesSecBG.png'

const NavItems = ({ isMobile, pathname }) => {




    return (
        isMobile
            ?
            <div className='fixed top-0 left-0 bottom-0 w-3/4 bg-black pt-24 overflow-hidden -translate-x-full will-change-transform z-50'>
                <img src={bg} alt="" className='absolute w-full top-0 left-0 rotate-180 scale-150' />
                <ul className='flex flex-col gap-3 p-3'>
                    {
                        navItems.map(({ url, title }, idx) => {
                            return (
                                <li key={idx} className='transform origin-left translate-x-[-20px] translate-y-[50%] will-change-[transform,opacity,filter]'>
                                    <Link to={url} className='font-semibold text-4xl p-2 sm:text-5xl sm:p-3 text-slate-50 capitalize w-full block'>{title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            :
            <ul className="my-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
                {
                    navItems.map(({ url, title }, idx) => {
                        return (
                            <li
                                key={idx}
                                className="p-1 font-medium"
                            >
                                <Link to={url} className={`flex items-center font-bold p-3 md:p-0 text-4xl md:text-sm md:font-medium relative before:absolute before:h-[1px] before:w-0 before:left-0 before:bottom-0 before:bg-slate-400 hover:before:w-full before:duration-300 hover:text-slate-400 duration-300 capitalize ${pathname === url ? 'before:w-full text-slate-400' : 'text-white'}`}>
                                    {title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
    );
}


export default NavItems